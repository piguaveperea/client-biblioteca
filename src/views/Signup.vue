<template>
    <div>
        <card-sign-up @sendUser="register" />
    </div>
</template>
<script>
import CardSignUp from '../components/CardSignUp.vue'
import store from '../store'

export default {
  components: { CardSignUp },
  methods:{
    register(value){
        store.dispatch('SignUp', value)
    }
  }
    
}
</script>
