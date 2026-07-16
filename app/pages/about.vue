<template>
  <div class="relative isolate overflow-x-hidden bg-[#EFF8FC]">

    <!-- ════════════════════════════════════════════════════
      AMBIENT LAYER — blobs, watermark, accent shapes
      Fixed/absolute, pointer-events-none, z-0
      All drift independently throughout the full page
    ════════════════════════════════════════════════════ -->

    <!-- Blob 1: top-left warm green glow -->
    <div ref="blob1Ref" aria-hidden="true" class="pointer-events-none select-none fixed z-0 will-change-transform"
      style="top:-8vh;left:-14vw;width:55vw;height:55vw;max-width:680px;max-height:680px;
             border-radius:50%;filter:blur(64px);
             background:radial-gradient(circle,rgba(143,227,184,0.13) 0%,transparent 68%);"></div>

    <!-- Blob 2: right-mid teal -->
    <div ref="blob2Ref" aria-hidden="true" class="pointer-events-none select-none fixed z-0 will-change-transform"
      style="top:35vh;right:-16vw;width:48vw;height:48vw;max-width:600px;max-height:600px;
             border-radius:50%;filter:blur(72px);
             background:radial-gradient(circle,rgba(91,191,160,0.10) 0%,transparent 65%);"></div>

    <!-- Blob 3: bottom-center cream -->
    <div ref="blob3Ref" aria-hidden="true" class="pointer-events-none select-none fixed z-0 will-change-transform"
      style="bottom:-20vh;left:15vw;width:60vw;height:60vw;max-width:760px;max-height:760px;
             border-radius:50%;filter:blur(80px);
             background:radial-gradient(circle,rgba(212,240,234,0.16) 0%,transparent 60%);"></div>

    <!-- Watermark tooth — drifts entire page length -->
    <div ref="watermarkRef" aria-hidden="true"
      class="pointer-events-none select-none absolute z-0 will-change-transform"
      style="top:6%;right:-60px;width:260px;opacity:0.055;">
      <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100,20 C70,20 45,45 45,80 C45,110 55,135 50,165 C47,185 60,205 75,195
                 C85,188 88,170 100,170 C112,170 115,188 125,195 C140,205 153,185 150,165
                 C145,135 155,110 155,80 C155,45 130,20 100,20 Z" stroke="#111827" stroke-width="3"
          stroke-linejoin="round" />
      </svg>
    </div>

    <!-- Accent ring 1: top-left, mouse + scroll reactive -->
    <div ref="accentRing1Ref" aria-hidden="true"
      class="pointer-events-none select-none absolute z-0 will-change-transform" style="top:12%;left:3%;width:80px;height:80px;border-radius:50%;
             border:1.5px solid rgba(91,191,160,0.28);opacity:0.65;"></div>

    <!-- Accent square: mid-right -->
    <div ref="accentSquareRef" aria-hidden="true"
      class="pointer-events-none select-none absolute z-0 will-change-transform" style="top:48%;right:4%;width:40px;height:40px;border-radius:8px;
             border:1.5px solid rgba(91,191,160,0.22);opacity:0.5;"></div>

    <!-- Dot grid: lower-left -->
    <div ref="dotGridRef" aria-hidden="true" class="pointer-events-none select-none absolute z-0 will-change-transform"
      style="top:70%;left:5%;">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="8" cy="8" r="2.5" fill="#5bbfa0" opacity="0.30" />
        <circle cx="28" cy="8" r="2.5" fill="#5bbfa0" opacity="0.20" />
        <circle cx="48" cy="8" r="2.5" fill="#5bbfa0" opacity="0.15" />
        <circle cx="8" cy="28" r="2.5" fill="#5bbfa0" opacity="0.20" />
        <circle cx="28" cy="28" r="2.5" fill="#5bbfa0" opacity="0.28" />
        <circle cx="48" cy="28" r="2.5" fill="#5bbfa0" opacity="0.13" />
        <circle cx="8" cy="48" r="2.5" fill="#5bbfa0" opacity="0.13" />
        <circle cx="28" cy="48" r="2.5" fill="#5bbfa0" opacity="0.18" />
        <circle cx="48" cy="48" r="2.5" fill="#5bbfa0" opacity="0.22" />
      </svg>
    </div>

    <!-- Accent ring 2: lower area -->
    <div ref="accentRing2Ref" aria-hidden="true"
      class="pointer-events-none select-none absolute z-0 will-change-transform" style="top:82%;left:8%;width:120px;height:120px;border-radius:50%;
             border:1px solid rgba(91,191,160,0.18);opacity:0.5;"></div>

    <!-- Floating accent ring near hero -->
    <div ref="heroAccentRef" aria-hidden="true"
      class="pointer-events-none select-none absolute z-0 will-change-transform" style="top:8%;right:8%;width:140px;height:140px;border-radius:50%;
             border:1px solid rgba(143,227,184,0.2);opacity:0.6;"></div>

    <HeroSection eyebrow="About Toothsy" title="Gentle care" highlight="people first"
      description="Learn about our mission, specialists, and practical approach to calm, modern dental care." />

    <!-- ════════════════════════════════════════════════════
      ② ABOUT CONTENT — all original HTML preserved exactly
    ════════════════════════════════════════════════════ -->
    <section class="min-h-screen py-10 px-4 relative z-10">
      <div class="max-w-7xl mx-auto">

        <!-- Page Title -->
        <h1 ref="titleRef" class="text-3xl md:text-4xl font-bold text-[#111827] mb-5 text-center will-change-transform">
          About Us
        </h1>

        <!-- Mission Section -->
        <div ref="missionRef" class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-start">

          <!-- Text: slides from left -->
          <div ref="missionTextRef" class="will-change-transform section-reveal-left"
            :class="missionVisible ? 'is-visible' : ''">
            <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
            <p class="mt-4 text-stone-500 text-sm md:text-base leading-relaxed">
              At Northern Heights Dental, people come first. We help each of our patients
              to achieve optimal wellness and health by using a whole body approach to oral
              health. This means not just focusing on cavities, but focusing on:
              cranio-facial development, bite and joint balance, oral flora, proper muscle
              balance/function, and bio-compatibility of dental materials. Great care and
              planning ensures that everything we do helps promote overall health and well being.
            </p>
            <h3 class="text-lg font-bold mt-6 mb-3">
              More Than Anything Else We Love Creating Happy, Healthy Smiles.
            </h3>
            <p class="mt-4 text-stone-500 text-sm md:text-base leading-relaxed">
              We work hard to stay up to date with the most advanced techniques and
              technologies to ensure that our patients receive the best care possible.
            </p>
          </div>

          <!-- Image: slides from right, continuous depth drift -->
          <div ref="missionImgWrapRef"
            class="rounded-2xl overflow-hidden h-64 md:h-100 group relative will-change-transform section-reveal-right"
            :class="missionVisible ? 'is-visible' : ''">
            <!-- parallax layer: oversized vertically so the scroll drift never exposes an edge -->
            <div class="absolute -inset-y-10 inset-x-0 will-change-transform"
              :style="{ transform: `translateY(${missionParallax}px)` }">
              <img ref="missionImgRef" :src="clinicImg" alt="Dentist at work"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform" />
            </div>

            <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full
           transition-transform duration-700 bg-gradient-to-r
           from-transparent via-white/30 to-transparent skew-x-12" />
          </div>
        </div>

        <div ref="specialistsRef" class="bg-[#EFF8FC] -mx-2 px-2 md:px-5 py-10 mb-4">
          <h2 ref="specialistsTitleRef"
            class="text-center text-2xl md:text-3xl font-bold mb-2 will-change-transform fade-up-reveal"
            :class="specialistsVisible ? 'is-visible' : ''">Meet Our Specialists</h2>
          <p class="mt-4 text-stone-500 text-sm md:text-base leading-relaxed text-center mb-8 will-change-transform fade-up-reveal"
            :class="specialistsVisible ? 'is-visible' : ''" style="transition-delay:0.1s;">
            We use only the best quality materials on the market in<br />
            order to provide the best products to our patients.
          </p>

          <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <article v-for="(doctor, i) in doctors" :key="doctor.name" :ref="(el) => setDoctorRef(el, i)" class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl
                     transition-shadow duration-300 will-change-transform doctor-reveal"
              :class="doctorVisible[i] ? 'is-visible' : ''"
              :style="{ transitionDelay: doctorVisible[i] ? `${i * 100}ms` : '0ms' }">
              <div class="relative h-60 overflow-hidden group">
                <img :src="doctor.photo" :alt="doctor.name"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div class="absolute inset-0 bg-[#5bbfa0]/0 group-hover:bg-[#5bbfa0]/25 transition-all duration-500" />
              </div>
              <div class="p-6">
                <h3 class="text-lg font-bold text-gray-900">{{ doctor.name }}</h3>
                <p class="text-xs font-sans font-semibold uppercase tracking-wide text-[#5bbfa0] mt-1">
                  {{ doctor.specialty }}
                </p>
                <p class="mt-4 text-stone-500 text-sm md:text-base leading-relaxed line-clamp-4">
                  {{ doctor.bio }}
                </p>
                <button class="mt-5 bg-[#5bbfa0] text-white rounded-full px-6 py-2.5 text-sm font-sans
                               shadow-md hover:shadow-[#5bbfa0]/50 hover:shadow-lg
                               hover:-translate-y-0.5 transition-all duration-300">
                  Book an appointment
                </button>
              </div>
            </article>
          </div>
        </div>
        <!-- Services -->


        <!-- CTA + Video -->
        <div ref="ctaRef" class="text-center py-16 will-change-transform cta-reveal"
          :class="ctaVisible ? 'is-visible' : ''">
          <h2 class="text-2xl md:text-3xl font-extrabold leading-tight mb-3">
            We're Welcoming New Patients<br />And Can't Wait To Meet You.
          </h2>
          <p class="text-stone-500 text-sm md:text-base leading-relaxed">
            We use only the best quality materials on the market in<br />
            order to provide the best products to our patients.
          </p>
          <div class="mt-8 rounded-xl overflow-hidden h-60 md:h-150 relative">
            <video ref="ctaVideoRef"
              class="absolute inset-0 w-full h-[130%] -top-[15%] object-cover will-change-transform" autoplay loop muted
              playsinline>
              <source src="" type="video/mp4" />
            </video>
          </div>
        </div>

        <!-- Footer -->
        <div class="border-t border-gray-300 pt-6 flex flex-col sm:flex-row
                    justify-between items-center gap-4 font-sans">
          <p class="text-xs text-gray-400 text-center sm:text-left">
            All rights reserved @ uifry.com | Terms and conditions apply!
          </p>
          <nav class="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-700">
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">Blogs</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>

      </div>
    </section>

  </div>
</template>


<script setup>
// ═══════════════════════════════════════════════════════════════
//  ASSETS & CONTENT (unchanged from original)
// ═══════════════════════════════════════════════════════════════
import clinicImg from '~/assets/images/clinic.png'
import drBrentImg from '~/assets/images/dr-brent.png'
import drVashiImg from '~/assets/images/dr-vashi.png'

useHead({
  title: 'About - Toothsy Dental Clinic',
  meta: [{ name: 'description', content: 'Learn about Toothsy Dental Clinic, our mission, specialists, and services.' }]
})

const doctors = [
  {
    name: 'Dr. Sornn Ritheanin',
    specialty: 'General Dentist',
    photo: drBrentImg,
    bio: 'Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures. Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.'
  },
  {
    name: 'Dr. Chheng Mesa',
    specialty: 'Specialist Orthodontic',
    photo: drVashiImg,
    bio: 'Dr. Ashish J. Vashi has been practicing general, cosmetic and implant dentistry in California for over 18 years.'
  },
  {
    name: 'Dr. Sornn Rithornu',
    specialty: 'Prosthodontics',
    photo: drVashiImg,
    bio: 'When it comes to oral surgeons, few can compare to Dr. James Connors.'
  },
]

const services = [
  { title: 'Root Canal Treatment', description: 'Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.' },
  { title: 'Cosmetic Dentist', description: 'Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.' },
  { title: 'Dental Implants', description: "A dental implant is an artificial tooth root that's placed into your jaw to hold a prosthetic tooth or bridge." }
]


// ═══════════════════════════════════════════════════════════════
//  DOM REFS — ambient layer
// ═══════════════════════════════════════════════════════════════
const blob1Ref = ref(null)
const blob2Ref = ref(null)
const blob3Ref = ref(null)
const watermarkRef = ref(null)
const accentRing1Ref = ref(null)
const accentSquareRef = ref(null)
const dotGridRef = ref(null)
const accentRing2Ref = ref(null)
const heroAccentRef = ref(null)

// ═══════════════════════════════════════════════════════════════
//  DOM REFS — hero section (7 independent layers)
// ═══════════════════════════════════════════════════════════════
const heroRef = ref(null)
const videoLayerRef = ref(null)
const videoRef = ref(null)
const overlayRef = ref(null)
const heroFloatARef = ref(null)
const heroFloatBRef = ref(null)
const heroSquareRef = ref(null)
const headingRef = ref(null)
const subRef = ref(null)
const scrollHintRef = ref(null)

// ═══════════════════════════════════════════════════════════════
//  DOM REFS — about content
// ═══════════════════════════════════════════════════════════════
const titleRef = ref(null)
const missionRef = ref(null)
const missionTextRef = ref(null)
const missionImgWrapRef = ref(null)
const missionImgRef = ref(null)
const specialistsRef = ref(null)
const specialistsTitleRef = ref(null)
const servicesRef = ref(null)
const ctaRef = ref(null)
const ctaVideoRef = ref(null)

// Dynamic ref arrays
const doctorEls = ref([])
const serviceCardEls = ref([])
function setDoctorRef(el, i) { doctorEls.value[i] = el }
function setServiceCardRef(el, i) { serviceCardEls.value[i] = el }

// Visibility flags for scroll-reveal
const missionVisible = ref(false)
const specialistsVisible = ref(false)
const ctaVisible = ref(false)
const doctorVisible = reactive(doctors.map(() => false))
const serviceVisible = reactive(services.map(() => false))


// ═══════════════════════════════════════════════════════════════
//  DEVICE DETECTION
// ═══════════════════════════════════════════════════════════════
let prefersReducedMotion = false
let isMobile = false
let intensity = 1.0   // global multiplier, halved on mobile

function detectCapabilities() {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  isMobile = window.matchMedia('(max-width: 768px)').matches
  const isLowPower = (navigator.hardwareConcurrency ?? 8) < 4
  return prefersReducedMotion || isLowPower
}


// ═══════════════════════════════════════════════════════════════
//  MATH UTILITIES
// ═══════════════════════════════════════════════════════════════

/** Clamp n between [a, b] */
const clamp = (n, a, b) => (n < a ? a : n > b ? b : n)

/** Linear interpolation — core of every smooth animation */
const lerp = (a, b, t) => a + (b - a) * t

/**
 * Viewport progress for an element.
 * 0 = center at bottom of viewport (entering)
 * 0.5 = centered in viewport
 * 1 = center at top of viewport (exiting)
 */
function getVP(el) {
  if (!el) return 0.5
  const rect = el.getBoundingClientRect()
  return clamp(1 - (rect.top + rect.height * 0.5) / (window.innerHeight || 1), 0, 1)
}

/** Page scroll progress 0→1 */
function getPageP() {
  const doc = document.documentElement
  const max = doc.scrollHeight - (window.innerHeight || 1)
  return max > 0 ? clamp(window.scrollY / max, 0, 1) : 0
}

/** Hero-specific progress: 0 when hero fills viewport, 1 when scrolled past */
function getHeroP() {
  if (!heroRef.value) return 0
  const rect = heroRef.value.getBoundingClientRect()
  return clamp(-rect.top / (window.innerHeight || 1), 0, 1.4)
}

const missionParallax = ref(0)

const STRENGTH = 0.15    // how much the image drifts per pixel of scroll
const MAX_OFFSET = 30    // px — stay under the 40px buffer from -inset-y-10

const reduceMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function updateMissionParallax() {
  if (reduceMotion || !missionImgWrapRef.value) return
  const rect = missionImgWrapRef.value.getBoundingClientRect()
  const raw = (rect.top + rect.height / 2 - window.innerHeight / 2) * STRENGTH
  missionParallax.value = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, raw))
}

