<template>
  <div class="grid-merge">
    <div class="main-blurr"></div>
    <main>
      <article>
        <h1 v-html="headlineText"></h1>
        <img src="../assets/logo/LogoSwop_dark.png" alt="SWOB Logo" width="150px" />
        <h2>SWOB YOUR FUTURE!</h2>
        <router-link to="/login" id="login">LOGIN</router-link>
        <router-link to="/register" id="registration">JETZT REGISTRIEREN</router-link>
      </article>
    </main>
  </div>
</template>

<script>
import '@/assets/css/StartScreen.css'
import '@/assets/css/main.css'

export default {
  data() {
    return {
      headlineText: 'Hey!<br>Are you ready for your future?'
    }
  }
}
</script>

<style scoped></style>
