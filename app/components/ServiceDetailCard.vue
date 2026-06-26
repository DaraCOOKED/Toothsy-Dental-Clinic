<!-- components/ServiceDetailCard.vue -->
<template>
  <div
    ref="cardRef"
    class="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.09)]"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    :style="{ transitionDelay: visible ? `${index * 90}ms` : '0ms' }"
  >
    <div class="p-7 pb-0 flex items-start justify-between">
      <div
        class="w-12 h-12 rounded-full bg-[#1f9d63] flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        v-html="svg"
      ></div>
      <span v-if="price" class="text-xs font-semibold text-[#1f9d63] bg-[#e6faf6] px-3 py-1 rounded-full">
        From {{ price }}
      </span>
    </div>

    <div class="p-7 pt-4">
      <h3 class="font-display text-lg font-bold text-[#111827] mb-2">{{ title }}</h3>
      <p class="text-[0.85rem] text-stone-500 leading-relaxed mb-4">{{ desc }}</p>

      <ul v-if="includes?.length" class="flex flex-col gap-2 mb-5">
        <li v-for="item in includes" :key="item" class="flex items-center gap-2 text-[0.8rem] text-stone-600">
          <span class="flex-shrink-0 w-4 h-4 rounded-full bg-[#8FE3B8] flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
              <path d="M2 6.5L4.5 9L10 3" stroke="#036533" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          {{ item }}
        </li>
      </ul>

      <NuxtLink :to="link" class="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#111827] hover:text-[#1f9d63] transition-colors">
        Learn More
        <span class="flex items-center justify-center w-6 h-6 rounded-full border border-[#1f9d63] group-hover/link:bg-[#1f9d63] transition-colors duration-200">
          <svg class="w-3 h-3 text-[#1f9d63] group-hover/link:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  link: { type: String, required: true },
  svg: { type: String, required: true },
  price: { type: String, default: '' },
  includes: { type: Array, default: () => [] },
  index: { type: Number, default: 0 }
})

const cardRef = ref(null)
const visible = ref(false)
let observer = null

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    visible.value = true
    return
  }
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
  )
  if (cardRef.value) observer.observe(cardRef.value)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>