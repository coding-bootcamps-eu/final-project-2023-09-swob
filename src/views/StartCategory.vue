<template>
  <header>
    <img class="nav-logo" src="@/assets/icons/Logo_180x180_light.png" alt="SWOB Logo" />
    <HamburgerMenu />
  </header>
  <main>
    <div v-if="isLoggedIn">
      <h1>Welcome back, {{ currentUser.firstname }}</h1>
      <h2 v-html="whatKindOfJobs"></h2>
    </div>
    <div v-else>
      <img src="@/assets/icons/steps01.svg" alt="step1" class="svg-icon" />
      <h1 v-html="whatKindOfJobs"></h1>
    </div>
    <ul>
      <li v-for="item in categoryStore.categorys" :key="item.id">
        <article class="card" :style="{ 'background-image': 'url(' + item.imageSrc + ')' }">
          <div class="overlay">
            <section class="content">
              <router-link
                :to="{
                  name: 'SwipeScreen',
                  query: { category: item.id, categoryName: item.caption }
                }"
                class="button"
              >
                <p class="card-title">{{ item.caption }}</p>
              </router-link>
              >
            </section>
          </div>
        </article>
      </li>
    </ul>
  </main>
</template>

<script>
import HamburgerMenu from '@/components/HamburgerMenu.vue'
import { useCategoryStore } from '@/stores/category.js'
// import CategoryData from '@components/CategoryData.vue'
export default {
  data() {
    return {
      whatKindOfJobs: 'What kind of job would you like to get?',
      isLoggedIn: false,
      currentUser: JSON.parse(sessionStorage.getItem('credentials'))
    }
  },
  setup() {
    const categoryStore = useCategoryStore()
    return { categoryStore }
  },
  created() {
    this.loadCategory()
    this.checkLoggedUser()
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
    },
    checkLoggedUser() {
      fetch('http://localhost:3000/users/')
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Load users was not ok.')
          }
        })
        .then((jsonData) => {
          jsonData.forEach((user) => {
            if (this.currentUser.username === user.username) {
              this.isLoggedIn = true
              user.password = this.currentUser.password
              sessionStorage.setItem('credentials', JSON.stringify(user))
              this.currentUser = JSON.parse(sessionStorage.getItem('credentials'))
            }
          })
        })
    }
  },

  components: {
    HamburgerMenu
  }
}
</script>

<style scoped>
@import '@/assets/css/Category.css';
</style>
