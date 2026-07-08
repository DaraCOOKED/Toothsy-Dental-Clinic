<!-- pages/service.vue -->
<template>
  <div class="bg-[#EFF8FC]">
    <HeroSection
      eyebrow="Services"
      title="Dental services"
      highlight="for every smile"
      description="Explore gentle, modern treatments from routine checkups to whitening and orthodontics."
    />

    <section ref="sectionRef" class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-[#111827] ">
            Our Services
          </h2>
          <p class="mt-4 text-stone-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Choose the care you need, then book a visit so we can recommend the right next step.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            v-for="(service, i) in paginatedServices"
            :key="service.link"
            :title="service.title"
            :desc="service.desc"
            :link="service.link"
            :image="service.image"
            :index="i"
            @open-detail="openModal(service)"
          />
        </div>

        <Pagination
          v-if="totalPages > 1"
          v-model="currentPage"
          :total-pages="totalPages"
        />
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
    title: 'Tooth Cleaning',
    desc: 'A thorough professional cleaning that removes plaque and tartar, keeping your teeth and gums healthy.',
    link: '/service/tooth-cleaning',
    image: '/service1.png',
    category: 'Preventive Care',
    includes: ['Plaque & tartar removal', 'Polishing', 'Gum health check'],
  },
  {
    title: 'Dental Filling',
    desc: 'Restore decayed or damaged teeth with a filling that blends naturally with your smile.',
    link: '/service/dental-filling',
    image: '/service1.png',
    category: 'Restorative',
    includes: ['Cavity assessment', 'Decay removal', 'Tooth-colored filling'],
  },
  {
    title: 'Tooth Extraction',
    desc: 'Gentle removal of damaged, infected, or crowded teeth for both kids and adults.',
    link: '/service/extraction',
    image: '/service1.png',
    category: 'Surgical',
    includes: ['Examination & X-ray', 'Local anesthesia', 'Safe tooth removal'],
  },
  {
    title: 'Wisdom Teeth Surgery',
    desc: 'Comfortable surgical removal of impacted or problematic wisdom teeth.',
    link: '/service/wisdom-teeth',
    image: '/service1.png',
    category: 'Surgical',
    includes: ['X-ray assessment', 'Surgical extraction', 'Aftercare guidance'],
  },
  {
    title: 'Root Canal Treatment',
    desc: 'Relieve pain and save an infected tooth with careful root canal therapy.',
    link: '/service/root-canal',
    image: '/service1.png',
    category: 'Restorative',
    includes: ['Infection diagnosis', 'Root canal procedure', 'Protective crown fitting'],
  },
  {
    title: 'Dental Crown',
    desc: 'Durable ceramic or zirconium crowns that restore the strength and look of damaged teeth.',
    link: '/service/dental-crown',
    image: '/service1.png',
    category: 'Restorative',
    includes: ['Tooth preparation', 'Custom crown fitting', 'Final polish'],
  },
  {
    title: 'Dental Veneer',
    desc: 'Thin custom shells that instantly improve the shape and color of your smile.',
    link: '/service/veneer',
    image: '/service1.png',
    category: 'Cosmetic',
    includes: ['Smile consultation', 'Custom veneer fitting', 'Final bonding'],
  },
  {
    title: 'Dental Implant',
    desc: 'A permanent, natural-looking replacement for missing teeth, topped with a durable crown.',
    link: '/service/implant',
    image: '/service1.png',
    category: 'Restorative',
    includes: ['Consultation & imaging', 'Implant placement', 'Crown attachment'],
  },
  {
    title: 'Orthodontics',
    desc: 'Straighten teeth at any age with braces designed for comfortable, lasting results.',
    link: '/service/orthodontics',
    image: '/service1.png',
    category: 'Alignment',
    includes: ['Initial consultation', 'Custom treatment plan', 'Regular adjustment visits'],
  },
]

const modalOpen = ref(false)
const activeService = ref(null)

function openModal(service) {
  activeService.value = service
  modalOpen.value = true
}

// Pagination
const pageSize = 6
const currentPage = ref(1)
const sectionRef = ref(null)

const totalPages = computed(() => Math.ceil(services.length / pageSize))

const paginatedServices = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return services.slice(start, start + pageSize)
})

watch(currentPage, () => {
  sectionRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
})
</script>