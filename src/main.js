import Vue from 'vue'
import App from './App.vue'
import router from './router'
import crypto from 'crypto-js'
import uid from 'uid'
import {firebaseApp} from "../firebase.config";
import bcrypt from 'bcryptjs';

Vue.config.productionTip = false;
firebaseApp;

Vue.prototype.$uid = uid;
Vue.prototype.$crypto = crypto;
Vue.prototype.$bcrypt = bcrypt;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
