<template>
  <div class="flex flex-col items-center gap-2 lg:gap-2.5">
    <div class="w-full aspect-square rounded-xl lg:rounded-2xl bg-white border border-[#2F4A2F]/15 shadow-sm flex items-center justify-center overflow-hidden p-3 lg:p-4 hover:scale-105 transition-transform duration-300">
      <img :src="logo" :alt="name" class="max-w-full max-h-full object-contain" />
    </div>
    <span class="text-[11px] sm:text-xs lg:text-sm font-bold uppercase tracking-wide text-stone-900 text-center">
      {{ name }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  logo: { type: String, required: true },
  name: { type: String, default: 'Sponsor' }
})
</script>