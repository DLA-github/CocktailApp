import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase'
import router from '@/router';
import moment from "moment";


Vue.use(Vuex)
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    cat: [],
    cocktail: {},
    names: [],
    o_name: [],
    detail: {},
    ing: {},
    allA: [],
    allN: [],
    allC: [],
    allO: [],
    allR: [],
    user: null,
    isAuthenticated: false,
    messages: []
  },
  mutations: {

    SET_CAT(state, data) {
      state.cat = data;
    },
    SET_RND(state, rnd) {
      state.cocktail = rnd;
    },
    SET_NAME(state, name) {
      state.names = name;
    },
    SET_ING(state, ing) {
      state.ing = ing;
    },
    SET_allCOCKTAILS(state, allC) {
      state.allC = allC;
    },
    SET_allOrdinary(state, allO) {
      state.allO = allO;
    },
    SET_DETAIL_C(state, detail) {
      state.detail = detail
    },
    SET_O_NAME(state, name) {
      state.o_name = name
    },
    SET_ADRINKS(state, name) {
      state.allA = name;
    },
    SET_NDRINKS(state, name) {
      state.allN = name;
    },
    SET_User(state, payload) {
      state.user = payload;
    },
    SET_IsAuthenticated(state, payload) {
      console.log(payload);
      state.isAuthenticated = payload;
    },
    ADD_MESSAGE(state, message) {
      state.messages.push(message);
    },
    delete_messages(state) {
      state.messages = [];
    },
    SET_suggestions(state, name) {
      state.allR = name
    }

  },
  actions: {
    // listCoctelsCategories({
    //   commit
    // }) {
    //   axios
    //     .get("https://the-cocktail-db.p.rapidapi.com/list.php?c=list", {
    //       headers: {
    //         "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    //         "X-RapidAPI-Key": "56dd492f95mshe12d463c37599cep1e7cafjsne487eb563ba5"
    //       }
    //     })
    //     .then(r => {
    //       let data = r.data.drinks.map(drink => {
    //         return drink.strCategory
    //       });
    //       console.log(data)
    //       commit('SET_CAT', data);
    //     }).catch(error => console.log(error));
    // },
    // searchCoctelsCategories({
    //   commit
    // }, category) {
    //   axios
    //     .get("https://the-cocktail-db.p.rapidapi.com/filter.php?c=" + category, {
    //       headers: {
    //         "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    //         "X-RapidAPI-Key": "56dd492f95mshe12d463c37599cep1e7cafjsne487eb563ba5"
    //       }
    //     })
    //     .then(r => {
    //       let data = r.data.drinks;
    //       commit('SET_CAT', data);
    //     });
    // }

    randomCocktail({
      commit
    }) {
      axios
        .get("https://the-cocktail-db.p.rapidapi.com/random.php", {
          headers: {
            "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
            "X-RapidAPI-Key": "56dd492f95mshe12d463c37599cep1e7cafjsne487eb563ba5"
          }
        })
        .then(r => {
          let coct = r.data.drinks[0];
          commit('SET_RND', coct);
        });
    },
    searchByName({
      commit
    }, value) {
      let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + value;
      axios
        .get(url)
        .then(r => {

          let name = r.data.drinks;
          commit('SET_NAME', name);
        });

    },
    searchCocktailByIng({
      commit
    }, value) {
      let key = value.split(" ");
      value = key.join("_");

      let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + value;
      axios
        .get(url)
        .then(r => {

          let name = r.data.drinks;
          console.log(name)
          commit('SET_O_NAME', name);
        });

    },
    searchByIngredient({
      commit
    }, value) {
      let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + value;
      axios
        .get(url)
        .then(r => {

          let ing = r.data.ingredients[0].idIngredient;
          let url2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=" + ing;

          axios.get(url2).then(i => {
            let ingDetail = i.data.ingredients[0];
            commit('SET_ING', ingDetail)
          })


        });

    },
    cocktailDetails({
      commit
    }, value) {
      console.log(value)
      let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + value;
      axios
        .get(url)
        .then(r => {
          let detail = r.data.drinks[0];
          console.log(detail);
          commit('SET_DETAIL_C', detail);
        });

    },

    getCocktails({
      commit
    }) {
      let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
      axios
        .get(url)
        .then(r => {
          let allC = r.data.drinks;
          let allR = [];
          for (let i = 0; i < 8; i++) {
            allR[i] = allC[Math.round(Math.random() * (allC.length - 1))];
          }
          commit('SET_allCOCKTAILS', allC);
          commit('SET_suggestions', allR);
        });
    },
    getAlcoholicDrinks({
      commit
    }) {
      let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
      axios
        .get(url)
        .then(r => {
          let allA = r.data.drinks;
          console.log(allA)
          commit('SET_ADRINKS', allA);
        });
    },
    getNonAlcoholicDrinks({
      commit
    }) {
      let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
      axios
        .get(url)
        .then(r => {
          let allN = r.data.drinks;
          console.log(allN)
          commit('SET_NDRINKS', allN);
        });
    },
    getOrdinary({
      commit
    }) {
      let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
      axios
        .get(url)
        .then(r => {
          let allO = r.data.drinks;
          console.log(allO)
          commit('SET_allOrdinary', allO);
        });
    },
    newUser({
      commit
    }, {
      email,
      password
    }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('SET_User', user);
          commit('SET_IsAuthenticated', true);
          router.push({
            name: 'chat',
            params: {
              user: user
            }
          });
        })
        .catch(() => {
          commit('SET_User', null);
          commit('SET_IsAuthenticated', false);
          router.push('/');
        });
    },
    LogUser({
      commit
    }, {
      email,
      password
    }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit('SET_User', user);
          commit('SET_IsAuthenticated', true);
          router.push({
            name: 'chat',
            params: {
              user: user
            }
          });
        })
        .catch(() => {
          commit('SET_User', null);
          commit('SET_IsAuthenticated', false);
          router.push('/');
        });
    },
    userSignOut({
      commit
    }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('SET_User', null);
          commit('SET_IsAuthenticated', false);
          router.push('/');
        })
        .catch(() => {
          commit('SET_User', null);
          commit('SET_IsAuthenticated', false);
          router.push('/');
        });
    },
    init({
      commit
    }) {
      //  FIRESTORE
      // let ref = fb.collection("messages").orderBy("timestamp");
      // ref.onSnapshot(snapshot => {
      //   snapshot.docChanges().forEach(change => {
      //     if (change.type == "added") {
      //       let doc = change.doc;
      //       commit('ADD_MESSAGE', {
      //         user: doc.data().user,
      //         message: doc.data().message,
      //         timestamp: moment(doc.data().timestamp).format("LTS")
      //       });
      //
      //FIREBASE
      firebase.database().ref('messages').on('value', (data) => {
        commit('delete_messages', []);
        Object.values(data.val()).forEach(m => {
          commit('ADD_MESSAGE', {
            user: m.user,
            message: m.message,
            timestamp: moment(m.timestamp).format("LTS")
          });

        });

      });

    }

  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  },

})