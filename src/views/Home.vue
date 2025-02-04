<script setup>
  import ProductsList from '@/components/ProductsList.vue';
</script>

<template>
  <!-- src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" -->
  <!-- src="https://i.pinimg.com/736x/89/11/a4/8911a47ab7bf1491bde91c775a3e4f06.jpg" -->
  <v-parallax
    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 
        class="text-h1 mb-4" 
      >
        {{ $t('heroSection.brandName') }}
      </h1>
      <h4 
        class="subheading" 
      >
        {{ $t('heroSection.title') }}
      </h4>

      <!-- <v-btn 
        to="/products" 
        color="primary mt-10"
      >
        All Products <v-icon>mdi-arrow-right</v-icon>
      </v-btn> -->

      <v-btn
        to="/products"
        color="primary mt-10"
        append-icon="mdi-arrow-right"
      >
        {{ $t('heroSection.allProducts') }}
      </v-btn>
    </div>
  </v-parallax>
  
  <h2 class="text-h3 mt-16 text-center">
    Our Products
  </h2>
  
  <v-divider 
    :thickness="3" 
    color="secondary" 
    class="border-opacity-50 mx-auto mt-10 mb-16"
    length="500"
  />
  <!-- <v-divider :thickness="3" color="info" vertical /> -->
  <!-- <v-divider :thickness="3" color="info" inset /> -->

  <ProductsList />
</template>


<style scope>
.text-h1 {
  /* color: var(--v-theme-primary); */
  color: rgb(var(--v-theme-primary));
  /* text-transform: uppercase !important; */
}

/* @import '@/styles/settings.scss'; */
</style>