<template>
  <div class="min-h-screen bg-[#F7EBD5] overflow-x-hidden">

    <!-- Header -->
    <div class="max-w-3xl mx-auto px-4 pt-12 pb-8 text-center">
      <p
        class="text-xs md:text-sm font-semibold tracking-[0.25em] text-gray-500 uppercase mb-3
               transition-all duration-700 ease-out"
        :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
      >
        Cambodia Craft Beer Crown 2026
      </p>
      <h1
        class="text-3xl md:text-5xl text-[#354D24] font-bold uppercase
               transition-all duration-700 ease-out delay-150"
        :class="loaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'"
        style="font-family: 'Bebas Neue', sans-serif;"
      >
        Event Schedule
      </h1>
      <div
        class="flex items-center justify-center gap-4 mt-3 mb-2 md:mt-5 transition-all duration-700 ease-out delay-300"
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
    </div>

    <!-- Timeline -->
   <!-- Timeline -->
<div ref="timelineWrapper" class="max-w-2xl mx-auto px-4 sm:px-6 pb-0">
  <div ref="lineContainerRef" class="relative flex flex-col gap-8 sm:gap-10">

    <!-- Base track line: height pinned to the exact center of the last icon -->
    <div
      class="absolute left-7 sm:left-8 top-0 w-px bg-[#354D24] opacity-20"
      :style="{ height: `${lineHeight}px` }"
    ></div>

    <!-- Progress line: draws itself in as you scroll, same exact pinned height -->
    <div
      class="absolute left-7 sm:left-8 top-0 w-px bg-[#354D24] will-change-transform origin-top"
      :style="{ height: `${lineHeight}px`, transform: `scaleY(${lineProgress})` }"
    ></div>

    <!-- Opening Ceremony -->
    <div ref="item0" class="relative flex items-center gap-4 sm:gap-6">
      <div
        class="shrink-0 transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        :class="visible[0] ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-12'"
      >
        <div class="icon-pulse w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#354D24] bg-[#f5eedf] flex items-center justify-center z-10 shadow-sm">
          <i class="fa-solid fa-flag text-xl sm:text-2xl text-[#354D24]"></i>
        </div>
      </div>
      <div
        class="flex-1 bg-white border border-gray-100 rounded-xl px-4 py-4 sm:px-5 shadow-sm
               transition-all duration-700 ease-out delay-150"
        :class="visible[0] ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-8 blur-sm'"
      >
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <span class="inline-flex items-center gap-1.5 bg-[#354D24] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full w-fit">
            <i class="fa-solid fa-clock text-xs opacity-75"></i>
            02:00 PM
          </span>
        </div>
        <h3 class="mt-2.5 text-base sm:text-lg font-bold uppercase tracking-wide text-[#354D24]">Opening Ceremony</h3>
        <p class="mt-1 text-sm text-gray-500 leading-relaxed">Welcome speech and opening performance to kick off the event.</p>
      </div>
    </div>

    <!-- Activities & Booths -->
    <div ref="item1" class="relative flex items-center gap-4 sm:gap-6">
      <div
        class="shrink-0 transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        :class="visible[1] ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-12'"
      >
        <div class="icon-pulse w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#354D24] bg-[#f5eedf] flex items-center justify-center z-10 shadow-sm">
          <i class="fa-solid fa-users text-xl sm:text-2xl text-[#354D24]"></i>
        </div>
      </div>
      <div
        class="flex-1 bg-white border border-gray-100 rounded-xl px-4 py-4 sm:px-5 shadow-sm
               transition-all duration-700 ease-out delay-150"
        :class="visible[1] ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-8 blur-sm'"
      >
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <span class="inline-flex items-center gap-1.5 bg-[#354D24] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full w-fit">
            <i class="fa-solid fa-clock text-xs opacity-75"></i>
            04:00 PM
          </span>
        </div>
        <h3 class="mt-2.5 text-base sm:text-lg font-bold uppercase tracking-wide text-[#354D24]">Activities & Booths</h3>
        <p class="mt-1 text-sm text-gray-500 leading-relaxed">Explore activities and visit participant booths across the venue.</p>
      </div>
    </div>

    <!-- Dinner Break -->
    <div ref="item2" class="relative flex items-center gap-4 sm:gap-6">
      <div
        class="shrink-0 transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        :class="visible[2] ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-12'"
      >
        <div class="icon-pulse w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#354D24] bg-[#f5eedf] flex items-center justify-center z-10 shadow-sm">
          <i class="fa-solid fa-utensils text-xl sm:text-2xl text-[#354D24]"></i>
        </div>
      </div>
      <div
        class="flex-1 bg-white border border-gray-100 rounded-xl px-4 py-4 sm:px-5 shadow-sm
               transition-all duration-700 ease-out delay-150"
        :class="visible[2] ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-8 blur-sm'"
      >
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <span class="inline-flex items-center gap-1.5 bg-[#354D24] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full w-fit">
            <i class="fa-solid fa-clock text-xs opacity-75"></i>
            07:00 PM
          </span>
        </div>
        <h3 class="mt-2.5 text-base sm:text-lg font-bold uppercase tracking-wide text-[#354D24]">Dinner Break</h3>
        <p class="mt-1 text-sm text-gray-500 leading-relaxed">Enjoy delicious food, craft beers, and a chance to relax.</p>
      </div>
    </div>

    <!-- Live Performance -->
    <div ref="item3" class="relative flex items-center gap-4 sm:gap-6">
      <div
        class="shrink-0 transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        :class="visible[3] ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-12'"
      >
        <div class="icon-pulse w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#354D24] bg-[#f5eedf] flex items-center justify-center z-10 shadow-sm">
          <i class="fa-solid fa-music text-xl sm:text-2xl text-[#354D24]"></i>
        </div>
      </div>
      <div
        class="flex-1 bg-white border border-gray-100 rounded-xl px-4 py-4 sm:px-5 shadow-sm
               transition-all duration-700 ease-out delay-150"
        :class="visible[3] ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-8 blur-sm'"
      >
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <span class="inline-flex items-center gap-1.5 bg-[#354D24] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full w-fit">
            <i class="fa-solid fa-clock text-xs opacity-75"></i>
            09:00 PM
          </span>
        </div>
        <h3 class="mt-2.5 text-base sm:text-lg font-bold uppercase tracking-wide text-[#354D24]">Live Performance</h3>
        <p class="mt-1 text-sm text-gray-500 leading-relaxed">Live music and a special show for all attendees.</p>
      </div>
    </div>

    <!-- Closing Ceremony -->
    <div ref="item4" class="relative flex items-center gap-4 sm:gap-6">
      <div
        ref="lastIconRef"
        class="shrink-0 transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        :class="visible[4] ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-12'"
      >
        <div class="icon-pulse w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#354D24] bg-[#f5eedf] flex items-center justify-center z-10 shadow-sm">
          <i class="fa-solid fa-trophy text-xl sm:text-2xl text-[#354D24]"></i>
        </div>
      </div>
      <div
        class="flex-1 bg-white border border-gray-100 rounded-xl px-4 py-4 sm:px-5 shadow-sm
               transition-all duration-700 ease-out delay-150"
        :class="visible[4] ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-8 blur-sm'"
      >
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <span class="inline-flex items-center gap-1.5 bg-[#354D24] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full w-fit">
            <i class="fa-solid fa-clock text-xs opacity-75"></i>
            11:00 PM
          </span>
        </div>
        <h3 class="mt-2.5 text-base sm:text-lg font-bold uppercase tracking-wide text-[#354D24]">Closing Ceremony</h3>
        <p class="mt-1 text-sm text-gray-500 leading-relaxed">Awards presentation and closing remarks from the organizers.</p>
      </div>
    </div>

  </div>
