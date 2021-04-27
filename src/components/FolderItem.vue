<template>
  <v-hover v-slot="{ hover }">
    <v-card
      flat
      class="ma-5 rounded-lg pb-5"
      color="white"
      max-width="360"
      :elevation="hover ? 10 : 0"
    >
      <v-card-title>
        <v-row align="center" justify="space-between" class="px-3 pt-2">
          <v-icon large class="blue--text">
            mdi-folder
          </v-icon>
          <v-btn text fab small light>
            <v-icon color="defaultBlack">
              mdi-dots-vertical
            </v-icon>
          </v-btn>
        </v-row>
      </v-card-title>
      <v-card-title class="text-h6 defaultBlack--text">
        {{ folder.attributes.name }}
      </v-card-title>
      <v-card-subtitle class="mx-3 pt-5">
        <v-row>
          <v-icon small left>
            mdi-folder-open-outline
          </v-icon>
          <span class="font-weight-light caption"
            >{{ folder.attributes.total_projects }} Projects</span
          >
        </v-row>
        <v-row>
          <v-icon small left>
            mdi-timer-outline
          </v-icon>
          <span class="font-weight-light caption mt-2"
            >Created on
            {{ new Date(folder.attributes.created_at).toDateString() }}</span
          >
        </v-row>
      </v-card-subtitle>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ["folder"],
};
</script>

<style></style>
