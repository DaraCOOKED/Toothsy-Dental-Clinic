<template>
  <div class="bg-[#FFFAE1]">
    <HeroSection
      eyebrow="Services"
      title="Dental services"
      highlight="for every smile"
      description="Explore gentle, modern treatments from routine checkups to whitening and orthodontics."
    />

    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-[#111827]">
            Our Services
          </h2>
          <p class="mt-4 text-stone-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Choose the care you need, then book a visit so we can recommend the right next step.
          </p>
        </div>

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
  </div>
</template>

<script setup>
useHead({
  title: 'Services - Toothsy Dental Clinic',
  meta: [{ name: 'description', content: 'Explore our full range of gentle, modern dental services.' }]
})

const services = [
  {
    title: 'General Dentistry',
    desc: 'Routine check-ups, cleanings, and fillings to keep your smile healthy year-round.',
    link: '/service/general',
    svg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 12h8M12 8v8"/></svg>'
  },
  {
    title: 'Teeth Whitening',
    desc: 'Professional-grade whitening that lifts stains and brightens your smile safely.',
    link: '/service/whitening',
    svg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
  },
  {
    title: 'Orthodontics',
    desc: 'Braces and clear aligners to straighten teeth at any age, comfortably.',
    link: '/service/orthodontics',
    svg: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="8" rx="3"/><path d="M7 8V6a2 2 0 0 1 4 0v2M13 8V6a2 2 0 0 1 4 0v2"/></svg>'
  }
]
</script>
