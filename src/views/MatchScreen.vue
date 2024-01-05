<template>
  <body>
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
              <h2>placeholder-name</h2>
              <p>placeholder-city</p>
            </div>
            <img class="company" src="@/assets/icons/placeholderuser.png" alt="placeholder" />
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
            <img class="user" src="@/assets/icons/placeholderuser.png" alt="placeholder" />
            <div class="user-container-name-city">
              <h2>placeholder-name</h2>
              <p>placeholder-job</p>
              <p>placeholder-city</p>
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
            <router-link to="/swipe" id="swipe">Save and continue SWOB</router-link>
          </div>
          <div class="btn-container-dark">
            <img class="btn-icon-dark" src="@/assets/icons/behalter.png" alt="chat" />
            <button class="btn-dismiss">Dismiss match</button>
          </div>
        </div>
      </main>
    </div>
    <button class="btn-style-1">Next</button>
  </body>
</template>

<script>
import HamburgerMenu from '@/components/HamburgerMenu.vue'
export default {
  data() {
    return {
      swobAltert: "IT'S A SWOB!"
    }
  },
  components: {
    HamburgerMenu
  }
}
</script>

<style scoped>
@import '@/assets/css/SwobMatch.css';
</style>
