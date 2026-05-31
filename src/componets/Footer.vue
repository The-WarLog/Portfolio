<template>
  <div class="bg-secondary">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow" style="color: white">
          <span>© {{ currentYear }} Copyright: Divyesh Gajanan Gaygol</span>
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <div class="text-center">
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open(links.linkedin)"
              title="LinkedIn"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open(links.github)"
              title="GitHub"
            >
              <i class="fab fa-github"></i>
            </button>

            <button
              class="btn btn-outline-secondary mx-2"
              @click="open(links.resume)"
              title="Resume"
            >
              <i class="fa fa-file"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import info from '../../info'

const links = info.links
const currentYear = new Date().getFullYear()

const open = (url) => {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>

<style scoped>
span {
  font-weight: 500;
}

.btn {
  border-color: white;
  color: white;
}

.btn:hover {
  background-color: white;
  border-color: white;
  color: gray;
}

.btn:focus {
  background-color: white;
  border-color: white;
  color: gray;
}

@media screen and (max-width: 580px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>
