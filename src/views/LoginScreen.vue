<template>
  <body>
    <div class="grid-merge">
      <header>
        <img class="nav-logo" src="@/assets/icons/Logo_180x180_light.png" alt="SWOB Logo" />
        <img class="nav-menu" src="@/assets/icons/burgermenue_light.png" alt="Navigation" />
      </header>
      <div class="main-blurr"></div>
      <main>
        <h1 v-html="startText"></h1>
        <form>
          <label for="username"></label>
          <input type="text" id="username" name="username" placeholder="Username" required />

          <label for="password"></label>
          <input type="password" id="password" name="password" placeholder="Password" required />
        </form>
        <button class="btn-style-1" type="submit" @click="$router.push('/swipe')">Next</button>
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
export default {
  data() {
    return {
      startText: "Let's start"
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/Login.css';
</style>
