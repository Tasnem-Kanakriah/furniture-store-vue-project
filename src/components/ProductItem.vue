<script setup>

defineProps({
  product: {
    type: Object,
    required: true
  }
});

import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();

</script>

<template>
  <v-card>
    <v-card-title class="text-center">
      {{ product.title }}
    </v-card-title>
    
    <v-img 
      :src="product.image[1]" 
      height="300"
      cover
    />

    <v-card-text class="text-center">
      {{ product.description }}
    </v-card-text>

    <v-card-actions class="justify-end">
      <v-btn
        icon="mdi-cart" 
        @click="cartStore.addToCart(product)"
      />
      <slot name="deleteIcon" />
    </v-card-actions>
  </v-card>
</template>