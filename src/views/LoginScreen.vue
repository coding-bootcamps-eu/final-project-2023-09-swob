<template>
  <header class="login-container">
    <img src="@/assets/logo/LogoSwop_dark.png" alt="Your Logo" class="logo" />
    <nav class="burger-menu">
      <div class="burger-line"></div>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </nav>
  </header>
  <main class="login-content">
    <div class="main-blurr"></div>
    <h1>Let's start</h1>
    <form>
      <label for="username"></label>
      <input type="text" id="username" name="username" placeholder="Username" required />

      <label for="password"></label>
      <input type="password" id="password" name="password" placeholder="Password" required />
    </form>
    <button @click="$router.push('/swipe')">LOGIN</button>
    <a href="#">Forgot your password?</a>
    <a href="#">Create new Account <span class="underline">here</span></a>
  </main>
  <footer>
    <a href="#">HILFE HILFE?</a>
    <a href="#">NUTZUNGSBEDINGUNGEN | DATENSCHUTZERKLÄRUNG</a>
  </footer>
</template>

<script></script>