</div>

    <!-- Footer: factory image as a real parallax depth-layer -->
     <footer
    class="relative mt-12 min-h-[140px] h-48 sm:h-64 lg:h-80 bg-bottom bg-no-repeat bg-contain"
    style="background-image: url('/factory.png');"
  >
    <div class="absolute inset-0 flex items-end justify-center pb-3 sm:pb-4">
 
    </div>
  </footer>

  </div>
</template>

<script setup>
const loaded = ref(false)
const lineProgress = ref(0)
const footerOffset = ref(0)
const visible = reactive([false, false, false, false, false])

const timelineWrapper = ref(null)
const footerSection = ref(null)
const item0 = ref(null)
const item1 = ref(null)
const item2 = ref(null)
const item3 = ref(null)
const item4 = ref(null)

// NEW: refs for pinning the line's exact length
const lineContainerRef = ref(null)
const lastIconRef = ref(null)
const lineHeight = ref(0)

let prefersReducedMotion = false

const rawLineProgress = ref(0)
const rawFooterOffset = ref(0)

let rafId = null
let isAnimating = false

// NEW: measures the exact pixel distance from the top of the line's
// container down to the vertical CENTER of the last (trophy) icon —
// not the bottom of its card. This is what makes the line stop
// precisely at the icon, regardless of how tall any card is.
function measureLineHeight() {
  if (!lineContainerRef.value || !lastIconRef.value) return
  const containerRect = lineContainerRef.value.getBoundingClientRect()
  const iconRect = lastIconRef.value.getBoundingClientRect()
  lineHeight.value = iconRect.top + iconRect.height / 2 - containerRect.top
}

