<template>
  <div class="logo-div">
    <span class="logo-title-name" :class="{ pgray: !nightMode, 'text-light': nightMode }">{{
      name
    }}</span>
    <span class="logo-title-dot pblue">{{ dot }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import info from '../../../info'

// Define props using the Composition API macro
defineProps({
  nightMode: {
    type: Boolean,
    default: false,
  },
})

// Define reactive data variables using ref
const name = ref(info.logo_name)
const dot = ref('.')
</script>

<style scoped>
.logo-div:hover .logo-title-name {
  letter-spacing: 0px;
  transition: 0.5s all;
}

.logo-title-name {
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 2px;
  transition: 0.5s all;
}

.logo-title-dot {
  font-size: 30px;
  font-weight: 700;
}
</style>
