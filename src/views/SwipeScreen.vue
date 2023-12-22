<template>
  <div>
    <header>
      <h1>hallo i bims, Giugiusbereich</h1>
      <button @click="$router.push('/match')">Go to Match Screen</button>
    </header>

    <main>
      <form
        id="app"
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
          <!-- Jobbeschreibung -->
          <p class="job-description">{{ profiles[currentIndex].job }}</p>
          <!-- Filter -->
          <div class="filter-section">
            <label for="filter1">Filter 1 {{ filter1 }}</label>
            <label for="filter2">Filter 2 {{ filter2 }}</label>
          </div>

          <!-- Infobox für Firmeninformationen -->
          <p class="info-box">{{ profiles[currentIndex].additionalInfo }}</p>

          <!-- Dropdown-Menü "Mehr anzeigen" über den Inhalten mit z-index -->
          <div
            class="dropdown"
            :style="{ zIndex: showMoreInfo ? 0 : 1000, display: showMoreInfo ? 'none' : 'block' }"
          >
            <button @click="toggleMoreInfo" class="more-info-button">
              Mehr anzeigen <i class="fas fa-chevron-down"></i>
            </button>
            <div v-show="showMoreInfo" class="more-info-content">
              <p>{{ profiles[currentIndex].moreInfo }}</p>
            </div>
          </div>

          <!-- Company Name -->
          <h3 class="company-name">{{ profiles[currentIndex].company }}</h3>

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
          <button @click="swipeLeft">&lt; Swipe Left</button>
          <button @click="swipeRight">Swipe Right &gt;</button>
        </div>
      </form>

      <div v-if="showMoreInfo" class="full-screen-modal">
        <div class="modal-content">
          <span class="close" @click="toggleMoreInfo">&times;</span>
          <p>{{ profiles[currentIndex].moreInfo }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import blancaImage from '@/assets/workplaces/annie-spratt-FSFfEQkd1sc-unsplash.jpeg'
import mimiImage from '@/assets/workplaces/annie-spratt-FSFfEQkd1sc-unsplash.jpeg'
import giulioImage from '@/assets/workplaces/redd-f-5U_28ojjgms-unsplash.jpeg'
export default {
  data() {
    return {
      profiles: [
        {
          id: 1,
          name: 'Blanca',
          image: blancaImage,
          company: 'Company A',
          job: 'Software Developer',
          location: 'City A',
          additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          moreInfo: 'Weitere Informationen über Blanca.',
          gallery: [blancaImage, blancaImage, blancaImage]
        },
        {
          id: 2,
          name: 'Mimi',
          image: mimiImage,
          company: 'XYZ Design',
          job: 'UX Designer',
          location: 'City B',
          additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          moreInfo: 'Weitere Informationen über Mimi.',
          gallery: [mimiImage, mimiImage]
        },
        {
          id: 3,
          name: 'Giulio',
          image: giulioImage,
          company: '123 Analytics',
          job: 'Data Scientist',
          location: 'City C',
          additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          moreInfo: 'Weitere Informationen über Giulio.',
          gallery: [giulioImage]
        }
        // ... (weitere Profile)
      ],
      currentIndex: 0,
      startX: 0,
      currentX: 0,
      rotation: 0,
      showMoreInfo: false,
      lightboxImage: null
    }
  },
  methods: {
    swipeLeft() {
      this.currentIndex = (this.currentIndex + 1) % this.profiles.length
    },
    swipeRight() {
      this.currentIndex = (this.currentIndex - 1 + this.profiles.length) % this.profiles.length
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
    toggleMoreInfo() {
      this.showMoreInfo = !this.showMoreInfo
    },
    openLightbox(image) {
      this.lightboxImage = image
    },
    closeLightbox() {
      this.lightboxImage = null
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/SwipeScreen.css';
</style>
