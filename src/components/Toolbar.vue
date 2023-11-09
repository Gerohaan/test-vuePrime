<template>
        <Toolbar class="mb-6">
                    <template v-slot:start>
                        <div class="my-2">
                            <ShoppingCart></ShoppingCart>
                            <FilterCategory></FilterCategory>
                        </div>
                    </template>

                    <template v-slot:end>
                        <SearchProduct></SearchProduct>
                    </template>
                </Toolbar>
</template>
<script setup lang="ts">
import ShoppingCart from "./toolbar/ShoppingCart.vue";
import FilterCategory from "./toolbar/FilterCategory.vue";
import SearchProduct from "./toolbar/SearchProduct.vue";
</script>