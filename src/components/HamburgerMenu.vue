<template>
  <div id="hamburger-menu" class="hamburger-position" @click="toggleMenu">
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
  </div>
  <div id="navigation-host">
    <div class="navigation">
      <li><router-link to="/personalprofile" id="profile">Profile</router-link></li>
      <li><router-link to="/swipe" id="swipe">Save and continue SWOB</router-link></li>
      <li><a class="nav-link" href="/SavedJobs">Saved Jobs</a></li>
      <li><a class="nav-link" href="/Messenger">Messenger</a></li>
      <li><a class="nav-link" href="/Settings">Settings</a></li>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      const menuIcon = document.querySelector('#hamburger-menu')
      const navigation = document.querySelector('#navigation-host')

      menuIcon.classList.toggle('change')
      navigation.classList.toggle('change')
    }
  }
}
</script>

<style scoped>
#hamburger-menu {
  width: 2.188rem;
  height: 1.875rem;
  position: fixed;
  top: 3.125rem;
  right: 1.875rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 4;
}

.change {
  right: 0;
}

.line {
  width: 100%;
  height: 0.188rem;
  background-color: var(--clr-hamburger);
  transition: all 0.8s;
}

.change .line-1 {
  transform: rotateZ(-405deg) translate(-8px, 6px);
}

.change .line-2 {
  opacity: 0;
}

.change .line-3 {
  transform: rotateZ(405deg) translate(-8px, -6px);
}

.navigation {
  display: none;
}

.change .navigation {
  display: flex;
  right: -18.75rem;
  width: 8.125rem;
  height: 100%;
  background-color: var(--clr-dropdown);
  position: fixed;
  top: 0;
  right: 0;
  justify-content: center;
  flex-direction: column;
  z-index: 3;
}

.navigation li {
  padding: 0.2rem 1rem;
  list-style: none;
  text-align: right;
}

.navigation ul {
  display: block;
  text-align: right;
}

.navigation a {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--link-clr);
  letter-spacing: 0.063rem;
  text-transform: uppercase;
  position: relative;
  padding: 0.188rem 0;
}
</style>
