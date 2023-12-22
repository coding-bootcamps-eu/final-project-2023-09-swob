<template>
  <div class="grid-merge">
    <header>
      <img class="nav-logo" src="@/assets/icons/Logo_180x180_light.png" alt="SWOB Logo" />
      <img class="nav-menu" src="@/assets/icons/burgermenue_light.png" alt="Navigation" />
    </header>
    <main>
      <img src="@/assets/icons/steps01.svg" alt="step1" class="svg-icon" />
      <h2>What kind of job would you like to get?</h2>
      <ul>
        <li v-for="item in items" :key="item.id">
          <figure class="image-container" @click="toggleOverlay(item.id)">
            <img :src="item.imageSrc" :alt="item.alt" />
            <div class="overlay" v-if="activeOverlay === item.id">
              <router-link to="/swipe" @click="handleOverlayClick">{{ item.caption }}</router-link>
            </div>
          </figure>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import '@/assets/css/Category.css'

export default {
  data() {
    return {
      activeOverlay: null,
      items: [
        {
          id: 1,
          imageSrc: '/src/assets/images/farzad-p-xSl33Wxyc-unsplash.jpeg',
          alt: 'a work desk with two monitors and open code',
          caption: 'IT & Consulting'
        },
        {
          id: 2,
          imageSrc: '/src/assets/images/davisuko-5E5N49RWtbA-unsplash.jpeg',
          alt: 'Blue Background and table with a blue sliced orange',
          caption: 'Art & Design'
        },
        {
          id: 3,
          imageSrc: '/src/assets/images/adem-ay-Tk9m_HP4rgQ-unsplash.jpeg',
          alt: 'A phone with social media apps',
          caption: 'Sales & Marketing'
        },
        {
          id: 4,
          imageSrc: '/src/assets/images/mika-baumeister-bGZZBDvh8s4-unsplash.jpeg',
          alt: 'A photo from the EZB building with the EZB sign in front in frankfurt',
          caption: 'Finance & Consulting'
        },
        {
          id: 5,
          imageSrc: '/src/assets/images/natali-quijano-N79MYsd2Ce4-unsplash.jpeg',
          alt: 'Wing of a plane above the clouds',
          caption: 'Tourism & Service'
        },
        {
          id: 6,
          imageSrc: '/src/assets/images/nick-karvounis-XcLQN-2R9CM-unsplash.jpeg',
          alt: 'A mans hands while working with tools',
          caption: 'Craftmanship'
        },
        {
          id: 7,
          imageSrc: '/src/assets/images/nikhita-s-NsPDiPFTp4c-unsplash.jpeg',
          alt: 'A girl writing on a chalkboard',
          caption: 'Education & Research'
        },
        {
          id: 8,
          imageSrc: '/src/assets/images/pat-whelen-RHC5ar0MFkE-unsplash.jpeg',
          alt: 'A picture in front of stacked container',
          caption: 'Law & Order'
        },
        {
          id: 9,
          imageSrc: '/src/assets/images/nikhita-s-NsPDiPFTp4c-unsplash.jpeg',
          alt: 'A girl writing on a chalkboard',
          caption: 'Education & Research'
        },
        {
          id: 10,
          imageSrc: '/src/assets/images/pat-whelen-RHC5ar0MFkE-unsplash.jpeg',
          alt: 'A picture in front of stacked container',
          caption: 'Law & Order'
        }
      ]
    }
  },
  mounted() {
    this.items.forEach(async (item, index) => {
      const imageModule = await import(`@/assets/images/image_${index + 1}.jpg`)
      this.$set(this.items, index, { ...item, imageSrc: imageModule.default })
    })
  },
  methods: {
    toggleOverlay(itemId) {
      this.activeOverlay = this.activeOverlay === itemId ? null : itemId
    },
    handleOverlayClick(caption) {
      console.log('Overlay clicked for:', caption)
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 1.5rem;
  margin: 1rem;
}
</style>
