<template>
  <div>
    <h1>Fallback Content</h1>
    <!-- <ul>
      <li v-for="item in category" :key="item.id">
        <article class="card" :style="{ 'background-image': 'url(' + item.imageSrc + ')' }">
          <div class="overlay">
            <section class="content">
              <p class="card-title">{{ item.caption }}</p>
            </section>
          </div>
        </article>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: [
        {
          id: '8c9df914-4a5f-45c2-a82e-9cde3fbcf842',
          imageSrc: '/src/assets/Images/fahrul-razi-BR6lrzCPYPk-unsplash.jpeg',
          alt: 'a work desk with two monitors and open code',
          caption: 'IT & Consulting'
        },
        {
          id: '18b38ac4-9469-4153-8111-f1363c4367b3',
          imageSrc: '/src/assets/images/davisuko-5E5N49RWtbA-unsplash.jpeg',
          alt: 'Blue Background and table with a blue sliced orange',
          caption: 'Art & Design'
        },
        {
          id: 'bf9b08b5-b8de-4af6-9408-feb7261dac6c',
          imageSrc: '/src/assets/images/adem-ay-Tk9m_HP4rgQ-unsplash.jpeg',
          alt: 'A phone with social media apps',
          caption: 'Sales & Marketing'
        },
        {
          id: 'fa67e111-db23-4404-9126-f60e8ae1ba44',
          imageSrc: '/src/assets/images/mika-baumeister-bGZZBDvh8s4-unsplash.jpeg',
          alt: 'A photo from the EZB building with the EZB sign in front in frankfurt',
          caption: 'Engineering & Architecture'
        },
        {
          id: 'cc8eeefb-6516-48e1-8fed-7794fa3a14c7',
          imageSrc: '/src/assets/images/natali-quijano-N79MYsd2Ce4-unsplash.jpeg',
          alt: 'Wing of a plane above the clouds',
          caption: 'Tourism & Service'
        },
        {
          id: '4cb2f8b4-ece7-49b8-8fe1-d3f30bd3452c',
          imageSrc: '/src/assets/images/nick-karvounis-XcLQN-2R9CM-unsplash.jpeg',
          alt: 'A mans hands while working with tools',
          caption: 'Craftmanship'
        },
        {
          id: 'b27e93db-1a2e-43ec-85c3-8af16bf87611',
          imageSrc: '/src/assets/Images/drew-hays-tGYrlchfObE-unsplash.jpeg',
          alt: 'A girl writing on a chalkboard',
          caption: 'Science & Research'
        },
        {
          id: 'af970799-c218-4875-8713-c6e6650b8927',
          imageSrc: '/src/assets/Images/christina-wocintechchat-com-vzfgh3RAPzM-unsplash.jpeg',
          alt: 'A picture in front of stacked container',
          caption: 'Human Resources'
        },
        {
          id: 'c1fd2f04-c27e-4466-a8fb-702dc8e7e6d8',
          imageSrc: '/src/assets/Images/myriam-zilles-KltoLK6Mk-g-unsplash.jpeg',
          alt: 'A girl writing on a chalkboard',
          caption: 'Healthcare & Medicine'
        },
        {
          id: '37986a07-123f-442a-98f8-38b664713fcc',
          imageSrc: '/src/assets/Images/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpeg',
          alt: 'A picture in front of stacked container',
          caption: 'Real Estate'
        },
        {
          id: '13262340-2a81-4ed0-bdd4-dd13f397adf7',
          imageSrc: '/src/assets/images/nikhita-s-NsPDiPFTp4c-unsplash.jpeg',
          alt: 'A girl writing on a chalkboard',
          caption: 'Social Services & Nonprofit'
        },
        {
          id: '8c417be2-e765-4bf6-a4e0-16ed45a85d33',
          imageSrc: 'src/assets/Images/carla-martinesi-ZW9CSUdANqw-unsplash.jpeg',
          alt: 'A picture in front of stacked container',
          caption: 'Food & Cullinary Arts'
        },
        {
          id: '0762d2c5-66c7-4524-bc46-925445076389',
          imageSrc: 'src/assets/Images/charanjeet-dhiman-mHusyBu4bxM-unsplash.jpeg',
          alt: 'A girl writing on a chalkboard',
          caption: 'Customer Service'
        },
        {
          id: '4492f4e9-d1f8-40fe-b9ae-1163707d343b',
          imageSrc: '/src/assets/Images/victoria-kubiaki-emPsZ6MBCUs-unsplash.jpeg',
          alt: 'A picture in front of stacked container',
          caption: 'Economics'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/Category.css';
</style>
