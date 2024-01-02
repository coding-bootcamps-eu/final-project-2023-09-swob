<template>
  <header>
    <img class="nav-logo" src="@/assets/icons/Logo_180x180_light.png" alt="SWOB Logo" />
    <img class="nav-menu" src="@/assets/icons/burgermenue_light.png" alt="Navigation" />
  </header>
  <main>
    <img src="@/assets/icons/steps01.svg" alt="step1" class="svg-icon" />
    <h1 v-html="whatKindOfJobs"></h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        <article class="card" :style="{ 'background-image': 'url(' + item.imageSrc + ')' }">
          <div class="overlay">
            <section class="content">
              <router-link
                :to="{ name: 'SwipeScreen', query: { category: item.caption } }"
                class="button"
                ><p class="card-title">{{ item.caption }}</p></router-link
              >
            </section>
          </div>
        </article>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      whatKindOfJobs: 'What kind of job would you like to get?',
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
          caption: 'Engineering & Architecture'
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
          caption: 'Science & Research'
        },
        {
          id: 8,
          imageSrc: '/src/assets/images/pat-whelen-RHC5ar0MFkE-unsplash.jpeg',
          alt: 'A picture in front of stacked container',
          caption: 'Human Resources'
        },
        {
          id: 9,
          imageSrc: '/src/assets/images/nikhita-s-NsPDiPFTp4c-unsplash.jpeg',
          alt: 'A girl writing on a chalkboard',
          caption: 'Healthcare & Medicine'
        },
        {
          id: 10,
          imageSrc: '/src/assets/images/pat-whelen-RHC5ar0MFkE-unsplash.jpeg',
          alt: 'A picture in front of stacked container',
          caption: 'Real Estate'
        },
        {
          id: 11,
          imageSrc: '/src/assets/images/nikhita-s-NsPDiPFTp4c-unsplash.jpeg',
          alt: 'A girl writing on a chalkboard',
          caption: 'Social Services & Nonprofit'
        },
        {
          id: 12,
          imageSrc: '/src/assets/images/pat-whelen-RHC5ar0MFkE-unsplash.jpeg',
          alt: 'A picture in front of stacked container',
          caption: 'Food & Cullinary Arts'
        },
        {
          id: 13,
          imageSrc: '/src/assets/images/nikhita-s-NsPDiPFTp4c-unsplash.jpeg',
          alt: 'A girl writing on a chalkboard',
          caption: 'Customer Service'
        },
        {
          id: 14,
          imageSrc: '/src/assets/images/pat-whelen-RHC5ar0MFkE-unsplash.jpeg',
          alt: 'A picture in front of stacked container',
          caption: 'Economics'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/Category.css';
</style>
