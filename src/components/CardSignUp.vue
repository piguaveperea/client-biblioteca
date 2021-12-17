<template>
    <div>
        <v-card  width="500" >
            <v-container>
                <v-card-title>Crear cuenta nueva</v-card-title>
                <v-text-field v-model="user.ci" outlined label="cedula"/> 
                <v-text-field v-model="user.fullName" outlined label="Nombres y Apellidos"/> 
                <v-text-field v-model="user.email" outlined label="Correo"/> 
                <v-text-field v-model="user.password" outlined label="Contraseña"/> 
                <v-btn @click="send" color="secondary">Crear cuenta</v-btn>
            </v-container>
        </v-card>
    </div>
</template>
<script>
export default {
    data: ()=>({
        user: {
            ci: "",
            fullName: "",
            email: "",
            password: ""
        }
    }),
    methods: {
        send(){
            this.$emit('sendUser', this.user)
        }
    }
}
</script>