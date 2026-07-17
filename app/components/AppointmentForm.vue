<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import emailjs from "@emailjs/browser";
import { serviceTitles } from '~/composables/useServices'

const config = useRuntimeConfig();

const props = defineProps({
  preselectedService: {
    type: String,
    default: ''
  }
})

const form = reactive({
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  service: "",
  message: "",
  // Honeypot field - hidden from users, filled by bots
  website: "",
});

const popup = reactive({
  show: false,
  type: "success",
});

const isSubmitting = ref(false);
const errors = reactive({});

// Service options from shared composable
const serviceOptions = serviceTitles

// Auto-select service from query param when component mounts
onMounted(() => {
  if (props.preselectedService && serviceOptions.includes(props.preselectedService)) {
    form.service = props.preselectedService
  }
})

// Also watch for prop changes (e.g., if navigating without full reload)
watch(() => props.preselectedService, (newVal) => {
  if (newVal && serviceOptions.includes(newVal)) {
    form.service = newVal
  }
})

const validateForm = () => {
  errors.value = {};
  let isValid = true;

  if (!form.name.trim()) {
    errors.name = "Full name is required";
    isValid = false;
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }

  if (!form.phone.trim()) {
    errors.phone = "Phone number is required";
    isValid = false;
  } else if (!/^[\d\s\-\+\(\)]{8,}$/.test(form.phone)) {
    errors.phone = "Please enter a valid phone number";
    isValid = false;
  }

  if (!form.date) {
    errors.date = "Preferred date is required";
    isValid = false;
  } else {
    const selectedDate = new Date(form.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.date = "Please select a future date";
      isValid = false;
    }
  }

  if (!form.time) {
    errors.time = "Preferred time is required";
    isValid = false;
  }

  if (!form.service) {
    errors.service = "Please select a service";
    isValid = false;
  }

  // Honeypot check - if filled, likely a bot
  if (form.website) {
    console.warn("Honeypot triggered");
    return false;
  }

  return isValid;
};

const sendEmail = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;

  try {
    await emailjs.send(
      config.public.emailjsServiceId,
      config.public.emailjsTemplateId,
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        date: form.date,
        time: form.time,
        service: form.service,
        message: form.message,
      },
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
      website: "",
    });
    errors.value = {};
  } catch (error) {
    console.error(error);
    popup.type = "error";
    popup.show = true;
  } finally {
    isSubmitting.value = false;
  }
};

const closePopup = () => {
  popup.show = false;
};

// Set min date to today for date input
const minDate = new Date().toISOString().split("T")[0];

// Auto-select service from query param when component mounts
onMounted(() => {
  if (props.preselectedService && serviceOptions.includes(props.preselectedService)) {
    form.service = props.preselectedService
  }
})

// Also watch for prop changes (e.g., if navigating without full reload)
watch(() => props.preselectedService, (newVal) => {
  if (newVal && serviceOptions.includes(newVal)) {
    form.service = newVal
  }
})
</script>

