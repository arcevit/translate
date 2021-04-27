<template>
  <div class="mx-10">
    <v-layout row justify-space-between class="pl-5 pr-3 my-7">
      <div>
        <h2 class="subheading defaultBlack--text">My Folders</h2>
      </div>

      <div>
        <v-btn color="blue white--text mr-3" @click="showDialog">
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
        <router-link
          class="text-decoration-none"
          :to="{ name: 'Folder', params: { id: folder.id } }"
        >
          <FolderItem :folder="folder" />
        </router-link>
      </v-flex>
    </v-layout>

    <Dialog :dialog="dialog" @close="closeDialog" />
  </div>
</template>

<script>
import Dialog from "@/components/Dialog.vue";
import FolderItem from "./FolderItem.vue";
import { ref } from "@vue/composition-api";

export default {
  props: ["folders"],
  components: { Dialog, FolderItem },
  setup() {
    const dialog = ref(false);
    const showDialog = () => {
      dialog.value = true;
    };
    const closeDialog = () => {
      dialog.value = false;
    };

    return { dialog, showDialog, closeDialog };
  },
};
</script>

<style></style>
