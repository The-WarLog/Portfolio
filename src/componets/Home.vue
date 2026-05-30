<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="pt-5 p-st">
    <div class="container" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
      <div class="row align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
          <img :src="picture" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
          <span class="home-title" :class="{ pgray: !nightMode, 'text-light': nightMode }"
            >hello there!</span
          >
          <div>
            <p v-html="description"></p>
          </div>
          <div class="text-center pb-4">
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('linkedin')"
              v-tooltip.bottom="'LinkedIn'"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('github')"
              v-tooltip.bottom="'GitHub'"
            >
              <i class="fab fa-github"></i>
            </button>

            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('resume')"
              v-tooltip.bottom="'Resume'"
            >
              <i class="fa fa-file"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Wave from './helpers/Wave.vue'
import info from '../../info.ts'

import { ref } from 'vue'
const props = defineProps({
  nightMode: {
    type: Boolean,
  },
})
//Data From the info
const picture = info.flat_picture
const description = info.description
const name = info.name
const linkedin = info.links.linkedin
const github = info.links.github

const resume = info.links.resume
//methods top open each link
function open(link: string) {
  if (link === 'linkedin') {
    window.open(linkedin) // the second parameter '_blank' opens the link in a new tab
  } else if (link === 'github') {
    window.open(github)
  } else if (link === 'resume') {
    window.open(resume)
  }
}
</script>
<style scoped>
.home-title {
  font-size: 28px;
  font-weight: 500;
}

img {
  max-width: 300px;
  margin-top: 60px;
  transform: rotateY(180deg);
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.fa {
  font-size: 15px;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  outline: none !important;
}

p {
  text-align: justify;
  font-weight: 400;
}
</style>
