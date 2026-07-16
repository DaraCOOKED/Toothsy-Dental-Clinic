<script setup>
import AppointmentForm from "~/components/AppointmentForm.vue"; // Change if your component name is different

definePageMeta({
  layout: "blank",
});

useSeoMeta({
  title: "Book Appointment",
  description: "Book your appointment with Toothsy Clinic.",
});
</script>

<template>
    
  <main
  
    class="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-[#F8F6F2] via-[#F4F0DC] to-[#F8F6F2]"
  >
  
    <div class="w-full max-w-6xl">
      <div
        class="grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl"
      >
        <!-- Left Side -->
        <div
          class="hidden lg:flex flex-col bg-[#1f9d63] text-white p-12"
        >
         <div class="flex items-center mt-10 gap-5 mb-10">
  <div class="bg-white rounded-2xl p-2 shadow-lg">
    <img
      src="/companylogo.png"
      alt="Toothsy Dental Clinic Logo"
      class="w-16 h-16 object-contain"
    />
  </div>

  <div>
    <span class="text-white text-sm tracking-widest uppercase">
         Toothsy Dental Clinic
    </span>

    <h2 class="text-lg justify-center item-center align-center font-medium leading-tight text-white">
      Let
      <span class="text-2xl font-lg flex item-center align-center text-center">
        Your Smile
      </span>
    </h2>

    <p class="text-lg text-[#ffd94b] font-medium">
      Shine
    </p>
  </div>
</div>  

          <h1 class="text-5xl font-bold leading-tight">
            Book Your <br />
            Appointment
          </h1>

          <p class="mt-6 text-white/80 leading-8">
            Schedule your dental visit in just a few minutes.
            Our experienced dentists are ready to provide you with
            professional, comfortable, and personalized dental care.
          </p>

          <div class="mt-10 space-y-5">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
              >
                ✓
              </div>
              <span>Experienced Dental Specialists</span>
            </div>

            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
              >
                ✓
              </div>
              <span>Fast Appointment Confirmation</span>
            </div>

            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
              >
                ✓
              </div>
              <span>Modern Dental Equipment</span>
            </div>
          </div>
        </div>

        <!-- Right Side -->
        <div class="p-8 lg:p-12">
            <NuxtLink
  to="/"
  class="inline-flex items-center gap-2 text-[#1f9d63] mb-2 hover:text-[#8FE3B8] transition-colors"
>
  ← Back to Home
</NuxtLink>
          <AppointmentForm />
        </div>
      </div>
    </div>
  </main>
</template>