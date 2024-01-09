<template>
  <div>
    <header>
      <img class="nav-logo" src="@/assets/icons/Logo_180x180_light.png" alt="SWOB Logo" />
      <HamburgerMenu />
    </header>

    <main>
      <form
        @submit.prevent
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
      >
        <div
          class="swipe-container"
          :style="{ transform: `translateX(${currentX}px) rotate(${rotation}deg)` }"
          ref="swipeContainer"
        >
          <div class="title-company-img-container">
            <!-- Jobbeschreibung -->
            <div class="job-description-container">
              <div class="job-description">
                {{ offersStore.offers[currentIndex].title }}
              </div>
              <div class="company-logo-container">
                <img
                  class="company-logo"
                  :src="companysStore.companys[currentIndex].logo"
                  alt="Company Logo"
                />
              </div>
            </div>
            <!-- Company Name -->
            <h3 class="company-name">{{ companysStore.companys[currentIndex].name }}</h3>
          </div>
          <!-- Filter -->
          <div class="filter-section">
            <label for="selectedCategory" class="category-label">{{
              $route.query.categoryName
            }}</label>
            <label for="filter1" class="filter-label">{{ filtersStore.howWork }}</label>
          </div>

          <!-- Infobox für Firmeninformationen -->
          <div class="info-box-container">
            <p class="info-box" v-if="!showMoreInfo">
              {{ truncateDescription(offersStore.offers[currentIndex].description, 300) }}
              <button
                @click="toggleMoreInfo(offersStore.offers[currentIndex].description)"
                class="more-info-button"
              >
                Mehr anzeigen <i class="fas fa-chevron-down"></i>
              </button>
            </p>
          </div>
          <!-- <div v-show="showMoreInfo" class="more-info-content" ref="moreInfoContent">
            <span class="close" @click="toggleMoreInfo">&times;</span>
            <div class="modal-content info-box-content">
              <p>{{ offersStore.offers[currentIndex].description }}</p>
            </div>
          </div> -->

          <!-- Standort -->
          <div class="location-section">
            <p class="workplace">Workplace</p>
            <p class="location">{{ profiles[currentIndex].location }}</p>
          </div>

          <!-- Bildergalerie -->
          <div class="gallery">
            <img
              v-for="image in profiles[currentIndex].gallery"
              :src="image"
              :key="image"
              @click="openLightbox(image)"
              alt="Gallery Image"
            />
          </div>

          <!-- Lightbox -->
          <div v-if="lightboxImage" @click="closeLightbox" class="lightbox">
            <img :src="lightboxImage" alt="Enlarged Image" />
          </div>
        </div>

        <div class="swipe-buttons">
          <button @click="swipeLeft">
            <img src="@/assets/icons/no.png" alt="Swipe Left Icon" />
          </button>
          <div class="link-to-match">
            <!-- Wenn ein match successful ist, routet er zum MatchScreen -->
            <router-link
              :to="{
                name: 'match'
              }"
              @click="swipeRight"
              class="button"
              ><img class="icon-green" src="@/assets/icons/yes.png" alt="Swipe Right Icon"
            /></router-link>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import { useOfferStore } from '@/stores/offers.js'
