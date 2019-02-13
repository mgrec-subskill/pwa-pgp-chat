<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3 col-nopadding">
                <div class="list-contact">
                    <ul class="list-group list-group-flush">
                        <router-link tag="li" to="/chat/4ty65" class="list-group-item d-flex justify-content-between align-items-center header-list-item"></router-link>
                        <router-link tag="li" to="/chat/4ty65" class="list-group-item d-flex justify-content-between align-items-center"><span><img src="../../../public/assets/images/user.png"> 4ty65</span> <span class="badge badge-primary badge-pill">2</span></router-link>
                        <router-link tag="li" to="/chat/4ty65" class="list-group-item d-flex justify-content-between align-items-center"><span><img src="../../../public/assets/images/user.png"> 4ty65<span class="badge badge-secondary is-typing">...</span></span> <span class="badge badge-primary badge-pill">6</span></router-link>
                        <router-link tag="li" to="/chat/4ty65" class="list-group-item d-flex justify-content-between align-items-center"><span><img src="../../../public/assets/images/user.png"> 4ty65</span> <span class="badge badge-primary badge-pill"></span></router-link>
                        <router-link tag="li" to="/chat/4ty65" class="list-group-item d-flex justify-content-between align-items-center"><span><img src="../../../public/assets/images/user.png"> 4ty65<span class="badge badge-secondary is-typing">...</span></span> <span class="badge badge-primary badge-pill">3</span></router-link>
                        <router-link tag="li" to="/chat/4ty65" class="list-group-item d-flex justify-content-between align-items-center"><span><img src="../../../public/assets/images/user.png"> 4ty65</span> <span class="badge badge-primary badge-pill">2</span></router-link>
                    </ul>
                </div>
            </div>
            <div class="col-9 col-nopadding">
                <div class="header-current-contact">
                    <p>4ty65</p>
                </div>
                <div class="current-contact">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { firebaseApp, messagesRef, usersRef, database, db } from '../../../firebase.config';
    import router from '../../router/index.js'

    export default {
        name: 'Group',
        data () {
            return {
                title: 'Home',
                signIn: false,
                sid: false
            }
        },
        mounted(){

            // test if connected
            let sidStorage = window.localStorage.getItem('user-sid');
            if (sidStorage == null){
                router.push({name: 'Home'})
            }else{
                this.sid = sidStorage;
                this.signIn = true
            }

            // get contact



        },
        methods: {
        }
    }
</script>
<style lang="scss">
    @import 'Group.scss';
</style>
