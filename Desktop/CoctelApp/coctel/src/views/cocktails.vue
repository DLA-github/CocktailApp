<template>
  <v-container>
    <v-toolbar color="layout indigo lighten-2 justify-center">
      <v-toolbar-title class="text-uppercase">All our Cocktails</v-toolbar-title>
    </v-toolbar>

    <!-- <v-layout>
      <v-flex>
        <v-card>
          <v-card-title>
            <v-card-text>
              <v-select :items="cat" label="Solo field" outline v-model="selected"></v-select>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>-->
    <v-card>
      <v-data-iterator
        :items="allC"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-class=" layout row wrap"
      >
        <template v-slot:item="props">
          <v-flex xs4 class="pa-2">
            <router-link :to="'./detail:'+ props.item.idDrink">
              <v-img :src="props.item.strDrinkThumb"></v-img>
            </router-link>
            {{props.item.strDrink}}
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
      selected: "",
      rowsPerPageItems: [24, 48],
      pagination: {
        rowsPerPage: 24
      }
    };
  },
  created() {
    this.getInfo();
  },
  computed: {
    ...mapState(["allC", "cat"]),
    filterCat() {
      return this.allC.filter(
        c => c.strCategory.includes(this.selected) || this.selected.length == 0
      );
    }
  },
  methods: {
    ...mapActions(["getCocktails", "listCoctelsCategories"]),
    getInfo() {
      this.getCocktails();
    }
  }
};
</script>
<style>
</style>
