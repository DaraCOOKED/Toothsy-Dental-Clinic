<template>
  <div class="relative isolate body-font bg-[#EFF8FC] text-[#111827]">

    <!-- Signature ambient watermark (same motif as Home, mirrored to the left this time) -->
    <div
      ref="watermarkRef"
      aria-hidden="true"
      class="pointer-events-none select-none absolute -left-16 top-32 z-0 w-[260px] md:w-[400px] opacity-[0.06] will-change-transform"
    >
      <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100,20 C70,20 45,45 45,80 C45,110 55,135 50,165 C47,185 60,205 75,195 C85,188 88,170 100,170 C112,170 115,188 125,195 C140,205 153,185 150,165 C145,135 155,110 155,80 C155,45 130,20 100,20 Z"
          stroke="#111827" stroke-width="3" stroke-linejoin="round"
        />
      </svg>
    </div>

    <!-- ═══════════════════ HERO ═══════════════════ -->
    <section class="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

      <div class="hero-about-enter order-2 md:order-1">
        <span class="inline-block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#1f9d63] mb-4">
          About Toothsy
        </span>
        <h1 class="font-display text-[2.1rem] md:text-5xl lg:text-[3.1rem] font-bold leading-[1.1] tracking-tight">
          A dental clinic built around<br class="hidden md:block"> how it feels to sit in the chair
        </h1>
        <p class="mt-5 text-stone-500 text-[0.95rem] leading-relaxed max-w-md">
          Toothsy started with one idea: checkups shouldn't be something you put off.
          Every room, every appointment, and every dentist here is built around
          making that true.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4">
         
         
          <NuxtLink
            to="/book-appointment"
        
            rel="noopener noreferrer"
            class="inline-block bg-[#6BCE9F] hover:bg-[#036533] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors duration-200"
          >Book a Visit</NuxtLink>
        </div>
      </div>

      <div
        ref="heroVisualRef"
        class="relative order-1 md:order-2 h-[330px] md:h-[440px]"
        @mousemove="handleHeroMouseMove"
        @mouseleave="handleHeroMouseLeave"
      >
        <div ref="heroDotsRef" aria-hidden="true" class="absolute -right-2 top-0 z-20 will-change-transform">
          <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
            <circle cx="10" cy="10" r="5" fill="#f4b8b8" />
            <circle cx="34" cy="6" r="3.5" fill="#9fe0d4" />
            <circle cx="50" cy="24" r="6" fill="#6BCE9F" opacity="0.55" />
            <circle cx="16" cy="40" r="4" fill="#9fe0d4" />
          </svg>
        </div>

        <div
          ref="heroBlobRef"
          class="absolute inset-[6%_2%_4%_8%] md:inset-[5%_-3%_4%_10%] bg-[#d4f0ea] rounded-[2.5rem] will-change-transform z-0"
        ></div>

        <img
          ref="heroImgRef"
          class="absolute inset-0 z-10 w-[100%] h-[86%] mx-auto mt-[6%] object-cover object-top rounded-[2rem] will-change-transform"
          src="/homepage-viproom.png"
          alt="Toothsy dental team in the clinic"
        />

        <div ref="heroBadgeRef" class="absolute left-1 md:-left-3 bottom-3 md:bottom-8 z-20 will-change-transform">
          <div class="badge-float bg-[#6BCE9F] text-white rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.18)] flex items-center gap-2.5">
            <span class="flex-shrink-0 w-6 h-6 rounded-full bg-white/25 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6.5L4.5 9L10 3" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span class="text-[0.7rem] font-semibold leading-tight">Trusted by families<br>across the city</span>
          </div>
        </div>
      </div>
      
    </section>
   

