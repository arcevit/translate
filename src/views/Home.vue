<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <v-container v-if="folders.length" class="my-5" fluid>
      <Folders :folders="folders" />
      <div class="mx-10">
        <v-layout row justify-space-between class="pl-5 pr-3 my-7">
          <div>
            <h2 class="subheading defaultBlack--text">My Projects</h2>
          </div>
          <v-btn text color="blue">
            View All
          </v-btn>
        </v-layout>
        <v-layout row wrap class="my-5 mx-3"> </v-layout>
      </div>
    </v-container>
    <div v-else>
      <Progress />
    </div>
  </div>
</template>

<script>
import Folders from "@/components/Folders.vue";
import Projects from "@/components/Projects.vue";
import getFolders from "@/composables/getFolders";
import Progress from "@/components/Progress.vue";

export default {
  name: "Home",
  components: { Folders, Projects, Progress },
  setup() {
    const { error, folders, load } = getFolders();
    load();

    return { folders, error };
  },
};
</script>

<style></style>

<v-flex xs12 sm6 md4 lg3 v-for="folder in folders" :key="folder.key">
             <Folder />
           </v-flex>

//
<v-flex sm12 md6 lg v-for="project in projects" :key="project.key">
          //   <Project />
          // </v-flex>
