<template>
  <div class="grid-merge">
    <div class="main-blurr"></div>
    <main>
      <article>
        <h1 v-html="headlineText"></h1>
        <img src="../assets/logo/LogoSwop_dark.png" alt="SWOB Logo" width="280px" />
        <h2>SWOB YOUR FUTURE!</h2>
        <div class="btn-wrap">
          <section>
            <router-link to="/login" id="login">LOGIN</router-link>
          </section>
          <section>
            <router-link to="/register" id="registration">JETZT REGISTRIEREN</router-link>
          </section>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headlineText: 'Hey!<br>Are you ready for your future?'
    }
  }
}
</script>

<style scoped>
@import url('@/assets/css/StartScreen.css');
</style>
