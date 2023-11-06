<template>
    <Toolbar class="mb-6">
    <template #start>
        <ShoppingCart></ShoppingCart>
    </template>
    <template #end>
        <div class="flex">
            <FilterCategory></FilterCategory>
            <SearchProduct></SearchProduct>
        </div>
    </template>
    </Toolbar>
</template>
<script setup lang="ts">
import ShoppingCart from "./toolbar/ShoppingCart.vue";
import FilterCategory from "./toolbar/FilterCategory.vue";
import SearchProduct from "./toolbar/SearchProduct.vue";
</script>