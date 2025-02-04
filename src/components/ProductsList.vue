<!-- <script>
    export default {
        data() {
            return {
                products: []
            }
        },
        created() {
            fetch('https://66f8d38d2a683ce973103919.mockapi.io/furniture')
            .then(response => response.json())
            .then(products => this.products = products)
            // .then(products => console.log(products))
        },
    }
</script> -->

<script setup>
import ProductItem from "./ProductItem.vue";

import { ref, onMounted, computed } from "vue";

const productsFromApi = ref([]);

let props = defineProps({
    all: {
        type: Boolean,
        default: false
    }
})

let filterProducts = computed(() => {
    
    // ? 1
    // if (props.all) {
    //     return productsFromApi.value
    // }
    // else {
    //     return  productsFromApi.value.filter(a => a.id <= 10)
    // }
    
    // ? 2
    // return (props.all ? productsFromApi.value :  productsFromApi.value.filter(a => a.id <= 10));
    
    // ? 3
    
    return props.all ? productsFromApi.value :  productsFromApi.value.filter(a => a.id <= 10)
})

onMounted(() => {
  fetch("https://66f8d38d2a683ce973103919.mockapi.io/furniture")
    .then((response) => response.json())
    .then((products) => (productsFromApi.value = products));
});

</script>

<template>
  <v-container>
    <v-row>
      <v-col 
        v-for="product in filterProducts"
        :key="product.id"
        cols="12" 
        sm="12" 
        md="6" 
        lg="4" 
        xl="3"
      >
        <ProductItem :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>