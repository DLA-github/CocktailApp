<template>
  <v-container>
    <v-card>
      <v-layout row justify-center>
        <v-flex>
          <p>Look for your cocktail</p>
          <v-text-field v-model="selected" prepend-icon="fas fa-edit" class="mr-5"></v-text-field>
          <v-btn @click="go" v-if="selected.length>=3">go</v-btn>
        </v-flex>
      </v-layout>

      <v-layout v-if="names" row wrap>
        <v-flex xs6 md3 lg3 v-for="n in names" :key="n.strDrinkThumb" class="text-xs-center pa-2">
          <router-link :to="'./detail:' + n.idDrink">
            <v-img :src="n.strDrinkThumb"></v-img>
          </router-link>
          {{n.strDrink}}
        </v-flex>
      </v-layout>
      <v-layout v-else>
        <v-flex xs12 md6 lg5 class="text-xs-center">
          <v-card dark>
            <v-card-title class="red">NO RESULTS. TRY AGAIN</v-card-title>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout justify-center row>
        <v-flex xs12 md6 lg5 class="text-xs-center headline indigo lighten-2">Day's Drink</v-flex>
      </v-layout>
      <v-layout row justify-center class="pa-3">
        <v-flex xs12 md6 lg5>
          <router-link :to="'./detail:' + cocktail.idDrink">
            <v-img :src="cocktail.strDrinkThumb"></v-img>
          </router-link>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout justify-center row>
        <v-flex
          xs12
          md6
          lg5
          class="text-xs-center headline indigo lighten-2"
        >Some of our suggestions</v-flex>
      </v-layout>
      <v-layout row wrap justify-space-around class="pa-3">
        <v-flex
          xs6
          md4
          lg4
          v-for="cocktail in allR"
          :key="cocktail.idDrink"
          class="text-xs-center pa-2"
        >
          <router-link :to="'./detail:' + cocktail.idDrink">
            <v-img :src="cocktail.strDrinkThumb"></v-img>
          </router-link>
          {{cocktail.strDrink}}
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      selected: [],
      show: false
    };
  },
  created() {
    this.$store.dispatch("getCocktails");
  },
  methods: {
    ...mapActions(["searchByName", "getCocktails"]),
    go() {
      this.searchByName(this.selected);
      this.show = true;
    }
  },
  computed: {
    ...mapState(["cat", "cocktail", "names", "allR"])
  }
};
</script>
<style>
.v-icon,
.v-label {
  font-size: 12px;
}
a {
  text-decoration: none;
}
</style>

