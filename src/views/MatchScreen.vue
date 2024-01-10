<template>
  <div class="grid-merge">
    <header>
      <img class="nav-logo" src="@/assets/icons/Logo_180x180_light.png" alt="SWOB Logo" />
      <HamburgerMenu />
    </header>
    <main>
      <h1 v-html="swobAltert"></h1>
      <article class="match-container company-container">
        <div class="company-container-name-city-img">
          <div class="company-container-name-city">
            <h2>{{ currentCompany.name }}</h2>
            <p>{{ currentCompany.location }}</p>
          </div>
          <img class="company" :src="currentCompany.logo" alt="Company Logo" />
        </div>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quos maxime quae
          perferendis, maiores odio. Voluptate voluptatum dicta eos laboriosam facere iure magnam
          ipsum sed recusandae fugiat? Nihil, illo dignissimos!
        </p>
        <div class="company-container-links">
          <!-- <router-link>To Profile</router-link>
              <router-link>Show more</router-link> -->
          <div class="link">
            <a href="/profile">to profile</a>
            <img class="link-icon" src="@/assets/icons/down-arrow.png" alt="arrow down" />
          </div>
          <div class="link">
            <a href="/more">show more</a>
            <img class="link-icon" src="@/assets/icons/down-arrow.png" alt="arrow down" />
          </div>
        </div>
      </article>
      <img class="logo" src="@/assets/icons/Logo-with-background.png" alt="SWOB Logo" />
      <article class="match-container user-container">
        <div class="user-container-name-city-img">
          <img
            class="user"
            src="@/assets/Images/sasha-freemind-cm0eSVxdLDg-unsplash.jpeg"
            alt="User Profile Link"
          />
          <div class="user-container-name-city">
            <h2>{{ matchedUser.firstname }} {{ matchedUser.lastname }}</h2>
            <p>{{ matchedUser.job }}</p>
            <p>{{ matchedUser.city }}</p>
          </div>
        </div>
        <p class="about-me">About me</p>
        <p class="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem enim repellat impedit
          hic, sapiente sint dolor cumque esse consequuntur doloremque error aut, nemo quis?
          Corrupti sint consequuntur tempore quasi vel?
        </p>

        <!-- <router-link>To Profile</router-link> -->
        <div class="link profile">
          <a href="/profile">to profile</a>
          <img class="link-icon" src="@/assets/icons/down-arrow.png" alt="arrow down" />
        </div>
      </article>
      <div class="btn-flex">
        <div class="btn-container-light">
          <img class="btn-icon-light" src="@/assets/icons/konversation.png" alt="chat" />
          <router-link to="/usermessenger" id="usermessenger"
            >Start your conversation now!</router-link
          >
        </div>
        <div class="btn-container-light">
          <img class="btn-icon-light" src="@/assets/icons/herz.png" alt="chat" />
          <router-link to="/swipe" class="btn-container-light" id="swipe">
            <img class="btn-icon-light" src="@/assets/icons/herz.png" alt="chat" />
            Save and continue SWOB
          </router-link>
        </div>
        <div class="btn-container-dark">
          <img class="btn-icon-dark" src="@/assets/icons/behalter.png" alt="chat" />
          <button class="btn-dismiss">Dismiss match</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useCompanyStore } from '@/stores/company.js'
import HamburgerMenu from '@/components/HamburgerMenu.vue'

export default {
  components: { HamburgerMenu },
  setup() {
    const companysStore = useCompanyStore()
    const currentCompany = ref({})
    const matchedUser = {
      id: 'f4db1a91-b89d-4249-bd60-dbec7839fdbb',
      firstname: 'Torben',
      lastname: 'Giga',
      username: 'gigaTorben',
      mail: 'gigaTorben@me.de',
      logo: 'URL_DES_LOGOS',
      job: 'Junior Softwareentwickler',
      city: 'Köln'
    }

    if (companysStore.companys.length === 0) {
      companysStore.loadCompanyById('a84da0f3-b9b2-42ed-a0b6-40dedaa19532')
    }

    onMounted(async () => {
      try {
        const companyId = 'a84da0f3-b9b2-42ed-a0b6-40dedaa19532' // Setze die tatsächliche companyId
        const companyData = await companysStore.loadCompanyById(companyId)
        currentCompany.value = companyData
      } catch (error) {
        console.error(error)
      }
    })

    return { currentCompany, matchedUser }
  }
}
</script>

<style scoped>
@import '@/assets/css/SwobMatch.css';
</style>
components: { HamburgerMenu }
