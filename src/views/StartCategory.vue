<template>
  <header>
    <img class="nav-logo" src="@/assets/icons/Logo_180x180_light.png" alt="SWOB Logo" />
    <img class="nav-menu" src="@/assets/icons/burgermenue_light.png" alt="Navigation" />
  </header>
  <main>
    <img src="@/assets/icons/steps01.svg" alt="step1" class="svg-icon" />
    <h1 v-html="whatKindOfJobs"></h1>
    <ul>
      <li v-for="item in categoryStore.categorys" :key="item.id">
        <article class="card" :style="{ 'background-image': 'url(' + item.imageSrc + ')' }">
          <div class="overlay">
            <section class="content">
              <router-link
                :to="{ name: 'SwipeScreen', query: { category: item.id } }"
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
import { useCategoryStore } from '@/stores/category.js'
export default {
  data() {
    return {
      whatKindOfJobs: 'What kind of job would you like to get?'
    }
  },
  setup() {
    const categoryStore = useCategoryStore()
    return { categoryStore }
  },
  created() {
    this.loadCategory()
  },
  methods: {
    loadCategory() {
      fetch('http://localhost:3000/category/')
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Load Category was not ok.')
          }
        })
        .then((jsonData) => {
          this.categoryStore.initCategory(jsonData)
        })
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/Category.css';
</style>
