<template>
  <v-container>
    <v-layout max-height="300">
      <v-flex align-center>
        <v-toolbar color="layout indigo lighten-2 justify-center">
          <v-toolbar-title>
            <span class="text-xs-center">CHAT</span>
          </v-toolbar-title>
        </v-toolbar>

        <v-card>
          <v-card-text column align-center justify-center id="chats">
            <v-layout wrap justify-end v-for="(message, index) in messages" :key="index">
              <v-flex xs12 md6 lg6 class="mr-2 caption grey--text">{{message.user}}</v-flex>
              <v-flex xs12 md6 lg6 class="caption">{{message.timestamp}}</v-flex>
              <v-flex xs12 md6 lg6 class="text-xs-right">{{message.message}}</v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
        <v-divider color="indigo lighten-3" class="ma-4"></v-divider>
        <v-card>
          <v-layout id="input">
            <v-flex xs12 md6 lg6>
              <newmessage :user="user"/>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import newmessage from "../components/newMessage";
//import moment from "moment";
//import fb from "@/firebase/index";
//import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  components: { newmessage },
  name: "chat",
  props: ["user"],
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("init");

    // let ref = fb.collection("messages").orderBy("timestamp");
    // ref.onSnapshot(snapshot => {
    //   snapshot.docChanges().forEach(change => {
    //     if (change.type == "added") {
    //       let doc = change.doc;
    //       this.messages.push({
    //         user: doc.data().user,
    //         message: doc.data().message,
    //         timestamp: moment(doc.data().timestamp).format("LTS")
    //       });
    //     }
    //   });
    // });
  },
  computed: {
    ...mapState(["messages"])
  },
  methods: {
    // goBottom() {
    //   document.getElementById("chats").scrollTop = document.getElementById(
    //     "chats"
    //   ).scrollHeight;
    // }
  },
  watch: {},
  updated() {
    document.getElementById("chats").scrollTop = document.getElementById(
      "chats"
    ).scrollHeight;
  }
};
</script>
<style scoped>
#chats {
  max-height: 450px;
  overflow: scroll;
  scroll-behavior: smooth;
}
</style>
