<template>
  <div class="min-h-screen bg-[#F7EBD5] px-4 ">

    <!-- Header: page-load fade-up -->
    <div
      class="transition-all duration-700 ease-out"
      :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
    >
      <SectionHeader>Participants</SectionHeader>
    </div>

    <!-- Grid section: scoped overflow-hidden ONLY here, so it can never clip
         a sticky/fixed element that might live inside SectionHeader/SiteFooter -->
    <div ref="gridSectionRef" class="relative overflow-hidden py-4">

      <!-- Ambient depth blobs: pure CSS gradients, no image files — can never 404/break -->
      <div
        class="absolute -top-10 -left-16 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#F7EBD5] blur-3xl pointer-events-none will-change-transform"
        :style="{ transform: `translateY(${blobADrift}px)` }"
      ></div>
      <div
        class="absolute top-1/2 -right-20 w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-full bg-[#3F5A38]/10 blur-3xl pointer-events-none will-change-transform"
        :style="{ transform: `translateY(${blobBDrift}px)` }"
      ></div>

      <div class="relative z-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">

        <div
          :ref="(el) => setCardRef(el, 0)"
          class="relative transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:z-10"
          :class="cardVisible[0] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-6 blur-sm scale-95'"
          :style="{ transitionDelay: `${waveDelay(0)}ms` }"
        >
          <ParticipantCard
            name="Sak pub"
            description="SAK PUB Craft Beer & Bites opened its taproom and kitchen in October 2021, serving handcrafted in small batch craft beer from taps and giving people a place to savor delicious craft beers in an enjoyable and welcoming atmosphere."
            logo="/sakpub.webp"
            facebook="https://www.facebook.com/share/179fBFk2gZ/"
          />
        </div>

        <div
          :ref="(el) => setCardRef(el, 1)"
          class="relative transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:z-10"
          :class="cardVisible[1] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-6 blur-sm scale-95'"
          :style="{ transitionDelay: `${waveDelay(1)}ms` }"
        >
          <ParticipantCard
            name="Projekt Brews Co."
            description="Projekt brews is a small microbrewery based in Kampot since 2020 making modern hoppy beers."
            logo="/projectbrews.webp"
            facebook="https://www.facebook.com/profile.php?id=100063463360069"
          />
        </div>

        <div
          :ref="(el) => setCardRef(el, 2)"
          class="relative transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:z-10"
          :class="cardVisible[2] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-6 blur-sm scale-95'"
          :style="{ transitionDelay: `${waveDelay(2)}ms` }"
        >
          <ParticipantCard
            name="Botanico Brewing Company"
            description="Located in the heart of Phnom Penh, Botanico is one of the oldest craft breweries in the country, creating a big range of different beers, often using locally grown ingredients. The moto is: Real Cambodian Craft Beer!"
            logo="/botanico.webp"
            facebook="https://www.facebook.com/botanicobrewingco"
          />
        </div>

        <div
          :ref="(el) => setCardRef(el, 3)"
          class="relative transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:z-10"
          :class="cardVisible[3] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-6 blur-sm scale-95'"
          :style="{ transitionDelay: `${waveDelay(3)}ms` }"
        >
          <ParticipantCard
            name="Riel Brewing and Distilling"
            description="Riel Brewing is a pioneering craft brewery located right here in Phnom Penh, celebrated for helping to establish the local craft beer scene. They are known for their creative and high-quality beers that often incorporate unique Cambodian ingredients."
            logo="/riel.png"
            facebook="https://www.facebook.com/rielbrewing"
          />
        </div>

        <div
          :ref="(el) => setCardRef(el, 4)"
          class="relative transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:z-10"
          :class="cardVisible[4] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-6 blur-sm scale-95'"
          :style="{ transitionDelay: `${waveDelay(4)}ms` }"
        >
          <ParticipantCard
            name="Fuzzy Logic"
            description="Established in 2014, Fuzzy Logic Brewing Co. is one of the pioneers in introducing craft beer to Cambodia and South East Asia. Our brewery has earned a reputation for dedicating itself to consistent, balanced beers.  Well known for its Thunderslap IPA and John Lemon Hard Lemonade, Fuzzy Logic has a range of excellent quality products in kegs, cans and bottles and is distributed widely across Cambodia."
            logo="/fuzzylogic.webp"
            facebook="https://www.facebook.com/FuzzyLogicCambodia"
          />
        </div>

        <div
          :ref="(el) => setCardRef(el, 5)"
          class="relative transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:z-10"
          :class="cardVisible[5] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-6 blur-sm scale-95'"
          :style="{ transitionDelay: `${waveDelay(5)}ms` }"
        >
          <ParticipantCard
            name="Chug Lab"
            description="Chug Brew is a very small nano brewery located in Phnom Penh with the focus on high quality modern craft beers. We also have a heavy metal themed Tap House 'Chug Lab' in Bkk3."
            logo="/chuglab.webp"
            facebook="https://www.facebook.com/thechuglab"
          />
        </div>

        <div
          :ref="(el) => setCardRef(el, 6)"
          class="relative transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:z-10"
          :class="cardVisible[6] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-6 blur-sm scale-95'"
          :style="{ transitionDelay: `${waveDelay(6)}ms` }"
        >
          <ParticipantCard
            name="Brew Khnear"
            description="At Brew Khnear, (loosely translated as ‘Brew Together,’) our focus is on getting that work/life balance right.
                  With solid and creative beers made from the finest ingredients using traditional brewing techniques, we strive not to work too hard, but to make time for ourselves and those who are important to us.
                  What better way to bring us all together than drinking good beer."
            logo="/brewkhnear.webp"
            facebook="https://facebook.com/betabrewery"
          />
        </div>

        <div
          :ref="(el) => setCardRef(el, 7)"
          class="relative transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:z-10"
          :class="cardVisible[7] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-6 blur-sm scale-95'"
          :style="{ transitionDelay: `${waveDelay(7)}ms` }"
        >
          <ParticipantCard
            name="Funghi Art"
            description="Create new value for Cambodian rice through fermentation technology.We produce 3 kinds of beer, craft sake, sweet potato and rice Shochu and Gin. All made from Cambodian Rice."
            logo="/funghiart.webp"
            facebook="https://www.facebook.com/profile.php?id=100069892638809"
          />
        </div>

        <div
          :ref="(el) => setCardRef(el, 8)"
          class="relative transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:z-10"
          :class="cardVisible[8] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-6 blur-sm scale-95'"
          :style="{ transitionDelay: `${waveDelay(8)}ms` }"
        >
          <ParticipantCard
            name="Jaya-Vara Meadery"
            description="Jaya-Vara Meadery has been crafting unique meads and beers in Cambodia for the past 3 years. started as a passion for traditional honey wine has evolved into a full-fledged brewery experimenting with bold flavors and local ingredients."
            logo="/jaya.jpg"
            facebook="https://www.facebook.com/profile.php?id=100080223013722"
          />
        </div>

        <div
          :ref="(el) => setCardRef(el, 9)"
          class="relative transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:z-10"
          :class="cardVisible[9] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-6 blur-sm scale-95'"
          :style="{ transitionDelay: `${waveDelay(9)}ms` }"
        >
          <ParticipantCard
            name="Krama Craft Brewery"
            description="Krama Craft Brewery is a cozy craft brewery located in Siem Reap, founded by two partners — one French, one Cambodian. Just minutes from the city center, it offers creative, locally inspired beers like the Triple Khmer and Black IPA. With a warm atmosphere, Cambodian ingredients, and genuine hospitality, Krama is the perfect stop for a unique and authentic craft beer experience in Siem Reap"
            logo="/kramacraft.webp"
            facebook="https://www.facebook.com/profile.php?id=100095224728868"
          />
        </div>

        <div
          :ref="(el) => setCardRef(el, 10)"
          class="relative transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:z-10"
          :class="cardVisible[10] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-6 blur-sm scale-95'"
          :style="{ transitionDelay: `${waveDelay(10)}ms` }"
        >
          <ParticipantCard
            name="Himawari Microbrewery"
            description="Himawari Microbrewery is the 1st and only microbrewery launched by it’s 5-star hotel-apartments in Cambodia. Made from the finest malt and hops, the beers crafted here are unique in flavour and of the highest quality. Himawari Microbrewery's brewmaster, Neo, has had many years of brewing experience and has designed 7 exclusive brews, 3 of which have won international awards. There’s definitely a craft beer for every palate."
            logo="/himavari.jpg"
            facebook="https://www.facebook.com/HimawariHotelMicrobrewery"
          />
        </div>

        <div
          :ref="(el) => setCardRef(el, 11)"
          class="relative transition-all duration-700 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:z-10"
          :class="cardVisible[11] ? 'opacity-100 translate-y-0 blur-none scale-100' : 'opacity-0 translate-y-6 blur-sm scale-95'"
          :style="{ transitionDelay: `${waveDelay(11)}ms` }"
        >
          <ParticipantCard
            name="Bash Brewing"
            description="Bash Brewing is one of the Kingdom’s original craft breweries, creating some of the finest all-natural craft beer in Cambodia."
            logo="/bash.jpg"
            facebook="https://www.facebook.com/bashbrewingkh"
          />
        </div>

      </div>
    </div>

    <!-- Footer: scroll-triggered fade-up -->
    <div
      ref="footerRef"
      class="transition-all duration-700 ease-out"
      :class="footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <SiteFooter />
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// =====================================================================
// One-time reveals: page-load cascade for the header, a diagonal
// "wave" stagger per card (triggered the first time each card scrolls
// into view, then unobserved — never re-triggers), and a fade for the
// footer. All driven by opacity/transform/blur only — never layout
// properties — so nothing here can shift the page or resize a card.
// =====================================================================
const loaded = ref(false)
const footerVisible = ref(false)
const footerRef = ref(null)

