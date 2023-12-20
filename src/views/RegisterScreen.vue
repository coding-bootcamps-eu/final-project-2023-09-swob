<template>
  <header class="login-container">
    <img src="@/assets/logo/LogoSwop_dark.png" alt="Your Logo" class="logo" />
    <p>SWOB YOUR FUTURE!</p>
  </header>
  <main class="login-content">
    <div class="main-blurr"></div>
    <form>
      <label for="username">Username</label>
      <input type="text" id="username" name="username" placeholder="Username" required />

      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="**********" required />
      <hr />
      <div class="grid-container-one">
        <input type="text" id="lastname" name="lastname" placeholder="Last Name" required />
        <input type="text" id="firstname" name="firstname" placeholder="First Name" required />
        <input type="date" id="birthdate" name="birthdate" placeholder="Birth Date" required />
        <div class="radio">
          <input type="radio" id="female" name="female" value="female" /> Female
          <input type="radio" id="male" name="male" value="male" /> Male
          <input type="radio" id="diverse" name="diverse" value="diverse" /> Diverse
        </div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-Mail"
          size="30"
          pattern=".+@example\.com"
          required
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
      </div>
      <input type="text" id="street" name="street" placeholder="Street Name" required />
      <div class="flex">
        <input
          type="number"
          id="postalcode"
          name="postalcode"
          placeholder="Postal Code"
          min="5"
          max="5"
          required
        />
        <input type="text" id="city" name="city" placeholder="City" />
        <select name="country" id="country">
          <option value="DE">Deutschland</option>
        </select>
      </div>
    </form>
    <button type="submit">Login</button>
  </main>
</template>
