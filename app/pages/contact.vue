<template>
  <div class="bg-[#EFF8FC]">
    <HeroSection
      eyebrow="Contact"
      title="Get in touch"
      highlight="with Toothsy"
      description="Book an appointment, ask a question, or find the clinic details you need."
    />

    <section class="pt-24 pb-20 px-6 md:px-10">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <h1 class=" text-3xl md:text-4xl font-bold text-[#111827] inline-block relative">
            Get In Touch
          </h1>
          <p class="mt-6 text-stone-500 text-sm md:text-base">
            Book an appointment to treat your teeth right now.
          </p>
        </div>

        <ContactInfoPanel />
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
  font-family: Bebas Neue, sans-serif;
  font-optical-sizing: auto;
}
</style>