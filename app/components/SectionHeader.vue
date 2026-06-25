<template>
  <div class="text-center mt-5 mb-3.5">
    <h1
      class="text-4xl sm:text-5xl md:text-5xl  text-[#354D24]"
      style="font-family: 'Bebas Neue', sans-serif;"
    >
      <slot />
    </h1>
    <div
        class="flex items-center justify-center gap-4 mt-3 md:mt-5 transition-all duration-700 ease-out delay-300"
   >
        <div class="h-px w-20 sm:w-40 md:w-59 bg-[#354D24] opacity-40"></div>
        <img
          src="/linelogo.png"
          alt="Logo"
          class="w-10 h-10 sm:w-7 sm:h-7 md:w-9 md:h-9 object-contain transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        />
        <div class="h-px w-20 sm:w-40 md:w-56 bg-[#354D24] opacity-40"></div>
      </div>
  </div>
</template>