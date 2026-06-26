<template>
  
  <section
    ref="heroRef"
    class="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
  style="perspective: 1200px;"
  >

    <!-- ① VIDEO LAYER — slowest, deepest -->
    <div
      ref="videoLayerRef"
      class="absolute inset-0 will-change-transform"
      style="transform-origin: center center;"
    >
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

      <!-- ② OVERLAY — independent opacity layer, drifts even slower -->
      <div
        ref="overlayRef"
        class="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#FFFAE1]"
        style="will-change: opacity, transform;"
      ></div>
    </div>

    <!-- ③ FLOATING BLOB A — top-left ambient glow, fastest layer -->
    <div
      ref="floatARef"
      class="absolute pointer-events-none will-change-transform"
      style="
        top: 8%;
        left: -6%;
        width: 520px;
        height: 520px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(143,227,184,0.18) 0%, transparent 70%);
        filter: blur(48px);
      "
      aria-hidden="true"
    ></div>

    <!-- ③ FLOATING BLOB B — bottom-right, slightly slower than A -->
    <div
      ref="floatBRef"
      class="absolute pointer-events-none will-change-transform"
      style="
        bottom: -10%;
        right: -8%;
        width: 620px;
        height: 620px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(31,157,99,0.14) 0%, transparent 65%);
        filter: blur(64px);
      "
      aria-hidden="true"
    ></div>

    <!-- ④ FLOATING ACCENT SHAPE — thin ring, reacts strongly to mouse -->
    <div
      ref="accentRingRef"
      class="absolute pointer-events-none will-change-transform"
      style="
        top: 20%;
        right: 12%;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        border: 1px solid rgba(143,227,184,0.22);
        opacity: 0.7;
      "
      aria-hidden="true"
    ></div>

    <!-- ⑤ FLOATING ACCENT SHAPE — small square, rotates on scroll -->
    <div
      ref="accentSquareRef"
      class="absolute pointer-events-none will-change-transform"
      style="
        bottom: 28%;
        left: 9%;
        width: 48px;
        height: 48px;
        border: 1px solid rgba(143,227,184,0.3);
        border-radius: 10px;
        opacity: 0.6;
      "
      aria-hidden="true"
    ></div>

    <!-- ⑥ TEXT CONTENT LAYER — layered heading + subtext with independent speeds -->
    <div class="relative z-10 w-full px-9">
      <div class="max-w-6xl mx-auto text-center">

        <!-- Heading: moves fastest among text layers -->
        <h1
          ref="headingRef"
          class="text-white font-bold text-4xl md:text-6xl lg:text-7xl leading-tight will-change-transform"
          style="transform-origin: center bottom;"
        >
          Your Smile, <span class="text-[#8FE3B8]">Our Priority</span>
        </h1>

        <!-- Subtext: trails behind heading (different Y speed + slight scale) -->
        <p
          ref="subRef"
          class="text-white/85 text-base md:text-xl mt-5 max-w-xl mx-auto will-change-transform"
        >
          Gentle, modern dental care for the whole family — book your visit with Toothsy today.
        </p>

      </div>
    </div>

    <!-- ⑦ SCROLL HINT — vanishes almost immediately -->
    <div
      ref="scrollHintRef"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-bounce will-change-transform"
      aria-hidden="true"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
        <path d="M12 5v14M5 12l7 7 7-7" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

  </section>   
 
  <!-- No wrapper div with padding/max-width here.
       HeroSection must be a direct child of <main> (via layout slot)
       so it can be truly full-bleed. -->

  <!-- HERO — full bleed, no container wrapper -->
  <HeroSection />

  <!-- SERVICES SECTION — your existing content goes here -->
  <section class="bg-[#FFFAE1] py-20 px-6">
    <div class="max-w-6xl mx-auto">

      <!-- Section heading — unchanged from your original -->
      <h2 class="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-12">
        Our Services
      </h2>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          v-for="(service, i) in services"
          :key="service.link"
          :title="service.title"
          :desc="service.desc"
          :link="service.link"
          :svg="service.svg"
          :index="i"
        />
      </div>

    </div>
  </section>



</template>


