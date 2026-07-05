<!-- pages/service.vue -->
<template>
  <div class="bg-[#FFFA]">
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
            :image="service.image"
            :index="i"
            @open-detail="openModal(service)"
          />
        </div>
      </div>
    </section>

    <!-- Modal -->
    <ServiceDetailModal
      v-model:open="modalOpen"
      :service="activeService"
    />
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
    image: '/service1.png',
    category: 'Preventive Care',
    price: '$80',
    includes: [
      'Full dental exam',
      'Professional cleaning',
      'X-rays (if needed)',
      'Cavity fillings',
    ],
  },
  {
    title: 'Teeth Whitening',
    desc: 'Professional-grade whitening that lifts stains and brightens your smile safely.',
    link: '/service/whitening',
    image: '/service1.png',
    category: 'Cosmetic',
    price: '$150',
    includes: [
      'Shade assessment',
      'In-clinic whitening session',
      'Take-home maintenance kit',
    ],
  },
  {
    title: 'Orthodontics',
    desc: 'Braces and clear aligners to straighten teeth at any age, comfortably.',
    link: '/service/orthodontics',
    image: '/service1.png',
    category: 'Alignment',
    price: '$1,200',
    includes: [
      'Initial consultation',
      'Custom treatment plan',
      'Braces or clear aligners',
      'Regular adjustment visits',
      'Retainer included',
    ],
  },
]

const modalOpen    = ref(false)
const activeService = ref(null)

function openModal(service) {
  activeService.value = service
  modalOpen.value = true
}
</script>