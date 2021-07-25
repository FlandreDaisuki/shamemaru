<template>
  <ul>
    <li v-for="(result, index) in results" :key="index">
      <template v-if="isUrl(result)">
        <a
          :href="result"
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

const isUrl = (url) => {
  try {
    return Boolean(new URL(url));
  } catch {
    return false;
  }
};

export default {
  name: 'ResultTable',
  setup(){
    return {
      results,
      isUrl,
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
