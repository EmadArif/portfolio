<script setup>

import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Works from '@/components/Works.vue'
import Skills from '@/components/Skills.vue'
import Services from '@/components/Services.vue'
import FAQ from '@/components/FAQ.vue'
import Footer from '@/components/Footer.vue'


</script>

<template>

  <Navbar />
  <Hero />
  <About />
  <Works />
  <Skills />
  <Services />
  <FAQ />
  <Footer />
  <a href="#home"
    class="btn-up w-10 h-10 bg-second right-10 bottom-10 z-50 fixed flex justify-center items-center">
    <i class="fa-solid fa-arrow-up text-white"></i>
  </a>

</template>

<style scoped>
.btn-up {
  backdrop-filter: blur(6px);
}
</style>
