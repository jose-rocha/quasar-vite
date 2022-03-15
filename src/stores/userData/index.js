import { defineStore } from 'pinia';
import state from './state';

export const useStoreUser = defineStore('data', {
  state,
});
