<template>
  <div>
    <v-form class="layout row" @submit.prevent="addMessage">
      <v-flex>
        <v-text-field v-model="newMessage" autofocus label="message"></v-text-field>
      </v-flex>
    </v-form>
  </div>
</template>
<script>
import firebase from "firebase";
//import fb from "@/firebase/index"; FIRESTORE
export default {
  props: ["user"],
  data() {
    return {
      newMessage: null
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        //FIRESTORE
        // fb.collection("messages")
        //   .add({
        //     message: this.newMessage,
        //     user: this.user.user.email,
        //     timestamp: Date.now()
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
        //FIREBASE
        let myObject = {
          message: this.newMessage, //si son iguales se puede poner simplemente message y ya esta sin igualarlo.
          user: this.user.user.email,
          timestamp: Date.now()
        };

        firebase
          .database()
          .ref("messages")
          .push(myObject);
        this.newMessage = null;
      } else {
        console.log("Error");
      }
    }
  }
};
</script>
<style>
</style>
