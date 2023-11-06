<template>
    <Dropdown showClear v-model="selectedCategory" :options="categories" placeholder="Filter by category" class="mr-3 w-full md:w-14rem" />
</template>
<script setup lang="ts">
import { ref, onMounted, watchEffect, watch } from 'vue'
import { useCategoriesStore } from '../../stores/categories';
import { useProductsStore } from '../../stores/products';
const productsStore = useProductsStore();
const categoriesStore = useCategoriesStore();
const categories = ref([])
const selectedCategory = ref('')

const search = (param:any) => {
    productsStore.filterByCategory(param)
}

onMounted(() => {
    categoriesStore.categoriesAll()
});
watchEffect(() => {
    categoriesStore.getCategories
    categories.value = categoriesStore.categories    
  });
watch(selectedCategory, ( newValue:string, oldValue:string ) => { 
    search(newValue)   
});
</script>