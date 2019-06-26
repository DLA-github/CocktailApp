<template>
  <div>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
      <router-link to="./">
        <v-toolbar-title class="headline text-uppercase pl-5">
          <span class="indigo--text text--lighten-2">COCKTAIL</span>
          <span class="font-weight-light indigo--text text--lighten-2">TRY</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div v-if="!(isAuthenticated)">
        <router-link to="./register">
          <v-icon medium class="mr-3">fas fa-file-signature</v-icon>
        </router-link>
        <router-link to="./login">
          <v-icon medium>fas fa-sign-in-alt</v-icon>
        </router-link>
      </div>
      <div v-else>
        <router-link to="./" @click.native="logout()">
          <v-icon medium>fas fa-sign-out-alt</v-icon>
        </router-link>
      </div>
    </v-toolbar>

    <v-navigation-drawer width="180" app v-model="drawer" class="text-xs-center">
      <div class="indigo lighten-3">
        <span class="title">COCKTAIL</span>
        <span class="font-weight-light">TRY</span>
      </div>
      <v-card>
        <v-layout md6 lg6 wrap>
          <v-flex xs12 class="text-xs-left">
            <router-link to="./">
              <v-icon small class="indigo--text text--lighten-2">fas fa-home</v-icon>
              <span class="ml-2 white--text subheading">HOME</span>
            </router-link>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>

        <v-expansion-panel>
          <v-expansion-panel-content>
            <template v-slot:header>
              <v-flex xs12 class="text-xs-left pl-0">
                <v-icon small class="indigo--text text--lighten-2">fas fa-search</v-icon>
                <span class="ml-2 white--text subheading">by Category</span>
              </v-flex>
            </template>

            <v-layout md6 lg6 wrap>
              <v-flex xs12>
                <router-link
                  to="./cocktails"
                  class="indigo--text text--lighten-2 right mr-2"
                  @click="drawer=false"
                >By Cocktail</router-link>
              </v-flex>

              <v-flex xs12>
                <router-link
                  to="./ordinary"
                  class="indigo--text text--lighten-2 right mr-2"
                  @click="drawer=false"
                >By Ordinary Drink</router-link>
              </v-flex>

              <v-flex xs12>
                <router-link
                  to="./alcoholic"
                  class="indigo--text text--lighten-2 right mr-2"
                  @click="drawer=false"
                >By Alcoholic Drink</router-link>
              </v-flex>

              <v-flex xs12>
                <router-link
                  to="./non-alcoholic"
                  class="indigo--text text--lighten-2 right mr-2"
                  @click="drawer=false"
                >By Non Alcoholic Drink</router-link>
              </v-flex>
            </v-layout>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-divider></v-divider>
        <v-layout>
          <v-flex
            class="text-xs-left"
            align-center
            v-if="isAuthenticated"
            @click="goChat();drawer=false"
          >
            <v-icon small class="indigo--text text--lighten-2">fas fa-comments</v-icon>
            <span class="ml-2 white--text subheading">CHAT</span>
          </v-flex>
          <v-flex class="text-xs-left" align-center v-else>
            <router-link to="./login">
              <v-icon small class="indigo--text text--lighten-2">fas fa-comments</v-icon>
              <span class="ml-2 white--text subheading">CHAT</span>
            </router-link>
          </v-flex>
        </v-layout>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    ...mapActions(["userSignOut"]),
    logout() {
      console.log("here");
      this.userSignOut();
    },
    goChat() {
      this.$router.push({
        name: "chat",
        params: {
          user: this.user
        }
      });
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    ...mapState(["user"])
  }
};
</script>
<style scope>
.v-list__tile__title {
  line-height: 12px;
}
.v-expansion-panel__header {
  padding: 0px 12px 0px 0px;
  min-height: 34px;
}
</style>
