<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card class="pa-15">
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
                label="Folder Name"
                rounded
                outlined
                dense
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-row class="text-center">
            <v-col cols="12">
              <v-btn rounded color="defaultGreen white--text">
                <span class="text-capitalize pa-5">Create folder</span>
              </v-btn>
            </v-col>
            <v-col cols="12">
              <v-btn text color="defaultGreen" @click="closeDialog">
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
export default {
  props: ["dialog"],
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
