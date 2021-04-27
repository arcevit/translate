<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-progress-linear
        v-if="loading"
        indeterminate
        color="defaultGreen"
        height="6"
      ></v-progress-linear>

      <v-card class="pa-15">
        <Snackbar :snackbar="snackbar" @close="closeSnackbar" />
        <div class="text-center">
          <h1 class="font-weight-medium defalutBlack--text">
            Create your folder here
          </h1>
          <h4 class="font-weight-medium text--secondary my-8">
            Add a new folder to group your projects
          </h4>
        </div>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="folderName"
                label="Folder Name"
                rounded
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="text-center">
              <v-btn
                rounded
                color="defaultGreen white--text"
                @click="handleSubmit"
                large
              >
                <span class="text-capitalize ma-6">Create folder</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-row class="text-center">
            <v-col cols="12">
              <v-btn
                text
                color="defaultGreen"
                @click="
                  closeDialog();
                  closeSnackbar();
                "
              >
                Cancel
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Snackbar from "@/components/Snackbar.vue";
import { ref, reactive } from "@vue/composition-api";
import axios from "axios";
import { headers, team_name } from "@/config";

export default {
  props: ["dialog"],
  components: { Snackbar },
  setup() {
    const folderName = ref("");
    const loading = ref(false);
    const snackbar = ref(false);

    const closeSnackbar = () => {
      snackbar.value = false;
    };

    const handleSubmit = async () => {
      if (folderName.value === "") {
        snackbar.value = true;
        return;
      }
      loading.value = true;
      const post = {
        data: {
          type: "project-folder",
          attributes: {
            name: folderName.value,
          },
        },
      };
      try {
        const response = await axios.post(
          `https://api.platform.sandbox.easytranslate.com/api/v1/teams/${team_name}/folders`,
          post,
          headers
        );
        console.log("response", response.data);
      } catch (e) {
        console.log("error");
      }
      folderName.value = "";
      loading.value = false;
    };
    return { handleSubmit, folderName, loading, snackbar, closeSnackbar };
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
