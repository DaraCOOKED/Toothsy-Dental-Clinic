<template>
  <div class="min-h-screen flex flex-col bg-[#F7EBD5] text-stone-900">
    <header class="sticky top-0 z-50 bg-[#F7EBD5] text-amber-50">
    <div class="flex items-center justify-between  px-4 py-1">
      <div class="flex justify-center item-center align-center" >
        <NuxtLink to="/" class="text-lg justify-center font-bold ">
        <img src="/company-logo.png" class="h-10 mt-1.5 w-12" alt="Beer Crown 2026 logo">
      </NuxtLink>
      <NuxtLink to="/" class="text-lg justify-center font-bold flex justify-center tracking-wide">
        <img src="/beer-asso.png" class="h-13.5 w-14 flex" alt="Beer Crown 2026 logo">
      </NuxtLink>
      </div>
      

      <button @click="menuOpen = true" class="md:hidden flex flex-col gap-1" aria-label="Open menu">
        <span class="block w-6 h-1 bg-[#000]"></span>
        <span class="block w-6 h-1 bg-[#000]"></span>
        <span class="block w-6 h-1 bg-[#000]"></span>
      </button>

      <nav class="hidden md:flex items-center gap-6 text-[#036533] text-sm font-medium">
        <NuxtLink
          to="/"
          exact-active-class="text-amber-700 underline underline-offset-4"
          class="hover:text-amber-300 transition-colors"
        >Home</NuxtLink>

        <NuxtLink
          to="/brewerise"
          active-class="text-amber-700 underline underline-offset-4"
          class="hover:text-amber-300 transition-colors"
        >Breweries</NuxtLink>

        <NuxtLink
          to="/schedule"
          active-class="text-amber-700 underline underline-offset-4"
          class="hover:text-amber-300 transition-colors"
        >Schedule</NuxtLink>

        <NuxtLink
          to="/beer-style"
          active-class="text-amber-700 underline underline-offset-4"
          class="hover:text-amber-300 transition-colors"
        >Beer styles</NuxtLink>

        <NuxtLink
          to="/award"
          active-class="text-amber-700 underline underline-offset-4"
          class="hover:text-amber-300 transition-colors"
        >Awards</NuxtLink>

        <NuxtLink
          to="/sponsor"
          active-class="text-amber-700 underline underline-offset-4"
          class="hover:text-amber-300 transition-colors"
        >Sponsors</NuxtLink>

        <NuxtLink
  to="https://docs.google.com/forms/d/e/1FAIpQLScEjueBWitDWygOZkaHDnkADWIHhYdgZ-lH_u3EvKM2RzL1AA/viewform"
  target="_blank"
  rel="noopener noreferrer"
  class="ml-2 px-4 py-1.5 rounded-full bg-[#036533] border border-[#036533] text-white hover:text-amber-300 hover:border-amber-300 transition-colors"
>Vote here</NuxtLink>
      </nav>
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
    <div class="flex items-center justify-between px-2  border-b border-stone-100">
      <span class="font-semibold text-sm">
        <div class="flex justify-center align-center">
          <NuxtLink to="/" class="text-lg font-bold">
            <img src="/company-logo.png" class="h-13 mb-2 mt-1 w-14 " alt="Beer Crown 2026 logo">
          </NuxtLink>
        </div>
      </span>
      <button @click="menuOpen = false" aria-label="Close menu" class="text-amber-500 px-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/>
        </svg>
      </button>
    </div>

    <!-- Nav links -->
    <nav class="flex flex-col gap-5 px-5 py-6 text-1xl text-[#036533] font-medium">
      <NuxtLink
        to="/"
        exact-active-class="text-amber-600 underline underline-offset-4"
        @click="menuOpen = false"
        class="hover:text-amber-600"
      >Home</NuxtLink>
      <NuxtLink
        to="/brewerise"
        active-class="text-amber-600 underline underline-offset-4"
        @click="menuOpen = false"
        class="hover:text-amber-600"
      >Breweries</NuxtLink>
      <NuxtLink
        to="/schedule"
        active-class="text-amber-600 underline underline-offset-4"
        @click="menuOpen = false"
        class="hover:text-amber-600"
      >Schedule</NuxtLink>
      <NuxtLink
        to="/beer-style"
        active-class="text-amber-600 underline underline-offset-4"
        @click="menuOpen = false"
        class="hover:text-amber-600"
      >Beer Style</NuxtLink>
      <NuxtLink
        to="/award"
        active-class="text-amber-600 underline underline-offset-4"
        @click="menuOpen = false"
        class="hover:text-amber-600"
      >Award</NuxtLink>
      
      <NuxtLink
        to="/sponsor"
        active-class="text-amber-600 underline underline-offset-4"
        @click="menuOpen = false"
        class="hover:text-amber-600"
      >Sponsors</NuxtLink>
      
      
    </nav>

    <!-- Vote button -->
    <div class="flex justify-center pb-6">
      <NuxtLink class="px-8 py-2 rounded-full bg-[#036533] text-white text-sm font-medium hover:bg-amber-300
      "
                 to="https://docs.google.com/forms/d/e/1FAIpQLScEjueBWitDWygOZkaHDnkADWIHhYdgZ-lH_u3EvKM2RzL1AA/viewform"
 >
        
        Judge Here
      </NuxtLink>
    </div>

    <!-- Event info strip -->
   

    <!-- Footer signature, pushed to the bottom of the drawer -->
    <div class="mt-auto px-5 py-5 border-t border-stone-100">
      <p class="text-center text-[10px] text-stone-400 tracking-wide">
        Cambodia Craft Beer Crown 2026
      </p>
    </div>
  </aside>
</Transition>

    <main class="flex-1">
      <slot />
    </main>
  </div>
    <footer class="bg-[#F7EBD4] border-t  border-stone-400 py-4 px-4">
    <p class="text-center text-xs sm:text-sm text-[#354D24] font-medium tracking-wide">
      © {{ year }} CBCC — Cambodia Craft Beer Crown • Event: 15–17 August 2026 • Angkor Wat, Siem Reap
    </p>
  </footer>
</template>


<script setup>
const menuOpen = ref(false)

const year = new Date().getFullYear()

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
</style>