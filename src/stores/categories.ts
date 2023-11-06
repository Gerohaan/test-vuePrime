import { defineStore } from 'pinia';
import CategoriesService from "../services/categoriesService"
import { ref } from 'vue';
const service = new CategoriesService()

export const useCategoriesStore  = defineStore('categories', {
  state: () => {
    return {
      categories: ref()
    };
  },
  getters: {
    getCategories(state) {
      state.categories = service.getCategories() 
      return state.categories
    },
  },
  actions: {
    async categoriesAll() {
      try {
        await service.fetchAll()
      } catch (error) {
        throw error 
      }
    }
  },
});
