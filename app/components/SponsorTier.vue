<template>
  <div
    class="relative rounded-3xl px-4 lg:px-6 pt-7 lg:pt-9 pb-6 lg:pb-8 border-2 transition-all duration-300"
    :class="[style.border, style.shadow, style.hoverShadow]"
  >
    <div class="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#F8EBD6] px-3">
      <span class=" rounded-full opacity-70" :class="style.line"></span>
      <h2
        class="text-[11px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.15em] whitespace-nowrap"
        :class="style.title"
      >
        {{ title }}
      </h2>
      <span class="rounded-full opacity-70" :class="style.line"></span>
    </div>

    <div class="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
      <SponsorLogo
        v-for="(sponsor, index) in sponsors"
        :key="sponsor.name + index"
        :logo="sponsor.logo"
        :name="sponsor.name"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  sponsors: { type: Array, required: true },
  variant: { type: String, default: 'platinum' } // platinum | gold | silver | partners
})

const tierStyles = {
  platinum: {
    border: 'border-[#D4AF37]/60',
    shadow: 'shadow-[0_6px_22px_-8px_rgba(212,175,55,0.45)]',
    hoverShadow: 'hover:shadow-[0_12px_30px_-8px_rgba(212,175,55,0.55)]',
    title: 'text-[#9a7b1f]',
    line: 'bg-[#D4AF37]',
  },
  gold: {
    border: 'border-[#C9962C]/60',
    shadow: 'shadow-[0_6px_22px_-8px_rgba(201,150,44,0.4)]',
    hoverShadow: 'hover:shadow-[0_12px_30px_-8px_rgba(201,150,44,0.5)]',
    title: 'text-[#a8782a]',
    line: 'bg-[#C9962C]',
  },
  silver: {
    border: 'border-[#A7A9AC]/60',
    shadow: 'shadow-[0_6px_22px_-8px_rgba(167,169,172,0.4)]',
    hoverShadow: 'hover:shadow-[0_12px_30px_-8px_rgba(167,169,172,0.5)]',
    title: 'text-[#7c7e81]',
    line: 'bg-[#A7A9AC]',
  },
  partners: {
    border: 'border-[#2F4A2F]/45',
    shadow: 'shadow-[0_6px_22px_-8px_rgba(47,74,47,0.35)]',
    hoverShadow: 'hover:shadow-[0_12px_30px_-8px_rgba(47,74,47,0.45)]',
    title: 'text-[#2F4A2F]',
    line: 'bg-[#2F4A2F]',
  },
}

const style = computed(() => tierStyles[props.variant] || tierStyles.platinum)
</script>