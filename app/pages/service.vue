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
          <h2 class="text-3xl md:text-4xl font-bold text-[#111827]">
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

const { find } = useStrapi()

const { data } = await useAsyncData('services', () =>
  find('services', {
    populate: '*',
  })
)

const services = computed(() =>
  (data.value?.data ?? []).map((item) => ({
    title: item.title,
    desc: item.desc,
    link: `/service/${item.slug}`,
    image: item.image ? useStrapiMedia(item.image.url) : '/service1.png',
    category: item.category,
    includes: item.includes ? item.includes.split('\n').filter(Boolean) : [],
  }))
)

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

const totalPages = computed(() => Math.ceil(services.value.length / pageSize))

const paginatedServices = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return services.value.slice(start, start + pageSize)
})

watch(currentPage, () => {
  sectionRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
})
</script>