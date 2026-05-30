<template>
  <div id="app" :class="{ 'bg-dark2': nightMode, 'bg-light': !nightMode }">
    <Navbar @scroll="scrollTo" @nightMode="toggleNightMode" :nightMode="nightMode" />

    <Home id="home" :nightMode="nightMode" />
    <About id="about" :nightMode="nightMode" />
    <Skills id="skills" :nightMode="nightMode" />
    <Portfolio id="portfolio" :nightMode="nightMode" />
    <Contact id="contact" :nightMode="nightMode" />

    <Footer :nightMode="nightMode" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '../src/componets/NavBar.vue'
import Home from '../src/componets/Home.vue'
import About from '../src/componets/About.vue'
import Skills from '../src/componets/Skills.vue'
import Portfolio from '../src/componets/Portfolio.vue'
import Contact from '../src/componets/Contact.vue'
import Footer from '../src/componets/Footer.vue'

// Assuming info.js exports a config object. Fallback to false (light mode) if not.
import info from '../info'
const nightMode = ref(info.config?.use_night_mode || false)

// Receives the toggle event from Navbar.vue
const toggleNightMode = (mode) => {
  nightMode.value = mode
}

// Handles smooth scrolling to sections when Navbar links are clicked
const scrollTo = (ele) => {
  if (ele === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    const element = document.getElementById(ele)
    if (element) {
      window.scrollTo({ top: element.offsetTop - 50, behavior: 'smooth' })
    }
  }
}
</script>

<style>
/* Global styles can go here if needed */
html {
  scroll-behavior: smooth;
}
</style>
