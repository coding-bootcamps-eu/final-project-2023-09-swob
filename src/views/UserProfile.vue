<template>
  <body>
    <header>
      <img class="nav-logo" src="@/assets/icons/Logo_180x180_light.png" alt="SWOB Logo" />
      <HamburgerMenu />
    </header>
    <main>
      <hr class="line" />
      <article class="persona">
        <div class="persona-details">
          <img class="profile-img" src="@/assets/icons/placeholderuser.png" alt="placeholder" />
          <div class="name-birthday">
            <p>Firstname Lastname, age</p>
            <p>Available to work</p>
          </div>
        </div>
      </article>
      <article class="about-me">
        <p class="about-me-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur natus,
          doloremque alias est suscipit.
        </p>
      </article>
      <article class="expertise">
        <img src="" alt="GitHub" />
        <img src="" alt="Vue.js" />
        <img src="" alt="JavaScript" />
        <img src="" alt="HTML" />
        <img src="" alt="CSS" />
      </article>
      <article class="timeline">
        <div class="timeline-job">
          <p>Job title - Company Name</p>
          <small>2003 - today</small>
        </div>
        <div class="timeline-job">
          <p>Job title - Company Name</p>
          <small>2003 - today</small>
        </div>
        <div class="timeline-job">
          <p>Job title - Company Name</p>
          <small>2003 - today</small>
        </div>
      </article>
      <article class="education">
        <h1>Education</h1>
        <div class="CV-timeline">
          <img src="" alt="location" />
          <p>date</p>
          <p>Remote Berlin, Berlin</p>
          <p>Junior Web Developer</p>
        </div>
        <div class="CV-timeline">
          <img src="" alt="location" />
          <p>date</p>
          <p>Remote Berlin, Berlin</p>
          <p>Junior Web Developer</p>
        </div>
        <div class="CV-timeline">
          <img src="" alt="location" />
          <p>date</p>
          <p>Remote Berlin, Berlin</p>
          <p>Junior Web Developer</p>
        </div>
      </article>
    </main>
  </body>
</template>

<script>
import HamburgerMenu from '@/components/HamburgerMenu.vue'
export default {
  components: {
    HamburgerMenu
  }
}
</script>

<style scoped>
@import '@/assets/css/Profile.css';
</style>
