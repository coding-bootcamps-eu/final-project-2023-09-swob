<template>
  <div class="grid-merge">
    <header>
      <img class="nav-logo" src="@/assets/icons/Logo_180x180_light.png" alt="SWOB Logo" />
      <img class="nav-menu" src="@/assets/icons/burgermenue_light.png" alt="Navigation" />
    </header>
    <main>
      <!-- <div class="main-blurr"></div> -->
      <h1 v-html="startText"></h1>
      <form>
        <label for="username"></label>
        <input type="text" id="username" name="username" placeholder="Username" required />

        <label for="password"></label>
        <input type="password" id="password" name="password" placeholder="Password" required />
      </form>
      <button class="btn-style-1" type="submit" @click="$router.push('/swipe')">Next</button>
      <a href="#">forgot your password?</a>
      <a href="#">create new account <span class="underline">here</span></a>
    </main>
    <footer class="footer">
      <a href="#">hilfe hilfe?</a>
      <a href="#">nutzungsbedingungen | datenschutzerklärung</a>
    </footer>
  </div>
</template>

<script>
import '@/assets/css/Login.css'
import '@/assets/css/main.css'

export default {
  data() {
    return {
      startText: "Let's start"
    }
  }
}
</script>
