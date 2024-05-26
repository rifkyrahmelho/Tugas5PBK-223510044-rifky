<template>
  <q-page class="shop-page">
    <div class="section">
      <div class="text-h6 section-title">Cats</div>
      <div class="animal-cards">
        <q-card v-for="cat in cats" :key="cat.id" class="animal-card">
          <q-img :src="cat.image" :alt="cat.name" class="animal-image" />
          <q-card-section>
            <div class="text-subtitle1">{{ cat.name }}</div>
            <div class="text-body2">{{ cat.description }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="section">
      <div class="text-h6 section-title">Dogs</div>
      <div class="animal-cards">
        <q-card v-for="dog in dogs" :key="dog.id" class="animal-card">
          <q-img :src="dog.image" :alt="dog.name" class="animal-image" />
          <q-card-section>
            <div class="text-subtitle1">{{ dog.name }}</div>
            <div class="text-body2">{{ dog.description }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="section">
      <div class="text-h6 section-title">Birds</div>
      <div class="animal-cards">
        <q-card v-for="bird in birds" :key="bird.id" class="animal-card">
          <q-img :src="bird.image" :alt="bird.name" class="animal-image" />
          <q-card-section>
            <div class="text-subtitle1">{{ bird.name }}</div>
            <div class="text-body2">{{ bird.description }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import a1 from "@/assets/img/a1.jpg";
import a2 from "@/assets/img/a2.jpg";
import a3 from "@/assets/img/a3.jpg";
import a4 from "@/assets/img/a4.jpg";
import b1 from "@/assets/img/b1.jpg";
import b2 from "@/assets/img/b2.jpg";
import b3 from "@/assets/img/b3.jpg";
import b4 from "@/assets/img/b4.jpg";
import c1 from "@/assets/img/c1.jpg";
import c2 from "@/assets/img/c2.jpg";
import c3 from "@/assets/img/c3.jpg";
import c4 from "@/assets/img/c4.jpg";

// Sample data for cats, dogs, and birds
const cats = ref([
  {
    id: 1,
    name: "Whiskers",
    description: "A playful kitten.",
    image: c1,
  },
  {
    id: 2,
    name: "Mittens",
    description: "Loves to snuggle.",
    image: c2,
  },
  {
    id: 3,
    name: "Shadow",
    description: "A shy but friendly cat.",
    image: c3,
  },
  {
    id: 4,
    name: "Bella",
    description: "Full of energy and fun.",
    image: c4,
  },
]);

const dogs = ref([
  {
    id: 1,
    name: "Buddy",
    description: "Loyal and friendly.",
    image: a1,
  },
  {
    id: 2,
    name: "Max",
    description: "Loves to play fetch.",
    image: a2,
  },
  {
    id: 3,
    name: "Charlie",
    description: "Great with kids.",
    image: a3,
  },
  {
    id: 4,
    name: "Bailey",
    description: "A bundle of joy.",
    image: a4,
  },
]);

const birds = ref([
  {
    id: 1,
    name: "Tweety",
    description: "Sings beautifully.",
    image: b1,
  },
  {
    id: 2,
    name: "Polly",
    description: "Loves to talk.",
    image: b2,
  },
  {
    id: 3,
    name: "Sky",
    description: "Enjoys flying around.",
    image: b3,
  },
  {
    id: 4,
    name: "Sunny",
    description: "Brightens your day.",
    image: b4,
  },
]);
</script>

<style scoped>
.shop-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: "Roboto", sans-serif;
}

.section {
  width: 100%;
  max-width: 1200px;
  margin-bottom: 30px;
}

.section-title {
  margin-bottom: 20px;
}

.animal-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.animal-card {
  width: 23%;
  margin-bottom: 20px;
}

.animal-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>
