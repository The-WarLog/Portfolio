<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div class="text-center" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
        <span class="title text-center" :class="{ pgray: !nightMode, 'text-light': nightMode }">
          about me.
        </span>
      </div>
      <hr width="50%" :class="{ pgray: !nightMode, 'bg-secondary': nightMode }" />
      <div class="row">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="educationData" :nightMode="nightMode" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="experienceData" :nightMode="nightMode" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Timeline from './helpers/Timeline.vue'
import info from '../../info'

defineProps({
  nightMode: {
    type: Boolean,
    default: false,
  },
})

// Clean, separated objects for the Timeline component
const educationData = {
  title: 'Education',
  data: info.education,
}

const experienceData = {
  title: 'Experience',
  data: info.experience,
}
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
</style>
