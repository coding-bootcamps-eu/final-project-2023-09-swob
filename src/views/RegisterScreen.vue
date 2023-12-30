<template>
  <body>
    <div class="grid-merge">
      <header>
        <img class="nav-logo" src="@/assets/icons/Logo_180x180_light.png" alt="SWOB Logo" />
        <img class="nav-menu" src="@/assets/icons/burgermenue_light.png" alt="Navigation" />
      </header>
      <div class="main-blurr"></div>
      <main>
        <form>
          <div class="username-and-password">
            <label for="username" v-html="chooseUsername"></label>
            <input type="text" id="username" name="username" placeholder="username" required />

            <label for="password" v-html="choosePassword"></label>
            <input type="password" id="password" name="password" placeholder="password" required />
            <label for="repeatPassword"></label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              placeholder="repeat password"
              required
            />
          </div>
          <hr class="line" />
          <div class="createAccount">
            <h1 v-html="createAcc"></h1>
            <p>fill the details to create your swob card</p>
          </div>
          <div class="personal-information">
            <input type="text" id="lastname" name="lastname" placeholder="last name" required />
            <input type="text" id="firstname" name="firstname" placeholder="first name" required />
            <div class="date-and-gender">
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                placeholder="birth date"
                required
              />
              <div class="radio-gender">
                <label class="custom-radio">
                  <input type="radio" id="female" name="gender" value="female" /> female
                </label>
                <label class="custom-radio">
                  <input type="radio" id="male" name="gender" value="male" /> male
                </label>
                <label class="custom-radio">
                  <input type="radio" id="diverse" name="gender" value="diverse" /> diverse
                </label>
              </div>
            </div>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="e-mail"
              size="30"
              pattern=".+@example\.com"
              required
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="phone number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <input type="text" id="street" name="street" placeholder="street name" required />
            <div class="flex-postal-city-country">
              <input
                type="number"
                id="postalcode"
                name="postalcode"
                placeholder="Postal"
                min="5"
                max="5"
                required
              />
              <input type="text" id="city" name="city" placeholder="City" />
              <select name="country" id="country">
                <option value="DE">Deutschland</option>
              </select>
            </div>
          </div>
        </form>
        <button class="btn-style-1" type="submit" @click="$router.push('/category')">Next</button>
      </main>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      chooseUsername: 'Choose your username',
      choosePassword: 'Choose a password',
      createAcc: 'Create account'
    }
  }
}
</script>

<style scoped>
/* @import 'src/assets/css/Registrierung.css'; */
@import '@/assets/css/Registrierung.css';
</style>
