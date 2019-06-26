<template>
  <v-container>
    <v-layout>
      <v-flex xs12 md8 lg8>
        <v-card>
          <v-card-title
            class="layout justify-center indigo lighten-2 title text-uppercase"
          >{{detail.strDrink}}</v-card-title>
          <v-card-text class="layout text-xs-center caption">
            <v-flex>
              <v-chip class="caption">Category:</v-chip>
              <router-link
                to="./cocktails"
                v-if="detail.strCategory =='Cocktail'"
              >{{detail.strCategory}}</router-link>

              <router-link
                to="./ordinary"
                v-else-if="detail.strCategory == 'Ordinary Drink'"
              >{{detail.strCategory}}</router-link>

              <span v-else>{{detail.strCategory}}</span>
            </v-flex>
            <v-flex>
              <v-chip class="caption">Alcoholic:</v-chip>
              <router-link
                to="./alcoholic"
                v-if="detail.strAlcoholic =='Alcoholic'"
              >{{detail.strAlcoholic}}</router-link>
              <router-link
                to="./non-alcoholic"
                v-else-if="detail.strAlcoholic =='Non alcoholic'"
              >{{detail.strAlcoholic}}</router-link>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs12 md4>
        <v-card>
          <v-card-title class="layout justify-center">
            <v-flex xs8>
              <v-img :src="detail.strDrinkThumb"></v-img>
            </v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-card xs12 md8 lg8>
      <v-card-title
        class="layout justify-center indigo lighten-2 subheadline pa-1 xs12 md8 lg8"
      >Ingredients</v-card-title>

      <v-card-text class="layout justify-center">
        <v-layout justify-center wrap>
          <v-flex xs3 md2 lg2 v-if="detail.strIngredient1">
            <router-link :to="'./ingredient:'+ detail.strIngredient1">
              <v-img
                :src="'https://www.thecocktaildb.com/images/ingredients/'+ detail.strIngredient1 +'-Small.png'"
              ></v-img>
            </router-link>
          </v-flex>

          <v-flex xs3 md2 lg2 v-if="detail.strIngredient2">
            <router-link :to="'./ingredient:'+ detail.strIngredient2">
              <v-img
                :src="'https://www.thecocktaildb.com/images/ingredients/'+ detail.strIngredient2 +'-Small.png'"
              ></v-img>
            </router-link>
          </v-flex>

          <v-flex xs3 md2 lg2 v-if="detail.strIngredient3">
            <router-link :to="'./ingredient:'+ detail.strIngredient3">
              <v-img
                :src="'https://www.thecocktaildb.com/images/ingredients/'+ detail.strIngredient3 +'-Small.png'"
              ></v-img>
            </router-link>
          </v-flex>

          <v-flex xs3 md2 lg2 v-if="detail.strIngredient4">
            <router-link :to="'./ingredient:'+ detail.strIngredient4">
              <v-img
                :src="'https://www.thecocktaildb.com/images/ingredients/'+ detail.strIngredient4 +'-Small.png'"
              ></v-img>
            </router-link>
          </v-flex>

          <v-flex xs3 md2 lg2 v-if="detail.strIngredient5">
            <router-link :to="'./ingredient:'+ detail.strIngredient5">
              <v-img
                :src="'https://www.thecocktaildb.com/images/ingredients/'+ detail.strIngredient5 +'-Small.png'"
              ></v-img>
            </router-link>
          </v-flex>

          <v-flex xs3 md2 lg2 v-if="detail.strIngredient6">
            <router-link :to="'./ingredient:'+ detail.strIngredient6">
              <v-img
                :src="'https://www.thecocktaildb.com/images/ingredients/'+ detail.strIngredient6 +'-Small.png'"
              ></v-img>
            </router-link>
          </v-flex>

          <v-flex xs3 md2 lg2 v-if="detail.strIngredient7">
            <router-link :to="'./ingredient:'+ detail.strIngredient7">
              <v-img
                :src="'https://www.thecocktaildb.com/images/ingredients/'+ detail.strIngredient7 +'-Small.png'"
              ></v-img>
            </router-link>
          </v-flex>

          <v-flex xs3 md2 lg2 v-if="detail.strIngredient8">
            <router-link :to="'./ingredient:'+ detail.strIngredient8">
              <v-img
                :src="'https://www.thecocktaildb.com/images/ingredients/'+ detail.strIngredient8 +'-Small.png'"
              ></v-img>
            </router-link>
          </v-flex>

          <v-flex xs3 md2 lg2 v-if="detail.strIngredient9">
            <router-link :to="'./ingredient:'+ detail.strIngredient9">
              <v-img
                :src="'https://www.thecocktaildb.com/images/ingredients/'+ detail.strIngredient9 +'-Small.png'"
              ></v-img>
            </router-link>
          </v-flex>

          <v-flex xs3 md2 lg2 v-if="detail.strIngredient10">
            <router-link :to="'./ingredient:'+ detail.strIngredient10">
              <v-img
                :src="'https://www.thecocktaildb.com/images/ingredients/'+ detail.strIngredient10 +'-Small.png'"
              ></v-img>
            </router-link>
          </v-flex>

          <v-flex v-if="detail.strIngredient11">{{detail.strIngredient11}}</v-flex>

          <v-flex v-if="detail.strIngredient12">{{detail.strIngredient12}}</v-flex>

          <v-flex v-if="detail.strIngredient13">{{detail.strIngredient13}}</v-flex>

          <v-flex v-if="detail.strIngredient14">{{detail.strIngredient14}}</v-flex>

          <v-flex v-if="detail.strIngredient15">{{detail.strIngredient15}}</v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
    <v-layout justify-center>
      <v-flex xs12 md8 lg8>
        <v-card>
          <v-card-title class="layout justify-center">
            <v-chip color="indigo">Measures</v-chip>
          </v-card-title>
          <v-card-text class="layout row wrap caption text-xs-justify">
            <v-flex
              xs6
              md3
              lg3
              class="text-xs-center"
              v-if="detail.strIngredient1"
            >{{detail.strIngredient1}}:-{{detail.strMeasure1}}-</v-flex>
            <v-flex
              xs6
              md3
              lg3
              class="text-xs-center"
              v-if="detail.strIngredient2"
            >{{detail.strIngredient2}}:-{{detail.strMeasure2}}-</v-flex>
            <v-flex
              xs6
              md3
              lg3
              class="text-xs-center"
              v-if="detail.strIngredient3"
            >{{detail.strIngredient3}}:-{{detail.strMeasure3}}-</v-flex>
            <v-flex
              xs6
              md3
              lg3
              class="text-xs-center"
              v-if="detail.strIngredient4"
            >{{detail.strIngredient4}}:-{{detail.strMeasure4}}-</v-flex>
            <v-flex
              xs6
              md3
              lg3
              class="text-xs-center"
              v-if="detail.strIngredient5"
            >{{detail.strIngredient5}}:-{{detail.strMeasure5}}-</v-flex>
            <v-flex
              xs6
              md3
              lg3
              class="text-xs-center"
              v-if="detail.strIngredient6"
            >{{detail.strIngredient6}}:-{{detail.strMeasure6}}-</v-flex>
            <v-flex
              xs6
              md3
              lg3
              class="text-xs-center"
              v-if="detail.strIngredient7"
            >{{detail.strIngredient7}}:-{{detail.strMeasure7}}-</v-flex>
            <v-flex
              xs6
              md3
              lg3
              class="text-xs-center"
              v-if="detail.strIngredient8"
            >{{detail.strIngredient8}}:-{{detail.strMeasure8}}-</v-flex>
            <v-flex
              xs6
              md3
              lg3
              class="text-xs-center"
              v-if="detail.strIngredient9"
            >{{detail.strIngredient9}}--{{detail.strMeasure9}}</v-flex>
            <v-flex
              xs6
              md3
              lg3
              class="text-xs-center"
              v-if="detail.strIngredient10"
            >{{detail.strIngredient10}}--{{detail.strMeasure10}}</v-flex>
            <v-flex
              xs6
              md3
              lg3
              class="text-xs-center"
              v-if="detail.strIngredient11"
            >{{detail.strIngredient11}}--{{detail.strMeasure11}}</v-flex>
            <v-flex
              xs6
              md3
              lg3
              class="text-xs-center"
              v-if="detail.strIngredient12"
            >{{detail.strIngredient12}}--{{detail.strMeasure12}}</v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout justify-center>
      <v-flex xs12 md8 lg8>
        <v-card v-if="detail.strInstructions">
          <v-card-title class="indigo lighten-2 layout justify-center subheadline pa-1">Instructions</v-card-title>
          <v-card-text class="text-xs-justify">{{detail.strInstructions}}</v-card-text>
        </v-card>
        <v-card v-else>
          <v-card-title class="indigo lighten-2 layout justify-center subheadline pa-1">Instructions</v-card-title>
          <v-card-text class="text-xs-center">Just Mix</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id.split(":").pop()
    };
  },
  created() {
    this.getInfo();
  },
  computed: {
    ...mapState(["detail"])
  },
  methods: {
    ...mapActions(["cocktailDetails"]),
    getInfo() {
      this.cocktailDetails(this.id);
    }
  }
};
</script>
<style>
</style>
