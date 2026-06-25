<template>
  <!-- Modal with fade + scale transition -->
<!-- Modal with fade + scale transition -->
<Teleport to="body">
  <Transition name="modal">
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      @click.self="showModal = false"
    >
      <div class="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl modal-box">
        <div class="flex flex-col items-center text-center">
          <div class="w-28 h-28 flex items-center justify-center mb-4 overflow-hidden">
            <img :src="logo" :alt="name" class="w-full h-full object-contain" />
          </div>
          <h3 class="text-lg font-bold uppercase text-[#354D24] tracking-wide mb-3">{{ name }}</h3>
          <p class="text-sm text-gray-600 leading-relaxed">{{ description }}</p>
          
          <a :href="facebook"
            target="_blank"
            class="mt-4 inline-flex items-center gap-1.5 text-sm text-[#354D24] font-semibold hover:underline"
          >
            <i class="fa-brands fa-facebook"></i> Facebook
          </a>
          <button
            class="mt-4 px-6 py-2 rounded-full bg-[#354D24] text-white text-xs font-semibold hover:bg-[#2a3d1c]"
            @click="showModal = false"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </Transition>
</Teleport>
  <!-- Card -->
  <div
    class="bg-white border border-[#354D24] rounded-2xl p-5 flex flex-col items-center text-center shadow-sm cursor-pointer transition-all duration-300 ease-out hover:shadow-[0_8px_24px_rgba(53,77,36,0.18)] hover:-translate-y-1"
    @click="showModal = true"
  >
    <div class="w-24 h-24 flex items-center justify-center mb-4 overflow-hidden">
      <img :src="logo" :alt="name" class="w-full h-full object-contain" />
    </div>
    <h3 class="text-sm font-bold uppercase text-[#354D24] tracking-wide">{{ name }}</h3>
    <p class="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">{{ description }}</p>
    
    <a :href="facebook"
      target="_blank"
      class="mt-3 inline-flex items-center gap-1.5 text-xs text-[#354D24] font-semibold hover:underline"
      @click.stop
    >
      <i class="fa-brands fa-facebook text-sm"></i> Facebook
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  name: String,
  description: String,
  logo: String,
  facebook: { type: String, default: '#' }
})

const showModal = ref(false)
</script>

<style scoped>
/* Modal overlay fade */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Modal box scale + fade (targets the inner div) */
.modal-enter-active .modal-box,
.modal-leave-active .modal-box {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease;
}
.modal-enter-from .modal-box,
.modal-leave-to .modal-box {
  transform: scale(0.85);
  opacity: 0;
}
</style>