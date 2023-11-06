<template>
    <div v-if="products.length === 0" class="card">
        <span v-if="productsStore.noResult">
            <h4 align="center">No results</h4>
        </span>
        <span v-else>
            <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
        </span>
    </div>
    <div v-else class="card">
        <DataView :value="products" :sortOrder="sortOrder" :sortField="sortField">
            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="slotProps.data.image" :alt="slotProps.data.title" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.title }}</div>
                                <Rating :modelValue="slotProps.data.rating.rate" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <!-- <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag> -->
                                </div>
                            </div>
                            <!-- #D97706(danger)
                            #10B981(primary) -->
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                                <Button @click="dinamicCard(slotProps.data)" icon="pi pi-shopping-cart" :style="slotProps.data.addCart ? 'background-color: #D97706' : ''" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect  } from "vue";
import { useProductsStore } from '../stores/products';
const productsStore = useProductsStore();

const products = ref([]);
const sortOrder = ref();
const sortField = ref();

const dinamicCard = (param: {}) => {
    productsStore.dinamicCart(param)   
}


onMounted(() => {
    productsStore.productsAll()
});
watchEffect(() => {
    productsStore.getProducts
    products.value = productsStore.products
  });
</script>
