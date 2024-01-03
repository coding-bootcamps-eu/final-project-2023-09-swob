<template>
  <body>
    <div class="grid-merge">
      <header>
        <img class="nav-logo" src="@/assets/icons/Logo_180x180_light.png" alt="SWOB Logo" />
        <HamburgerMenu />
      </header>
      <div class="main-blurr"></div>
      <main>
        <h1 v-html="startText"></h1>
        <form>
          <label for="username"></label>
          <input
            @input="updateUsername"
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
          />

          <label for="password"></label>
          <input
            @input="updatePassword"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </form>
        <button class="btn-style-1" type="submit" @click="$router.push('/category')">Next</button>
        <a href="#">forgot your password?</a>
        <router-link to="/register"
          >create new account <span class="underline">here</span></router-link
        >
      </main>
      <footer class="footer">
        <a href="#">hilfe hilfe?</a>
        <a href="#">nutzungsbedingungen | datenschutzerklärung</a>
      </footer>
    </div>
  </body>
</template>

<script>
import HamburgerMenu from '@/components/HamburgerMenu.vue'

export default {
  data() {
    return {
      startText: "Let's start",
      username: '',
      password: ''
    }
  },
  methods: {
    updateUsername(event) {
      this.username = event.target.value
    },
    updatePassword(event) {
      this.password = event.target.value
    },
    saveCredentialsAndNavigate() {
      if (this.username.trim() !== '' && this.password.trim() !== '') {
        const dummyLogin = {
          username: this.username,
          password: this.password
        }
        sessionStorage.setItem('credentials', JSON.stringify(dummyLogin))

        this.$router.push('/swipe')
      } else {
        alert('Bitte fülle beide Felder aus.')
      }
    },
    toggleMenu() {
      const menuIcon = document.querySelector('#hamburger-menu')
      const navigation = document.querySelector('#navigation-host')

      menuIcon.classList.toggle('change')
      navigation.classList.toggle('change')
    }
  },
  beforeUnmount() {
    // sessionStorage wird automatisch beim Schließen des Browsers gelöscht
  },
  components: {
    HamburgerMenu
  }
}
</script>

<style scoped>
@import '@/assets/css/Login.css';
</style>
