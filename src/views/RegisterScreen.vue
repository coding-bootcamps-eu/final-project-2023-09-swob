<template>
  <body>
    <div class="grid-merge">
      <header>
        <img class="nav-logo" src="@/assets/icons/Logo_180x180_light.png" alt="SWOB Logo" />
        <HamburgerMenu />
      </header>
      <div class="main-blurr"></div>
      <main>
        <form>
          <div class="username-and-password">
            <label for="username" v-html="chooseUsername"></label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              v-model="form.username"
              required
            />

            <label for="password" v-html="choosePassword"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              v-model="form.password"
              required
            />
            <label for="repeatPassword"></label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              placeholder="repeat password"
              v-model="form.repeatPassword"
              required
            />
          </div>
          <hr class="line" />
          <div class="createAccount">
            <h1 v-html="createAcc"></h1>
            <p>fill the details to create your swob card</p>
          </div>
          <div class="personal-information">
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="last name"
              v-model="form.lastname"
              required
            />
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="first name"
              v-model="form.firstname"
              required
            />
            <div class="date-and-gender">
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                placeholder="birth date"
                v-model="form.birthdate"
                required
              />
              <div class="radio-gender">
                <label class="custom-radio">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    v-model="form.gender"
                    required
                  />
                  female
                </label>
                <label class="custom-radio">
                  <input type="radio" id="male" name="gender" value="male" v-model="form.gender" />
                  male
                </label>
                <label class="custom-radio">
                  <input
                    type="radio"
                    id="diverse"
                    name="gender"
                    value="diverse"
                    v-model="form.gender"
                  />
                  diverse
                </label>
              </div>
            </div>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="e-mail"
              size="30"
              v-model="form.email"
              required
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="phone number"
              v-model="form.phone"
              required
            />
            <input
              type="text"
              id="street"
              name="street"
              placeholder="street name"
              v-model="form.street"
              required
            />
            <div class="flex-postal-city-country">
              <input
                type="number"
                id="postalcode"
                name="postalcode"
                placeholder="Postal"
                min="5"
                max="5"
                v-model="form.postalcode"
                required
              />
              <input type="text" id="city" name="city" placeholder="City" v-model="form.city" />
              <select name="country" id="country" v-model="form.country" required>
                <option value="DE">Deutschland</option>
              </select>
            </div>
          </div>
        </form>
        <button class="btn-style-1" type="button" @click="goToCategory">Sign Up</button>
      </main>
    </div>
  </body>
</template>

<script>
import HamburgerMenu from '@/components/HamburgerMenu.vue'

export default {
  created() {
    this.saveData()
  },
  data() {
    return {
      users: [],
      apiURL: 'http://localhost:3000',
      chooseUsername: 'Choose your username',
      choosePassword: 'Choose a password',
      createAcc: 'Create account',
      form: {
        username: '',
        password: '',
        repeatPassword: '',
        lastname: '',
        firstname: '',
        birthdate: '',
        gender: '',
        email: '',
        phone: '',
        street: '',
        postalcode: null,
        city: '',
        country: 'DE'
      }
    }
  },
  methods: {
    validatePassword() {
      if (this.form.password !== this.form.repeatPassword) {
        alert('Passwords do not match')
      }
    },
    goToCategory() {
      if (Object.values(this.form).some((value) => value === '')) {
        alert('Please fill out all fields.')
      } else {
        this.validatePassword()
        if (this.form.password === this.form.repeatPassword) {
          this.saveData()
          this.$router.push('/category')
        }
      }
    },
    saveData() {
      console.log('Sending data to the server:', this.form)
      fetch(this.apiURL + '/users/', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(this.form)
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Network response was not OK')
          }
        })
        .then((jsonData) => {
          console.log('Data saved successfully:', jsonData)
        })
        .catch((error) => {
          console.error('Error saving data:', error)
        })
    }
  },
  components: {
    HamburgerMenu
  }
}
</script>

<style scoped>
@import '@/assets/css/Registrierung.css';
</style>
