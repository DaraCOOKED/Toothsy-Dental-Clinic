<template>
  <div class="bg-[#F7EBD5] ">

    <!-- Header -->
    <div class="max-w-3xl mx-auto px-4 pt-9 md:pt-20  lg:pt-24 pb-8 md:pb-14 text-center">
      <p
        class="text-xs md:text-sm font-semibold tracking-[0.25em] text-gray-500 uppercase mb-3
               transition-all duration-700 ease-out"
        :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
      >
        Cambodia Craft Beer Crown 2026
      </p>
      <h1
        class="text-4xl md:text-6xl lg:text-7xl text-[#354D24] font-bold uppercase
               transition-all duration-700 ease-out delay-150"
        :class="loaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'"
        style="font-family: 'Bebas Neue', sans-serif;"
      >
        Our Sponsors
      </h1>
      <div
        class="flex items-center justify-center gap-4 mt-3 md:mt-5 transition-all duration-700 ease-out delay-300"
        :class="loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
      >
        <div class="h-px w-20 sm:w-40 md:w-56 bg-[#354D24] opacity-40"></div>
        <img
          src="/linelogo.png"
          alt="Logo"
          class="w-10 h-10 sm:w-12 sm:h-12 md:w-9 md:h-9 object-contain transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          :class="loaded ? 'rotate-0 scale-100' : '-rotate-90 scale-50'"
        />
        <div class="h-px w-20 sm:w-40 md:w-56 bg-[#354D24] opacity-40"></div>
      </div>
      <p
        class="mt-4 text-[#354E20]/70 text-sm md:text-base max-w-md md:max-w-xl mx-auto font-medium
               transition-all duration-700 ease-out delay-[450ms]"
        :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
      >
        Honoring the brands and partners who help make Beer Crown 2026 possible.
      </p>
    </div>

    <!-- Sponsors -->
    <div class="bg-[#F8EBD6]">
      <div class="max-w-[420px] md:max-w-3xl lg:max-w-6xl mx-auto px-4 md:px-8 lg:px-10 pt-3.5 md:pt-14 lg:pt-16 pb-2">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8">
          <div
            v-for="(tier, index) in tiers"
            :key="tier.title"
            :ref="(el) => setTierRef(el, index)"
            class="transition-all duration-700 ease-out"
            :class="tierVisible[index] ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-10 blur-sm scale-95'"
            :style="{ transitionDelay: `${index * 120}ms` }"
          >
            <SponsorTier
              :title="tier.title"
              :sponsors="tier.sponsors"
              :variant="tier.variant"
            />
          </div>
        </div>

        <div class="mt-10 -mx-4mb-4 lg-mb-9 lg:mt-15 flex justify-center">
          <NuxtLink
            to="https://docs.google.com/forms/d/e/1FAIpQLScEjueBWitDWygOZkaHDnkADWIHhYdgZ-lH_u3EvKM2RzL1AA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            class="relative z-10 flex items-center justify-center gap-2 bg-[#2F4A2F] text-[#EFE3C8] text-sm md:text-base tracking-wide rounded-lg py-2.5 px-4 md:py-3.5 md:px-10 lg:py-4 lg:px-16 w-full md:w-fit
                   hover:bg-[#243a24] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-[450ms]"
            :class="loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'"
            style="font-family: 'Bebas Neue', sans-serif;"
          >
            Judge here
            <svg width="16" height="10" viewBox="0 0 24 14" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 7h21M16 1l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </div>

      </div>

      <!-- Decoration image: now its own sibling, with a small, intentional bottom margin
           instead of inheriting the section's large bottom padding -->
      <div
        ref="decorSection"
        class="mt-8 md:mt-16   lg:mt-24 mb-1 md:mb-20 lg:mb-14 max-w-6xl mx-auto px-4 md:px-8 overflow-hidden md:rounded-3xl"
      >
        <img
          src="/image 25.png"
          alt="Decoration"
          class="w-full h-auto  will-change-transform"
          :style="{ transform: `scale(${decorScale})` }"
        >
      </div>
    </div>

  </div>
</template>

<script setup>
const tiers = ref([
  {
    title: 'Platinum Sponsors',
    variant: 'platinum',
    sponsors: [
      { name: 'Yakima', logo: '/sponsors/yakima.png' },
      { name: 'Fermentis', logo: '/sponsors/fermentis.png' },
      { name: 'Fuglsang', logo: '/sponsors/fuglsang.png' },
    ]
  },
  {
    title: 'Gold Sponsors',
    variant: 'gold',
    sponsors: [
      { name: 'Bertie', logo: '/sponsors/bertie.png' },
      { name: 'Thaitan', logo: '/sponsors/thaitan.png' },
      { name: 'Skaitch', logo: '/sponsors/skaitch.png' },
    ]
  },
  {
    title: 'Silver Sponsors',
    variant: 'silver',
    sponsors: [
      { name: 'Smart', logo: '/sponsors/smart.png' },
      { name: 'ABA', logo: '/sponsors/aba.png' },
      { name: 'Wing', logo: '/sponsors/wing.png' },
    ]
  },
  {
    title: 'Partners',
    variant: 'partners',
    sponsors: [
      { name: 'Beer Association', logo: '/sponsors/beer-asso.png' },
      { name: 'Botanico', logo: '/sponsors/botanico.png' },
      { name: 'Box Office', logo: '/sponsors/boxoffice.png' },
    ]
  },
])

const loaded = ref(false)
const tierVisible = reactive(tiers.value.map(() => false))
const tierRefs = []

const decorSection = ref(null)
const rawDecorProgress = ref(0)
const decorScale = ref(1)

let prefersReducedMotion = false
let rafId = null
let isAnimating = false

function setTierRef(el, index) {
  if (el) tierRefs[index] = el
}

function measureDecor() {
  if (!decorSection.value) return
  const rect = decorSection.value.getBoundingClientRect()
  const total = window.innerHeight + rect.height
  const progress = (window.innerHeight - rect.top) / total
  rawDecorProgress.value = Math.min(Math.max(progress, 0), 1)
}

function onScroll() {
  measureDecor()
  if (!isAnimating && !prefersReducedMotion) {
    isAnimating = true
    tick()
  }
}

function tick() {
  const target = 1 + Math.sin(rawDecorProgress.value * Math.PI) * 0.05
  const diff = target - decorScale.value
  decorScale.value += diff * 0.08
  if (Math.abs(diff) > 0.0008) {
    rafId = requestAnimationFrame(tick)
  } else {
    decorScale.value = target
    isAnimating = false
  }
}

let observer
onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', measureDecor, { passive: true })
  measureDecor()
  if (prefersReducedMotion) {
    decorScale.value = 1 + Math.sin(rawDecorProgress.value * Math.PI) * 0.05
  }

  requestAnimationFrame(() => {
    loaded.value = true
  })

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = tierRefs.indexOf(entry.target)
        if (index !== -1 && entry.isIntersecting) {
          tierVisible[index] = true
        }
      })
    },
    { threshold: 0.15 }
  )
  tierRefs.forEach((el) => el && observer.observe(el))
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', measureDecor)
  if (rafId) cancelAnimationFrame(rafId)
  if (observer) observer.disconnect()
})
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
</style>