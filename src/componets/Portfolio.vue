<template>
  <div
    class="py-4 p-st"
    id="portfolio"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div class="text-center" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
        <span class="title text-center" :class="{ pgray: !nightMode, 'text-light': nightMode }">
          portfolio.
        </span>
      </div>
      <hr width="50%" :class="{ pgray: !nightMode, 'bg-secondary': nightMode }" />

      <br />
      <div class="row">
        <div
          class="col-xl-4 col-bg-4 col-md-6 col-sm-12"
          v-for="(portfolio, idx) in portfolio_info"
          :key="portfolio.name"
        >
          <Card
            :style="{ 'transition-delay': (idx % 3) / 4.2 + 's' }"
            :portfolio="portfolio"
            @show="showModalFn"
            data-aos="fade-up"
            :nightMode="nightMode"
            data-aos-offset="100"
            data-aos-delay="10"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          />
        </div>
      </div>
      <div class="text-center py-3" v-if="showBtn !== 'show less'">
        <button class="btn" @click.prevent="showMore">{{ showBtn }}</button>
      </div>
    </div>

    <transition name="modal">
      <Modal
        :showModal="showModal"
        @close="closeModal"
        v-if="showModal"
        :portfolio="modal_info"
        :nightMode="nightMode"
      />
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import Card from './helpers/Card.vue'
import Modal from './helpers/Modal.vue'
import info from '../../info'

const props = defineProps({
  nightMode: {
    type: Boolean,
    default: false,
  },
})

// State
const all_info = info.portfolio
const portfolio_info = ref([])
const showModal = ref(false)
const modal_info = ref({})
const number = ref(3)
const showBtn = ref('show more')
const shower = ref(0)

// Initialization
onMounted(() => {
  for (let i = 0; i < number.value && i < all_info.length; i++) {
    portfolio_info.value.push(all_info[i])
  }
})

// Watchers
watch(number, (newVal) => {
  portfolio_info.value = []
  for (let i = 0; i < newVal && i < all_info.length; i++) {
    portfolio_info.value.push(all_info[i])
  }
})

// Methods
const closeModal = () => {
  showModal.value = false
  document.body.classList.remove('modal-open')
}

const showModalFn = (portfolio) => {
  modal_info.value = portfolio
  showModal.value = true
}

const showMore = () => {
  if (number.value !== all_info.length) {
    number.value += 3

    const cardHeight = document.getElementsByClassName('smcard')[0]?.clientHeight || 400
    window.scrollBy({
      top: cardHeight,
      behavior: 'smooth',
    })

    if (number.value > all_info.length) {
      number.value = all_info.length
    }
  }

  if (number.value === all_info.length && shower.value === 0) {
    shower.value = 1
    showBtn.value = 'show less'
  } else if (number.value === all_info.length && shower.value === 1) {
    const elementPosition = document.getElementById('portfolio')?.offsetTop || 0
    window.scrollTo({ top: elementPosition + 5, behavior: 'smooth' })
    shower.value = 0
    number.value = 3
    showBtn.value = 'show more'
  }
}
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn {
  border-color: rgb(212, 149, 97);
  color: rgb(212, 149, 97);
}

.btn:hover {
  background-color: rgb(212, 149, 97);
  border-color: rgb(212, 149, 97);
  color: white;
}

.btn:focus {
  background-color: rgb(212, 149, 97);
  border-color: rgb(212, 149, 97);
  color: white;
}
</style>
