<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-title class="layout justify-center title text-uppercase indigo lighten-2">{{id}}</v-card-title>
          <div class="layout justify-center">
            <v-flex xs8>
              <v-img :src="'https://www.thecocktaildb.com/images/ingredients/'+ id +'.png'"></v-img>
            </v-flex>
          </div>
          <div v-if="ing.strDescription" class="layout row">
            <v-flex class="pl-3">Details of:</v-flex>
          </div>
          <div v-if="ing.strDescription" class="layout row">
            <v-flex class="pa-3 text-xs-justify">{{ing.strDescription}}</v-flex>
          </div>
          <div v-else class="layout row">
            <v-flex xs2 class="pl-3 subheading">Details:</v-flex>
            <v-flex xs8 class="pa-3 text-xs-center">It's just {{id}}</v-flex>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row justify-center class="mb-2">
      <v-flex class="title indigo lighten-2">With this ingredient, also...</v-flex>
    </v-layout>
    <!-- <v-card>
      <v-layout row wrap justify-space-around>
        <v-flex xs5 md3 v-for="cocktail in o_name" :key="cocktail.strDrink">
          <router-link :to="'/detail:'+cocktail.idDrink">
            <v-img :src="cocktail.strDrinkThumb"></v-img>
          </router-link>
          {{cocktail.strDrink}}
        </v-flex>
      </v-layout>
    </v-card>-->
    <v-card>
      <v-data-iterator
        :items="o_name"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-class=" layout row wrap"
      >
        <template v-slot:item="cocktail">
          <v-flex xs4 class="pa-2">
            <router-link :to="'./detail:'+ cocktail.item.idDrink">
              <v-img :src="cocktail.item.strDrinkThumb"></v-img>
            </router-link>
            {{cocktail.item.strDrink}}
          </v-flex>
        </template>
      </v-data-iterator>
    </v-card>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      rowsPerPageItems: [24, 48],
      pagination: {
        rowsPerPage: 24
      },
      id: this.$route.params.id.split(":").pop()
    };
  },
  created() {
    this.getInfo();
  },
  computed: {
    ...mapState(["ing", "o_name"])
  },
  methods: {
    ...mapActions(["searchByIngredient", "searchCocktailByIng"]),
    getInfo() {
      this.searchByIngredient(this.id);
      this.searchCocktailByIng(this.id);
    }
  }
};
</script>
<style>
.ingredients {
  display: inline-block;
}
</style>