let ticking = false
function onMissionScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => { updateMissionParallax(); ticking = false })
}

onMounted(() => {
  updateMissionParallax()
  window.addEventListener('scroll', onMissionScroll, { passive: true })
  window.addEventListener('resize', onMissionScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onMissionScroll)
  window.removeEventListener('resize', onMissionScroll)
})
// ═══════════════════════════════════════════════════════════════
//  PARALLAX STATE
//  Every animated property has a current (c) + target (t) pair.
//  The RAF loop lerps c→t every frame. One flat object = low GC.
// ═══════════════════════════════════════════════════════════════
const s = {
  // ── Ambient blobs (page-scroll driven) ──
  b1Y: 0, tb1Y: 0, b1X: 0, tb1X: 0,
  b2Y: 0, tb2Y: 0, b2X: 0, tb2X: 0,
  b3Y: 0, tb3Y: 0,

  // ── Watermark ──
  wmY: 0, twmY: 0, wmR: 0, twmR: 0,

  // ── Accent shapes ──
  ar1Y: 0, tar1Y: 0, ar1X: 0, tar1X: 0, ar1R: 0, tar1R: 0,
  asY: 0, tasY: 0, asX: 0, tasX: 0, asR: 0, tasR: 0,
  dgY: 0, tdgY: 0,
  ar2Y: 0, tar2Y: 0, ar2R: 0, tar2R: 0,
  haY: 0, thaY: 0, haR: 0, thaR: 0,  // hero accent ring

  // ── Hero: video layer (0.12x, drift down + zoom) ──
  vidY: 0, tVidY: 0, vidSc: 1.08, tVidSc: 1.08,

  // ── Hero: overlay (0.06x, almost static) ──
  ovY: 0, tOvY: 0,

  // ── Hero: float blob A (0.65x upward + mouse) ──
  faY: 0, tfaY: 0, faX: 0, tfaX: 0,

  // ── Hero: float blob B (0.55x upward) ──
  fbY: 0, tfbY: 0, fbX: 0, tfbX: 0,

  // ── Hero: accent square (counter-rotates) ──
  hsY: 0, thsY: 0, hsR: 0, thsR: 0,

  // ── Hero: heading (0.42x, fades, pinches scale) ──
  hY: 0, thY: 0, hOp: 1, thOp: 1, hSc: 1, thSc: 1,

  // ── Hero: subtext (0.28x, trails heading) ──
  pY: 0, tpY: 0, pOp: 1, tpOp: 1,

  // ── Hero: scroll hint ──
  hiOp: 1, thiOp: 1,

  // ── Mouse (normalized -1…+1) ──
  mX: 0, tmX: 0, mY: 0, tmY: 0,

  // ── About: page title subtle lift ──
  titY: 0, ttitY: 0,

  // ── About: mission image depth drift ──
  miY: 0, tmiY: 0,

  // ── About: CTA video inner parallax ──
  cvY: 0, tcvY: 0,
}


