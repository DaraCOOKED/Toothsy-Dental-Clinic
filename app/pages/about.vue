<template>
  <section class="bg-[#FFFAE1] min-h-screen py-10 px-4">
    <div class="max-w-7xl mx-auto">

      <!-- Page Title -->
      <h1 class="text-center text-3xl md:text-4xl font-bold mb-12 underline">About Us</h1>

      <!-- Mission Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-start">
        <div>
          <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
          <p class="text-sm leading-7 text-gray-600 font-sans">
            At Northern Heights Dental, people come first. We help each of our patients
            to achieve optimal wellness and health by using a whole body approach to oral
            health. This means not just focusing on cavities, but focusing on:
            cranio-facial development, bite and joint balance, oral flora, proper muscle
            balance/function, and bio-compatibility of dental materials. Great care and
            planning ensures that everything we do helps promote overall health and well being.
          </p>
          <h3 class="text-lg font-bold mt-6 mb-3">
            More Than Anything Else We Love Creating Happy, Healthy Smiles.
          </h3>
          <p class="text-sm leading-7 text-gray-600 font-sans">
            We work hard to stay up to date with the most advanced techniques and
            technologies to ensure that our patients receive the best care possible.
          </p>
        </div>
        <div class="rounded-2xl overflow-hidden h-64 md:h-100 group relative">
          <img :src="clinicImg" alt="Dentist at work"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div
            class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
        </div>
      </div>

      <!-- Meet Our Specialists -->
      <div class="bg-[#f5f0d8] -mx-4 px-4 md:px-10 py-16">
        <h2 class="text-center text-2xl md:text-3xl font-bold mb-2">Meet Our Specialists</h2>
        <p class="text-center text-sm text-gray-500 font-sans mb-12">
          We use only the best quality materials on the market in<br />
          order to provide the best products to our patients.
        </p>

        <div class="max-w-5xl mx-auto">
          <div v-for="doctor in doctors" :key="doctor.name"
            class="grid grid-cols-1 sm:grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] gap-6 md:gap-8 mb-12 items-start">
            <div
              class="rounded-xl overflow-hidden h-56 sm:h-64 w-full sm:w-[180px] md:w-[220px] group relative mx-auto sm:mx-0">
              <img :src="doctor.photo" :alt="doctor.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute inset-0 bg-[#5bbfa0]/0 group-hover:bg-[#5bbfa0]/40 transition-all duration-500" />
              <div
                class="absolute bottom-0 left-0 right-0 bg-[#5bbfa0] text-white text-xs font-sans px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                {{ doctor.name }}
              </div>
            </div>
            <div class="text-center sm:text-left">
              <h3 class="text-lg md:text-xl font-bold text-gray-900">
                {{ doctor.name }}
                <span class="font-normal text-sm text-gray-500 ml-2">( {{ doctor.specialty }} )</span>
              </h3>
              <p class="text-sm leading-7 text-gray-600 font-sans my-3">{{ doctor.bio }}</p>
              <button
                class="bg-[#5bbfa0] text-white rounded-full px-6 py-2.5 text-sm font-sans shadow-md hover:shadow-[#5bbfa0]/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Book an appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Services -->
      <div class="bg-[#6fbfaa] -mx-4 px-4 md:px-10 py-12">
        <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div v-for="service in services" :key="service.title" class="bg-white rounded-xl p-7 text-center">
            <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4" />
            <h3 class="font-bold text-gray-900 font-sans mb-2">{{ service.title }}</h3>
            <p class="text-sm text-gray-500 font-sans leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center py-16">
        <h2 class="text-2xl md:text-3xl font-extrabold leading-tight mb-3">
          We're Welcoming New Patients<br />And Can't Wait To Meet You.
        </h2>
        <p class="text-sm text-gray-500 font-sans">
          We use only the best quality materials on the market in<br />
          order to provide the best products to our patients.
        </p>
        <div class="mt-8 rounded-xl overflow-hidden h-60 md:h-150">
          <video class="w-full h-full object-cover" autoplay loop muted playsinline>
            <source src="~/assets/vedios/clinic.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <!-- Footer -->
      <div class="border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 font-sans">
        <p class="text-xs text-gray-400 text-center sm:text-left">All rights reserved @ uifry.com | Terms and conditions
          apply!</p>
        <nav class="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-700">
          <a href="#">Home</a>
          <a href="#">Service</a>
          <a href="#">Blogs</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>

    </div>
  </section>
</template>

<script setup>
import clinicImg from '~/assets/images/clinic.png'
import drBrentImg from '~/assets/images/dr-brent.png'
import drVashiImg from '~/assets/images/dr-vashi.png'
import drConnorsImg from '~/assets/images/dr-connors.png'
import drFourthImg from '~/assets/images/dr-fourth.png'

const doctors = [
  {
    name: 'DR. Brent',
    specialty: 'Specialty in General & Cosmetic Service',
    photo: drBrentImg,
    bio: 'Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures. Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.'
  },
  {
    name: 'DR. Ashish J. Vashi',
    specialty: 'Specialty in Implant Dentistry',
    photo: drVashiImg,
    bio: 'Dr. Ashish J. Vashi has been practicing general, cosmetic and implant dentistry in California for over 18 years.'
  },
  {
    name: 'Dr. James Connors',
    specialty: 'Specialty in Oral Surgeon',
    photo: drConnorsImg,
    bio: 'When it comes to oral surgeons, few can compare to Dr. James Connors.'
  },
  {
    name: 'Dr. Fourth Doctor',
    specialty: 'Specialty in ...',
    photo: drFourthImg,
    bio: 'Bio for the fourth doctor...'
  }
]

const services = [
  { title: 'Root Canal Treatment', description: 'Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.' },
  { title: 'Cosmetic Dentist', description: 'Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.' },
  { title: 'Dental Implants', description: "A dental implant is an artificial tooth root that's placed into your jaw to hold a prosthetic tooth or bridge." }
]
</script>