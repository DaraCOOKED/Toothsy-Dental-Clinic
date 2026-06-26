<template>
  <div
    ref="cardRef"
    class="group bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.09)] card-reveal"
    :class="visible ? 'is-visible' : ''"
    :style="{ transitionDelay: visible ? `${index * 90}ms` : '0ms' }"
  >
    <div
      class="w-12 h-12 rounded-full bg-[#1f9d63] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
      v-html="svg"
    ></div>

    <h3 class="font-display text-base font-bold text-[#111827] mb-2">{{ title }}</h3>
    <p class="text-[0.83rem] text-stone-500 leading-relaxed mb-5">{{ desc }}</p>

    <NuxtLink
      :to="link"
      class="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#111827] hover:text-[#1f9d63] transition-colors"
    >
      Learn More
      <span class="flex items-center justify-center w-6 h-6 rounded-full border border-[#1f9d63] group-hover/link:bg-[#1f9d63] transition-colors duration-200">
        <svg
          class="w-3 h-3 text-[#1f9d63] group-hover/link:text-white transition-colors duration-200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14M13 6l6 6-6 6"/>
        </svg>
      </span>
    </NuxtLink>
  </div>
</template>


<script setup>
const props = defineProps({
  title: { type: String, required: true },
  desc:  { type: String, required: true },
  link:  { type: String, required: true },
  svg:   { type: String, required: true },
  index: { type: Number, default: 0 },
})

const cardRef = ref(null)
const visible = ref(false)
let observer  = null

onMounted(() => {
  const prefersReducedMotion =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Skip animation for reduced-motion users — show immediately
  if (prefersReducedMotion) {
    visible.value = true
    return
  }

  // Trigger reveal when card enters the viewport
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  )

  if (cardRef.value) observer.observe(cardRef.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>


<style scoped>
/*
  CARD REVEAL
  Initial: invisible + shifted down + scaled down + blurred
  Final:   visible + natural position + sharp
  Uses transitions (not keyframes) so per-card stagger delay works.
*/
.card-reveal {
  opacity: 0;
  transform: translateY(40px) scale(0.97);
  filter: blur(6px);
  transition:
    opacity   0.75s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    filter    0.65s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease,
    translate  0.3s ease;
}

.card-reveal.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
}

@media (prefers-reduced-motion: reduce) {
  .card-reveal {
    opacity: 1;
    transform: none;
    filter: none;
    transition: box-shadow 0.3s ease, translate 0.3s ease;
  }
}
</style>