function measure() {
  if (timelineWrapper.value) {
    const rect = timelineWrapper.value.getBoundingClientRect()
    const midpoint = window.innerHeight * 0.5
    const progress = (midpoint - rect.top) / rect.height
    rawLineProgress.value = Math.min(Math.max(progress, 0), 1)
  }

  if (footerSection.value) {
    const rect = footerSection.value.getBoundingClientRect()
    const total = window.innerHeight + rect.height
    const progress = (window.innerHeight - rect.top) / total
    const clamped = Math.min(Math.max(progress, 0), 1)
    rawFooterOffset.value = (clamped - 0.5) * 50
  }
}

function onScroll() {
  measure()
  if (!isAnimating && !prefersReducedMotion) {
    isAnimating = true
    tick()
  }
}

function tick() {
  const lineDiff = rawLineProgress.value - lineProgress.value
  const footerDiff = rawFooterOffset.value - footerOffset.value
  lineProgress.value += lineDiff * 0.1
  footerOffset.value += footerDiff * 0.1

  if (Math.abs(lineDiff) > 0.002 || Math.abs(footerDiff) > 0.05) {
    rafId = requestAnimationFrame(tick)
  } else {
    lineProgress.value = rawLineProgress.value
    footerOffset.value = rawFooterOffset.value
    isAnimating = false
  }
}

// NEW: recompute the pinned line height on resize too — text wrapping
// and icon position can shift between mobile/tablet/desktop widths.
function onResize() {
  measure()
  measureLineHeight()
}

let observer
onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
  measure()
  measureLineHeight() // run once immediately — refs are already mounted here

  if (prefersReducedMotion) {
    lineProgress.value = rawLineProgress.value
    footerOffset.value = rawFooterOffset.value
  }

  requestAnimationFrame(() => {
    loaded.value = true
  })

  const itemEls = [item0.value, item1.value, item2.value, item3.value, item4.value]
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const index = itemEls.indexOf(entry.target)
        if (index !== -1) visible[index] = true
      })
    },
    { threshold: 0.25 }
  )
  itemEls.forEach((el) => el && observer.observe(el))
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  if (rafId) cancelAnimationFrame(rafId)
  if (observer) observer.disconnect()
})
</script>

<style scoped>
@keyframes icon-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(53, 77, 36, 0.15); }
  50% { box-shadow: 0 0 0 8px rgba(53, 77, 36, 0); }
}
.icon-pulse {
  animation: icon-pulse 2.8s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
</style>