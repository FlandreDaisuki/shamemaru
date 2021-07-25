<template>
  <div id="qr-code-scanner" ref="scannerElRef" />
</template>

<script>
import { watchEffect, ref, computed } from 'vue';
import {
  push as pushResult,
  clear as clearResult,
} from '../store/scanResults';

/** @typedef {import('@typings/Html5Qrcode').Html5QrcodeScanner} Html5QrcodeScanner */

export default {
  name: 'QRCodeScanner',
  props: {
    qrbox: { type: Number, default: 500 },
    fps: { type: Number, default: 10 },
  },
  setup(props) {
    const scannerElRef = ref();
    /** @type {import('vue').Ref<Html5QrcodeScanner>} */
    const scanner = ref();

    const onScanSuccess = (decodedText) => {
      pushResult(decodedText);
    };

    const config = computed(() => ({
      ...props,
      experimentalFeatures: {
        useBarCodeDetectorIfSupported: true,
      },
    }));

    watchEffect(() => {
      const scannerEl = scannerElRef.value;
      if (!scannerEl) { return; }

      scanner.value?.clear();
      clearResult();

      scanner.value = new Html5QrcodeScanner(scannerEl.id, config.value);
      scanner.value.render(onScanSuccess);
    });

    return {
      scannerElRef,
    };
  },
};
</script>
