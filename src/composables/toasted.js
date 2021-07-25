import { inject } from 'vue';

export const useToasted = () => ({ toasted: inject('toast') });
