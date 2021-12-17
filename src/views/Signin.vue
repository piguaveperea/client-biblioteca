<template>
    <div>
        <br>
        <v-row justify="center" align="center" >
           <card-sign-in @sendUser="auth"/>
        </v-row>
       
    </div>
</template>
<script>
import CardSignIn from "../components/CardSignIn.vue"
import store from '../store'

export default {
    components: { CardSignIn }  ,
    methods:{
        auth(value){
            store.dispatch('SignIn', value)
        }
    } 
}
</script>