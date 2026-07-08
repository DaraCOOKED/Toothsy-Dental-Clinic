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

        <!-- Loading / error states: optional, doesn't touch your existing grid markup -->
        <p v-if="pending" class="text-center text-stone-400 text-sm mb-8">Loading services...</p>
        <p v-else-if="error" class="text-center text-red-500 text-sm mb-8">
          Couldn't load services right now.
        </p>

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

const config = useRuntimeConfig()

// 1. Fetch from Strapi instead of hardcoding.
//    populate=* pulls in the coverImage media relation and any component fields
//    (like popupIncludedItems, if it's a repeatable component rather than plain JSON).
const { data: servicesData, pending, error } = await useFetch(
  `${config.public.strapiUrl}/api/services`,
  { query: { populate: '*' } }
)


function getStrapiMedia(media) {
  if (!media?.url) return '/service1.png' // fallback so ServiceCard never gets an empty src
  return media.url.startsWith('http') ? media.url : `${config.public.strapiUrl}${media.url}`
}

function normalizeIncludedItems(raw) {
  if (!Array.isArray(raw)) return []
  return raw
    .map(entry => (typeof entry === 'string' ? entry : entry.item ?? entry.text ?? entry.value ?? ''))
    .filter(Boolean)
}

const services = computed(() => {
  return (servicesData.value?.data ?? []).map(item => ({
    title: item.title,
    desc: item.description,
    link: `/service/${item.slug ?? item.documentId}`,
    image: getStrapiMedia(item.coverImage),
    popupTitle: item.popupTitle,
    popupDescription: item.popupDescription,
    includes: normalizeIncludedItems(item.popupIncludedItems),
  }))
})

const modalOpen = ref(false)
const activeService = ref(null)

function openModal(service) {
  activeService.value = {
    title: service.popupTitle || service.title,
    desc: service.popupDescription || service.desc,
    includes: service.includes,
    link: service.link,
  }
  modalOpen.value = true
}


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