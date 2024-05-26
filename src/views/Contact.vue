<template>
  <q-page class="contact-page">
    <q-card class="contact-card">
      <q-card-section>
        <div class="text-h6">Contact Us</div>
        <p>
          Have questions or feedback? We'd love to hear from you! Feel free to
          reach out to us using the form below or give us a call at (123)
          456-7890.
        </p>
      </q-card-section>

      <q-card-section>
        <q-input outlined v-model="name" label="Name" />
        <q-input outlined v-model="email" label="Email" />
        <q-input outlined v-model="message" label="Message" textarea />
        <q-btn
          class="submit-btn"
          color="primary"
          label="Submit"
          @click="submitForm"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

const submitForm = () => {
  // Perform form submission logic here
  // For simplicity, we'll just log the form data
  console.log("Name:", name.value);
  console.log("Email:", email.value);
  console.log("Message:", message.value);

  // Clear form fields after submission
  name.value = "";
  email.value = "";
  message.value = "";
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

.contact-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px); /* Adjust according to your header height */
  padding: 20px;
  font-family: "Roboto", sans-serif;
}

.contact-card {
  width: 100%;
  max-width: 400px;
}

.text-h6 {
  font-weight: 500;
  margin-bottom: 16px;
}

.submit-btn {
  margin-top: 20px;
}
</style>
