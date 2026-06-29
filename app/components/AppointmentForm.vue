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

const sendEmail = async () => {
  try {
    await emailjs.send(
      config.public.emailjsServiceId,
      config.public.emailjsTemplateId,
      form,
      config.public.emailjsPublicKey
    );

    alert("Appointment request sent!");

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

  alert(error?.text || error?.message || "Unknown error");
}
};
</script>

<template>
  <div class="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
    <h2 class="text-2xl font-bold mb-6">
      Book Appointment
    </h2>

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
        class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Book Appointment
      </button>

    </form>
  </div>
</template>