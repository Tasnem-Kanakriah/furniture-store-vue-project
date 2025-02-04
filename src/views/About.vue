<!-- ! pinia -->

<!-- <script>
  import { mapActions, mapWritableState } from 'pinia';

  import { useCartStore } from '@/stores/cart';

  export default {
    computed: {
      ...mapWritableState(useCartStore, ['count', 'doubleCount', 'name']),
    },
    methods: {
      ...mapActions(useCartStore, ['increment'])
    }
  }
</script>

<template>
  <h1 
    class="title" 
    @click="increment"
  >
    Hello from About.vue {{ count }}
    {{ doubleCount }}
    {{ name }}
  </h1>
</template> -->


<script>
  
</script>

<template>
  <h1 
    class="title"
  >
    {{ $t('message.hello') }}
  </h1>
</template>