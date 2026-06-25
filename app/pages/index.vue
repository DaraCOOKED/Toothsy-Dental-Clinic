<template>
  <section class="relative bg-[#F8EBD6] overflow-hidden px-6 md:px-12 lg:px-24 pt-8 md:pt-16 pb-6 md:pb-20">

    <!-- Background parallax layer -->
    <div
      class="absolute -top-3 -right-3 md:top-10 md:-right-10 pointer-events-none select-none
             transition-all duration-1000 ease-out"
      :class="loaded ? 'opacity-50 md:opacity-30 scale-100' : 'opacity-0 scale-110'"
    >
      <img
        src="/ankor.png"
        alt=""
        class="h-95 w-80 object-contain md:h-[460px] md:w-[460px] lg:h-[700px] lg:w-[800px] will-change-transform"
        :style="{ transform: ankorTransform }"
      />
    </div>

    <!-- Hero: text + glass image -->
    <div class="relative z-10 max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-16 md:items-center">

      <div
        class="max-w-[230px] md:max-w-md md:order-1 will-change-transform"
        :style="{ transform: heroTextTransform }"
      >
        <h1
          class="text-[50px] md:text-[64px] lg:text-[76px] leading-[1.05] text-[#354D24] transition-all duration-700 ease-out"
          :class="loaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'"
          style="font-family: 'Bebas Neue', sans-serif;"
        >
          Event Crown<br />Festival 2026
        </h1>

        <span
          class="inline-block mt-3 px-3 py-1 bg-[#2F4A2F] text-[#EFE3C8] text-[11px] md:text-xs font-semibold tracking-wide rounded
                 transition-all duration-700 ease-out delay-150"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          Celebrate. Connect. Enjoy.
        </span>

        <p
          class="mt-4 text-sm md:text-base text-stone-800 leading-relaxed md:max-w-sm
                 transition-all duration-700 ease-out delay-300"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          Join us for an amazing festival experience with great participants, exciting activities and memorable moment
        </p>

        <NuxtLink
           to="https://docs.google.com/forms/d/e/1FAIpQLScEjueBWitDWygOZkaHDnkADWIHhYdgZ-lH_u3EvKM2RzL1AA/viewform"
  target="_blank"
  rel="noopener noreferrer"
          class="mt-6 hidden md:inline-flex items-center justify-center gap-3 bg-[#2F4A2F] text-[#EFE3C8] text-lg tracking-wide rounded-xl py-4 px-10 w-fit
                 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-[450ms]"
          :class="loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'"
          style="font-family: 'Bebas Neue', sans-serif;"
        >
          Judge here
          <svg width="22" height="14" viewBox="0 0 24 14" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 7h21M16 1l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
      </div>

      <!-- Glass: 3 independent transform layers -->
      <div class="relative z-10 flex justify-end -right-7 -mt-40 mb-1 md:order-2 md:mt-0 md:mb-0 md:justify-center">
        <!-- Layer 1: entrance pop-in -->
        <div
          class="transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-150"
          :class="loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'"
        >
          <!-- Layer 2: continuous idle float -->
          <div class="float-glass">
            <!-- Layer 3: scroll-driven parallax -->
            <img
              src="/glass.png"
              alt="Beer glass"
              class="w-50 md:w-85 lg:w-100 drop-shadow-sm will-change-transform"
              :style="{ transform: glassTransform }"
            />
          </div>
        </div>
      </div>

    </div>

    <!-- Date / Time / Location -->
    <div ref="infoSection" class="relative z-10 max-w-6xl mx-auto mt-0 md:mt-12">
      <div class="bg-[#F7EBD5] border border-[#000]/15 rounded-xl px-3 py-1
                  md:bg-transparent md:border-none md:px-0 md:py-0
                  md:grid md:grid-cols-3 md:gap-6">

        <div
          class="flex items-center gap-4 py-4 border-b border-[#2F4A2F]/25
                 md:border-b-0 md:bg-white/50 md:rounded-xl md:border md:border-[#2F4A2F]/15 md:px-5 md:py-5
                 transition-all duration-700 ease-out delay-0"
          :class="infoVisible ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-sm scale-95'"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2F4A2F" stroke-width="1.8">
            <rect x="3" y="5" width="18" height="16" rx="2"/>
            <path d="M8 3v4M16 3v4M3 10h18" stroke-linecap="round"/>
          </svg>
          <div>
            <p class="text-[10px] font-semibold tracking-wide text-stone-600">DATE</p>
            <p class="text-sm font-bold text-stone-900">15 - 17 August 2026</p>
          </div>
        </div>

        <div
          class="flex items-center gap-4 py-4 border-b border-[#2F4A2F]/25
                 md:border-b-0 md:bg-white/50 md:rounded-xl md:border md:border-[#2F4A2F]/15 md:px-5 md:py-5
                 transition-all duration-700 ease-out delay-150"
          :class="infoVisible ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-sm scale-95'"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2F4A2F" stroke-width="1.8">
            <circle cx="12" cy="12" r="9"/>
            <path d="M12 7v5l3 2" stroke-linecap="round"/>
          </svg>
          <div>
            <p class="text-[10px] font-semibold tracking-wide text-stone-600">TIME</p>
            <p class="text-sm font-bold text-stone-900">02:00 PM - 11:00 PM</p>
          </div>
        </div>

        <div
          class="flex items-center gap-4 py-4
                 md:bg-white/50 md:rounded-xl md:border md:border-[#2F4A2F]/15 md:px-5 md:py-5
                 transition-all duration-700 ease-out delay-300"
          :class="infoVisible ? 'opacity-100 translate-y-0 blur-0 scale-100' : 'opacity-0 translate-y-8 blur-sm scale-95'"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2F4A2F" stroke-width="1.8">
            <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z"/>
            <circle cx="12" cy="9.5" r="2.5"/>
          </svg>
          <div>
            <p class="text-[10px] font-semibold tracking-wide text-stone-600">LOCATION</p>
            <p class="text-sm font-bold text-stone-900">Angkor Wat, Siem Reap</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Mobile-only Judge button -->
    <NuxtLink
      to="https://docs.google.com/forms/d/e/1FAIpQLScEjueBWitDWygOZkaHDnkADWIHhYdgZ-lH_u3EvKM2RzL1AA/viewform"
      class="md:hidden relative z-10 mt-6 flex items-center justify-center gap-3 bg-[#2F4A2F] text-[#EFE3C8] text-lg tracking-wide rounded-xl py-4
             transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-[450ms]"
      :class="loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'"
      style="font-family: 'Bebas Neue', sans-serif;"
    >
      Judge here
      <svg width="22" class="justify-left flex" height="14" viewBox="0 0 24 14" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M1 7h21M16 1l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </NuxtLink>

    <!-- Quick Rules -->
    <div
      ref="rulesSection"
      class="mt-4 bg-[#F8EBD6] relative border border-[#2F4A2F]/30 rounded-2xl mt-10 px-4 py-6 md:max-w-6xl md:mx-auto md:mt-16 md:px-10 md:py-12
             transition-all duration-700 ease-out"
      :class="rulesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
    >
      <h2
        class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F8EBD6] px-4 text-2xl md:text-3xl font-display tracking-wide text-[#2F4A2F]
               transition-all duration-500 ease-out delay-150"
        :class="rulesVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'"
      >
        Quick Rules
      </h2>

      <div class="grid grid-cols-3 md:gap-10">

        <div
          class="flex flex-col items-center text-center px-2 border-r border-[#2F4A2F]/50 md:border-[#2F4A2F]/15
                 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-0"
          :class="rulesVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-75'"
        >
          <svg width="50" height="30" viewBox="0 0 40 28" fill="none" stroke="#2F4A2F" stroke-width="1.6" class="md:w-12 md:h-9">
            <path d="M1 14C7 4 33 4 39 14C33 24 7 24 1 14Z" stroke-linejoin="round"/>
            <circle cx="20" cy="14" r="5"/>
          </svg>
          <p class="mt-3 text-sm md:text-base font-bold uppercase text-stone-900">1. See</p>
          <p class="mt-1 text-xs md:text-sm font-medium text-stone-700 leading-snug">Explore all<br />participants</p>
        </div>

        <div
          class="flex flex-col items-center text-center px-2 border-r border-[#2F4A2F]/50 md:border-[#2F4A2F]/15
                 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-150"
          :class="rulesVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-75'"
        >
          <svg width="50" height="32" viewBox="0 0 36 36" fill="none" stroke="#2F4A2F" stroke-width="1.6" class="md:w-11 md:h-11">
            <rect x="6" y="6" width="24" height="27" rx="2" stroke-linejoin="round"/>
            <path d="M13 6V4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2V6" stroke-linecap="round"/>
            <path d="M12 19l3.5 3.5L24 14" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p class="mt-3 text-sm md:text-base font-bold uppercase text-stone-900">1. Choose</p>
          <p class="mt-1 text-xs md:text-sm font-medium text-stone-700 leading-snug">Pick your<br />favorites</p>
        </div>

        <div
          class="flex flex-col items-center text-center px-2
                 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-300"
          :class="rulesVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-75'"
        >
          <svg width="50" height="30" viewBox="0 0 40 32" fill="none" stroke="#2F4A2F" stroke-width="1.6" class="md:w-12 md:h-10">
            <rect x="3" y="16" width="34" height="13" rx="1"/>
            <path d="M3 22h34M14 22v7M26 22v7" stroke-width="1"/>
            <path d="M16 16L29 4" stroke-linecap="round"/>
            <path d="M25 3l6 2-2 6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p class="mt-3 text-sm md:text-base font-bold uppercase text-stone-900">1. Vote</p>
          <p class="mt-1 text-xs md:text-sm font-medium text-stone-700 leading-snug">Vote and support<br />the best</p>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
const loaded = ref(false)
const infoVisible = ref(false)
const rulesVisible = ref(false)

const infoSection = ref(null)
const rulesSection = ref(null)

// Raw scroll position (updates instantly on every scroll event)
const rawScrollY = ref(0)
// Smoothed scroll position (chases rawScrollY with a slight lag = buttery parallax)
const smoothScrollY = ref(0)

let rafId = null
let isAnimating = false
let prefersReducedMotion = false

function onScroll() {
  rawScrollY.value = window.scrollY
  if (!isAnimating && !prefersReducedMotion) {
    isAnimating = true
    tick()
  }
}

function tick() {
  const diff = rawScrollY.value - smoothScrollY.value
  smoothScrollY.value += diff * 0.075
  if (Math.abs(diff) > 0.05) {
    rafId = requestAnimationFrame(tick)
  } else {
    smoothScrollY.value = rawScrollY.value
    isAnimating = false
  }
}

let observer
onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  window.addEventListener('scroll', onScroll, { passive: true })

  if (prefersReducedMotion) {
    smoothScrollY.value = window.scrollY
  }

  // kick off the cascading entrance one frame after mount
  requestAnimationFrame(() => {
    loaded.value = true
  })

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        if (entry.target === infoSection.value) infoVisible.value = true
        if (entry.target === rulesSection.value) rulesVisible.value = true
      })
    },
    { threshold: 0.2 }
  )
  if (infoSection.value) observer.observe(infoSection.value)
  if (rulesSection.value) observer.observe(rulesSection.value)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (rafId) cancelAnimationFrame(rafId)
  if (observer) observer.disconnect()
})

const ankorTransform = computed(() => {
  const drift = Math.min(smoothScrollY.value * 0.3, 220)
  return `translateY(${drift}px)`
})

const glassTransform = computed(() => {
  const drift = Math.max(smoothScrollY.value * -0.4, -160)
  const rotate = Math.min(smoothScrollY.value * 0.05, 10)
  return `translateY(${drift}px) rotate(${rotate}deg)`
})

const heroTextTransform = computed(() => {
  const drift = smoothScrollY.value * 0.08
  return `translateY(${drift}px)`
})
</script>

<style scoped>
@keyframes float-glass {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(-2deg); }
}
.float-glass {
  animation: float-glass 4.5s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
</style>