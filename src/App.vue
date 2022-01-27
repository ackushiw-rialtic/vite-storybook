<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main class="p-4">
    <div class="container mx-auto">
      <section class="flex justify-center">
        <img alt="Vue logo" src="./assets/logo.png" />
      </section>
      
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    </div>
  </main>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
