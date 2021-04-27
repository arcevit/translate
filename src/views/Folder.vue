<template>
  <v-container class="my-5" fluid>
    <div v-if="error">{{ error }}</div>
    <FolderItem v-if="folder" :folder="folder" />
    <Progress v-else />
    
  </v-container>
</template>

<script>
import Progress from "@/components/Progress.vue";
import FolderItem from "@/components/FolderItem.vue";
import getFolder from "@/composables/getFolder";

export default {
  props: ["id"],
  components: { Progress, FolderItem },
  setup(props) {
    const { id } = props;

    const { folder, error, loadFolder } = getFolder(id);
    loadFolder();

    return { folder, error, loadFolder};
  },
};
</script>

<style></style>
