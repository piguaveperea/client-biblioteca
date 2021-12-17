<template>
    <div>
        <v-card width="500">
            <v-container>
                <v-card-title>Iniciar Sesión</v-card-title>
                <v-text-field v-model="user.username" type="email" label="usuario o correo electronico" outlined />
                <v-text-field  v-model="user.password" type="password" label="contraseña" outlined />
                <v-btn color="primary" @click="send" >Iniciar Sesion</v-btn>
            </v-container>
        </v-card>
    </div>
</template>

<script>
export default {
    data:()=>(
        {
            user: {
                username: "",
                password: ""
            }
        }
    ),
    methods:{
        send(){
            this.$emit('sendUser', this.user)
        }
    }
}
</script>