<section class="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-14 ">
  <div class="text-center mb-10">
    <span class="inline-block text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#1f9d63] mb-3">Our services</span>
    <h2 class="font-display text-2xl md:text-[1.9rem] font-bold tracking-tight max-w-md mx-auto leading-[1.2]">
      Your Smile Is Our Matter
    </h2>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[860px] mx-auto">
    <div
      v-for="svc in servicesPreview"
      :key="svc.title"
      class="rounded-[24px] overflow-hidden transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
      :class="svc.bg"
      @click="openServiceModal(svc)"
    >
      <div class="w-full h-[168px] overflow-hidden" :class="svc.thumbBg">
        <img
          :src="svc.image"
          :alt="svc.title"
          class="block w-full h-full object-cover object-center"
        />
      </div>
      <div class="px-[18px] pt-[18px] pb-[22px]">
        <div class="flex items-center justify-between mb-3">
          <span class="bg-[#111827] text-white text-[0.67rem] font-bold px-[13px] py-[5px] rounded-full">{{ svc.badge }}</span>
          <span class="font-display text-[0.78rem] font-bold text-[#036533]">{{ svc.price }}</span>
        </div>
        <h3 class="font-display text-base font-bold text-[#064e35] uppercase tracking-[0.03em] leading-tight mb-1.5">{{ svc.title }}</h3>
        <p class="text-[0.77rem] text-[#2d6b52] leading-relaxed">{{ svc.desc }}</p>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-center gap-4 mt-8">
    <NuxtLink
      to="/service"
      class="inline-flex items-center gap-1.5 border-2 border-[#6BCE9F] text-[#036533] font-semibold text-sm px-6 py-3 rounded-full transition-colors hover:bg-[#dff0e0] hover:border-[#036533]"
    >
      See all services
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
    </NuxtLink>
    <NuxtLink
      to="/book-appointment"
      rel="noopener noreferrer"
      class="inline-block bg-[#6BCE9F] hover:bg-[#036533] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors duration-200"
    >Book an appointment</NuxtLink>
  </div>

  <ServiceDetailModal
    v-model:open="isModalOpen"
    :service="selectedService"
  />