const cardVisible = reactive(Array(12).fill(false))
const cardRefs = []

function setCardRef(el, index) {
  if (el) cardRefs[index] = el
}

// Diagonal wave: column + row both add delay, so on a 3-column desktop
// grid it cascades like a ripple; on mobile's 1 column it still reads
// as a gentle top-to-bottom sequence since each card's own reveal is
// independently triggered by its own scroll position anyway.
function waveDelay(index) {
  const col = index % 3
  const row = Math.floor(index / 3)
  return (col + row) * 80
}

// =====================================================================
// Continuous ambient parallax: two soft CSS-gradient blobs drifting at
// different speeds/directions behind the grid. No <img> involved, so
// there is no asset path that can 404 or break. Amplitude is a small
// fixed pixel range (not tied to page height), and they live inside a
// `relative overflow-hidden` wrapper scoped ONLY around the grid — not
// the header or footer — so they can never clip an unrelated element.
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
  rawBlobADrift = (progress - 0.5) * 70    // settles within ±35px
  rawBlobBDrift = (progress - 0.5) * -100  // settles within ±50px, opposite direction
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
    footerVisible.value = true
    cardVisible.forEach((_, i) => (cardVisible[i] = true))
    return
  }

  measure()
  tick() // eases blobs in from 0 instead of popping to position

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', measure, { passive: true })

  requestAnimationFrame(() => {
    loaded.value = true
  })

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const index = cardRefs.indexOf(entry.target)
        if (index !== -1) {
          cardVisible[index] = true
          observer.unobserve(entry.target)
          return
        }
        if (entry.target === footerRef.value) {
          footerVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )

  cardRefs.forEach((el) => el && observer.observe(el))
  if (footerRef.value) observer.observe(footerRef.value)
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