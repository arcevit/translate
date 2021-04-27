<template>
  <v-app-bar app light flat height="90" color="white">
    <router-link class="text-decoration-none" :to="{ name: 'Home' }">
      <v-toolbar-title>
        <h2 class="blue--text font-weight-bold">MY WORKSPACE</h2>
      </v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>

    <v-btn large rounded color="blue white--text">
      <v-icon left>mdi-plus-thick</v-icon>
      <span class="mr-2 body-2 text-capitalize">Create new project</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style></style>
