<template>
    <div class="page-content">
        <div>
            <p>Your SID : {{ this.sid }}</p>
        </div>
        <div v-if="signIn">
            <input id="password" type="password">
            <button v-on:click="singIn">Sign In</button>
        </div>
        <div v-else>
            <input id="password" type="password">
            <input id="re-password" type="password">
            <button v-on:click="signUp">Sign Up</button>
        </div>

    </div>
</template>

<script>
    import { firebaseApp, messagesRef, usersRef, database, db } from '../../../firebase.config';
    import router from '../../router/index.js'

    export default {
        name: 'Home',
        data () {
            return {
                title: 'Home',
                signIn: false,
                sid: false
            }
        },
        mounted(){
            let sidStorage = window.localStorage.getItem('user-sid');
            if (sidStorage == null){
                this.sid = this.$uid(8);
            }else{
                this.sid = sidStorage;
                this.signIn = true
            }
        },
        methods: {
            signUp : function () {
                if (document.getElementById('password').value === document.getElementById('re-password').value){
                    var ciphertext = this.$crypto.HmacSHA1(document.getElementById('password').value, 'samymaximelol7793').toString();
                    db.collection("users").add({
                        user: this.sid,
                        pass: ciphertext
                    });
                    window.localStorage.setItem('user-sid', this.sid);
                }
            },

            singIn : function () {
                var ciphertext = this.$crypto.HmacSHA1(document.getElementById('password').value, 'samymaximelol7793').toString();
                db.collection("users").where('user', '==', this.sid).where('pass', '==', ciphertext).get().then(function(querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        if (doc.id != null || doc.id != undefined) {
                            router.push({name: 'Chat'})
                        }
                    });
                });

            }
        }
    }
</script>
<style lang="scss">
    @import 'Home.scss';
</style>
