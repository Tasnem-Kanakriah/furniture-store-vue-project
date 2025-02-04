<!-- <v-btn 
  variant="flat" 
  color="warning"
>
  Name Color : Flat
</v-btn>
<v-btn 
  variant="outlined" 
  color="#cfa"
>
  Hash Code : #cfa
</v-btn>
<v-btn 
  variant="elevated" 
  color="rgb(100,43,12)"
>
  RGB : Elevate
</v-btn> -->

<script setup>

import { useTheme, useLocale } from 'vuetify';

import { useCartStore } from '@/stores/cart';

import i18n from '@/plugins/i18n'; 

const { current } = useLocale()

const cartStore = useCartStore();

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  // console.log(theme);
}

 function changeLanguageLocale() {
  current.value = current.value === 'jp' ? 'ar' : 'jp';
  i18n.global.locale = i18n.global.locale === 'jp' ? 'ar' : 'jp'
}
</script>
    

<template>
  <v-app-bar 
    elevation="5" 
    flat
  >
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-4" />
    </v-app-bar-title>

    <v-btn 
      to="/" 
      exact
    > 
      <!-- Home -->
      {{ $t('appBar.home') }} 
    </v-btn>

    <v-btn to="/about"> 
      {{ $t('appBar.about') }}  
    </v-btn>

    <v-btn to="/products"> 
      {{ $t('appBar.products') }}   
    </v-btn>

    <!-- <v-btn :to="{name: 'About'}">
      About
    </v-btn> -->

    <!-- <v-btn 
      icon="mdi-ideogram-cjk-variant" 
      @click="changeLanguageLocale"
    /> -->
  
    <!-- <v-btn  
      @click="changeLanguageLocale"
    >
      <v-icon size="x-large">
        {{ i18n.global.locale === 'en' ? 'mdi-abjad-arabic' : 'mdi-alpha-e' }}
      </v-icon>
    </v-btn> -->

    <v-btn  
      @click="changeLanguageLocale"
    >
      <v-icon size="x-large">
        {{ i18n.global.locale === 'ar' ? 'mdi-ideogram-cjk-variant' : 'mdi-abjad-arabic' }}
      </v-icon>
    </v-btn>

    <!-- this is better -->
    <v-btn 
      icon="mdi-theme-light-dark" 
      @click="toggleTheme"
    /> 

    <!-- <v-btn><v-icon> mdi-theme-light-dark </v-icon></v-btn> -->

    <!-- <v-btn 
      to="/cart" 
      icon="mdi-cart" 
    /> -->

    <v-btn to="/cart">
      <v-badge 
        :content="cartStore.items.length" 
        color="error"
        floating
      >
        <v-icon size="x-large">
          mdi-cart
        </v-icon>
      </v-badge>
    </v-btn>
  </v-app-bar>
</template>