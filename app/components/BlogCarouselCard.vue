<template>
  <div class="group snap-start shrink-0 w-[260px] sm:w-[290px]">
    <div class="bg-[#eafbf6] rounded-2xl p-3 h-full">
      <div class="overflow-hidden rounded-xl">
        <img
          :src="image"
          :alt="title"
          class="w-full h-[170px] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <div class="pt-4 pb-1">
        <div class="flex items-center justify-between mb-3 gap-2">
          <span class="bg-[#111827] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">{{ category }}</span>
          <span class="text-[11px] text-stone-400 whitespace-nowrap">~{{ author }}</span>
        </div>
        <h3 class="font-display font-bold text-base text-[#111827] mb-1.5 leading-snug">{{ title }}</h3>
        <p class="text-[0.8rem] text-stone-500 leading-relaxed">{{ excerpt }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  category: { type: String, default: 'Self Care' },
  author: { type: String, default: '' },
  title: { type: String, required: true },
  excerpt: { type: String, default: '' }
})
</script>