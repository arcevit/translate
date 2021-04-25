<template>
  <v-card flat class="ma-5 rounded-lg" color="white" max-width="360">
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
      Marketing Campaign #1
    </v-card-title>
    <v-card-subtitle class="mx-3 pt-5">
      <v-row>
        <v-icon small left>
          mdi-folder-open-outline
        </v-icon>
        <span class="font-weight-light caption">10 Projects</span>
      </v-row>
      <v-row>
        <v-icon small left>
          mdi-timer-outline
        </v-icon>
        <span class="font-weight-light caption mt-2"
          >Created On 12 february 2021</span
        >
      </v-row>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
