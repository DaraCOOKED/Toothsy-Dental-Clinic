<template>
  <div class="min-h-screen flex flex-col bg-[#FFFAE1] text-stone-900">

    <header
      class="sticky top-0 z-50 transition-colors duration-300"
      :class="scrolled ? 'bg-[#FFFAE1]' : 'bg-transparent'"
    >
  <div class="flex items-center justify-between px-4 py-1 md:px-8">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 rounded-xl px-3 py-1.5">
          <img src="/companylogo.png" class="h-16 w-17" alt="Toothsy Dental Clinic logo">
        </NuxtLink>

        <!-- Mobile menu button -->
        <button @click="menuOpen = true" class="md:hidden flex flex-col gap-1" aria-label="Open menu">
          <span class="block w-6 h-0.5 bg-[#1a1a1a]"></span>
          <span class="block w-6 h-0.5 bg-[#1a1a1a]"></span>
          <span class="block w-6 h-0.5 bg-[#1a1a1a]"></span>
        </button>

        <!-- Desktop nav pill -->
        <nav ref="navRef" class="hidden md:flex relative items-center gap-1 bg-[#8FE3B8] rounded-full p-1.5 text-sm font-medium">

          <!-- sliding highlight, sits behind whichever link is active -->
          <span class="nav-pill absolute top-1.5 bottom-1.5 left-0 rounded-full bg-[#111827]" :style="pillStyle"></span>

          <NuxtLink
            v-for="(link, i) in navLinks"
            :key="link.to"
            :ref="(el) => setLinkRef(el, i)"
            :to="link.to"
            class="relative z-10 px-5 py-2 rounded-full transition-colors duration-300"
            :class="isActive(link) ? 'text-white' : 'text-[#0d3b24] hover:text-[#036533]'"
          >{{ link.label }}</NuxtLink>

          
        </nav>
        <div>
          <NuxtLink
            to="https://docs.google.com/forms/d/e/1FAIpQLSdqhTMChYM1xTzOyuM-oESSiuGBy84d88DVS7E-RfLvCeUyaQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            class="relative z-10 ml-1 px-5 py-2 rounded-full bg-[#1f9d63] text-white hover:bg-[#036533] transition-colors duration-300"
          >Book Now</NuxtLink>
        </div>
      </div>
    </header>

    <!-- Mobile backdrop -->
    <Transition name="fade">
      <div
        v-if="menuOpen"
        class="md:hidden fixed inset-0 z-[60] bg-stone-900/40"
        @click="menuOpen = false"
      ></div>
    </Transition>

    <!-- Mobile sidebar -->
    <Transition name="slide">
      <aside
        v-if="menuOpen"
        class="md:hidden fixed inset-y-0 left-0 z-[70] w-80 max-w-[85%] bg-white shadow-xl overflow-y-auto flex flex-col"
      >
        <!-- Drawer header -->
        <div class="flex items-center justify-between px-2 border-b border-stone-100">
          <div class="flex justify-center items-center">
            <NuxtLink to="/" class="text-lg font-bold" @click="menuOpen = false">
              <img src="/companylogo.png" class="h-13 mb-2 mt-1 w-14" alt="Toothsy Dental Clinic logo">
            </NuxtLink>
          </div>
          <button @click="menuOpen = false" aria-label="Close menu" class="text-amber-500 px-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <!-- Nav links -->
        <nav class="flex flex-col gap-5 px-5 py-6 text-xl text-[#036533] font-medium">
          <NuxtLink
            to="/"
            exact-active-class="text-amber-600 underline underline-offset-4"
            @click="menuOpen = false"
            class="hover:text-amber-600"
          >Home</NuxtLink>
          <NuxtLink
            to="/service"
            active-class="text-amber-600 underline underline-offset-4"
            @click="menuOpen = false"
            class="hover:text-amber-600"
          >Services</NuxtLink>
          <NuxtLink
            to="/blog"
            active-class="text-amber-600 underline underline-offset-4"
            @click="menuOpen = false"
            class="hover:text-amber-600"
          >Blog</NuxtLink>
          <NuxtLink
            to="/about"
            active-class="text-amber-600 underline underline-offset-4"
            @click="menuOpen = false"
            class="hover:text-amber-600"
          >About</NuxtLink>
          <NuxtLink
            to="/contact"
            active-class="text-amber-600 underline underline-offset-4"
            @click="menuOpen = false"
            class="hover:text-amber-600"
          >Contact Us</NuxtLink>
        </nav>

        <!-- Book button -->
        <div class="flex justify-center pb-6">
          <NuxtLink
            class="px-8 py-2 rounded-full bg-[#036533] text-white text-sm font-medium hover:bg-amber-300"
            to="https://docs.google.com/forms/d/e/1FAIpQLScEjueBWitDWygOZkaHDnkADWIHhYdgZ-lH_u3EvKM2RzL1AA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            @click="menuOpen = false"
          >
            Book Now
          </NuxtLink>
        </div>

        <!-- Footer signature, pushed to the bottom of the drawer -->
        <div class="mt-auto px-5 py-5 border-t border-stone-100">
          <p class="text-center text-[10px] text-stone-400 tracking-wide">
            Toothsy Dental Clinic
          </p>
        </div>
      </aside>
    </Transition>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="bg-[#F7EBD4] border-t border-stone-400 py-4 px-4">
      <p class="text-center text-xs sm:text-sm text-[#354D24] font-medium tracking-wide">
        © {{ year }} Toothsy Dental Clinic — Your Smile, Our Priority
      </p>
    </footer>

  </div>
</template>

<script setup>
const route = useRoute()
const menuOpen = ref(false)
const year = new Date().getFullYear()

const navLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/service', label: 'Services' },
  { to: '/blog', label: 'Blogs' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
]

const navRef = ref(null)
const linkEls = ref([])
const pillStyle = ref({ width: '0px', transform: 'translateX(0px)', opacity: 0 })

function setLinkRef(el, i) {
  // NuxtLink is a component -> ref gives instance with $el. Plain elements don't have it.
  linkEls.value[i] = el?.$el ?? el ?? null
}

function isActive(link) {
  return link.exact ? route.path === link.to : route.path.startsWith(link.to)
}

function updatePill() {
  const i = navLinks.findIndex(isActive)
  const el = linkEls.value[i]
  if (!el) {
    pillStyle.value = { ...pillStyle.value, opacity: 0 }
    return
  }
  pillStyle.value = {
    width: `${el.offsetWidth}px`,
    transform: `translateX(${el.offsetLeft}px)`,
    opacity: 1
  }
}

let resizeObserver
onMounted(() => {
  nextTick(updatePill)
  resizeObserver = new ResizeObserver(updatePill)
  if (navRef.value) resizeObserver.observe(navRef.value)
})

onBeforeUnmount(() => resizeObserver?.disconnect())

watch(() => route.path, () => nextTick(updatePill))
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.nav-pill {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              width 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.2s ease;
}

@media (prefers-reduced-motion: reduce) {
  .nav-pill { transition: none; }
}
</style>