import { useCompanyStore } from '@/stores/company.js'
import { useFiltersStore } from '@/stores/filter.js'
import { useModalStore } from '@/stores/modal.js'
import blancaImage from '@/assets/workplaces/annie-spratt-FSFfEQkd1sc-unsplash.jpeg'
import mimiImage from '@/assets/workplaces/annie-spratt-FSFfEQkd1sc-unsplash.jpeg'
import giulioImage from '@/assets/workplaces/redd-f-5U_28ojjgms-unsplash.jpeg'
import HamburgerMenu from '@/components/HamburgerMenu.vue'
export default {
  setup() {
    const filtersStore = useFiltersStore()
    const offersStore = useOfferStore()
    const companysStore = useCompanyStore()
    const modalStore = useModalStore()

    const sessionFilters = JSON.parse(sessionStorage.getItem('filters'))

    if (Array.isArray(sessionFilters) && sessionFilters.length > 0) {
      filtersStore.howWork = sessionFilters[0].howWork
    }

    return { filtersStore, offersStore, companysStore, modalStore }
  },
  data() {
    return {
      matches: [],
      profiles: [
        {
          image: blancaImage,
          location: 'City A',
          gallery: [blancaImage, blancaImage, blancaImage]
        },
        {
          image: mimiImage,
          location: 'City B',
          gallery: [mimiImage, mimiImage]
        },
        {
          image: giulioImage,
          location: 'City C',
          gallery: [giulioImage]
        }
      ],
      currentIndex: 0,
      startX: 0,
      currentX: 0,
      rotation: 0,
      showMoreInfo: false,
      lightboxImage: null
    }
  },
  created() {
    this.loadOffers(), this.loadCompanys(), this.loadMatches()
  },
  methods: {
    loadOffers() {
      fetch('http://localhost:3000/offers/')
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Load offers was not ok.')
          }
        })
        .then((jsonData) => {
          this.offersStore.initOffers(
            jsonData.filter((object) => {
              if (object.categoryID === this.$route.query.category) {
                return object
              }
            })
          )
        })
    },
    loadCompanys() {
      fetch('http://localhost:3000/companies/')
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Load companys was not ok.')
          }
        })
        .then((jsonData) => {
          this.companysStore.initCompany(jsonData)
          console.log(jsonData)
        })
    },
    truncateDescription(description, maxLength) {
      if (description.length > maxLength) {
        return `${description.slice(0, maxLength)}...`
      } else {
        return description
      }
    },
    loadMatches() {
      fetch('http://localhost:3000/matches/')
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Load matches was not ok.')
          }
        })
        .then((jsonData) => {
          this.matches = jsonData
          console.log(jsonData)
        })
    },
    swipeLeft() {
      this.currentIndex = (this.currentIndex + 1) % this.profiles.length
    },
    swipeRight() {
      this.currentIndex = (this.currentIndex - 1 + this.profiles.length) % this.profiles.length
      this.currentIndex = (this.currentIndex - 1 + this.profiles.length) % this.profiles.length

      this.createMatch()
        .then(() => {
          console.log('Match created successfully')

          // Hier wird die Navigation zum MatchScreen ausgelöst
          this.$router.push({ name: 'match' })
        })
        .catch((error) => {
          console.error('Failed to create a match:', error)
        })
    },
    createMatch() {
      const changeMatch = {
        id: this.matches[this.currentIndex].id,
        userId: this.matches[this.currentIndex].userId,
        companieId: this.matches[this.currentIndex].companyId,
        offerId: this.matches[this.currentIndex].offerId,
        isMatch: true
      }
      console.log(this.matches[this.currentIndex].id)

      return fetch('http://localhost:3000/matches/' + this.matches[this.currentIndex].id, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(changeMatch)
      })
        .then((response) => {
          if (response.ok) {
            return Promise.resolve() // Resolve the promise if the request was successful
          } else {
            return Promise.reject('Failed to create a match') // Reject the promise if there was an error
          }
        })
        .catch((error) => {
          return Promise.reject(error) // Propagate the error to the outer catch block
        })
    },
    handleMouseDown(event) {
      if (this.$el.contains(event.target)) {
        this.startX = event.clientX
        this.currentX = 0
        this.setSwipeCursor('grabbing')
      }
    },
    handleMouseMove(event) {
      if (this.startX !== 0) {
        this.currentX = event.clientX - this.startX
        this.rotation = this.currentX / 10
        this.setSwipeCursor('grabbing')
      }
    },
    handleMouseUp() {
      if (this.startX !== 0) {
        this.handleSwipe()
        this.startX = 0
        this.currentX = 0
        this.rotation = 0
        this.setSwipeCursor('grab')
      }
    },
    handleSwipe() {
      if (this.currentX < -50) {
        this.swipeLeft()
      } else if (this.currentX > 50) {
        this.swipeRight()
      }
    },
    setSwipeCursor(cursorStyle) {
      this.$refs.swipeContainer.style.cursor = cursorStyle
    },
    toggleMoreInfo(description) {
      this.modalStore.open = true
      this.modalStore.content = description

      this.showMoreInfo = !this.showMoreInfo
      if (this.showMoreInfo) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    openLightbox(image) {
      this.lightboxImage = image
    },
    closeLightbox() {
      this.lightboxImage = null
    }
  },
  components: {
    HamburgerMenu
  }
}
</script>

<style scoped>
@import '@/assets/css/SwipeScreen.css';
</style>
