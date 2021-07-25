import { ref, computed } from 'vue';

const stack = ref([]);

const latest = computed(() => stack.value?.[stack.value.length - 1]);

// results order from latest to oldest
export const results = computed(() => stack.value.slice().reverse());

export const push = (result) => {
  if (latest.value !== result) {
    stack.value.push(result);
  }
};

export const clear = () => {
  stack.value = [];
};
