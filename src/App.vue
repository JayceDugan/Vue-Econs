<template>
  <section class="app">
    <econ icon="ec-address" />
  </section>
</template>

<script lang="ts">
import { defineAsyncComponent } from 'vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    econ: defineAsyncComponent(() => import('./components/Econ.vue')),
  },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
</style>
