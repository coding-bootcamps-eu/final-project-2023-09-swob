<template>
  <body>
    <div class="grid-merge">
      <header>
        <img class="nav-logo" src="@/assets/icons/Logo_180x180_light.png" alt="SWOB Logo" />
        <HamburgerMenu />
      </header>
      <div class="main-blurr"></div>
      <main>
        <img src="@/assets/icons/steps03.svg" alt="step3" class="svg-icon" />
        <article>
          <h1 v-html="where"></h1>
          <select name="location" id="location">
            <option value="berlin">Berlin</option>
            <option value="hannover">Hannover</option>
            <option value="dusseldorf">Düsseldorf</option>
            <option value="mainz">Mainz</option>
            <option value="saarbrucken">Saarbrücken</option>
            <option value="munich">München</option>
            <option value="stuttgart">Stuttgart</option>
            <option value="wiesbaden">Wiesbaden</option>
            <option value="magdeburg">Magdeburg</option>
            <option value="potsdam">Potsdam</option>
            <option value="schwerin">Schwerin</option>
            <option value="kiel">Kiel</option>
            <option value="erfurt">Erfurt</option>
            <option value="bremen">Bremen</option>
            <option value="hamburg">Hamburg</option>
            <option value="cologne">Köln</option>
            <option value="frankfurt">Frankfurt am Main</option>
            <option value="stuttgart">Stuttgart</option>
            <option value="dortmund">Dortmund</option>
            <option value="essen">Essen</option>
            <option value="leipzig">Leipzig</option>
            <option value="dresden">Dresden</option>
            <option value="nuremberg">Nürnberg</option>
            <option value="duisburg">Duisburg</option>
            <option value="bochum">Bochum</option>
            <option value="wuppertal">Wuppertal</option>
            <option value="bielefeld">Bielefeld</option>
            <option value="bonn">Bonn</option>
            <option value="mannheim">Mannheim</option>
          </select>
        </article>
        <article>
          <h1 v-html="what"></h1>
          <div class="type-of-employment">
            <label for="temporary">
              <input type="radio" id="temporary" name="employmentType" value="temporary" />
              Temporary
            </label>

            <label for="open-end">
              <input type="radio" id="open-end" name="employmentType" value="open-end" /> Open-end
            </label>

            <label for="freelancer">
              <input type="radio" id="freelancer" name="employmentType" value="freelancer" />
              Freelancer
            </label>

            <label for="trainee">
              <input type="radio" id="trainee" name="employmentType" value="trainee" /> Trainee
            </label>

            <label for="part-time">
              <input type="radio" id="part-time" name="employmentType" value="part-time" />
              Part-time
            </label>

            <label for="fulltime">
              <input type="radio" id="fulltime" name="employmentType" value="fulltime" /> Fulltime
            </label>

            <label for="studentjob">
              <input type="radio" id="studentjob" name="employmentType" value="studentjob" />
              Studentjob
            </label>

            <label for="minijob">
              <input type="radio" id="minijob" name="employmentType" value="minijob" />
              Mini-/Midijob
            </label>
          </div>
        </article>
        <article>
          <h1 v-html="educationLevel"></h1>
          <select name="education" id="education">
            <option value="Abitur">High school diploma</option>
            <option value="Fachabitur">Technical college entrance qualification</option>
            <option value="Student">Student</option>
            <option value="Bachelor">Bachelor's degree</option>
            <option value="Master">Master's degree</option>
            <option value="Promotion">Doctorate or PhD</option>
            <option value="Berufsausbildung">Vocational training or apprenticeship</option>
            <option value="Meisterprüfung">Master craftsman's certificate</option>
            <option value="Techniker">Engineering technician</option>
            <option value="Betriebswirt">Certified specialist</option>
            <option value="Betriebswirt">Business administrator</option>
          </select>
        </article>
        <article>
          <h1 v-html="howWork"></h1>
          <div class="how-would-you-like-to-work">
            <label for="office">
              <input type="radio" id="office" name="howToWork" value="office" /> Office
            </label>

            <label for="remote">
              <input type="radio" id="remote" name="howToWork" value="remote" /> Remote
            </label>

            <label for="hybrid">
              <input type="radio" id="hybrid" name="howToWork" value="hybrid" /> Hybrid
            </label>
          </div>
          <h1 v-html="swobFrom"></h1>
          <div class="swob-from-recruit-or-agencies">
            <label for="employers">
              <input type="radio" id="employers" name="howToWork" value="employers" /> Employers
            </label>

            <label for="agencies">
              <input type="radio" id="agencies" name="howToWork" value="agencies" /> Agencies
            </label>

            <label for="both">
              <input type="radio" id="both" name="howToWork" value="both" /> Both
            </label>
          </div>
        </article>
        <article>
          <div class="select-languages">
            <h1 v-html="language"></h1>
            <p>(multiple selections possible)</p>
          </div>
          <div class="language-options">
            <select name="languages" id="languages">
              <option value="German">German</option>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
        </article>
        <button class="btn-style-1" @click="$router.push('/swipe')">Confirm</button>
      </main>
    </div>
  </body>
</template>

<script>
import HamburgerMenu from '@/components/HamburgerMenu.vue'
export default {
  data() {
    return {
      where: 'Where do you search?',
      what: 'What type of employment are you looking for?',
      educationLevel: 'What is your level of education?',
      howWork: 'How would you like to work?',
      swobFrom: 'Do you want a SWOB from employers or recruitment agencies?',
      language: 'Which language would you like to work in?'
    }
  },
  components: {
    HamburgerMenu
  }
}
</script>

<style scoped>
@import '@/assets/css/FilterScreen.css';
</style>