// ═══════════════════════════════════════════════════════════════
//  MOUSE — passive listener, zero DOM reads
// ═══════════════════════════════════════════════════════════════
function onMouseMove(e) {
  if (isMobile) return
  s.tmX = (e.clientX / window.innerWidth - 0.5) * 2   // -1 → +1
  s.tmY = (e.clientY / window.innerHeight - 0.5) * 2
}


// ═══════════════════════════════════════════════════════════════
//  READ — all getBoundingClientRect calls batched here,
//  computed before any DOM writes (prevents layout thrashing)
// ═══════════════════════════════════════════════════════════════
function computeTargets() {
  const pageP = getPageP()
  const heroP = getHeroP()

  // ── Ambient blobs: each direction is unique ──
  s.tb1Y = pageP * -200 * intensity
  s.tb1X = pageP * 50 * intensity + (isMobile ? 0 : s.mX * -18 * intensity)
  s.tb2Y = pageP * 150 * intensity
  s.tb2X = pageP * -70 * intensity + (isMobile ? 0 : s.mX * 14 * intensity)
  s.tb3Y = pageP * -110 * intensity

  // ── Watermark: full page drift ──
  s.twmY = pageP * 1600 * intensity
  s.twmR = pageP * 32 * intensity

  // ── Accent shapes: each rotates differently ──
  s.tar1Y = pageP * -380 * intensity
  s.tar1R = pageP * 60 * intensity
  s.tar1X = isMobile ? 0 : s.mX * -22 * intensity
  s.tasY = pageP * -240 * intensity
  s.tasR = pageP * -50 * intensity
  s.tasX = isMobile ? 0 : s.mX * 16 * intensity
  s.tdgY = pageP * -160 * intensity
  s.tar2Y = pageP * -120 * intensity
  s.tar2R = pageP * 25 * intensity
  s.thaY = pageP * -280 * intensity     // hero accent ring
  s.thaR = pageP * 40 * intensity

  // ── HERO LAYERS ──

  // Video: drifts down slowly + subtle zoom
  s.tVidY = heroP * 80 * intensity
  s.tVidSc = 1.08 + heroP * 0.14 * intensity

  // Overlay: even slower
  s.tOvY = heroP * 36 * intensity

  // Float blob A: upward fast + mouse X
  s.tfaY = heroP * -160 * intensity
  s.tfaX = isMobile ? 0 : s.mX * -18 * intensity

  // Float blob B: upward slightly slower
  s.tfbY = heroP * -130 * intensity
  s.tfbX = isMobile ? 0 : s.mX * 14 * intensity

  // Hero accent square: counter-clockwise rotation
  s.thsY = heroP * -180 * intensity
  s.thsR = heroP * -60 * intensity

  // Heading: fastest text exit, fades + pinches
  s.thY = heroP * -160 * intensity
  s.thOp = clamp(1 - heroP * 1.6, 0, 1)
  s.thSc = clamp(1 - heroP * 0.08, 0.92, 1)

  // Subtext: trails heading
  s.tpY = heroP * -100 * intensity
  s.tpOp = clamp(1 - heroP * 1.85, 0, 1)

  // Scroll hint: vanishes immediately
  s.thiOp = clamp(1 - heroP * 5, 0, 1)

  // ── ABOUT LAYERS ──

  // Page title: subtle lift as page scrolls
  const titP = getVP(titleRef.value)
  s.ttitY = (titP - 0.5) * -60 * intensity

  // Mission image: moves slower than text (depth)
  const miP = getVP(missionImgRef.value)
  s.tmiY = (miP - 0.5) * 55 * intensity

  // CTA video: inner parallax pan
  const cvP = getVP(ctaVideoRef.value)
  s.tcvY = (cvP - 0.5) * -48 * intensity
}


