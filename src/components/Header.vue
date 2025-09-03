<template>
    <div class="absolute inset-0 opacity-20 bg-bricks pointer-events-none" aria-hidden="true"></div>
    <div class="relative mx-auto max-w-6xl px-4 pt-6 flex flex-col items-center text-center">
      <div class="flex items-center justify-center gap-4 leading-none">
        <Coin class="transform scale-75" />
        <h1 class="font-arcade text-[2.5rem] text-yellow-300 text-shadow-block">
          Paisano Chat
        </h1>
        <Coin class="transform scale-75" />
      </div>
      <!-- <hr class="mt-4 w-[90%] mx-auto border-t-2 border-white/30 relative z-10"  /> -->
    </div>
</template>

<script setup>
import Coin from './Coin.vue'
</script>

<style scoped>
.text-shadow-block {
  text-shadow: 4px 4px 0 #000;
}
</style>
