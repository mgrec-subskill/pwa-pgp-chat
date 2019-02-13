<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3 col-nopadding">
                <div class="list-contact">
                    <ul class="list-group list-group-flush">
                        <router-link tag="li" to="/chat" class="list-group-item d-flex justify-content-between align-items-center header-list-item"></router-link>
                        <router-link v-for="contact in contacts" tag="li" :to="{ name: 'ChatSingle', params: { groupid: contact.id_conv }}" class="list-group-item d-flex justify-content-between align-items-center"><span><img src="../../../public/assets/images/user.png">{{ contact.receiver }}<span class="badge badge-secondary is-typing">...</span></span> <span class="badge badge-primary badge-pill">6</span></router-link>
                    </ul>
                </div>
            </div>
            <div class="col-9 col-nopadding">
                <div class="header-current-contact">
                    <p>4ty65</p>
                </div>
                <div class="current-contact">
                    <div class="text-content">
                        <div class="row">
                            <div class="col-12 d-flex flex-column">
                                <div v-for="message in messages" :class="message.class"><p>{{ message.text }}</p></div>
                            </div>
                        </div>
                    </div>
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
                sid: false,
                contacts: [],
                messages: [],
                groupid: false
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
            this.groupid = this.$route.params.groupid;
            var that = this;
            db.collection("group").where('sender','==', this.sid).get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    that.contacts.push( {
                        'sender':doc.data().sender,
                        'receiver':doc.data().receiver,
                        'id_conv': doc.id
                    });
                });
            });
            db.collection("group").where('receiver','==', this.sid).get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    that.contacts.push( {
                        'sender':doc.data().sender,
                        'receiver':doc.data().receiver,
                        'id_conv': doc.id
                    });
                });
            });

            //get message
            console.log(db.collection('group').doc(this.groupid.toString()).get());


            db.collection("group").doc(this.groupid.toString()).collection('messages')
                .onSnapshot(function(snapshot) {
                    snapshot.docChanges().forEach(function(change) {
                        if (change.type === "added") {
                            that.messages.push( {
                                'sender':change.doc.data().sender,
                                'receiver':change.doc.data().receiver,
                                'id_message': change.doc.id,
                                'text': change.doc.data().text,
                                'class': (change.doc.data().sender === that.sid) ?  'text-receiver' : 'text-sender'
                            });
                        }
                    });
                });

            console.log(this.sid)

            //send message
            /*db.collection("group").doc(this.groupid.toString()).collection('messages').add({
                sender: user,
                receiver: receiver,
                text: text,
                date: newdate
            })*/
        },
        methods: {
        }
    }
</script>
<style lang="scss">
    @import 'GroupSingle.scss';
</style>
