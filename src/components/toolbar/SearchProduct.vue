<template>
    <div class="mb-2 p-inputgroup">
        <span class="p-inputgroup-addon">
        <i class="pi pi-search"></i>
        </span>
        <InputText placeholder="Search product..." field="title" type="text" v-model="productfilter" />
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import debounce from 'lodash.debounce'
import { useProductsStore } from '../../stores/products';
const productsStore = useProductsStore();
const productfilter = ref('')

const search = debounce((param:any) => {
    productsStore.filterProductList(param)
}, 500)

const searchProduct = () => {
    productsStore.filterProductList(productfilter.value)
}

watch(productfilter, ( newValue:string, oldValue:string ) => {
   search(newValue)   
});
</script>