// ═══════════════════════════════════════════════════════════════
//  LERP — distinct ease per layer = distinct physical weight
//  0.032 = extremely inertial  (blobs, video)
//  0.065 = floaty              (accent shapes, hero floats)
//  0.08  = medium              (section images)
//  0.095 = responsive          (hero text)
//  0.09  = direct              (mouse)
// ═══════════════════════════════════════════════════════════════
function interpolateAll() {
  const eBlob = 0.032
  const eWm = 0.038
  const eAcc = 0.065
  const eVid = 0.038
  const eHFlt = 0.060
  const eHTxt = 0.095
  const eImg = 0.08
  const eMouse = 0.09

  // Mouse first (value used in blob targets)
  s.mX = lerp(s.mX, s.tmX, eMouse)
  s.mY = lerp(s.mY, s.tmY, eMouse)

  // Ambient blobs
  s.b1Y = lerp(s.b1Y, s.tb1Y, eBlob); s.b1X = lerp(s.b1X, s.tb1X, eBlob)
  s.b2Y = lerp(s.b2Y, s.tb2Y, eBlob); s.b2X = lerp(s.b2X, s.tb2X, eBlob)
  s.b3Y = lerp(s.b3Y, s.tb3Y, eBlob)

  // Watermark
  s.wmY = lerp(s.wmY, s.twmY, eWm); s.wmR = lerp(s.wmR, s.twmR, eWm)

  // Accent shapes
  s.ar1Y = lerp(s.ar1Y, s.tar1Y, eAcc); s.ar1X = lerp(s.ar1X, s.tar1X, eAcc)
  s.ar1R = lerp(s.ar1R, s.tar1R, eAcc)
  s.asY = lerp(s.asY, s.tasY, eAcc); s.asX = lerp(s.asX, s.tasX, eAcc)
  s.asR = lerp(s.asR, s.tasR, eAcc)
  s.dgY = lerp(s.dgY, s.tdgY, eAcc)
  s.ar2Y = lerp(s.ar2Y, s.tar2Y, eAcc); s.ar2R = lerp(s.ar2R, s.tar2R, eAcc)
  s.haY = lerp(s.haY, s.thaY, eAcc); s.haR = lerp(s.haR, s.thaR, eAcc)

  // Hero video + overlay
  s.vidY = lerp(s.vidY, s.tVidY, eVid)
  s.vidSc = lerp(s.vidSc, s.tVidSc, eVid)
  s.ovY = lerp(s.ovY, s.tOvY, eVid)

  // Hero floating blobs
  s.faY = lerp(s.faY, s.tfaY, eHFlt); s.faX = lerp(s.faX, s.tfaX, eHFlt)
  s.fbY = lerp(s.fbY, s.tfbY, eHFlt); s.fbX = lerp(s.fbX, s.tfbX, eHFlt)

  // Hero accent square
  s.hsY = lerp(s.hsY, s.thsY, eAcc); s.hsR = lerp(s.hsR, s.thsR, eAcc)

  // Hero text
  s.hY = lerp(s.hY, s.thY, eHTxt); s.hOp = lerp(s.hOp, s.thOp, eHTxt)
  s.hSc = lerp(s.hSc, s.thSc, eHTxt)
  s.pY = lerp(s.pY, s.tpY, eHTxt); s.pOp = lerp(s.pOp, s.tpOp, eHTxt)
  s.hiOp = lerp(s.hiOp, s.thiOp, eHTxt)

  // About content
  s.titY = lerp(s.titY, s.ttitY, eImg)
  s.miY = lerp(s.miY, s.tmiY, eImg)
  s.cvY = lerp(s.cvY, s.tcvY, eImg)
}