<template>
  <div class="max-w-xl bg-white p-1">
    <h2 class="text-2xl font-bold mb-6">Book Appointment</h2>

    <form @submit.prevent="sendEmail" class="space-y-5" novalidate>
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Full Name"
          class="w-full border border-gray-300 rounded-lg px-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#8FE3B8] focus:border-transparent transition-all"
          :class="{ 'border-red-400 focus:ring-red-200': errors.name }"
          required
          autocomplete="name"
          inputmode="text"
        />
        <p v-if="errors.name" class="mt-1.5 text-sm text-red-500" role="alert">{{ errors.name }}</p>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="w-full border border-gray-300 rounded-lg px-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#8FE3B8] focus:border-transparent transition-all"
          :class="{ 'border-red-400 focus:ring-red-200': errors.email }"
          required
          autocomplete="email"
          inputmode="email"
        />
        <p v-if="errors.email" class="mt-1.5 text-sm text-red-500" role="alert">{{ errors.email }}</p>
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          placeholder="Phone Number"
          class="w-full border border-gray-300 rounded-lg px-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#8FE3B8] focus:border-transparent transition-all"
          :class="{ 'border-red-400 focus:ring-red-200': errors.phone }"
          required
          autocomplete="tel"
          inputmode="tel"
        />
        <p v-if="errors.phone" class="mt-1.5 text-sm text-red-500" role="alert">{{ errors.phone }}</p>
      </div>

      <div>
        <label for="date" class="block text-sm font-medium text-gray-700 mb-1.5">Preferred Date</label>
        <input
          id="date"
          v-model="form.date"
          type="date"
          :min="minDate"
          class="w-full border border-gray-300 rounded-lg px-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#8FE3B8] focus:border-transparent transition-all appearance-none"
          :class="{ 'border-red-400 focus:ring-red-200': errors.date }"
          required
          autocomplete="off"
        />
        <p v-if="errors.date" class="mt-1.5 text-sm text-red-500" role="alert">{{ errors.date }}</p>
      </div>

      <div>
        <label for="time" class="block text-sm font-medium text-gray-700 mb-1.5">Preferred Time</label>
        <select
          id="time"
          v-model="form.time"
          class="w-full border border-gray-300 rounded-lg px-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#8FE3B8] focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
          :class="{ 'border-red-400 focus:ring-red-200': errors.time }"
          required
        >
          <option value="">Select Time</option>
          <option value="08:00">8:00 AM</option>
          <option value="08:30">8:30 AM</option>
          <option value="09:00">9:00 AM</option>
          <option value="09:30">9:30 AM</option>
          <option value="10:00">10:00 AM</option>
          <option value="10:30">10:30 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="11:30">11:30 AM</option>
          <option value="12:00">12:00 PM</option>
          <option value="12:30">12:30 PM</option>
          <option value="13:00">1:00 PM</option>
          <option value="13:30">1:30 PM</option>
          <option value="14:00">2:00 PM</option>
          <option value="14:30">2:30 PM</option>
          <option value="15:00">3:00 PM</option>
          <option value="15:30">3:30 PM</option>
          <option value="16:00">4:00 PM</option>
          <option value="16:30">4:30 PM</option>
          <option value="17:00">5:00 PM</option>
          <option value="17:30">5:30 PM</option>
        </select>
        <p v-if="errors.time" class="mt-1.5 text-sm text-red-500" role="alert">{{ errors.time }}</p>
      </div>

      <div>
        <label for="service" class="block text-sm font-medium text-gray-700 mb-1.5">Service</label>
        <select
          id="service"
          v-model="form.service"
          class="w-full border border-gray-300 rounded-lg px-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#8FE3B8] focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
          :class="{ 'border-red-400 focus:ring-red-200': errors.service }"
          required
        >
          <option value="">Select Service</option>
          <option v-for="svc in serviceOptions" :key="svc" :value="svc">{{ svc }}</option>
        </select>
        <p v-if="errors.service" class="mt-1.5 text-sm text-red-500" role="alert">{{ errors.service }}</p>
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-1.5">Message (Optional)</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          placeholder="Message"
          class="w-full border border-gray-300 rounded-lg px-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-[#8FE3B8] focus:border-transparent transition-all resize-y"
          autocomplete="off"
        ></textarea>
      </div>

      <!-- Honeypot field - hidden from users -->
      <div class="hidden" aria-hidden="true">
        <label for="website">Website</label>
        <input
          id="website"
          v-model="form.website"
          type="text"
          tabindex="-1"
          autocomplete="off"
        />
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-[#8FE3B8] text-white py-4 px-6 rounded-lg font-semibold text-base hover:bg-[#1f9d63] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#8FE3B8] focus:outline-none focus:ring-2 focus:ring-[#8FE3B8] focus:ring-offset-2 min-h-[48px] touch-manipulation"
      >
        <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
          <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </span>
        <span v-else>Book Appointment</span>
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
        <button
          @click="closePopup"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2"
          aria-label="Close"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mx-auto mb-5">
          <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>

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
          class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors min-h-[48px] touch-manipulation"
        >
          Done, Got It!
        </button>
      </div>

      <!-- Error Popup -->
      <div
        v-else
        class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center relative"
      >
        <button
          @click="closePopup"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2"
          aria-label="Close"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mx-auto mb-5">
          <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
        </div>

        <h3 class="text-xl font-bold text-gray-800 mb-2">Oops, Something Went Wrong</h3>
        <p class="text-gray-500 text-sm leading-relaxed mb-6">
          We're sorry for the inconvenience. Your request could not be sent at this time. Please check your internet connection and try again, or contact us directly.
        </p>

        <div class="flex gap-3">
          <button
            @click="closePopup"
            class="flex-1 border border-gray-200 text-gray-600 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[48px] touch-manipulation"
          >
            Cancel
          </button>
          <button
            @click="closePopup(); sendEmail();"
            class="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-colors min-h-[48px] touch-manipulation"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Popup animations */
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

/* iOS Safari date/time input styling */
input[type="date"]::-webkit-calendar-picker-indicator,
input[type="time"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  opacity: 0.6;
  filter: invert(0.4) sepia(1) saturate(5) hue-rotate(80deg);
  background: no-repeat center;
  background-size: 20px 20px;
  padding: 4px;
  margin-right: 4px;
}
input[type="date"]::-webkit-calendar-picker-indicator:hover,
input[type="time"]::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}

/* Remove default spinner on number inputs (not used here but good practice) */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Better select styling on iOS */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;
  padding-right: 44px;
}

/* Ensure touch targets are at least 44x44px */
button,
input,
select,
textarea {
  min-height: 44px;
}

/* Prevent zoom on iOS when focusing inputs (font-size >= 16px) */
@media screen and (max-width: 768px) {
  input, select, textarea {
    font-size: 16px !important;
  }
}

/* Focus visible for accessibility */
:focus-visible {
  outline: 2px solid #8FE3B8;
  outline-offset: 2px;
}

/* Smooth transitions for form elements */
input, select, textarea {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

/* Disable autocomplete dropdown styling issues on iOS */
input[autocomplete="off"]::-webkit-contacts-auto-fill-button,
input[autocomplete="off"]::-webkit-credentials-auto-fill-button {
  display: none;
}
</style>



