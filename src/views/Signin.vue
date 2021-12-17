<template>
    <div>
        <card-sign-in @sendUser="auth"/>
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