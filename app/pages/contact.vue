<template>
  <div class="bg-[#FFFAE1]">
    <HeroSection
      eyebrow="Contact"
      title="Get in touch"
      highlight="with Toothsy"
      description="Book an appointment, ask a question, or find the clinic details you need."
    />

    <section class="pt-24 pb-20 px-6 md:px-10">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="font-display text-3xl md:text-4xl font-bold text-[#111827] inline-block relative">
            Get In Touch
            <svg class="absolute left-1/2 -translate-x-1/2 -bottom-3 w-28 h-3" viewBox="0 0 120 16" fill="none">
              <path
                d="M2 8C20 2 40 14 60 8C80 2 100 14 118 8"
                stroke="#6BCE9F"
                stroke-width="4"
                stroke-linecap="round"
                :style="underlineStyle"
              />
            </svg>
          </h1>
          <p class="mt-6 text-stone-500 text-sm md:text-base">
            Book an appointment to treat your teeth right now.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <ContactInfoPanel />
          <div class="relative overflow-hidden border border-[#bfe6da] rounded-2xl h-[650px]">
            <div class="absolute inset-0 bg-gradient-to-br from-[#e8fff5] to-white"></div>

            <div class="absolute top-8 left-8 z-10 max-w-xs">
              <h3 class="font-display text-3xl font-bold text-[#111827]">
                Meet Our Team
              </h3>
              <p class="mt-3 text-stone-600 leading-relaxed">
                Crafting calm, memorable care with practical dental expertise.
              </p>
              <NuxtLink
                to="/about"
                class="mt-5 inline-block bg-[#1f9d63] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#036533]"
              >
                Learn More
              </NuxtLink>
            </div>

            <img
              src="/team-member.png"
              alt="Toothsy team member"
              class="absolute bottom-0 right-0 h-[95%] object-contain"
            >
          </div>
        </div>
      </div>
    </section>
      <AppointmentForm />

  </div>
</template>

<script setup>
useHead({
  title: 'Contact - Toothsy Dental Clinic',
  meta: [{ name: 'description', content: 'Contact Toothsy Dental Clinic to book an appointment or ask a question.' }]
})

const underlineStyle = reactive({
  strokeDasharray: '160',
  strokeDashoffset: '160',
  transition: 'stroke-dashoffset 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s'
})

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    underlineStyle.transition = 'none'
    underlineStyle.strokeDashoffset = '0'
    return
  }
  requestAnimationFrame(() => {
    underlineStyle.strokeDashoffset = '0'
  })
})
</script>

<style scoped>
.font-display {
  font-family: 'Fraunces', serif;
  font-optical-sizing: auto;
}
</style>
