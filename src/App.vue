<template>
  <v-app>
    <Navbar />
    <v-main class="defaultBackground">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";
export default Vue.extend({
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
});
</script>
