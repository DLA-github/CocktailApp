<template>
  <v-app dark>
    <navbar></navbar>
    <v-content>
      <!-- <v-img :src="require('./assets/133837-OS014W-907.jpg')"> -->
      <router-view/>
      <!-- </v-img> -->
    </v-content>
  </v-app>
</template>

<script>
import navbar from "./components/navBar";
export default {
  components: { navbar },
  name: "App",
  data() {
    return {};
  },
  created() {
    // this.$store.dispatch("listCoctelsCategories");
    this.$store.dispatch("randomCocktail");
  }
};
</script>
<style>
.v-content {
  padding: 40px 0 0 0 !important;
}
a {
  text-decoration: none;
}
</style>

