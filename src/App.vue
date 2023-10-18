<template>
  <!-- html코드 -->
  <div id="app">
    <VueHeader />
    <div id="content" class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import VueHeader from './components/layout/VueHeader.vue';
// JS코드

export default {
  name: 'App',
  components: {
    VueHeader,
  },
};
</script>

<style>
/* CSS코드 */
</style>
