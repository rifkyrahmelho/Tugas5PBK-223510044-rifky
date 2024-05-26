<template>
  <q-layout view="lHr lpR lfr">
    <q-header elevated>
      <q-toolbar class="bg-green">
        <q-toolbar-title>Pet Paradise</q-toolbar-title>
        <q-btn flat label="Home" @click="goTo('/')" />
        <q-btn flat label="About" @click="goTo('about')" />
        <q-btn flat label="Shop" @click="goTo('shop')" />
        <q-btn flat label="Contact" @click="goTo('contact')" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="footer">
      <q-toolbar class="bg-green">
        <div class="q-mx-auto">© 2024 Pet Paradise. All rights reserved.</div>
        <q-btn flat label="Privacy Policy" @click="goTo('privacy')" />
        <q-btn flat label="Terms of Service" @click="goTo('terms')" />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style>
.q-toolbar {
  padding: 0 75px !important;
}
.q-toolbar__title:first-child {
  padding-left: 32px !important;
}
.q-tab {
  padding: 0 20px !important;
  min-height: 75px !important;
}
</style>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goTo = (page) => {
  router.push(`/${page}`);
};
</script>