// ═══════════════════════════════════════════════════════════════
//  WRITE — only transform + opacity. Never top/left.
//  translate3d() forces GPU composite layer on every element.
// ═══════════════════════════════════════════════════════════════
function applyToDOM() {
  // Ambient blobs
  if (blob1Ref.value)
    blob1Ref.value.style.transform = `translate3d(${s.b1X}px,${s.b1Y}px,0)`
  if (blob2Ref.value)
    blob2Ref.value.style.transform = `translate3d(${s.b2X}px,${s.b2Y}px,0)`
  if (blob3Ref.value)
    blob3Ref.value.style.transform = `translate3d(0,${s.b3Y}px,0)`

  // Watermark
  if (watermarkRef.value)
    watermarkRef.value.style.transform = `translate3d(0,${s.wmY}px,0) rotate(${s.wmR}deg)`

  // Accent shapes
  if (accentRing1Ref.value)
    accentRing1Ref.value.style.transform = `translate3d(${s.ar1X}px,${s.ar1Y}px,0) rotate(${s.ar1R}deg)`
  if (accentSquareRef.value)
    accentSquareRef.value.style.transform = `translate3d(${s.asX}px,${s.asY}px,0) rotate(${s.asR}deg)`
  if (dotGridRef.value)
    dotGridRef.value.style.transform = `translate3d(0,${s.dgY}px,0)`
  if (accentRing2Ref.value)
    accentRing2Ref.value.style.transform = `translate3d(0,${s.ar2Y}px,0) rotate(${s.ar2R}deg)`
  if (heroAccentRef.value)
    heroAccentRef.value.style.transform = `translate3d(0,${s.haY}px,0) rotate(${s.haR}deg)`

  // Hero: video + overlay
  if (videoLayerRef.value)
    videoLayerRef.value.style.transform = `translate3d(0,${s.vidY}px,0) scale(${s.vidSc})`
  if (overlayRef.value)
    overlayRef.value.style.transform = `translate3d(0,${s.ovY}px,0)`

  // Hero: floating blobs
  if (heroFloatARef.value)
    heroFloatARef.value.style.transform = `translate3d(${s.faX}px,${s.faY}px,0)`
  if (heroFloatBRef.value)
    heroFloatBRef.value.style.transform = `translate3d(${s.fbX}px,${s.fbY}px,0)`

  // Hero: accent square
  if (heroSquareRef.value)
    heroSquareRef.value.style.transform = `translate3d(0,${s.hsY}px,0) rotate(${s.hsR}deg)`

  // Hero: heading
  if (headingRef.value) {
    headingRef.value.style.transform = `translate3d(0,${s.hY}px,0) scale(${s.hSc})`
    headingRef.value.style.opacity = s.hOp
  }

  // Hero: subtext
  if (subRef.value) {
    subRef.value.style.transform = `translate3d(0,${s.pY}px,0)`
    subRef.value.style.opacity = s.pOp
  }

  // Hero: scroll hint
  if (scrollHintRef.value)
    scrollHintRef.value.style.opacity = s.hiOp

  // About: page title
  if (titleRef.value)
    titleRef.value.style.transform = `translate3d(0,${s.titY}px,0)`

  // About: mission image
  if (missionImgRef.value)
    missionImgRef.value.style.transform = `translate3d(0,${s.miY}px,0)`

  // About: CTA video
  if (ctaVideoRef.value)
    ctaVideoRef.value.style.transform = `translate3d(0,${s.cvY}px,0)`
}


