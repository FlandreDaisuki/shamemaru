<template>
  <div id="app">
    <QRCodeScanner />
    <ResultTable />
  </div>
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

<style scoped>
#app {
  max-width: 90vmin;
  margin: 0 auto;
}
</style>
