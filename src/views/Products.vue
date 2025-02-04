<script setup>
  import ProductsList from '@/components/ProductsList.vue';
</script>

<template>
  <h2 class="text-h3 mt-16 text-center">
    All Products
  </h2>
  
  <v-divider 
    :thickness="3" 
    color="secondary" 
    class="border-opacity-50 mx-auto mt-10 mb-16"
    length="500"
  />

  <ProductsList :all="true" />
</template>