// ═══════════════════════════════════════════════════════════════
//  MAIN RAF LOOP — strict READ → LERP → WRITE, zero thrashing
// ═══════════════════════════════════════════════════════════════
let rafId = null

function tick() {
  computeTargets()  // READ   — all BoundingClientRect calls
  interpolateAll()  // LERP   — pure math, zero DOM access
  applyToDOM()      // WRITE  — transform + opacity only
  rafId = requestAnimationFrame(tick)
}


// ═══════════════════════════════════════════════════════════════
//  SCROLL REVEAL — IntersectionObserver
//  Different CSS animation class per section = every section unique
// ═══════════════════════════════════════════════════════════════
let revealObserver = null

function setupReveal() {
  const targets = [
    { el: missionRef.value, cb: () => { missionVisible.value = true } },
    { el: specialistsRef.value, cb: () => { specialistsVisible.value = true } },
    { el: ctaRef.value, cb: () => { ctaVisible.value = true } },
    ...doctorEls.value.filter(Boolean).map((el, i) => ({
      el, cb: () => { doctorVisible[i] = true }
    })),
    ...serviceCardEls.value.filter(Boolean).map((el, i) => ({
      el, cb: () => { serviceVisible[i] = true }
    })),
  ].filter(t => t.el)

  if (prefersReducedMotion) { targets.forEach(t => t.cb()); return }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const match = targets.find(t => t.el === entry.target)
        if (match) { match.cb(); revealObserver.unobserve(entry.target) }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  )
  targets.forEach(t => revealObserver.observe(t.el))
}


