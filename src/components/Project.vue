<template>
  <v-card flat class="ma-5 rounded-md pb-5" min-width="330" max-width="380">
    <div class="pa-3">
      <v-card-title class="defaultBlack--text text-center">
        Corporate CSR strategy 2019
      </v-card-title>
      <v-card-subtitle class="blue--text">
        <span class="font-weight-bold"> ps39I/39439i493fjdf</span>
      </v-card-subtitle>
    </div>

    <v-divider></v-divider>
    <div class="py-5">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="body-2 text--disabled"
            >DATE OF ORDER</v-list-item-title
          >
          <v-list-item-subtitle class="subtitle-2"
            >15 hours ago</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="body-2 text--disabled"
            >Price</v-list-item-title
          >
          <v-list-item-subtitle class="subtitle-2">1,234£</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="body-2 text--disabled"
            >FROM</v-list-item-title
          >
          <v-list-item-subtitle class="subtitle-2">EN</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title class="body-2 text--disabled"
            >TO</v-list-item-title
          >
          <v-list-item-subtitle class="subtitle-2">
            DK, PK, TR, USA</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </div>

    <v-divider class=""></v-divider>
    <div class="mx-5 pt-5 pb-10">
      <v-row align="center" justify="space-between" class="mx-5 pt-2">
        <div>
          <v-icon left small>mdi-timer-outline</v-icon>
          <span class="caption defaultGreen--text">23 hours</span
          ><span class="caption"> left</span>
        </div>

        <div>
          <v-icon left small>
            mdi-format-list-checkbox
          </v-icon>
          <span class="caption defaultGreen--text">2</span
          ><span class="caption">/3</span>
        </div>
      </v-row>

      <v-row>
        <v-progress-linear
          value="15"
          height="12"
          class="mx-5 rounded-pill"
          color="defaultGreen"
        ></v-progress-linear>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
