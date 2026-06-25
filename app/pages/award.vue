<template>
  <section class="bg-[#F8EBD6] min-h-screen py-9.5 px-9">
    <div class="max-w-6xl mx-auto">

      <!-- Header Section: page-load cascade -->
      <div class="text-center mb-12">
        <h1
          class="text-4xl md:text-5xl font-black text-[#354E20] uppercase tracking-wider
                 transition-all duration-700 ease-out"
          :class="loaded ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-4 blur-sm'"
        >
          Awards
        </h1>

        <div
        class="flex items-center justify-center gap-4 mt-3 md:mt-5 transition-all duration-700 ease-out delay-300"
        :class="loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
      >
        <div class="h-px w-20 sm:w-40 md:w-56 bg-[#354D24] opacity-40"></div>
        <img
          src="/linelogo.png"
          alt="Logo"
          class="w-10 h-10 sm:w-7 sm:h-7 md:w-9 md:h-9 object-contain transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          :class="loaded ? 'rotate-0 scale-100' : '-rotate-90 scale-50'"
        />
        <div class="h-px w-20 sm:w-40 md:w-56 bg-[#354D24] opacity-40"></div>
      </div>

        <p
          class="text-[#354E20]/80 text-sm md:text-base max-w-md mx-auto font-medium
                 transition-all duration-700 ease-out delay-300"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
        >
          Recognizing excellence and celebrating beer crafting achievements.
        </p>
      </div>

      <!-- Cards Grid: scoped overflow-hidden wrapper for the ambient blobs -->
      <div ref="gridSectionRef" class="relative overflow-hidden">

        <!-- Ambient depth blobs: pure CSS gradients, no image files, can never 404 -->
        <div
          class="absolute -top-16 -left-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#354E20]/8 blur-3xl pointer-events-none will-change-transform"
          :style="{ transform: `translateY(${blobADrift}px)` }"
        ></div>
        <div
          class="absolute top-1/3 -right-24 w-80 h-80 sm:w-[26rem] sm:h-[26rem] rounded-full bg-[#B68C3A]/10 blur-3xl pointer-events-none will-change-transform"
          :style="{ transform: `translateY(${blobBDrift}px)` }"
        ></div>

        <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

          <!-- Card 1: Grand Award -->
          <div
            ref="card0Ref"
            class="transition-all duration-700 ease-out"
            :class="cardVisible[0] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-10 blur-sm scale-95'"
            :style="{ transitionDelay: '0ms' }"
          >
            <div
              class="bg-[#DFD8C2] rounded-2xl p-8 shadow-[0_10px_30px_rgba(53,78,32,0.05)] border border-[#354E20]/10 flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-[0_20px_40px_rgba(53,78,32,0.1)] hover:-translate-y-1">
              <div
                class="mb-5 text-[#354E20] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                :class="cardVisible[0] ? 'scale-100 rotate-0' : 'scale-50 -rotate-12'"
                style="transition-delay: 150ms"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
                  <path fill-rule="evenodd"
                    d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
                    clip-rule="evenodd" />
                </svg>
              </div>

              <h3 class="text-[#354E20] font-black text-xl mb-2 tracking-wide">GRAND AWARD</h3>

              <span class="inline-block bg-[#354E20]/10 text-[#354E20] text-xs font-bold px-4 py-1 rounded-full mb-5">
                Official Competition
              </span>

              <p class="text-[#354E20]/80 text-sm leading-relaxed mb-8 flex-grow">
                Judged strictly by a panel of six international experts using standard BJCP score sheets in a rigorous blind
                tasting format.
              </p>

              <!-- Medals Footer -->
              <div class="flex items-center gap-6 pt-4 border-t border-[#354E20]/10 w-full justify-center">
                <div class="flex flex-col items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-5 h-5 text-amber-500">
                    <path d="M7 2h4l1 5H8L7 2Zm6 0h4l-1 5h-4l1-5Z" />
                    <circle cx="12" cy="15" r="6" />
                    <path fill="white"
                      d="M12 11.5l1.03 2.09 2.31.34-1.67 1.63.39 2.3L12 16.77l-2.06 1.09.39-2.3-1.67-1.63 2.31-.34L12 11.5z" />
                  </svg>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-[#354E20]/60">
                    Gold
                  </span>
                </div>
                <div class="flex flex-col items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-5 h-5 text-slate-400">
                    <path d="M7 2h4l1 5H8L7 2Zm6 0h4l-1 5h-4l1-5Z" />
                    <circle cx="12" cy="15" r="6" />
                    <text x="12" y="18" text-anchor="middle" font-size="7" fill="white" font-weight="bold">2</text>
                  </svg>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-[#354E20]/60">
                    Silver
                  </span>
                </div>
                <div class="flex flex-col items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"
                    style="color:#b45309;">
                    <path d="M7 2h4l1 5H8L7 2Zm6 0h4l-1 5h-4l1-5Z" />
                    <circle cx="12" cy="15" r="6" />
                    <text x="12" y="18" text-anchor="middle" font-size="7" fill="white" font-weight="bold">3</text>
                  </svg>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-[#354E20]/60">
                    Bronze
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: People's Choice -->
          <div
            ref="card1Ref"
            class="transition-all duration-700 ease-out"
            :class="cardVisible[1] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-10 blur-sm scale-95'"
            :style="{ transitionDelay: '150ms' }"
          >
            <div
              class="bg-[#DFD8C2] rounded-2xl p-8 shadow-[0_10px_30px_rgba(53,78,32,0.05)] border border-[#354E20]/10 flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-[0_20px_40px_rgba(53,78,32,0.1)] hover:-translate-y-1">
              <div
                class="mb-5 text-[#354E20] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                :class="cardVisible[1] ? 'scale-100 rotate-0' : 'scale-50 -rotate-12'"
                style="transition-delay: 300ms"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
                  <path fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clip-rule="evenodd" />
                </svg>
              </div>

              <h3 class="text-[#354E20] font-black text-xl mb-2 tracking-wide">PEOPLE'S CHOICE</h3>

              <span class="inline-block bg-[#354E20]/10 text-[#354E20] text-xs font-bold px-4 py-1 rounded-full mb-5">
                Festival Attendees
              </span>

              <p class="text-[#354E20]/80 text-sm leading-relaxed mb-8 flex-grow">
                Voted on entirely by festival attendees. This award reflects public preference, drinkability, and community
                popularity.
              </p>

            </div>
          </div>

          <!-- Card 3: Excellence Award -->
          <div
            ref="card2Ref"
            class="transition-all duration-700 ease-out"
            :class="cardVisible[2] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-10 blur-sm scale-95'"
            :style="{ transitionDelay: '300ms' }"
          >
            <div
              class="bg-[#DFD8C2] rounded-2xl p-8 shadow-[0_10px_30px_rgba(53,78,32,0.05)] border border-[#354E20]/10 flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-[0_20px_40px_rgba(53,78,32,0.1)] hover:-translate-y-1">
              <div
                class="mb-5 text-[#354E20] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                :class="cardVisible[2] ? 'scale-100 rotate-0' : 'scale-50 -rotate-12'"
                style="transition-delay: 450ms"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
                  <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd" />
                </svg>
              </div>

              <h3 class="text-[#354E20] font-black text-xl mb-2 tracking-wide">EXCELLENCE AWARD</h3>

              <span class="inline-block bg-[#354E20]/10 text-[#354E20] text-xs font-bold px-4 py-1 rounded-full mb-5">
                Innovation & Style
              </span>

              <p class="text-[#354E20]/80 text-sm leading-relaxed mb-8 flex-grow">
                Celebrating technical mastery and boundary-pushing ingredients. Awarded to brewers who show exceptional
                creativity within their styles.
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// =====================================================================
// One-time reveals: header cascades on page load; each card (and its
// icon, separately, with extra delay + bounce-ease) reveals once, the
// first time it scrolls into view, then is unobserved — never
// re-triggers on scroll-back. Driven by opacity/transform/blur only.
// =====================================================================
const loaded = ref(false)

const card0Ref = ref(null)
const card1Ref = ref(null)
const card2Ref = ref(null)
const cardVisible = reactive([false, false, false])

// =====================================================================
// Continuous ambient parallax: two CSS-gradient blobs drifting at
// different speeds/directions behind the grid. No <img>, so nothing
// here can 404. Fixed pixel amplitude, contained by an
// `overflow-hidden` wrapper scoped only around the grid.
// =====================================================================
const gridSectionRef = ref(null)
const blobADrift = ref(0)
const blobBDrift = ref(0)

let rawBlobADrift = 0
let rawBlobBDrift = 0
let rafId = null
let isTicking = false
let prefersReducedMotion = false

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function viewportProgress(el) {
  const rect = el.getBoundingClientRect()
  const total = window.innerHeight + rect.height
  return clamp((window.innerHeight - rect.top) / total, 0, 1)
}

function measure() {
  if (!gridSectionRef.value) return
  const progress = viewportProgress(gridSectionRef.value)
  rawBlobADrift = (progress - 0.5) * 60    // settles within ±30px
  rawBlobBDrift = (progress - 0.5) * -90   // settles within ±45px, opposite direction
}

function onScroll() {
  measure()
  if (!isTicking) {
    isTicking = true
    tick()
  }
}

function tick() {
  const diffA = rawBlobADrift - blobADrift.value
  const diffB = rawBlobBDrift - blobBDrift.value
  blobADrift.value += diffA * 0.12
  blobBDrift.value += diffB * 0.12

  if (Math.abs(diffA) > 0.05 || Math.abs(diffB) > 0.05) {
    rafId = requestAnimationFrame(tick)
  } else {
    blobADrift.value = rawBlobADrift
    blobBDrift.value = rawBlobBDrift
    isTicking = false
  }
}

let observer

onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    loaded.value = true
    cardVisible[0] = true
    cardVisible[1] = true
    cardVisible[2] = true
    return
  }

  measure()
  tick() // eases blobs in from 0 instead of popping to position

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', measure, { passive: true })

  requestAnimationFrame(() => {
    loaded.value = true
  })

  const cardRefs = [card0Ref.value, card1Ref.value, card2Ref.value]

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const index = cardRefs.indexOf(entry.target)
        if (index !== -1) {
          cardVisible[index] = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  cardRefs.forEach((el) => el && observer.observe(el))
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', measure)
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