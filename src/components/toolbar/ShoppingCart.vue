<template>
    <Button :disabled="products.length === 0" class="mr-3 mb-2" :label="'Cart $'+productsStore.getTotalCart" icon="pi pi-shopping-cart" @click="visible = true"/>
    <Dialog v-model:visible="visible" modal :header="'Total Shopping Cart: $'+productsStore.getTotalCart" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="card">
            <DataView :value="products">
            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-4rem shadow-2 flex-shrink-0 border-round" :src="slotProps.data.image" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-1xl font-bold text-900">{{ slotProps.data.title }}</div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                                <Button @click="dinamicCard(slotProps.data)" style="background-color:#db6c6c;" icon="pi pi-times" text raised rounded aria-label="Cancel" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            
            <template #footer> 
                <p>In total there are {{ products ? products.length : 0 }} products.</p>
            </template>
</DataView>
    </div>
    </Dialog>
</template>
<script setup lang="ts">
import { ref, onMounted, watchEffect, watch  } from "vue";
import { useProductsStore } from '../../stores/products';
const productsStore = useProductsStore();

const products = ref([]);
const visible = ref(false);

const dinamicCard = (param: {}) => {
    productsStore.dinamicCart(param)   
}
watchEffect(() => {
    productsStore.getcartList
    products.value = productsStore.cartList
    productsStore.getTotalCart
  });

watch(products, ( newValue:Array<{}>, oldValue:Array<{}> ) => {
    if(newValue.length === 0){
        visible.value = false
    }   
});
onMounted(() => {  
});
</script>