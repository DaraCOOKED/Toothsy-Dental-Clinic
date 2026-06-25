<template>
  <div class="relative isolate overflow-x-hidden body-font bg-[#FFFAE1] text-[#111827]">

    <!-- Signature ambient watermark: one tooth motif drifting the length of the page -->
    <div
      ref="watermarkRef"
      aria-hidden="true"
      class="pointer-events-none select-none absolute -right-16 top-24 z-0 w-[280px] md:w-[420px] opacity-[0.07] will-change-transform"
    >
      <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100,20 C70,20 45,45 45,80 C45,110 55,135 50,165 C47,185 60,205 75,195 C85,188 88,170 100,170 C112,170 115,188 125,195 C140,205 153,185 150,165 C145,135 155,110 155,80 C155,45 130,20 100,20 Z"
          stroke="#111827" stroke-width="3" stroke-linejoin="round"
        />
      </svg>
    </div>

    <!-- ═══════════════════ HERO ═══════════════════ -->
    <section class="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

      <div class="hero-enter order-2 md:order-1">
        <h1 class="font-display text-[2.1rem] md:text-5xl lg:text-[3.2rem] font-bold leading-[1.1] tracking-tight">
          Get ready for your best<br class="hidden md:block"> ever dental experience
        </h1>
        <p class="mt-5 text-stone-500 text-[0.95rem] leading-relaxed max-w-md">
          From routine checkups to full smile makeovers, Toothsy pairs gentle,
          modern care with a clinic that actually feels calm to sit in.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-6">
          <NuxtLink
            to="https://docs.google.com/forms/d/e/1FAIpQLSdqhTMChYM1xTzOyuM-oESSiuGBy84d88DVS7E-RfLvCeUyaQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-[#6BCE9F] hover:bg-[#036533] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors duration-200"
          >Book an Appointment</NuxtLink>

          <a href="tel:+855123456789" class="flex items-center gap-2.5 text-sm font-semibold hover:text-[#036533] transition-colors">
            <span class="flex items-center justify-center w-9 h-9 rounded-full border-[1.5px] border-[#6BCE9F]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1f9d63" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.11-1.11a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            +855 12 345 6789
          </a>
        </div>
      </div>

      <div class="relative order-1 md:order-2">
        <div class="absolute inset-[8%_4%_0_4%] md:inset-[10%_6%_0_6%] bg-[#d4f0ea] rounded-[50%_50%_48%_52%/52%_52%_48%_48%]"></div>
        <img
          ref="heroImgRef"
          class="relative z-10 w-full max-w-[420px] h-[320px] md:h-[460px] object-cover object-top rounded-[50%_50%_48%_52%/52%_52%_48%_48%] mx-auto will-change-transform"
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80&fit=crop&crop=faces,top"
          alt="Smiling dentist at Toothsy clinic"
        />
      </div>
    </section>

    <!-- ═══════════════════ SERVICES ═══════════════════ -->
    <section class="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pb-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(s, i) in services"
          :key="s.title"
          :ref="(el) => setCardRef(el, i)"
          class="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          :class="cardVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: cardVisible[i] ? `${i * 110}ms` : '0ms' }"
        >
          <div class="w-14 h-14 rounded-2xl bg-[#e6faf6] flex items-center justify-center mb-5" v-html="s.svg"></div>
          <h3 class="font-display text-lg font-bold mb-2">{{ s.title }}</h3>
          <p class="text-[0.85rem] text-stone-500 leading-relaxed">{{ s.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ SPLIT 1 ═══════════════════ -->
    <section ref="split1Ref" class="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div class="transition-all duration-700 ease-out" :class="split1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'">
        <h2 class="font-display text-2xl md:text-[2rem] font-bold leading-[1.2] tracking-tight mb-4">
          We're welcoming new patients<br class="hidden md:block"> and can't wait to meet you
        </h2>
        <p class="text-[0.9rem] text-stone-500 leading-relaxed">
          First visits start with a relaxed consultation, not a drill — we walk
          through your history, answer every question, and build a plan around
          what actually works for your schedule.
        </p>
      </div>
      <div class="relative transition-all duration-700 ease-out" :class="split1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'">
        <div class="absolute w-[85%] h-[85%] -right-3.5 -bottom-3.5 bg-[#9fe0d4] rounded-2xl"></div>
        <img
          ref="media1Ref"
          class="relative z-10 w-full h-[280px] md:h-[340px] object-cover rounded-2xl will-change-transform"
          src="https://images.unsplash.com/photo-1588776814546-1ffedbe0b94b?w=600&q=80&fit=crop"
          alt="Dentist consulting with a patient"
        />
      </div>
    </section>

    <!-- ═══════════════════ SPLIT 2 (green bg) ═══════════════════ -->
    <section ref="split2Ref" class="relative z-10 bg-[#dff0e0] py-16 md:py-20">
      <div class="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div class="relative order-1 transition-all duration-700 ease-out" :class="split2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'">
          <div class="absolute w-[85%] h-[85%] -left-3.5 -bottom-3.5 bg-[#9fd4a4] rounded-2xl"></div>
          <img
            ref="media2Ref"
            class="relative z-10 w-full h-[280px] md:h-[340px] object-cover rounded-2xl will-change-transform"
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&fit=crop"
            alt="Dentist smiling in clinic"
          />
        </div>
        <div class="order-2 transition-all duration-700 ease-out" :class="split2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'">
          <h2 class="font-display text-2xl md:text-[2rem] font-bold leading-[1.2] tracking-tight mb-4">
            Why choose Toothsy for your dental care?
          </h2>
          <p class="text-[0.9rem] text-stone-500 leading-relaxed mb-5">
            No two smiles get the same generic plan here — every treatment is
            built around your actual teeth, your actual budget, and how much
            time you've got.
          </p>
          <ul class="flex flex-col gap-3">
            <li v-for="b in benefits" :key="b" class="flex items-center gap-2.5 text-sm text-stone-600">
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#6BCE9F] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6.5L4.5 9L10 3" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              {{ b }}
            </li>
          </ul>
          <NuxtLink
            to="https://docs.google.com/forms/d/e/1FAIpQLSdqhTMChYM1xTzOyuM-oESSiuGBy84d88DVS7E-RfLvCeUyaQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block mt-6 bg-[#6BCE9F] hover:bg-[#036533] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors duration-200"
          >Book an Appointment</NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════════ SPLIT 3 ═══════════════════ -->
    <section ref="split3Ref" class="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div class="transition-all duration-700 ease-out" :class="split3Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'">
        <h2 class="font-display text-2xl md:text-[2rem] font-bold leading-[1.2] tracking-tight mb-4">
          Leave your worries at the door, leave with a healthier smile
        </h2>
        <p class="text-[0.9rem] text-stone-500 leading-relaxed mb-6">
          Nervous about the chair? You're not the only one. We talk you through
          every step before it happens, and stop the moment you need us to.
        </p>
        <NuxtLink
          to="https://docs.google.com/forms/d/e/1FAIpQLSdqhTMChYM1xTzOyuM-oESSiuGBy84d88DVS7E-RfLvCeUyaQ/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-[#6BCE9F] hover:bg-[#036533] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors duration-200"
        >Book an Appointment</NuxtLink>
      </div>
      <div class="relative transition-all duration-700 ease-out" :class="split3Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'">
        <div class="absolute w-[85%] h-[85%] -right-3.5 -bottom-3.5 bg-[#f4b8b8] rounded-2xl"></div>
        <img
          ref="media3Ref"
          class="relative z-10 w-full h-[280px] md:h-[340px] object-cover rounded-2xl will-change-transform"
          src="https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=600&q=80&fit=crop"
          alt="Patient with a confident smile"
        />
      </div>
    </section>

    <!-- ═══════════════════ BANNER ═══════════════════ -->
    <section
      ref="bannerRef"
      class="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pb-24 text-center transition-all duration-700 ease-out"
      :class="bannerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <h2 class="font-display text-2xl md:text-[2.1rem] font-bold leading-[1.2] tracking-tight mb-3">
        Your next appointment could be the one that changes how you feel about the dentist
      </h2>
      <p class="text-[0.9rem] text-stone-500 leading-relaxed max-w-lg mx-auto mb-10">
        Book a consultation and see the clinic before you commit to anything.
      </p>
      <div class="relative max-w-3xl mx-auto rounded-2xl overflow-hidden h-[260px] md:h-[320px]">
        <img
          ref="bannerImgRef"
          class="absolute inset-0 w-full h-[130%] -top-[15%] object-cover will-change-transform"
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&q=80&fit=crop"
          alt="Modern Toothsy clinic interior"
        />
      </div>
      <NuxtLink
        to="https://docs.google.com/forms/d/e/1FAIpQLSdqhTMChYM1xTzOyuM-oESSiuGBy84d88DVS7E-RfLvCeUyaQ/viewform?usp=publish-editor"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block mt-8 bg-[#6BCE9F] hover:bg-[#036533] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors duration-200"
      >Book an Appointment</NuxtLink>
    </section>

  </div>
</template>

<script setup>
/* ---------- content ---------- */
const services = [
  {
    title: 'Root Canal Treatment',
    desc: 'For inflamed or infected pulp — handled calmly, with numbing that actually works before we start.',
    svg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1f9d63" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C9 2 6 4 6 7c0 1 .4 2 .9 3L8 20c.2 1 1 2 2 2h4c1 0 1.8-1 2-2l1.1-10c.5-1 .9-2 .9-3 0-3-3-5-6-5z"/></svg>`
  },
  {
    title: 'Cosmetic Dentistry',
    desc: 'Whitening, veneers, and small fixes that add up to a smile you stop covering with your hand.',
    svg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1f9d63" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9" stroke-width="3"/><line x1="15" y1="9" x2="15.01" y2="9" stroke-width="3"/></svg>`
  },
  {
    title: 'Dental Implants',
    desc: 'A real root replacement for a missing tooth — built to last, not just to look right on day one.',
    svg: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1f9d63" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="9" rx="2"/><path d="M12 11v11"/><path d="M9 16h6"/><path d="M9 19.5h6"/></svg>`
  }
]

const benefits = [
  'Dentists who explain before they treat',
  'Modern equipment, sterilised every single time',
  'Transparent pricing, no surprise add-ons',
  'Same-week booking for most appointments'
]

let prefersReducedMotion = false

/* ---------- scroll reveal (cards / splits / banner) ---------- */
const cardEls = ref([])
const cardVisible = reactive(services.map(() => false))

const split1Ref = ref(null); const split1Visible = ref(false)
const split2Ref = ref(null); const split2Visible = ref(false)
const split3Ref = ref(null); const split3Visible = ref(false)
const bannerRef = ref(null); const bannerVisible = ref(false)

let observer = null

function setCardRef(el, i) {
  cardEls.value[i] = el
}

function setupReveal() {
  const targets = [
    ...cardEls.value.map((el, i) => ({ el, set: (val) => (cardVisible[i] = val) })),
    { el: split1Ref.value, set: (val) => (split1Visible.value = val) },
    { el: split2Ref.value, set: (val) => (split2Visible.value = val) },
    { el: split3Ref.value, set: (val) => (split3Visible.value = val) },
    { el: bannerRef.value, set: (val) => (bannerVisible.value = val) }
  ].filter((t) => t.el)

  if (prefersReducedMotion) {
    targets.forEach((t) => t.set(true))
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
const heroImgRef = ref(null)
const media1Ref = ref(null)
const media2Ref = ref(null)
const media3Ref = ref(null)
const bannerImgRef = ref(null)

const w = { y: 0, ty: 0, rot: 0, trot: 0 }
let parallaxItems = []
let rafId = null

function clamp(n, min, max) { return Math.min(max, Math.max(min, n)) }
function lerp(a, b, t) { return a + (b - a) * t }

function setupParallax() {
  parallaxItems = [
    { el: heroImgRef.value, strength: 20, y: 0, ty: 0 },
    { el: media1Ref.value, strength: 18, y: 0, ty: 0 },
    { el: media2Ref.value, strength: 18, y: 0, ty: 0 },
    { el: media3Ref.value, strength: 18, y: 0, ty: 0 },
    { el: bannerImgRef.value, strength: 34, y: 0, ty: 0 }
  ].filter((item) => item.el)
}

function tick() {
  const vh = window.innerHeight || 1

  // page-level watermark drift, driven by overall scroll progress
  const doc = document.documentElement
  const maxScroll = doc.scrollHeight - vh
  const pageProgress = maxScroll > 0 ? clamp(window.scrollY / maxScroll, 0, 1) : 0
  w.ty = pageProgress * 1200
  w.trot = pageProgress * 30
  w.y = lerp(w.y, w.ty, 0.08)
  w.rot = lerp(w.rot, w.trot, 0.08)
  if (watermarkRef.value) {
    watermarkRef.value.style.transform = `translate3d(0, ${w.y}px, 0) rotate(${w.rot}deg)`
  }

  // per-image depth drift, driven by each element's own viewport position
  parallaxItems.forEach((item) => {
    const rect = item.el.getBoundingClientRect()
    const centerY = rect.top + rect.height / 2
    const progress = clamp(1 - centerY / vh, 0, 1)
    item.ty = (progress - 0.5) * item.strength * 2
    item.y = lerp(item.y, item.ty, 0.1)
    item.el.style.transform = `translate3d(0, ${item.y}px, 0)`
  })

  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  nextTick(() => {
    setupReveal()
    setupParallax()
    if (!prefersReducedMotion) {
      rafId = requestAnimationFrame(tick)
    }
  })
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (observer) observer.disconnect()
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
.hero-enter > * {
  opacity: 0;
  animation: heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.hero-enter > *:nth-child(1) { animation-delay: 0.05s; }
.hero-enter > *:nth-child(2) { animation-delay: 0.2s; }
.hero-enter > *:nth-child(3) { animation-delay: 0.35s; }

@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .hero-enter > * {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>