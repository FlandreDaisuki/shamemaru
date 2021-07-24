<template>
  <QRCodeScanner />
  <ResultTable />
</template>

<script>
import { results } from './store/scanResults';
import QRCodeScanner from './components/QRCodeScanner.vue';
import ResultTable from './components/ResultTable.vue';

export default {
  components: { QRCodeScanner, ResultTable },
  setup(){
    return {
      results,
    };
  },
};
</script>
