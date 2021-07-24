import { ref, computed } from 'vue';

export const results = ref([]);

const last = computed(() => results.value?.[results.value.length - 1]);

export const push = (result) => {
  if (last.value !== result) {
    results.value.push(result);
  }
};

export const clear = () => {
  results.value = [];
};