// ═══════════════════════════════════════════════════════════════
//  LIFECYCLE
// ═══════════════════════════════════════════════════════════════
onMounted(() => {
  const shouldSkip = detectCapabilities()

  if (shouldSkip) {
    // Reduced-motion: show everything instantly, no RAF
    if (prefersReducedMotion) videoRef.value?.pause?.()
    missionVisible.value = true
    specialistsVisible.value = true
    ctaVisible.value = true
    doctors.forEach((_, i) => { doctorVisible[i] = true })
    services.forEach((_, i) => { serviceVisible[i] = true })
    return
  }

  intensity = isMobile ? 0.38 : 1.0

  nextTick(() => {
    setupReveal()
    if (!isMobile)
      window.addEventListener('mousemove', onMouseMove, { passive: true })
    rafId = requestAnimationFrame(tick)
  })
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('mousemove', onMouseMove)
  if (revealObserver) revealObserver.disconnect()
})
</script>


<style scoped>
/* ── Hero: scroll hint bounce ─────────────────────────────── */
.scroll-bounce {
  animation: hint-bounce 1.8s ease-in-out infinite;
}

@keyframes hint-bounce {

  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

/* ── Mission: text ← left, image → right ─────────────────── */
.section-reveal-left {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-36px) translateY(14px);
  transition: opacity .9s cubic-bezier(.22, 1, .36, 1),
    transform .9s cubic-bezier(.22, 1, .36, 1),
    filter .7s cubic-bezier(.22, 1, .36, 1);
}

