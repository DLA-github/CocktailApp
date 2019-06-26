<template>
  <v-container>
    <v-layout>
      <v-flex xs12 md6 lg6>
        <v-card>
          <v-card-title
            class="layout justify-center title text-uppercase indigo lighten-2"
          >Non Alcoholic Drinks</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
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
        :items="allN"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-class=" layout row wrap"
      >
        <template v-slot:item="props">
          <v-flex xs4 md3 lg3 class="pa-2">
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
    ...mapState(["allN"])
  },
  methods: {
    ...mapActions(["getNonAlcoholicDrinks"]),
    getInfo() {
      this.getNonAlcoholicDrinks();
    }
  }
};
</script>
<style>
</style>
