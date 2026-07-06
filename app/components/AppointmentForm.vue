<script setup>
import { reactive } from "vue";
import emailjs from "@emailjs/browser";

const config = useRuntimeConfig();

const form = reactive({
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  service: "",
  message: "",
});

const popup = reactive({
  show: false,
  type: "success",
});

const sendEmail = async () => {
  try {
    await emailjs.send(
      config.public.emailjsServiceId,
      config.public.emailjsTemplateId,
      form,
      config.public.emailjsPublicKey
    );

    popup.type = "success";
    popup.show = true;

    Object.assign(form, {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    popup.type = "error";
    popup.show = true;
  }
};

const closePopup = () => {
  popup.show = false;
};
</script>

<template>
  <div class="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
    <h2 class="text-2xl font-bold mb-6">Book Appointment</h2>

    <form @submit.prevent="sendEmail" class="space-y-4">
      <input
        v-model="form.name"
        type="text"
        placeholder="Full Name"
        class="w-full border rounded-lg p-3"
        required
      />

      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        class="w-full border rounded-lg p-3"
        required
      />

      <input
        v-model="form.phone"
        type="text"
        placeholder="Phone Number"
        class="w-full border rounded-lg p-3"
        required
      />

      <input
        v-model="form.date"
        type="date"
        class="w-full border rounded-lg p-3"
        required
      />

      <input
        v-model="form.time"
        type="time"
        class="w-full border rounded-lg p-3"
        required
      />

      <select
        v-model="form.service"
        class="w-full border rounded-lg p-3"
        required
      >
        <option value="">Select Service</option>
        <option>General Checkup</option>
        <option>Teeth Cleaning</option>
        <option>Tooth Extraction</option>
        <option>Dental Filling</option>
        <option>Braces Consultation</option>
      </select>

      <textarea
        v-model="form.message"
        rows="4"
        placeholder="Message"
        class="w-full border rounded-lg p-3"
      ></textarea>

      <button
        type="submit"
        class="w-full bg-[#8FE3B8] text-white py-3 rounded-lg hover:bg-[#1f9d63] transition-colors font-semibold"
      >
        Book Appointment
      </button>
    </form>
  </div>

  <!-- Popup Overlay -->
  <Transition name="popup">
    <div
      v-if="popup.show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      @click.self="closePopup"
    >
      <!-- Success Popup -->
      <div
        v-if="popup.type === 'success'"
        class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center relative"
      >
        <!-- Close -->
        <button
          @click="closePopup"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Icon -->
        <div class="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mx-auto mb-5">
          <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <!-- Text -->
        <h3 class="text-xl font-bold text-gray-800 mb-2">Thank You So Much! 🙏</h3>
        <p class="text-gray-500 text-sm leading-relaxed mb-1">
          Your appointment request has been received successfully.
        </p>
        <p class="text-gray-500 text-sm leading-relaxed mb-6">
          We truly appreciate you choosing our service. Our team will review your request and get in touch with you shortly to confirm your booking.
        </p>

        <div class="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-6 text-sm text-green-700">
          📩 Please check your email for a confirmation message.
        </div>

        <button
          @click="closePopup"
          class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          Done, Got It!
        </button>
      </div>

      <!-- Error Popup -->
      <div
        v-else
        class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center relative"
      >
        <!-- Close -->
        <button
          @click="closePopup"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Icon -->
        <div class="flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mx-auto mb-5">
          <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
        </div>

        <!-- Text -->
        <h3 class="text-xl font-bold text-gray-800 mb-2">Oops, Something Went Wrong</h3>
        <p class="text-gray-500 text-sm leading-relaxed mb-6">
          We're sorry for the inconvenience. Your request could not be sent at this time. Please check your internet connection and try again, or contact us directly.
        </p>

        <div class="flex gap-3">
          <button
            @click="closePopup"
            class="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            @click="closePopup(); sendEmail();"
            class="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.popup-enter-active,
.popup-leave-active {
  transition: all 0.3s ease;
}
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}
.popup-enter-from .bg-white,
.popup-leave-to .bg-white {
  transform: scale(0.9);
}
.popup-enter-active .bg-white,
.popup-leave-active .bg-white {
  transition: transform 0.3s ease;
}
</style>