</section>




  
<!-- ═══════════════════ OUR STORY — horizontal timeline, heavy parallax ═══════════════════ -->
<section class="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-10 md:py-20">
  <div class="text-center mb-14 md:mb-16">
    <span class="inline-block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#1f9d63] mb-3">
      Our Story
    </span>

    <h2 class="font-display text-2xl md:text-[2rem] font-bold tracking-tight max-w-lg mx-auto">
      A new clinic dedicated to healthier, happier smiles
    </h2>

    <p class="mt-4 text-stone-500 max-w-2xl mx-auto leading-relaxed">
      Since opening in November 2025, Toothsy Clinic has focused on providing
      gentle, modern, and patient-first dental care in a welcoming environment.
    </p>
  </div>

  <div
    ref="storyVisualRef"
    class="relative hidden md:block h-[300px] will-change-transform"
    @mousemove="handleStoryMouseMove"
    @mouseleave="handleStoryMouseLeave"
  >
    <!-- the connecting line — stretches horizontally as the section scrolls through view -->
    <div
      ref="storyLineRef"
      class="absolute left-0 right-0 top-1/2 h-[2px] bg-[#1f9d63]/25 -translate-y-1/2 will-change-transform"
    ></div>

    <div class="absolute inset-0 grid grid-cols-3">
      <div
        v-for="(item, i) in storyItems"
        :key="item.year"
        :ref="(el) => setTimelineRef(el, i)"
        class="relative transition-all duration-700 ease-out"
        :class="timelineVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >

        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <span
            :ref="(el) => setStoryDotRef(el, i)"
            class="relative block w-3.5 h-3.5 will-change-transform"
          >
            <span class="dot-pulse absolute inset-0 rounded-full bg-[#1f9d63] ring-4 ring-[#EFF8FC]"></span>
          </span>
        </div>
        <div
          v-if="i % 2 === 1"
          class="absolute left-1/2 -translate-x-1/2 bottom-[calc(50%+24px)] w-[230px] text-center"
        >
          <div :ref="(el) => setStoryLabelRef(el, i)" class="will-change-transform">
            <p class="text-[0.78rem] text-stone-500 leading-relaxed mb-2">{{ item.desc }}</p>
            <h3 class="font-display text-lg md:text-xl font-bold text-[#111827] leading-tight mb-1">{{ item.title }}</h3>
            <p class="text-[0.8rem] font-bold text-[#1f9d63]">{{ item.year }}</p>
          </div>
        </div>

        <!-- LABEL ANCHOR (even items, below the line). Reading top-to-bottom: year, title, desc -->
        <div
          v-else
          class="absolute left-1/2 -translate-x-1/2 top-[calc(50%+24px)] w-[230px] text-center"
        >
          <div :ref="(el) => setStoryLabelRef(el, i)" class="will-change-transform">
            <p class="text-[0.8rem] font-bold text-[#1f9d63] mb-1">{{ item.year }}</p>
            <h3 class="font-display text-lg md:text-xl font-bold text-[#111827] leading-tight mb-2">{{ item.title }}</h3>
            <p class="text-[0.78rem] text-stone-500 leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="md:hidden space-y-7">
    <div
      v-for="item in storyItems"
      :key="'m-' + item.year"
      class="flex items-start gap-3"
    >
      <span class="mt-2.5 w-2 h-2 rounded-full bg-[#1f9d63] flex-shrink-0"></span>
      <div>
        <h3 class="font-display text-lg font-bold text-[#111827] mb-1.5">
          {{ item.year }} — {{ item.title }}
        </h3>
        <p class="text-[0.85rem] text-stone-500 leading-relaxed">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</section>



    <!-- ═══════════════════ TEAM ═══════════════════ -->
    <section class="relative z-10 bg-[#d4f0ea] py-16 md:py-20 flex justify-center">
      <div class="max-w-6xl mx-auto px-6 md:px-10">
        <div class="text-center mb-12">
          <span class="inline-block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#036533] mb-3">Meet the team</span>
          <h2 class="font-display text-2xl md:text-[2rem] font-bold tracking-tight">The dentists you'll actually see</h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          <div
            v-for="(m, i) in team"
            :key="m.name"
            :ref="(el) => setTeamRef(el, i)"
            class="group transition-all duration-700 ease-out"
            :class="teamVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: teamVisible[i] ? `${i * 90}ms` : '0ms' }"
          >
            <div class="overflow-hidden rounded-2xl mb-3">
              <img
                :src="m.img"
                :alt="m.alt"
                class="w-full h-[170px] md:h-[210px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 class="font-display text-sm md:text-base font-bold">{{ m.name }}</h3>
            <p class="text-[0.75rem] text-stone-600 mt-0.5">{{ m.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ CTA BANNER ═══════════════════ -->
    <section
      ref="ctaSectionRef"
      class="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-24 text-center transition-all duration-700 ease-out"
      :class="ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <h2 class="font-display text-2xl md:text-[2.1rem] font-bold leading-[1.2] tracking-tight mb-3">
        Come see the clinic before you book anything
      </h2>
      <p class="text-[0.9rem] text-stone-500 leading-relaxed max-w-lg mx-auto mb-10">
        A short visit, no obligation — meet the team and see the rooms for yourself.
      </p>

      <div class="relative max-w-3xl mx-auto rounded-[2.5rem] overflow-hidden h-[260px] md:h-[320px]">
        <Transition name="cta-fade">
          <img
            :key="ctaImages[currentCtaIndex].src"
            :src="ctaImages[currentCtaIndex].src"
            :alt="ctaImages[currentCtaIndex].alt"
            class="absolute inset-0 w-full h-[140%] -top-[20%] object-cover"
          />
        </Transition>
      </div>

      <NuxtLink
        to="/book-appointment"
        rel="noopener noreferrer"
        class="inline-block mt-8 bg-[#6BCE9F] hover:bg-[#036533] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors duration-200"
      >Book an Appointment</NuxtLink>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const ctaImages = [
  {
    src: "frontmain.jpg",
    alt: "CTA Image 1",
  },
  {
    src: "imgsilde1.jpg",
    alt: "CTA Image 2",
  },
  {
    src: "imgsilde2.jpg",
    alt: "CTA Image 3",
  },
];

const currentCtaIndex = ref(0);

/* ---------- content ---------- */
const stats = [
  { value: 15, suffix: '+', label: 'Years in practice' },
  { value: 12000, suffix: '+', label: 'Smiles treated' },
  { value: 98, suffix: '%', label: 'Patient satisfaction' },
  { value: 6, suffix: '', label: 'Specialist dentists' }
]

const storyItems = [
  {
    year: '27 Nov 2025',
    title: 'Our doors officially opened',
    desc: 'Toothsy Clinic welcomed its very first patients with a commitment to gentle, modern, and personalized dental care.'
  },
  {
    year: 'Early 2026',
    title: 'Growing one smile at a time',
    desc: 'We expanded our services and continued improving every patient experience through quality treatment and modern equipment.'
  },
  {
    year: 'Today',
    title: 'The journey has just begun',
    desc: "We're proud to continue welcoming new patients every day and look forward to growing together with our community."
  }
]

const values = [
  {
    title: 'Plans built around you',
    desc: 'No generic treatment list — we map out what your teeth actually need and what fits your schedule.',
    bg: 'bg-[#dff0e0]',
    span: 'md:col-span-2',
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f9d63" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 9h6M9 13l1.5 1.5L15 11"/></svg>`
  },
  {
    title: 'Sterile, every time',
    desc: 'Every instrument is sterilised between patients, no exceptions.',
    bg: 'bg-white',
    span: 'md:col-span-1',
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f9d63" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>`
  },
  {
    title: 'Clear pricing upfront',
    desc: 'You see the full cost before treatment starts, never after.',
    bg: 'bg-[#d4f0ea]',
    span: 'md:col-span-1',
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f9d63" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 13.5L13 21l-9-9 7.5-7.5H20.5v9z"/><circle cx="15.5" cy="8.5" r="1.2" fill="#1f9d63" stroke="none"/></svg>`
  },
  {
    title: 'Gentle with nervous patients',
    desc: 'We slow down, explain every step, and stop the moment you ask us to.',
    bg: 'bg-[#f4b8b8]/45',
    span: 'md:col-span-2',
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f9d63" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
  },
  {
    title: 'Same-week appointments',
    desc: 'Most patients get seen within the week they call, not the month.',
    bg: 'bg-[#dff0e0]',
    span: 'md:col-span-2',
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f9d63" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/><circle cx="8" cy="14" r="1" fill="#1f9d63" stroke="none"/><circle cx="12" cy="14" r="1" fill="#1f9d63" stroke="none"/></svg>`
  }
]

const servicesPreview = [
  {
    badge: 'General', 
    bg: 'bg-[#d4f0ea]', thumbBg: 'bg-[#c0e8de]',
    title: 'Tooth Cleaning',
    desc: 'A full examination, scale, and polish — the foundation of every healthy smile.',
    price: 'From $25',
    image: '/clean-teeth.jpeg',
    includes: ['Full examination', 'Scale and polish', 'Oral health check'],
    link: true
  },
  {
    badge: 'Cosmetic',
    bg: 'bg-[#c5eae1]', thumbBg: 'bg-[#b0e0d5]',
    title: 'Teeth Whitening',
    desc: 'Professional-grade whitening that works in a single visit — safe, even, and lasting.',
    price: 'From $80',
    image: '/teeth-whitening.webp',
    includes: ['Shade consultation', 'Single-visit whitening', 'Aftercare tips'],
    link: true
  },
  {
    badge: 'Restorative', 
    bg: 'bg-[#dff0e0]', thumbBg: 'bg-[#cde8ce]',
    title: 'Dental Filling',
    desc: 'Tooth-coloured composite fillings that blend in and hold up — no silver in sight.',
    price: 'From $60',
    image: '/dental-filling.jpg',
    includes: ['Decay removal', 'Tooth-coloured composite', 'Bite check'],
    link: true
  },
]

const team = [
  { name: 'Dr. Sornn Rithean', role: 'General Dentist', img: '/team/dr-1.png', alt: 'Dr. SOKThea Liyo, Orthodontics specialist' },
  { name: 'Dr. Chheng Mesa', role: 'Specialist Orthodontic', img: '/team/dr-2.png', alt: 'Dr. Channary Pich, Endodontics and Root Canal specialist' },
  { name: 'Dr. Sornn Rithornu', role: 'Prosthodontics', img: '/team/dr-3.png', alt: 'Dr. Vibol Heng, Family and Pediatric Dentistry specialist' },
]

// Single source of truth for the CTA slideshow timer.
let ctaSlideInterval = null

function setupCtaSlideshow() {
  ctaSlideInterval = setInterval(() => {
    currentCtaIndex.value = (currentCtaIndex.value + 1) % ctaImages.length
  }, 5000)
}

function stopCtaSlideshow() {
  if (ctaSlideInterval) {
    clearInterval(ctaSlideInterval)
    ctaSlideInterval = null
  }
}

// State for the click-to-open popup on the homepage cards above
const isModalOpen = ref(false)
const selectedService = ref(null)
function openServiceModal(svc) {
  selectedService.value = svc
  isModalOpen.value = true
}

let prefersReducedMotion = false

/* ---------- helpers ---------- */
function clamp(n, min, max) { return Math.min(max, Math.max(min, n)) }
function lerp(a, b, t) { return a + (b - a) * t }

/* ---------- scroll reveal (timeline / bento / team / cta) + stats trigger ---------- */
const timelineEls = ref([])
const timelineVisible = reactive(storyItems.map(() => false))
function setTimelineRef(el, i) { timelineEls.value[i] = el }

const bentoEls = ref([])
const bentoVisible = reactive(values.map(() => false))
function setBentoRef(el, i) { bentoEls.value[i] = el }

const teamEls = ref([])
const teamVisible = reactive(team.map(() => false))
function setTeamRef(el, i) { teamEls.value[i] = el }

const statsSectionRef = ref(null)
const statValues = reactive(stats.map(() => 0))
const statsAnimated = ref(false)
let statsRafId = null

const ctaSectionRef = ref(null)
const ctaVisible = ref(false)

let observer = null

function animateStats() {
  if (statsAnimated.value) return
  statsAnimated.value = true
  const duration = 1400
  const start = performance.now()
  function step(now) {
    const t = clamp((now - start) / duration, 0, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    stats.forEach((s, i) => { statValues[i] = Math.round(s.value * eased) })
    if (t < 1) statsRafId = requestAnimationFrame(step)
  }
  statsRafId = requestAnimationFrame(step)
}

function setupReveal() {
  const targets = [
    ...timelineEls.value.map((el, i) => ({ el, set: (val) => (timelineVisible[i] = val) })),
    ...bentoEls.value.map((el, i) => ({ el, set: (val) => (bentoVisible[i] = val) })),
    ...teamEls.value.map((el, i) => ({ el, set: (val) => (teamVisible[i] = val) })),
    { el: ctaSectionRef.value, set: (val) => (ctaVisible.value = val) },
    { el: statsSectionRef.value, set: () => animateStats() }
  ].filter((t) => t.el)

  if (prefersReducedMotion) {
    targets.forEach((t) => t.set(true))
    stats.forEach((s, i) => { statValues[i] = s.value })
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const match = targets.find((t) => t.el === entry.target)
        if (match) {
          match.set(true)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
  )

  targets.forEach((t) => observer.observe(t.el))
}

/* ---------- parallax (one shared rAF loop) ---------- */
const watermarkRef = ref(null)
const heroVisualRef = ref(null)
const heroBlobRef = ref(null)
const heroImgRef = ref(null)
const heroBadgeRef = ref(null)
const heroDotsRef = ref(null)
const ctaImgRef = ref(null)
const ctaIconRef = ref(null)

// Our Story timeline — dedicated parallax refs.
// Note: these refs point at the INNER moving elements only. The outer anchor divs
// in the template (left-1/2, -translate-x-1/2, etc.) handle static centering and
// are never referenced here, so JS can't ever knock the dot off-center from its label.
const storyVisualRef = ref(null)   // outer wrapper: gets the mouse-tilt
const storyLineRef = ref(null)     // the connecting line: gets a scroll-driven stretch
const storyDotEls = ref([])        // per-item dot (inner span — the anchor div wrapping it is untouched)
const storyLabelEls = ref([])      // per-item label block (inner div — its anchor wrapper is untouched)
function setStoryDotRef(el, i) { storyDotEls.value[i] = el }
function setStoryLabelRef(el, i) { storyLabelEls.value[i] = el }

const w = { y: 0, ty: 0, rot: 0, trot: 0 }
const heroImg = { y: 0, ty: 0 }
const tilt = { rx: 0, ry: 0, trx: 0, tryY: 0 }
const storyLine = { scale: 1 }
const storyTilt = { rx: 0, ry: 0, trx: 0, tryY: 0 }

let parallaxItems = []
let storyDotItems = []
let storyLabelItems = []
let rafId = null

function setupParallax() {
  parallaxItems = [
    { el: heroBlobRef.value, strength: 14, baseRotate: 0 },
    { el: heroBadgeRef.value, strength: 30, invert: true },
    { el: heroDotsRef.value, strength: 42 },
    { el: ctaImgRef.value, strength: 30 },
    { el: ctaIconRef.value, strength: 46, invert: true }
  ].filter((item) => item.el)

  // dots drift the same direction as their label, just with less travel
  storyDotItems = storyDotEls.value
    .map((el, i) => ({ el, dirY: i % 2 === 1 ? -1 : 1 }))
    .filter((item) => item.el)

  // labels fan outward from the line as the section scrolls through the viewport:
  // above-the-line item rises, below-the-line items sink, and the two outer items
  // also drift sideways in opposite directions for the "fan" effect
  storyLabelItems = storyLabelEls.value
    .map((el, i) => ({
      el,
      dirY: i % 2 === 1 ? -1 : 1,
      dirX: i === 0 ? -1 : i === 2 ? 1 : 0
    }))
    .filter((item) => item.el)
}

function handleHeroMouseMove(e) {
  if (prefersReducedMotion || !heroVisualRef.value) return
  const rect = heroVisualRef.value.getBoundingClientRect()
  const relX = (e.clientX - rect.left) / rect.width - 0.5
  const relY = (e.clientY - rect.top) / rect.height - 0.5
  tilt.trx = relY * -7
  tilt.tryY = relX * 7
}

function handleHeroMouseLeave() {
  tilt.trx = 0
  tilt.tryY = 0
}

function handleStoryMouseMove(e) {
  if (prefersReducedMotion || !storyVisualRef.value) return
  const rect = storyVisualRef.value.getBoundingClientRect()
  const relX = (e.clientX - rect.left) / rect.width - 0.5
  const relY = (e.clientY - rect.top) / rect.height - 0.5
  storyTilt.trx = relY * -6
  storyTilt.tryY = relX * 8
}

function handleStoryMouseLeave() {
  storyTilt.trx = 0
  storyTilt.tryY = 0
}

function tick() {
  const vh = window.innerHeight || 1

  // page-level watermark drift
  const doc = document.documentElement
  const maxScroll = doc.scrollHeight - vh
  const pageProgress = maxScroll > 0 ? clamp(window.scrollY / maxScroll, 0, 1) : 0
  w.ty = pageProgress * 1100
  w.trot = pageProgress * -26
  w.y = lerp(w.y, w.ty, 0.08)
  w.rot = lerp(w.rot, w.trot, 0.08)
  if (watermarkRef.value) {
    watermarkRef.value.style.transform = `translate3d(0, ${w.y}px, 0) rotate(${w.rot}deg)`
  }

  // hero image: depth drift + mouse-tilt, combined into one transform
  if (heroImgRef.value) {
    const rect = heroImgRef.value.getBoundingClientRect()
    const centerY = rect.top + rect.height / 2
    const progress = clamp(1 - centerY / vh, 0, 1)
    heroImg.ty = (progress - 0.5) * 24 * 2
    heroImg.y = lerp(heroImg.y, heroImg.ty, 0.1)
    tilt.rx = lerp(tilt.rx, tilt.trx, 0.08)
    tilt.ry = lerp(tilt.ry, tilt.tryY, 0.08)
    heroImgRef.value.style.transform =
      `translate3d(0, ${heroImg.y}px, 0) perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
  }

  // generic depth-drift items (blob, badge, dots, cta image, cta icon)
  parallaxItems.forEach((item) => {
    const rect = item.el.getBoundingClientRect()
    const centerY = rect.top + rect.height / 2
    const progress = clamp(1 - centerY / vh, 0, 1)
    const dir = item.invert ? -1 : 1
    item.ty = (progress - 0.5) * item.strength * 2 * dir
    item.y = lerp(item.y ?? 0, item.ty, 0.1)
    item.el.style.transform = `translate3d(0, ${item.y}px, 0) rotate(${item.baseRotate || 0}deg)`
  })

  // Our Story — connecting line stretches as the section scrolls through view
  if (storyLineRef.value) {
    const rect = storyLineRef.value.getBoundingClientRect()
    const centerY = rect.top + rect.height / 2
    const progress = clamp(1 - centerY / vh, 0, 1)
    const scaleTarget = 0.86 + progress * 0.26
    storyLine.scale = lerp(storyLine.scale, scaleTarget, 0.08)
    storyLineRef.value.style.transform = `scaleX(${storyLine.scale})`
  }

  // Our Story — dots bounce off the line and swell slightly at the extremes.
  // No -50%/centering here anymore — the wrapping anchor div in the template already
  // centers this span, so this transform is a pure delta on top of that fixed position.
  storyDotItems.forEach((item) => {
    const rect = item.el.getBoundingClientRect()
    const centerY = rect.top + rect.height / 2
    const progress = clamp(1 - centerY / vh, 0, 1)
    const depth = (progress - 0.5) * 2
    item.ty = depth * 16 * item.dirY
    item.ts = 1 + Math.abs(depth) * 0.3
    item.y = lerp(item.y ?? 0, item.ty, 0.12)
    item.sc = lerp(item.sc ?? 1, item.ts, 0.12)
    item.el.style.transform = `translate3d(0, ${item.y}px, 0) scale(${item.sc})`
  })

  // Our Story — labels fan out from the line: the strongest movement in the section.
  // Same deal — the anchor div already centers this, so this is a pure delta.
  storyLabelItems.forEach((item) => {
    const rect = item.el.getBoundingClientRect()
    const centerY = rect.top + rect.height / 2
    const progress = clamp(1 - centerY / vh, 0, 1)
    const depth = (progress - 0.5) * 2
    item.ty = depth * 60 * item.dirY
    item.tx = depth * 26 * item.dirX
    item.trot = depth * 5 * item.dirX
    item.y = lerp(item.y ?? 0, item.ty, 0.1)
    item.x = lerp(item.x ?? 0, item.tx, 0.1)
    item.rot = lerp(item.rot ?? 0, item.trot, 0.1)
    item.el.style.transform = `translate3d(${item.x}px, ${item.y}px, 0) rotate(${item.rot}deg)`
  })

  // Our Story — the whole timeline tilts toward the cursor, layered on top of the scroll drift above
  if (storyVisualRef.value) {
    storyTilt.rx = lerp(storyTilt.rx, storyTilt.trx, 0.08)
    storyTilt.ry = lerp(storyTilt.ry, storyTilt.tryY, 0.08)
    storyVisualRef.value.style.transform =
      `perspective(1400px) rotateX(${storyTilt.rx}deg) rotateY(${storyTilt.ry}deg)`
  }

  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  nextTick(() => {
    setupReveal()
    setupParallax()
    setupCtaSlideshow()
    if (!prefersReducedMotion) {
      rafId = requestAnimationFrame(tick)
    }
  })
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (statsRafId) cancelAnimationFrame(statsRafId)
  if (observer) observer.disconnect()
  stopCtaSlideshow()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

.body-font {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
}
.font-display {
  font-family: 'Fraunces', serif;
  font-optical-sizing: auto;
}

/* hero entrance, staggered */
.hero-about-enter > * {
  opacity: 0;
  animation: aboutFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.hero-about-enter > *:nth-child(1) { animation-delay: 0.05s; }
.hero-about-enter > *:nth-child(2) { animation-delay: 0.2s; }
.hero-about-enter > *:nth-child(3) { animation-delay: 0.35s; }
.hero-about-enter > *:nth-child(4) { animation-delay: 0.5s; }

@keyframes aboutFadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* idle float / pulse, applied to inner elements only — never on a node the JS parallax loop also transforms */
.badge-float { animation: floatY 3.2s ease-in-out infinite; }
.cta-icon-float { animation: floatY 2.6s ease-in-out infinite; }
.dot-pulse { animation: dotPulse 2.4s ease-in-out infinite; }

@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@keyframes dotPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(31, 157, 99, 0.35); }
  50% { box-shadow: 0 0 0 7px rgba(31, 157, 99, 0); }
}

/* CTA slideshow crossfade.
   The <img> keeps `absolute inset-0` at all times (it's a static class on the element
   itself, not something Vue toggles), so the outgoing and incoming <img> nodes stack
   perfectly on top of one another inside the `overflow-hidden` wrapper. Vue's default
   <Transition> mode runs enter and leave at the same time — exactly what a crossfade
   needs — so we just animate opacity on both. */
.cta-fade-enter-active,
.cta-fade-leave-active {
  transition: opacity 0.9s ease;
}
.cta-fade-enter-from,
.cta-fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .hero-about-enter > * { animation: none; opacity: 1; transform: none; }
  .badge-float, .cta-icon-float, .dot-pulse { animation: none; }
  .cta-fade-enter-active, .cta-fade-leave-active { transition: none; }
}
</style>