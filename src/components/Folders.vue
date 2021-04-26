<template>
  <div class="mx-10">
    <v-layout row justify-space-between class="pl-5 pr-3 my-7">
      <div>
        <h2 class="subheading defaultBlack--text">My Folders</h2>
      </div>

      <div>
        <v-btn color="blue white--text mr-3">
          <v-icon left>mdi-plus-thick</v-icon>
          <span class="caption">New Folder</span>
        </v-btn>
        <v-btn text color="blue">
          View All
        </v-btn>
      </div>
    </v-layout>
    <v-layout row wrap class="my-5 px-5">
      <v-flex xs12 sm6 md4 lg3 v-for="folder in folders" :key="folder.id">
        <v-card flat class="ma-5 rounded-lg pb-5" color="white" max-width="360">
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
              <span class="font-weight-light caption mt-2">Created on {{
                new Date(folder.attributes.created_at).toDateString()
              }}</span>
            </v-row>
          </v-card-subtitle>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ["folders"],
};
</script>

<style></style>
