<template>
  <section class="bg-[#F7EBD5] min-h-screen overflow-x-hidden " ref="sectionRef">
    <div class="w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">

      <!-- Title -->
      <div class="text-center">
        <h1
           class="text-[50px] md:text-[64px] lg:text-[76px] leading-[1.05] text-[#354D24] transition-all duration-700 ease-out"
          :class="loaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'"
          style="font-family: 'Bebas Neue', sans-serif;"
        >
          BEER STYLE
        </h1>
        <div
        class="flex items-center justify-center gap-4 mt-3 md:mt-5 transition-all duration-700 ease-out delay-300"
        :class="loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
      >
        <div class="h-px w-20 sm:w-40 md:w-56 bg-[#354D24] opacity-40"></div>
        <img
          src="/linelogo.png"
          alt="Logo"
          class="w-10 h-10 sm:w-12 sm:h-7 md:w-9 md:h-9 object-contain transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          :class="loaded ? 'rotate-0 scale-100' : '-rotate-90 scale-50'"
        />
        <div class="h-px w-20 sm:w-40 md:w-56 bg-[#354D24] opacity-40"></div>
      </div>
      </div>

      <!-- Theme -->
      <div
        ref="themeCardRef"
        class="mt-8 relative border border-[#B68C3A] rounded-[30px] md:rounded-[40px] py-5 pl-6 md:pl-8 pr-24 md:pr-28 flex items-center min-h-[90px]
               transition-all duration-700 ease-out delay-200"
        :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <div class="relative z-10">
          <h2 class="text-[22px] md:text-[16px] text-[#3F5A38]  tracking-tight"
          style="font-family: 'Bebas Neue', sans-serif;">
            2026 THEME
          </h2>
          <p class="text-sm md:text-base text-stone-800 leading-relaxed md:max-w-sm
                 transition-all duration-700 ease-out delay-300"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
            Classic European Beer<br class="hidden sm:inline"> styles.
          </p>
        </div>

        <!-- Barrel: outer = scroll-driven drift + rotate (inline transform), inner = idle bob (CSS animation) -->
        <div
          class="absolute -right-9 md:-right-5 top-1/2 pointer-events-none will-change-transform"
          :style="{ transform: `translateY(calc(-50% + ${barrelDrift}px)) rotate(${barrelRotate}deg)` }"
        >
          <div class="barrel-bob">
            <img src="/Barrel1.png" alt="Barrel Theme" class="w-50 md:w-50 h-auto object-contain drop-shadow-sm">
          </div>
        </div>
      </div>

      <!-- About -->
      <div
        class="mt-6 border border-[#B68C3A] rounded-[24px] md:rounded-[30px] p-5 md:p-6
               transition-all duration-700 ease-out delay-300"
        :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <h2 class=" text-2xl md:text-2xl text-[#3F5A38] mb-3 md:mb-4"
        style="font-family: 'Bebas Neue', sans-serif;">
          ABOUT THE COMPETITION
        </h2>
        <p class="mt-2 text-sm md:text-base text-stone-800 leading-relaxed md:max-w-sm
                 transition-all duration-700 ease-out delay-300"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
          This competition is Part 1 of the annual Beer Crown Trilogy.
          Each year highlights a different brewing tradition and style.
          The 2026 edition celebrates Classic European Beer Styles.
        </p>
      </div>

      <!-- Allowed Styles -->
      <fieldset
        class="mt-6 border border-[#B68C3A] rounded-[24px] md:rounded-[30px] px-5 md:px-6 pb-6 pt-2
               transition-all duration-700 ease-out delay-[400ms]"
        :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <legend class="ml-4 md:ml-6 px-3 text-xl md:text-sm text-[#3F5A38] tracking-wide bg-[#F7EBD5] "
        style="font-family: 'Bebas Neue', sans-serif;">
          ALLOWED STYLE
        </legend>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-4">
          <div
            v-for="style in styles"
            :key="style.name"
            class="flex items-center gap-3"
          >
            <div class="icon-pulse w-8 md:w-9 h-8 md:h-9 bg-[#3F5A38] rounded-full flex justify-center items-center flex-shrink-0">
              <svg class="w-3.5 md:w-4 h-3.5 md:h-4" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <path d="M7 4h8v8a4 4 0 0 1-8 0V4z"/>
                <path d="M15 6h2a2 2 0 0 1 2 2v2a3 3 0 0 1-3 3h-1"/>
                <path d="M9 20h4"/>
                <path d="M11 16v4"/>
              </svg>
            </div>
            <span class="text-sm md:text-base font-medium text-[#3F5A38]">
              {{ style.name }}
            </span>
          </div>
        </div>
      </fieldset>

      <!-- Style Details List: each card reveals independently as it scrolls into view -->
      <div class="mt-6 flex flex-col gap-3">
        <div
          v-for="(style, index) in styles"
          :key="style.name"
          :ref="(el) => setCardRef(el, index)"
          class="bg-white border border-[#3F5A38]/20 rounded-2xl overflow-hidden grid grid-cols-[100px_1fr]
                 transition-all duration-700 ease-out"
          :class="cardVisible[index] ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-8 blur-sm'"
          :style="{ transitionDelay: `${Math.min(index, 4) * 90}ms` }"
        >
          <!-- Image -->
          <div class="relative overflow-hidden min-h-[90px]">
            <img
              :src="style.image"
              :alt="style.name"
              class="w-full h-full object-cover"
              @error="(e) => e.target.style.display = 'none'"
            >
            <span class="absolute top-1.5 left-1.5 text-base bg-white/85 rounded-md px-1 py-0.5 leading-none">
              {{ style.flag }}
            </span>
          </div>

          <!-- Info -->
          <div class="p-3 flex flex-col gap-2 justify-center">
            <div class="flex items-start justify-between gap-2">
              <div>
                <p class="text-[13px] font-bold text-[#3F5A38] leading-snug">{{ style.name }}</p>
                <p class="text-[10px] font-semibold text-[#8a7f6a] uppercase tracking-wider mt-0.5">{{ style.origin }}</p>
              </div>
              <div class="flex gap-1.5 flex-shrink-0 flex-wrap justify-end">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAEEDA] text-[#633806]">{{ style.alcohol }}</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EAF3DE] text-[#27500A]">IBU {{ style.ibu }}</span>
              </div>
            </div>
            <div class="h-px bg-[#3F5A38]/10"></div>

            <!-- Description with clamp -->
            <p
              class="text-[11px] text-[#5a5a4a] leading-relaxed"
              :style="expandedStyles.has(style.name)
                ? { display: 'block' }
                : { display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', maxHeight: '2.8em' }"
            >{{ style.description }}</p>

            <!-- Toggle button -->
            <button
              @click="toggleExpand(style.name)"
              class="self-start text-[10px] font-bold text-[#3F5A38] border border-[#3F5A38]/35 rounded-full px-3 py-0.5 leading-none tracking-wide hover:bg-[#3F5A38]/10 transition-colors duration-150"
            >
              {{ expandedStyles.has(style.name) ? 'Show less ↑' : 'Read more ↓' }}
            </button>

            <div class="h-px bg-[#3F5A38]/10"></div>

            <!-- Extra info grid -->
            <div class="grid grid-cols-2 gap-x-3 gap-y-1.5">
              <div>
                <p class="text-[9px] font-bold text-[#B68C3A] uppercase tracking-wider">Flavor notes</p>
                <p class="text-[11px] text-[#3F5A38] font-medium mt-0.5">{{ style.flavors }}</p>
              </div>
              <div>
                <p class="text-[9px] font-bold text-[#B68C3A] uppercase tracking-wider">Food pairing</p>
                <p class="text-[11px] text-[#3F5A38] font-medium mt-0.5">{{ style.pairing }}</p>
              </div>
              <div>
                <p class="text-[9px] font-bold text-[#B68C3A] uppercase tracking-wider">Serve at</p>
                <p class="text-[11px] text-[#3F5A38] font-medium mt-0.5">{{ style.temp }}</p>
              </div>
              <div>
                <p class="text-[9px] font-bold text-[#B68C3A] uppercase tracking-wider">Beer color</p>
                <p class="text-[11px] text-[#3F5A38] font-medium mt-0.5">{{ style.colorLabel }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Note -->
      <div
        ref="noteRef"
        class="mt-6 relative z-10 border border-[#B68C3A] rounded-2xl md:rounded-full px-5 md:px-6 py-4
               transition-all duration-700 ease-out"
        :class="noteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <p class="text-sm text-[#3F5A38]">
          <strong>Note:</strong>
          Only beer styles listed above are eligible for the 2026 competition.
        </p>
      </div>

      <!-- Decoration: 3 independent layers — entrance fade (Tailwind classes),
           scroll drift (inline transform), breathing zoom (inline transform,
           contained by overflow-hidden so it can never reveal a gap) -->
      <div
        class="mt-10 -mx-4 md:mx-0 transition-all duration-700 ease-out"
        :class="decorationVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
      >
        <div
          ref="decorationRef"
          class="will-change-transform relative z-0"
          :style="{ transform: `translateY(${decorationDrift}px)` }"
        >
          <div class="overflow-hidden md:rounded-3xl">
            <img
              src="/image-25.png"
              alt="Decoration"
              class="w-full h-auto object-cover will-change-transform"
              :style="{ transform: `scale(${decorationScale})` }"
            >
          </div>
    
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const styles = [
  {
    name: 'Strong Bitter (ESB)',
    origin: 'England',
    flag: '🇬🇧',
    alcohol: '4.6% – 6.2%',
    ibu: '30 - 50',
    image: 'Strong-Bitter.jpeg',
    description: 'An average- to strong-strength English ale featuring a nice balance between leafy, earthy British hops and a solid malt backbone. Expect notes of biscuit, nut, or caramel with a dry, clean finish.',
    flavors: 'Biscuit · Caramel · Earthy',
    pairing: 'Roast beef · Cheddar',
    temp: '10–13 °C',
    colorLabel: 'Deep amber',
  },
  {
    name: 'English IPA',
    origin: 'England',
    flag: '🇬🇧',
    alcohol: '5.0% – 7.5%',
    ibu: '40 - 60',
    image: 'English-IPA.jpg',
    description: 'A hoppy, moderately strong British pale ale that leans into herbal, floral, and spicy wood qualities rather than the bright citrus of its American cousin. The malt profile is often more prominent, presenting toasted, bready, or caramel layers.',
    flavors: 'Herbal · Toast · Floral',
    pairing: 'Fish & chips · Curry',
    temp: '8–12 °C',
    colorLabel: 'Golden amber',
  },
  {
    name: 'Witbier',
    origin: 'Belgium',
    flag: '🇧🇪',
    alcohol: '4.5% – 5.5%',
    ibu: '8 - 20',
    image: '/Witbier.jpeg',
    description: 'A remarkably refreshing, pale wheat ale brewed with coriander and curaçao orange peel. It is intentionally hazy from unmalted wheat and yeast, offering a bright, citrusy, and subtly spicy flavor profile.',
    flavors: 'Citrus · Coriander · Spice',
    pairing: 'Mussels · Salad · Seafood',
    temp: '3–5 °C',
    colorLabel: 'Pale hazy yellow',
  },
  {
    name: 'Saison',
    origin: 'Belgium',
    flag: '🇧🇪',
    alcohol: '3.5% – 9.5%',
    ibu: '20 - 35',
    image: '/Saison.jpg',
    description: 'An artisanal, highly carbonated Belgian farmhouse ale with a distinctive dry, fruity, and peppery character. It balances complex esters and phenols with a prominent hop bitterness and an incredibly crisp finish.',
    flavors: 'Pepper · Fruit · Spice',
    pairing: 'Grilled chicken · Brie',
    temp: '6–8 °C',
    colorLabel: 'Hazy golden',
  },
  {
    name: 'Weissbier',
    origin: 'Germany',
    flag: '🇩🇪',
    alcohol: '4.3% – 5.6%',
    ibu: '8 - 15',
    image: '/Weissbier-1.jpg',
    description: 'A traditional South German wheat beer famous for its cloudy appearance and dramatic yeast-driven aromas of banana and clove. It has low bitterness, high carbonation, and a fluffy, creamy mouthfeel.',
    flavors: 'Banana · Clove · Vanilla',
    pairing: 'Pretzels · Pork · Sausage',
    temp: '5–7 °C',
    colorLabel: 'Pale hazy gold',
  },
  {
    name: 'German Pils',
    origin: 'Germany',
    flag: '🇩🇪',
    alcohol: '4.4% – 5.2%',
    ibu: '22 - 40',
    image: '/German-Pils.jpeg',
    description: 'A crisp, clean, and highly attenuated gold-colored lager that highlights noble German hops like Hallertau or Tettnanger. It features a distinctive, snappy floral aroma and a firm, lingering bitterness.',
    flavors: 'Floral · Crisp · Grassy',
    pairing: 'Schnitzel · Light salads',
    temp: '4–7 °C',
    colorLabel: 'Pale straw gold',
  },
  {
    name: 'Munich Dunkel',
    origin: 'Germany',
    flag: '🇩🇪',
    alcohol: '4.5% – 5.6%',
    ibu: '18 - 28',
    image: '/Munich-Dunkel.jpg',
    description: 'A classic, deeply comforting dark lager from Bavaria that celebrates rich, bready, and toasty Munich malts. It tastes of bread crusts, nuts, or mild chocolate without ever feeling heavy, overly sweet, or roasted like a stout.',
    flavors: 'Bread · Chocolate · Nuts',
    pairing: 'Roast pork · Dark bread',
    temp: '7–9 °C',
    colorLabel: 'Deep dark brown',
  },
]

// --- Expand/collapse state ---
const expandedStyles = ref(new Set())

function toggleExpand(name) {
  const s = new Set(expandedStyles.value)
  s.has(name) ? s.delete(name) : s.add(name)
  expandedStyles.value = s
}

// =====================================================================
// Parallax + reveal engine
//
// Two independent systems, kept deliberately separate:
//
// 1. CONTINUOUS (barrel drift/rotate, decoration drift/zoom) — driven by
//    one shared requestAnimationFrame loop, lerped toward targets that
//    are re-measured from each element's own getBoundingClientRect() on
//    scroll/resize (not raw scrollY, so it can never grow unbounded on
//    a long page). All amplitudes are fixed/clamped, and every value is
//    applied via `transform` only — never layout-affecting properties —
//    so there is no layout shift and no risk of overlapping neighbors.
//
// 2. ONE-TIME REVEALS (page-load cascade + per-card scroll reveal) —
//    driven by a simple `loaded` flag and an IntersectionObserver. Each
//    card animates in once, the first time it enters the viewport, then
//    is unobserved — cheap, and never re-triggers on scroll-back.
// =====================================================================

const sectionRef = ref(null) // reserved for future section-level effects
const themeCardRef = ref(null)
const decorationRef = ref(null)
const noteRef = ref(null)

const loaded = ref(false)
const noteVisible = ref(false)
const decorationVisible = ref(false)
const cardVisible = reactive(styles.map(() => false))
const cardRefs = []

const barrelDrift = ref(0)
const barrelRotate = ref(0)
const decorationDrift = ref(0)
const decorationScale = ref(1)

let rawBarrelDrift = 0
let rawBarrelRotate = 0
let rawDecorationDrift = 0
let rawDecorationScale = 1

let rafId = null
let isTicking = false
let prefersReducedMotion = false

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

// 0 → 1: how far an element has travelled through the viewport.
function viewportProgress(el) {
  const rect = el.getBoundingClientRect()
  const total = window.innerHeight + rect.height
  return clamp((window.innerHeight - rect.top) / total, 0, 1)
}

function setCardRef(el, index) {
  if (el) cardRefs[index] = el
}

// Re-measure targets. Cheap — only runs on scroll/resize, never inside tick().
function measure() {
  if (themeCardRef.value) {
    const progress = viewportProgress(themeCardRef.value)
    rawBarrelDrift = (progress - 0.5) * 80   // settles within ±40px
    rawBarrelRotate = (progress - 0.5) * 16  // settles within ±8deg
  }
  if (decorationRef.value) {
    const progress = viewportProgress(decorationRef.value)
    rawDecorationDrift = (progress - 0.5) * 60 // settles within ±30px
    // sine curve: 1.0 at the edges, peaks ~1.06 when centered in view
    rawDecorationScale = 1 + Math.sin(progress * Math.PI) * 0.06
  }
}

function onScroll() {
  measure()
  if (!isTicking) {
    isTicking = true
    tick()
  }
}

// Smoothly interpolate current values toward their raw targets each frame.
function tick() {
  const driftDiff = rawBarrelDrift - barrelDrift.value
  const rotateDiff = rawBarrelRotate - barrelRotate.value
  const decoDriftDiff = rawDecorationDrift - decorationDrift.value
  const decoScaleDiff = rawDecorationScale - decorationScale.value

  barrelDrift.value += driftDiff * 0.15
  barrelRotate.value += rotateDiff * 0.15
  decorationDrift.value += decoDriftDiff * 0.15
  decorationScale.value += decoScaleDiff * 0.15

  const settled =
    Math.abs(driftDiff) < 0.05 &&
    Math.abs(rotateDiff) < 0.03 &&
    Math.abs(decoDriftDiff) < 0.05 &&
    Math.abs(decoScaleDiff) < 0.0008

  if (!settled) {
    rafId = requestAnimationFrame(tick)
  } else {
    barrelDrift.value = rawBarrelDrift
    barrelRotate.value = rawBarrelRotate
    decorationDrift.value = rawDecorationDrift
    decorationScale.value = rawDecorationScale
    isTicking = false
  }
}

let observer

onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    // Skip all motion entirely — just show everything in its final state.
    loaded.value = true
    noteVisible.value = true
    decorationVisible.value = true
    cardVisible.forEach((_, i) => (cardVisible[i] = true))
    return
  }

  measure()
  tick() // eases continuous values in from 0 instead of popping to position

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', measure, { passive: true })

  requestAnimationFrame(() => {
    loaded.value = true
  })

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const cardIndex = cardRefs.indexOf(entry.target)
        if (cardIndex !== -1) {
          cardVisible[cardIndex] = true
          observer.unobserve(entry.target)
          return
        }
        if (entry.target === noteRef.value) {
          noteVisible.value = true
          observer.unobserve(entry.target)
          return
        }
        if (entry.target === decorationRef.value) {
          decorationVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  cardRefs.forEach((el) => el && observer.observe(el))
  if (noteRef.value) observer.observe(noteRef.value)
  if (decorationRef.value) observer.observe(decorationRef.value)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', measure)
  if (rafId) cancelAnimationFrame(rafId)
  if (observer) observer.disconnect()
})
</script>

<style scoped>
@keyframes barrel-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.barrel-bob {
  animation: barrel-bob 3.6s ease-in-out infinite;
}

@keyframes icon-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(63, 90, 56, 0.18); }
  50% { box-shadow: 0 0 0 7px rgba(63, 90, 56, 0); }
}
.icon-pulse {
  animation: icon-pulse 2.6s ease-in-out infinite;
}

@keyframes star-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}
.star-pulse {
  animation: star-pulse 2.2s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
</style>