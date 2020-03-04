import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.config.productionTip = false;

Vue.use(VueTextareaAutosize);

firebase.initializeApp({
  apiKey: "AIzaSyC-eliUEwpr-W2rxBKZJfYzAniJLb1iPXY",
  authDomain: "vue-calender-9c78d.firebaseapp.com",
  databaseURL: "https://vue-calender-9c78d.firebaseio.com",
  projectId: "vue-calender-9c78d",
  storageBucket: "vue-calender-9c78d.appspot.com",
  messagingSenderId: "319915178204",
  appId: "1:319915178204:web:fec567a9518da97d6adc19"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
