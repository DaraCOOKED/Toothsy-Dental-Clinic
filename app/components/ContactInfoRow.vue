<template>
  <div class="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
    <div class="flex-shrink-0 w-11 h-11 rounded-full bg-[#1f9d63] flex items-center justify-center" v-html="icon"></div>
    <div>
      <p class="text-sm font-bold text-[#111827]">{{ label }}</p>
      <p class="text-[0.8rem] text-stone-500 leading-snug">{{ value }}</p>
      <p v-if="value2" class="text-[0.8rem] text-stone-500 leading-snug">{{ value2 }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  label: { type: String, required: true },
  value: { type: String, required: true },
  value2: { type: String, default: '' }
})
</script>