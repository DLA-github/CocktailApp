<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-title
            class="layout justify-center title text-uppercase indigo lighten-2"
          >"Ordinary" DrinK (No Cocktail)</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-card>
      <v-data-iterator
        :items="allO"
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
      rowsPerPageItems: [25, 50],
      pagination: {
        rowsPerPage: 25
      }
    };
  },
  created() {
    this.getInfo();
  },
  computed: {
    ...mapState(["allO"])
  },
  methods: {
    ...mapActions(["getOrdinary"]),
    getInfo() {
      this.getOrdinary();
    }
  }
};
</script>
<style>
</style>
