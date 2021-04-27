<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="snackbar"  color="error">
      You must add a title for folder name

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="closeSnackbar">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  props: ["snackbar"],

  methods: {
    closeSnackbar() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