<script setup>
// ============================================================
// PROPS
// ============================================================
useHead({
  title: 'Services — Toothsy Dental Clinic',
  meta: [{ name: 'description', content: 'Explore our full range of gentle, modern dental services.' }]
})

// ── Service data — replace with your real services ───────────
const services = [
  {
    title: 'General Dentistry',
    desc:  'Routine check-ups, cleanings, and fillings to keep your smile healthy year-round.',
    link:  '/service/general',
    svg:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 12h8M12 8v8"/></svg>`,
  },
  {
    title: 'Teeth Whitening',
    desc:  'Professional-grade whitening that lifts stains and brightens your smile safely.',
    link:  '/service/whitening',
    svg:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
  },
  {
    title: 'Orthodontics',
    desc:  'Braces and clear aligners to straighten teeth at any age, comfortably.',
    link:  '/service/orthodontics',
    svg:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="8" rx="3"/><path d="M7 8V6a2 2 0 0 1 4 0v2M13 8V6a2 2 0 0 1 4 0v2"/></svg>`,
  },
]


const props = defineProps({
  title: { type: String, required: true },
  desc:  { type: String, required: true },
  link:  { type: String, required: true },
  svg:   { type: String, required: true },
  index: { type: Number, default: 0 }
})


// ============================================================
// REFS — Hero elements
// ============================================================
const heroRef       = ref(null)
const videoLayerRef = ref(null)
const videoRef      = ref(null)
const overlayRef    = ref(null)
const floatARef     = ref(null)
const floatBRef     = ref(null)
const accentRingRef  = ref(null)
const accentSquareRef = ref(null)
const headingRef    = ref(null)
const subRef        = ref(null)
const scrollHintRef = ref(null)


// ============================================================
// REFS — Card reveal
// ============================================================
const cardRef = ref(null)
const visible = ref(false)


// ============================================================
// DEVICE CAPABILITY DETECTION
// Reduce effects on low-powered / touch / reduced-motion devices
// ============================================================
let prefersReducedMotion = false
let isMobile = false
let isLowPower = false

function detectCapabilities() {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  isMobile = window.matchMedia('(max-width: 768px)').matches

  // Heuristic: treat < 4 logical cores as low-power
  isLowPower = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4

  return prefersReducedMotion || isLowPower
}


// ============================================================
// PARALLAX STATE — current (interpolated) + target values
// Using flat object for minimum GC pressure in the RAF loop.
// ============================================================
const v = {
  // Video background — slowest layer (0.12x)
  videoY: 0,     tVideoY: 0,
  videoScale: 1.08, tVideoScale: 1.08,

  // Overlay gradient — almost static (0.06x)
  overlayY: 0,   tOverlayY: 0,

  // Blob A — upper-left (0.65x, also mouse-reactive)
  floatAY: 0,    tFloatAY: 0,
  floatAX: 0,    tFloatAX: 0,

  // Blob B — lower-right (0.55x)
  floatBY: 0,    tFloatBY: 0,
  floatBX: 0,    tFloatBX: 0,

  // Accent ring — mouse only (0.8x mouse sensitivity)
  ringX: 0,      tRingX: 0,
  ringY: 0,      tRingY: 0,
  ringRotate: 0, tRingRotate: 0,

  // Accent square — scroll-rotate + mouse (0.9x mouse sensitivity)
  squareX: 0,    tSquareX: 0,
  squareY: 0,    tSquareY: 0,
  squareRotate: 0, tSquareRotate: 0,

  // Heading — 0.42x scroll speed
  headY: 0,      tHeadY: 0,
  headOp: 1,     tHeadOp: 1,
  headScale: 1,  tHeadScale: 1,

  // Subtext — 0.28x scroll speed (trails heading)
  subY: 0,       tSubY: 0,
  subOp: 1,      tSubOp: 1,

  // Scroll hint
  hintOp: 1,     tHintOp: 1,

  // Mouse position (normalized -1…+1)
  mouseX: 0,     tMouseX: 0,
  mouseY: 0,     tMouseY: 0,
}

// ============================================================
// MATH UTILITIES
// ============================================================

/** Clamp n between [min, max] */
function clamp(n, min, max) {
  return n < min ? min : n > max ? max : n
}

/** Linear interpolation — core of the smooth feel */
function lerp(a, b, t) {
  return a + (b - a) * t
}

/** Map a value from one range to another */
function mapRange(value, inMin, inMax, outMin, outMax) {
  return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin)
}


// ============================================================
// SCROLL PARALLAX — calculates target values from scroll progress
// Called every RAF frame (not on a scroll event) to avoid
// layout thrashing and ensure smooth sub-frame interpolation.
// ============================================================

/** Intensity multipliers. Halved on mobile, zeroed on reduced-motion. */
let intensity = 1.0

function calcScrollTargets() {
  if (!heroRef.value) return

  const rect = heroRef.value.getBoundingClientRect()
  const vh   = window.innerHeight || 1

  // 0 = hero fully in view, 1 = scrolled one full viewport past top
  const progress = clamp(-rect.top / vh, 0, 1.4)

  // ─── Layer 1: video (0.12x) ───
  // Moves down slightly as we scroll — creates depth vs page content
  v.tVideoY     = progress * 80  * intensity
  v.tVideoScale = 1.08 + progress * 0.14 * intensity   // subtle zoom-in

  // ─── Layer 2: overlay (0.06x) ───
  v.tOverlayY = progress * 36 * intensity

  // ─── Layer 3: blob A (0.65x upward) ───
  // Floats upward faster than background — foreground feel
  v.tFloatAY = progress * -160 * intensity

  // ─── Layer 4: blob B (0.55x upward) ───
  v.tFloatBY = progress * -130 * intensity

  // ─── Layer 5: accent ring — scroll + slight X drift ───
  v.tRingY      = progress * -200 * intensity
  v.tRingRotate = progress * 45   * intensity           // gentle clockwise rotation

  // ─── Layer 6: accent square ───
  v.tSquareY      = progress * -180 * intensity
  v.tSquareRotate = progress * -60  * intensity         // counter-clockwise

  // ─── Layer 7: heading (0.42x upward exit) ───
  // Exits upward, fades, and pinches inward
  v.tHeadY     = progress * -160 * intensity
  v.tHeadOp    = clamp(1 - progress * 1.6, 0, 1)
  v.tHeadScale = clamp(1 - progress * 0.08, 0.92, 1)   // subtle scale-down on exit

  // ─── Layer 8: subtext (0.28x, trails heading) ───
  v.tSubY  = progress * -100 * intensity
  v.tSubOp = clamp(1 - progress * 1.85, 0, 1)

  // ─── Layer 9: scroll hint (vanishes fast) ───
  v.tHintOp = clamp(1 - progress * 5, 0, 1)
}


// ============================================================
// MOUSE PARALLAX — captures normalized mouse position (-1…+1)
// Uses passive listener, does NO DOM reads (no layout thrashing).
// ============================================================
let mouseRafScheduled = false

function onMouseMove(e) {
  if (isMobile) return

  // Only react while hero is visible
  const rect = heroRef.value?.getBoundingClientRect()
  if (!rect || rect.bottom < 0 || rect.top > window.innerHeight) return

  v.tMouseX = (e.clientX / window.innerWidth  - 0.5) * 2   // -1 → +1
  v.tMouseY = (e.clientY / window.innerHeight - 0.5) * 2   // -1 → +1
}


// ============================================================
// MOUSE TARGET INJECTION — mixes mouse deltas into layer targets
// Called inside the RAF loop AFTER calcScrollTargets so scroll
// targets are not overwritten — they're *added to*.
// ============================================================
function applyMouseTargets() {
  if (isMobile) return

  const mx = v.mouseX  // already lerp'd
  const my = v.mouseY

  // Blobs react to mouse in opposite directions (parallax depth cue)
  v.tFloatAX = mx * -18 * intensity
  v.tFloatBX = mx *  14 * intensity

  // Accent shapes: strong independent mouse reaction (different axes)
  v.tRingX = mx * -28 * intensity
  v.tRingY += my * -22 * intensity   // ADD to scroll target

  v.tSquareX = mx * 22 * intensity
  v.tSquareY += my * 18 * intensity  // ADD to scroll target
}


// ============================================================
// LERP ALL VALUES — smooth interpolation each frame
// Different ease speeds per layer for distinct "weight" feel:
//   - Background / gradients: very slow (0.04)    → heavy, inertial
//   - Floating blobs: slow-medium (0.06)           → floaty
//   - Accent shapes: medium (0.08)                 → snappy
//   - Text: faster (0.10)                          → responsive
//   - Mouse: fast (0.10)                           → feels direct
// ============================================================
function lerpAll() {
  const eVid    = 0.04   // video: heaviest, most inertia
  const eOverlay= 0.05
  const eBlob   = 0.055  // blobs: floaty
  const eAccent = 0.075  // accent shapes: medium
  const eText   = 0.095  // text: most responsive
  const eMouse  = 0.09   // mouse tracking

  // Mouse — must lerp before applyMouseTargets uses it
  v.mouseX = lerp(v.mouseX, v.tMouseX, eMouse)
  v.mouseY = lerp(v.mouseY, v.tMouseY, eMouse)

  // Inject mouse targets (reads lerp'd mouse, writes to t* targets)
  applyMouseTargets()

  // Video
  v.videoY     = lerp(v.videoY,     v.tVideoY,     eVid)
  v.videoScale = lerp(v.videoScale, v.tVideoScale, eVid)

  // Overlay
  v.overlayY   = lerp(v.overlayY,   v.tOverlayY,   eOverlay)

  // Blobs
  v.floatAY = lerp(v.floatAY, v.tFloatAY, eBlob)
  v.floatAX = lerp(v.floatAX, v.tFloatAX, eBlob)
  v.floatBY = lerp(v.floatBY, v.tFloatBY, eBlob)
  v.floatBX = lerp(v.floatBX, v.tFloatBX, eBlob)

  // Accent shapes
  v.ringX      = lerp(v.ringX,      v.tRingX,      eAccent)
  v.ringY      = lerp(v.ringY,      v.tRingY,      eAccent)
  v.ringRotate = lerp(v.ringRotate, v.tRingRotate, eAccent)
  v.squareX      = lerp(v.squareX,      v.tSquareX,      eAccent)
  v.squareY      = lerp(v.squareY,      v.tSquareY,      eAccent)
  v.squareRotate = lerp(v.squareRotate, v.tSquareRotate,  eAccent)

  // Text layers
  v.headY     = lerp(v.headY,     v.tHeadY,     eText)
  v.headOp    = lerp(v.headOp,    v.tHeadOp,    eText)
  v.headScale = lerp(v.headScale, v.tHeadScale, eText)
  v.subY      = lerp(v.subY,      v.tSubY,      eText)
  v.subOp     = lerp(v.subOp,     v.tSubOp,     eText)
  v.hintOp    = lerp(v.hintOp,    v.tHintOp,    eText)
}


// ============================================================
// WRITE TO DOM — only transforms and opacity, never top/left.
// Batched into a single write phase after all lerps complete.
// translate3d() forces GPU composite layer (avoids CPU paint).
// ============================================================
function writeDOM() {
  if (videoLayerRef.value) {
    videoLayerRef.value.style.transform =
      `translate3d(0, ${v.videoY}px, 0) scale(${v.videoScale})`
  }

  if (overlayRef.value) {
    overlayRef.value.style.transform =
      `translate3d(0, ${v.overlayY}px, 0)`
  }

  if (floatARef.value) {
    floatARef.value.style.transform =
      `translate3d(${v.floatAX}px, ${v.floatAY}px, 0)`
  }

  if (floatBRef.value) {
    floatBRef.value.style.transform =
      `translate3d(${v.floatBX}px, ${v.floatBY}px, 0)`
  }

  if (accentRingRef.value) {
    accentRingRef.value.style.transform =
      `translate3d(${v.ringX}px, ${v.ringY}px, 0) rotate(${v.ringRotate}deg)`
  }

  if (accentSquareRef.value) {
    accentSquareRef.value.style.transform =
      `translate3d(${v.squareX}px, ${v.squareY}px, 0) rotate(${v.squareRotate}deg)`
  }

  if (headingRef.value) {
    headingRef.value.style.transform =
      `translate3d(0, ${v.headY}px, 0) scale(${v.headScale})`
    headingRef.value.style.opacity = v.headOp
  }

  if (subRef.value) {
    subRef.value.style.transform =
      `translate3d(0, ${v.subY}px, 0)`
    subRef.value.style.opacity = v.subOp
  }

  if (scrollHintRef.value) {
    scrollHintRef.value.style.opacity = v.hintOp
  }
}


// ============================================================
// MAIN RAF LOOP — runs at display refresh rate (~60-120fps).
// Separates read (calcScrollTargets uses getBoundingClientRect
// once per frame) from write (writeDOM) to avoid layout thrash.
// ============================================================
let rafId = null

function tick() {
  calcScrollTargets()   // READ — one getBoundingClientRect call
  lerpAll()             // COMPUTE — pure math, no DOM access
  writeDOM()            // WRITE — only transform + opacity

  rafId = requestAnimationFrame(tick)
}


// ============================================================
// CARD REVEAL — IntersectionObserver-based entrance animation.
// Adds: fade-in + slide-up + scale + blur removal via CSS class.
// ============================================================
let cardObserver = null

function initCardReveal() {
  if (prefersReducedMotion) {
    visible.value = true
    return
  }

  cardObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        cardObserver.disconnect()
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  )

  if (cardRef.value) cardObserver.observe(cardRef.value)
}


// ============================================================
// LIFECYCLE
// ============================================================

onMounted(() => {
  const shouldSkip = detectCapabilities()

  // ── Reduced-motion / low-power fallback ──
  if (shouldSkip) {
    visible.value = true
    // Keep video paused on reduced-motion
    if (prefersReducedMotion) videoRef.value?.pause?.()
    return
  }

  // Halve intensity on mobile (performance + UX)
  intensity = isMobile ? 0.45 : 1.0

  // Start the RAF loop
  rafId = requestAnimationFrame(tick)

  // Mouse listener — passive for scroll performance
  if (!isMobile) {
    window.addEventListener('mousemove', onMouseMove, { passive: true })
  }

  // Card reveal observer
  initCardReveal()
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('mousemove', onMouseMove)
  if (cardObserver) cardObserver.disconnect()
})
</script>


<style scoped>
/* ──────────────────────────────────────────────────────────────
   SCROLL HINT — bounce animation
   Translated in a transform-only keyframe for GPU compositing.
   Hidden for reduced-motion users.
────────────────────────────────────────────────────────────── */
.scroll-bounce {
  animation: hint-bounce 1.8s ease-in-out infinite;
}

@keyframes hint-bounce {
  0%,
  100% { transform: translateX(-50%) translateY(0); }
  50%  { transform: translateX(-50%) translateY(10px); }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-bounce { display: none; }
}


/* ──────────────────────────────────────────────────────────────
   CARD REVEAL — entrance animation triggered by .is-visible
   Initial state:  invisible, shifted down 40px, scaled down,
                   with a soft blur for a cinematic reveal.
   Final state:    visible, natural position, sharp.

   Using CSS transitions (not keyframes) so staggered
   transitionDelay works correctly via inline style.
────────────────────────────────────────────────────────────── */
.card-reveal {
  opacity: 0;
  transform: translateY(40px) scale(0.97);
  filter: blur(6px);
  /*
    Duration longer than the Tailwind hover so they don't clash.
    The Tailwind class 'transition-all duration-700' handles hover;
    initial reveal uses this separate transition property set.
    We explicitly name properties to avoid animating the expensive
    box-shadow on entrance (only on hover).
  */
  transition:
    opacity  0.75s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    filter   0.65s cubic-bezier(0.22, 1, 0.36, 1);
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
    transition: none;
  }
}


/* ──────────────────────────────────────────────────────────────
   WILL-CHANGE CLEANUP
   Remove will-change once the hero is no longer in the viewport
   to free GPU memory. Handled via JS (hero exits = stop RAF),
   but we also baseline it here for initial paint.
────────────────────────────────────────────────────────────── */
.will-change-transform {
  will-change: transform;
}


/* ──────────────────────────────────────────────────────────────
   MOBILE PERFORMANCE
   On narrow viewports: disable blur-heavy gradients
   and reduce overdraw from the floating blobs.
────────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  [ref="floatARef"],
  [ref="floatBRef"] {
    /* Disable expensive backdrop filters on mobile */
    filter: none !important;
    opacity: 0 !important;
  }
}
</style>