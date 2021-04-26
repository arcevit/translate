<template>
  <div class="home">
    <v-container class="my-5" fluid>
      <div v-if="error">{{ error }}</div>
      <Folders v-if="folders.length" :folders="folders" />
      <Projects v-if="projects.length" :projects="projects" />
      <Progress v-else />
    </v-container>
  </div>
</template>

<script>
import Folders from "@/components/Folders.vue";
import Projects from "@/components/Projects.vue";
import getFolders from "@/composables/getFolders";
import getProjects from "@/composables/getProjects";
import Progress from "@/components/Progress.vue";

export default {
  name: "Home",
  components: { Folders, Projects, Progress },
  setup() {
    const { error, folders, loadFolders } = getFolders();
    const { projects, errorOfProjects, loadProjects } = getProjects();
    loadFolders();
    loadProjects();

    return { folders, error, projects, errorOfProjects };
  },
};
</script>

<style></style>
