<template>
  <q-page class="about-page">
    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">About Pet Paradise</div>
        <p>
          Welcome to Pet Paradise! We are a dedicated team of animal lovers
          committed to providing the best care and products for your furry,
          feathered, and scaly friends. Our mission is to ensure that every pet
          feels loved, cared for, and happy.
        </p>
      </q-card-section>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Our Story</div>
        <p>
          Pet Paradise was founded in 2020 by a group of pet enthusiasts who
          wanted to create a one-stop shop for all pet needs. From grooming and
          boarding to veterinary care and a wide range of pet products, we aim
          to make pet ownership as joyful and convenient as possible.
        </p>
      </q-card-section>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Mission and Vision</div>
        <p>
          Our mission is to enhance the lives of pets and their owners by
          providing top-quality products and exceptional services. We envision a
          world where every pet is healthy, happy, and loved.
        </p>
      </q-card-section>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Our Values</div>
        <p>
          At Pet Paradise, we believe in treating every pet with the utmost
          respect and care. We are committed to offering high-quality products
          and services that enhance the lives of pets and their owners. Our team
          is always here to help, providing expert advice and compassionate
          care.
        </p>
      </q-card-section>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-h6">Meet Our Team</div>
        <q-list bordered>
          <q-item>
            <q-item-section>
              <q-item-label>Jane Doe - Founder & CEO</q-item-label>
              <q-item-label caption
                >Jane has over 20 years of experience in the pet care industry
                and is passionate about animal welfare.</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>John Smith - Head Veterinarian</q-item-label>
              <q-item-label caption
                >John is a licensed veterinarian with a focus on small animals.
                He has been with Pet Paradise since its inception.</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>Emily Johnson - Grooming Specialist</q-item-label>
              <q-item-label caption
                >Emily is an expert groomer with a knack for making pets look
                and feel their best.</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup></script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: "Roboto", sans-serif;
}

.q-card {
  width: 100%;
  max-width: 800px;
}

.text-h6 {
  font-weight: 500;
  margin-bottom: 16px;
}
</style>
