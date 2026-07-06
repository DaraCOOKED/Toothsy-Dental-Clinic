<template>
  <div class="bg-[#EFF8FC]">
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
          <div class="relative overflow-hidden border border-[#bfe6da] rounded-2xl">
                  <AppointmentForm />


          
          
          </div>
        </div>
      </div>
    </section>

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
