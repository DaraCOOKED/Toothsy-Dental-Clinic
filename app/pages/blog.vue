<template>
  <div class="bg-[#FFFA]">
    <HeroSection
      eyebrow="Blog"
      title="Dental advice"
      highlight="made simple"
      description="Tips, explainers, and practical care notes from the Toothsy team."
      video-src="/video/hero-blog.mp4"
    />

    <section
      ref="sectionRef"
      class="relative py-20 px-6 md:px-10 transition-all duration-700 ease-out"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-[#111827]">
            From the Blog
          </h2>
          <p class="mt-4 text-stone-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Tips, explainers, and the occasional myth-busting straight from our dentists.
          </p>
        </div>

        <div
          ref="trackRef"
          class="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 no-scrollbar"
          @scroll="updateArrows"
        >
          <BlogCarouselCard
            v-for="post in posts"
            :key="post.title + post.author"
            v-bind="post"
          />
        </div>

        <div class="flex justify-center gap-3 mt-8">
          <button
            @click="scrollByCard(-1)"
            :disabled="atStart"
            aria-label="Previous post"
            class="w-11 h-11 rounded-full bg-[#111827] text-white flex items-center justify-center transition-opacity duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#036533]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            @click="scrollByCard(1)"
            :disabled="atEnd"
            aria-label="Next post"
            class="w-11 h-11 rounded-full bg-[#111827] text-white flex items-center justify-center transition-opacity duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#036533]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Blog - Toothsy Dental Clinic',
  meta: [{ name: 'description', content: 'Dental care tips and explainers from Toothsy Dental Clinic.' }]
})

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&q=80&fit=crop',
    category: 'Self Care',
    author: 'Anita Jackson',
    title: 'Care of your Teeth',
    excerpt: 'A few daily habits that matter more than an expensive toothbrush.'
  },
  {
    image: 'https://images.unsplash.com/photo-1588776814546-1ffedbe0b94b?w=500&q=80&fit=crop',
    category: 'Self Care',
    author: 'Anita Jackson',
    title: 'When to See a Dentist',
    excerpt: 'Pain, sensitivity, or bleeding gums. Here is what each one is telling you.'
  },
  {
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80&fit=crop',
    category: 'Self Care',
    author: 'Anita Jackson',
    title: 'Whitening, Honestly',
    excerpt: 'What actually works, what is mostly marketing, and what to skip entirely.'
  },
  {
    image: 'https://images.unsplash.com/photo-1570612861542-284f4c12e75f?w=500&q=80&fit=crop',
    category: 'Self Care',
    author: 'Anita Jackson',
    title: 'Kids and First Visits',
    excerpt: 'How to make a child\'s first dental visit feel like nothing to worry about.'
  }
]

const sectionRef = ref(null)
const trackRef = ref(null)
const visible = ref(false)
const atStart = ref(true)
const atEnd = ref(false)

let observer = null

function updateArrows() {
  const el = trackRef.value
  if (!el) return
  atStart.value = el.scrollLeft <= 4
  atEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
}

function scrollByCard(direction) {
  const el = trackRef.value
  if (!el) return
  const card = el.children[0]
  const gap = 20
  const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.8
  el.scrollBy({ left: amount * direction, behavior: 'smooth' })
}

function onResize() {
  nextTick(updateArrows)
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    visible.value = true
  } else {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )
    if (sectionRef.value) observer.observe(sectionRef.value)
  }

  nextTick(updateArrows)
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
