<template>
  <ul>
    <li v-for="(result, index) in results" :key="index">
      <template v-if="isUrl(result)">
        <a
          :href="getHref(result)"
          target="_blank"
          rel="noopener noreferrer"
        >{{ result }}</a>
      </template>
      <template v-else>
        <span>{{ result }}</span>
      </template>
    </li>
  </ul>
</template>

<script>
import { results } from '../store/scanResults';
import { is } from '../utils/validators';

export default {
  name: 'ResultTable',
  setup(){
    const getHref = (text) => {
      const url = new URL(text);
      if (/^sms/i.test(url.protocol)) {
        if (is.mobile.iOS()) {
          url.protocol = 'sms:';
          return url.href;
        }
        if (is.mobile.Android()) {
          url.protocol = 'SMSTO:';
          return url.href;
        }
      }
      return String(url);
    };
    return {
      results,
      isUrl: is.url,
      getHref,
    };
  },
};
</script>

<style scoped>
ul {
  @apply list-none;
}
li {
  @apply text-xl shadow truncate;
  @apply hover:bg-gray-200;
}
li > * {
  @apply p-3 block truncate;
}
a {
  @apply text-green-500;
}
</style>
