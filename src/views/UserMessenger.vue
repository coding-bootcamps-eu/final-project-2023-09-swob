<template>
  <div class="grid-merge">
    <header>
      <img class="nav-logo" src="@/assets/icons/Logo_180x180_light.png" alt="SWOB Logo" />
      <HamburgerMenu />
    </header>
    <main>
      <article id="top-article" class="company-infos">
        <div class="company-img">
          <img class="company" src="@/assets/icons/placeholderuser.png" alt="placeholder" />
        </div>
        <div class="name-wanted-job-online-status">
          <h1 v-html="companyName"></h1>
          <p v-html="wantedJob"></p>
          <p>Online/Offline</p>
        </div>
      </article>
      <hr class="line" />
      <article class="chat-area">
        <div class="text-from-company">
          <img class="company" src="@/assets/icons/placeholderuser.png" alt="placeholder" />
          <div class="message-left">
            <p class="company-name">Company name</p>
            <p class="company-message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero delectus ipsam
              quo, quaerat at nobis fuga qui assumenda temporibus reprehenderit mollitia
              perspiciatis maiores!
            </p>
            <span>placeholder</span>
            <small>13:30</small>
          </div>
        </div>
        <div class="message-right">
          <div class="text-from-user">
            <p class="user-message">
              Molestiae omnis nesciunt neque, facilis vero saepe quo magnam sapiente ipsum amet
              possimus esse molestias ea itaque, autem eos eligendi ullam aperiam?
            </p>
            <span>placeholder</span>
            <small>13:30</small>
          </div>
        </div>
        <div class="text-from-company">
          <img class="company" src="@/assets/icons/placeholderuser.png" alt="placeholder" />
          <div class="message-left">
            <p class="company-name">Company name</p>
            <p class="company-message">
              Modi maiores debitis doloremque quo voluptatem cum quae architecto eligendi at
              blanditiis, dolores quas voluptatum consequatur natus perferendis ipsa tempora autem
              maxime.
            </p>
            <button class="icon-btn-appointment"></button>
            <small>13:30</small>
          </div>
        </div>
      </article>
      <article id="bottom-article" class="send-content-area">
        <input type="text" name="message" id="message" placeholder="Type something..." />
        <button class="icon-btn-smile"></button>
        <button class="icon-btn-upload"></button>
        <button class="icon-btn-attach-file"></button>
        <button class="icon-btn-paper-plane"></button>
      </article>
    </main>
  </div>
</template>

<script>
import HamburgerMenu from '@/components/HamburgerMenu.vue'
export default {
  data() {
    return {
      companyName: 'Company Name',
      wantedJob: 'Wanted: Job Offer'
    }
  },
  components: {
    HamburgerMenu
  }
}
</script>

<style scoped>
@import '@/assets/css/UserMessenger.css';
</style>
