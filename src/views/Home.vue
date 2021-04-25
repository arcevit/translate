<template>
  <div class="home">
    <v-container class="my-5" fluid>
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
          <v-flex xs12 sm6 md4 lg3 v-for="folder in folders" :key="folder.key">
            <Folder />
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Folder from "@/components/Folder.vue";

@Component({
  components: {
    Folder,
  },
  data() {
    return {
      folders: [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }],
    };
  },
})
export default class Home extends Vue {}
</script>
