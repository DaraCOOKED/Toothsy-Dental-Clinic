<template>
  <div
    ref="panelRef"
    class="transition-all duration-700 ease-out"
    :class="visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'"
  >
    <!-- Map -->
    <div class="relative rounded-2xl overflow-hidden border border-[#bfe6da] h-[220px] mb-5">
      <iframe
        class="w-full h-full"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Street%20271%2C%20Phnom%20Penh%2C%20Cambodia&output=embed"
      ></iframe>

      <div class="absolute bottom-3 left-3 right-3 bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3">
        <span class="flex-shrink-0 w-9 h-9 rounded-full bg-[#1f9d63] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </span>
        <div>
          <p class="text-sm font-bold text-[#111827]">Office Address</p>
          <p class="text-[0.78rem] text-stone-500">Street 271, Phnom Penh, Cambodia</p>
        </div>
      </div>
    </div>

    <!-- Info rows -->
    <div class="flex flex-col gap-3 mb-6">
      <ContactInfoRow
        v-for="row in infoRows"
        :key="row.label"
        :icon="row.icon"
        :label="row.label"
        :value="row.value"
        :value2="row.value2"
      />
    </div>

    <!-- Social -->
    <div>
      <p class="text-sm font-bold text-[#111827] mb-3">Follow Us</p>
      <div class="flex gap-3">
        <a
          v-for="s in socials"
          :key="s.name"
          :href="s.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="s.name"
          class="w-10 h-10 rounded-full bg-white border border-stone-200 text-[#111827] flex items-center justify-center hover:bg-[#1f9d63] hover:text-white hover:border-[#1f9d63] transition-colors duration-200"
          v-html="s.svg"
        ></a>
      </div>
    </div>
  </div>
</template>

<script setup>
const panelRef = ref(null)
const visible = ref(false)
let observer = null

const infoRows = [
  {
    label: 'Office Timings',
    value: 'Monday – Saturday: 8am – 6pm',
    value2: 'Sunday: Closed',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`
  },
  {
    label: 'Email Address',
    value: 'hello@toothsy.com',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`
  },
  {
    label: 'Phone Number',
    value: '+855 12 345 6789',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.11-1.11a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
  },
  {
    label: 'Live Chat / Telegram',
    value: '@toothsyclinic',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`
  }
]

const socials = [
  { name: 'Facebook', href: '#', svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h-3a4 4 0 0 0-4 4v3H6v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>` },
  { name: 'Instagram', href: '#', svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/></svg>` },
  { name: 'Telegram', href: '#', svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>` },
  { name: 'TikTok', href: '#', svg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v10.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c0 2.5 2 4.5 4.5 4.5"/></svg>` }
]

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    visible.value = true
    return
  }
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  )
  if (panelRef.value) observer.observe(panelRef.value)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>