.section-reveal-left.is-visible {
  opacity: 1;
  transform: none;
  filter: blur(0);
}

.section-reveal-right {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(36px) translateY(14px);
  transition: opacity .9s .13s cubic-bezier(.22, 1, .36, 1),
    transform .9s .13s cubic-bezier(.22, 1, .36, 1),
    filter .7s .13s cubic-bezier(.22, 1, .36, 1);
}

.section-reveal-right.is-visible {
  opacity: 1;
  transform: none;
  filter: blur(0);
}

/* ── Specialists: pure fade-up (different from mission) ───── */
.fade-up-reveal {
  opacity: 0;
  filter: blur(4px);
  transform: translateY(28px);
  transition: opacity .8s cubic-bezier(.22, 1, .36, 1),
    transform .8s cubic-bezier(.22, 1, .36, 1),
    filter .65s cubic-bezier(.22, 1, .36, 1);
}

.fade-up-reveal.is-visible {
  opacity: 1;
  transform: none;
  filter: blur(0);
}

/* ── Doctor rows: staggered slide-up + scale ──────────────── */
.doctor-reveal {
  opacity: 0;
  filter: blur(5px);
  transform: translateY(40px) scale(0.98);
  transition: opacity .85s cubic-bezier(.22, 1, .36, 1),
    transform .85s cubic-bezier(.22, 1, .36, 1),
    filter .7s cubic-bezier(.22, 1, .36, 1);
}

.doctor-reveal.is-visible {
  opacity: 1;
  transform: none;
  filter: blur(0);
}

/* ── Service cards: scale from slightly below ─────────────── */
.service-card-reveal {
  opacity: 0;
  filter: blur(6px);
  transform: translateY(44px) scale(0.95);
  transition: opacity .8s cubic-bezier(.22, 1, .36, 1),
    transform .8s cubic-bezier(.22, 1, .36, 1),
    filter .65s cubic-bezier(.22, 1, .36, 1);
}

.service-card-reveal.is-visible {
  opacity: 1;
  transform: none;
  filter: blur(0);
}

/* ── CTA: most dramatic scale + fade ─────────────────────── */
.cta-reveal {
  opacity: 0;
  filter: blur(5px);
  transform: translateY(40px) scale(0.97);
  transition: opacity .9s cubic-bezier(.22, 1, .36, 1),
    transform .9s cubic-bezier(.22, 1, .36, 1),
    filter .75s cubic-bezier(.22, 1, .36, 1);
}

.cta-reveal.is-visible {
  opacity: 1;
  transform: none;
  filter: blur(0);
}

/* ── Reduced-motion: everything instant ───────────────────── */
@media (prefers-reduced-motion: reduce) {

  .scroll-bounce,
  .section-reveal-left,
  .section-reveal-right,
  .fade-up-reveal,
  .doctor-reveal,
  .service-card-reveal,
  .cta-reveal {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
    transition: none !important;
  }
}

/* ── GPU layer hint ───────────────────────────────────────── */
.will-change-transform {
  will-change: transform;
}
</style>
