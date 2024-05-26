<template>
  <q-page class="home-page">
    <q-page-container>
      <q-page>
        <q-carousel
          v-model="slide"
          animated
          arrows
          infinite
          swipeable
          width="900px"
          height="550px"
        >
          <q-carousel-slide
            v-for="(image, index) in images"
            :key="index"
            :name="index"
            :img-src="image.src"
          >
            <q-img :src="image.src" :alt="image.alt" />
          </q-carousel-slide>
        </q-carousel>

        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h6">Welcome to Pet Paradise</div>
            <p>
              At Pet Paradise, we believe that pets are family. Our mission is
              to provide the best products and services to keep your furry
              friends happy and healthy.
            </p>
          </q-card-section>
        </q-card>

        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h6">Our Services</div>
            <q-list bordered>
              <q-item>
                <q-item-section>
                  <q-item-label>Grooming</q-item-label>
                  <q-item-label caption
                    >Keep your pets looking their best with our professional
                    grooming services.</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Pet Boarding</q-item-label>
                  <q-item-label caption
                    >Safe and comfortable boarding facilities for your pets
                    while you're away.</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label>Veterinary Care</q-item-label>
                  <q-item-label caption
                    >Comprehensive veterinary services to ensure your pets'
                    health and well-being.</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>

        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h6">Special Offers</div>
            <p>
              Check out our special offers on pet food, toys, and accessories.
              Don't miss out on great deals!
            </p>
          </q-card-section>
        </q-card>

        <q-card class="q-mb-md">
          <q-card-section>
            <div class="text-h6">Contact Us</div>
            <p>
              Have any questions? Feel free to reach out to us via our contact
              page or give us a call at (123) 456-7890.
            </p>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import a11 from "../assets/img/a11.jpg";
import b11 from "../assets/img/b11.jpg";
import c11 from "../assets/img/c11.jpg";

const images = ref([
  {
    src: a11,
    alt: "Happy Dog",
  },
  {
    src: c11,
    alt: "Playful Cat",
  },
  {
    src: b11,
    alt: "Colorful Bird",
  },
]);

const slide = ref(0);
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
}

.q-page-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.q-card {
  width: 100%;
  max-width: 800px;
}

.footer {
  background: #fff;
  text-align: center;
  padding: 10px 0;
}
</style>
