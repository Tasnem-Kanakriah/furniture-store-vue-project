<script setup>
  import ProductItem from '@/components/ProductItem.vue';

  import { useCartStore } from '@/stores/cart';

  const cartStore = useCartStore();
  
</script>

<template>
  <v-container>
    <v-row>
      <v-col 
        v-for="(product, index) in cartStore.items"
        :key="product.id"
        cols="12" 
        sm="12" 
        md="6" 
        lg="4" 
        xl="3"
      >
        <ProductItem :product="product">
          <template #deleteIcon>
            <v-btn 
              icon="mdi-delete" 
              color="error" 
              @click="cartStore.deleteFromCart(index)"
            />
          </template>
        </ProductItem>
      </v-col>
    </v-row>
  </v-container>
</template>