<template>
  <section ref="heroRef" class="relative w-full min-h-screen overflow-hidden flex items-center justify-center">

    <!-- Video background layer (moves slower than scroll = depth) -->
    <div ref="videoLayerRef" class="absolute inset-0 will-change-transform">
      <video
        ref="videoRef"
        class="w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
        poster="/hero-poster.png"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4">
      </video>
      <!-- overlay for text contrast, darkens slightly as you scroll into the page -->
      <div ref="overlayRef" class="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#FFFAE1]"></div>
    </div>

    <!-- Text content layer -->
    <div class="relative z-10 w-full px-9">
      <div class="max-w-6xl mx-auto text-center">
        <h1 ref="headingRef" class="text-white font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
          Your Smile, <span class="text-[#8FE3B8]">Our Priority</span>
        </h1>
        <p ref="subRef" class="text-white/85 text-base md:text-xl mt-5 max-w-xl mx-auto">
          Gentle, modern dental care for the whole family — book your visit with Toothsy today.
        </p>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div ref="scrollHintRef" class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-bounce">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
        <path d="M12 5v14M5 12l7 7 7-7" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
const heroRef = ref(null)
const videoLayerRef = ref(null)
const videoRef = ref(null)
const overlayRef = ref(null)
const headingRef = ref(null)
const subRef = ref(null)
const scrollHintRef = ref(null)

let prefersReducedMotion = false
let rafId = null

// current + target values — lerp between them each frame for smoothness
const v = {
  videoY: 0, tVideoY: 0,
  videoScale: 1.12, tVideoScale: 1.12,
  headY: 0, tHeadY: 0,
  headOp: 1, tHeadOp: 1,
  subY: 0, tSubY: 0,
  subOp: 1, tSubOp: 1,
  hintOp: 1, tHintOp: 1
}

function clamp(n, min, max) { return Math.min(max, Math.max(min, n)) }
function lerp(a, b, t) { return a + (b - a) * t }

function calcTargets() {
  if (!heroRef.value) return
  const rect = heroRef.value.getBoundingClientRect()
  const vh = window.innerHeight || 1

  // 0 = hero top at viewport top, 1+ = scrolled a full viewport past it
  const progress = clamp(-rect.top / vh, 0, 1.5)

  v.tVideoY = progress * 110           // video drifts down slower than the scroll itself
  v.tVideoScale = 1.12 + progress * 0.18 // slow continuous zoom-in, classic parallax depth cue
  v.tHeadY = progress * -90            // heading exits upward, faster than video (foreground layer)
  v.tHeadOp = clamp(1 - progress * 1.7, 0, 1)
  v.tSubY = progress * -50             // subtext trails behind heading (mid layer)
  v.tSubOp = clamp(1 - progress * 1.9, 0, 1)
  v.tHintOp = clamp(1 - progress * 4, 0, 1) // scroll hint disappears almost immediately
}

function tick() {
  calcTargets()
  const ease = 0.08

  v.videoY = lerp(v.videoY, v.tVideoY, ease)
  v.videoScale = lerp(v.videoScale, v.tVideoScale, ease)
  v.headY = lerp(v.headY, v.tHeadY, ease)
  v.headOp = lerp(v.headOp, v.tHeadOp, ease)
  v.subY = lerp(v.subY, v.tSubY, ease)
  v.subOp = lerp(v.subOp, v.tSubOp, ease)
  v.hintOp = lerp(v.hintOp, v.tHintOp, ease)

  if (videoLayerRef.value) {
    videoLayerRef.value.style.transform = `translate3d(0, ${v.videoY}px, 0) scale(${v.videoScale})`
  }
  if (headingRef.value) {
    headingRef.value.style.transform = `translate3d(0, ${v.headY}px, 0)`
    headingRef.value.style.opacity = v.headOp
  }
  if (subRef.value) {
    subRef.value.style.transform = `translate3d(0, ${v.subY}px, 0)`
    subRef.value.style.opacity = v.subOp
  }
  if (scrollHintRef.value) {
    scrollHintRef.value.style.opacity = v.hintOp
  }

  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    // static fallback: full opacity, no transforms, pause the video movement entirely
    videoRef.value?.pause?.()
    return
  }

  rafId = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.scroll-bounce {
  animation: bounce 1.8s ease-in-out infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}
@media (prefers-reduced-motion: reduce) {
  .scroll-bounce { display: none; }
}
</style>