<template>
  <div
    ref="panelRef"
      <NuxtLink
    class="relative overflow-hidden border border-[#bfe6da] rounded-2xl h-[650px]"
  >

    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#e8fff5] to-white"></div>

    <!-- Text -->
    <div class="absolute top-8 left-8 z-10 max-w-xs">
      <h3 class="font-display text-3xl font-bold text-[#111827]">
        Meet Our Team
      </h3>

      <p class="mt-3 text-stone-600 leading-relaxed">
        Crafting memorable experiences with passion and creativity.
      </p>

        to="/about"
        class="mt-5 inline-block bg-[#1f9d63] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#036533]"
      >
        Learn More
      </NuxtLink>
    </div>


    <!-- Human Image -->
    <img
      src="/team-member.png"
      alt="Team Member"
      class="
        absolute
        bottom-0
        right-0
        h-[95%]
        object-contain
      "
    />

  </div>
</template>