<template>
    <Button class="mr-3" label="Cart" icon="pi pi-shopping-cart" @click="visible = true"/>
    <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">Products</span>
                    <Button icon="pi pi-refresh" rounded raised />
                </div>
            </template>
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="slotProps.data.image" :alt="slotProps.data.image" class="w-6rem shadow-2 border-round" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating.rate" readonly :cancel="false" />
                </template>
            </Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
        </DataTable>
    </div>
    </Dialog>
</template>
<script setup lang="ts">
import { ref, onMounted, watchEffect  } from "vue";
import { useProductsStore } from '../../stores/products';
const productsStore = useProductsStore();

const products = productsStore.cartList
const visible = ref(false);

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
onMounted(() => {
    console.log(products)
    
});
</script>