<template>
  <div v-if="projects.length" class="mx-10">
    <v-layout row justify-space-between class="pl-5 pr-3 my-7">
      <div>
        <h2 class="subheading defaultBlack--text">My Projects</h2>
      </div>
      <v-btn text color="blue">
        View All
      </v-btn>
    </v-layout>
    <v-layout row wrap class="mt-5 mx-3">
      <v-flex sm12 md6 lg3 v-for="project in projects" :key="project.id">
        <v-card flat class="ma-5 rounded-md" min-width="300" max-width="350">
          <div class="pa-3">
            <v-card-title class="defaultBlack--text text-center">
              {{ project.attributes.name.replace("EasyProject from ", "") }}
            </v-card-title>
            <v-card-subtitle class="blue--text">
              <span class="font-weight-bold">
                {{ project.attributes.identifier }}</span
              >
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
                <v-list-item-subtitle class="subtitle-2"
                  >{{
                    project.attributes.price.total_euro
                  }}€</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="body-2 text--disabled"
                  >FROM</v-list-item-title
                >
                <v-list-item-subtitle class="subtitle-2 text-uppercase">{{
                  project.attributes.source_language
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title class="body-2 text--disabled"
                  >TO</v-list-item-title
                >
                <v-list-item-subtitle class="subtitle-2">
                  <span
                    v-for="language in project.attributes.target_languages"
                    :key="language"
                    class="text-uppercase"
                    >{{ language }}</span
                  ></v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </div>

          <div
            class="lightGreen py-8 text-center"
            v-if="project.attributes.status === 'COMPLETED'"
          >
            <span class="defaultGreen--text">Translation is ready</span>
          </div>
          <div class="mx-5 pt-5 pb-10" v-else>
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
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ["projects"],
};
</script>

<style></style>
