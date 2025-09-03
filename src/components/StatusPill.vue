<template>





  <div
    class="text-white mt-4 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
    role="status" :aria-label="isOnline ? 'Ollama online' : 'Ollama offline'">
    <span :class="isOnline ? 'bg-emerald-400' : 'bg-red-400'"
      class="inline-block h-3.5 w-3.5 rounded-full shadow"></span>
    <span class="text-sm font-medium">
      {{ isOnline ? 'Online' : 'Offline' }}
    </span>
    <span class="h-4 w-px bg-white/30" aria-hidden="true"></span>
    <button
      class="inline-flex items-center gap-1 rounded-full bg-yellow-300 px-3 py-1 text-xs font-semibold text-slate-900 hover:bg-yellow-200 disabled:opacity-60 disabled:cursor-not-allowed"
      @click="refresh" :disabled="checking" :aria-busy="checking ? 'true' : 'false'">
      <span v-if="!checking">↻ Refresh</span>
      <span v-else class="inline-flex items-center gap-2">
        <svg class="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
        </svg>
        Checking…
      </span>
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useOllamaStatus } from '@/composables/useOllamaStatus';

const { isOnline, checkStatus } = useOllamaStatus();
const checking = ref(false)

const refresh = async () => {
  if (checking.value) return;
  checking.value = true;
  try {
    await checkStatus();
  } finally {
    checking.value = false;
  }
};

onMounted(checkStatus);

</script>