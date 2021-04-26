import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#2C3FD6",
        secondary: "#BFEDE5",
        accent: "#8c9eff",
        error: "#b71c1c",
        defaultGreen: "#29C1A7",
        lightGreen: "#BFEDE5",
        defaultBlack: "#454A5B",
        ligthGrey: "#C3C3C3",
        defaultBackground: "#F3F6FA",
      },
    },
  },
});
