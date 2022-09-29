<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Registrarse</h2>

            <form @submit.prevent= "processSignUp">
                <input type="text" v-model="user.username" placeholder="Username"/>
                <br>
                <input type="text" v-model="user.nombres" placeholder="Nombres"/>
                <br>
                <input type="text" v-model="user.apellidos" placeholder="Apellidos"/>
                <br>
                <input type="email" v-model="user.email" placeholder="Email"/>
                <br> 
                <input type="text" v-model="user.celular" placeholder="Celular"/>
                <br>
                <input type="password" v-model="user.password" placeholder="Password"/>
                <br>
                <input type="text" v-model="user.rol" placeholder="Rol"/>
                <br>

                <button type="submit">Registrarse</button>
            </form>

            <div class="opcion">
                <button class="face">facebook</button>
                <button class="gmail">Gmail</button>
            </div>
        </div>
    </div>
</template>


<script>
import axios from '../utils/axios';
export default {
    name: "SignUp",
    data: function() {
        return {
            user: {
                username: "",
                nombres: "",
                apellidos: "",
                email: "",
                celular: "",
                password: "",
                rol: "",
                account: {
                    lastChangeDate: (new Date()),
                    isActive: true,
                }
            }
        }
    },
    methods: {
        processSignUp: function(){
            axios.post("user/", this.user, {headers: {}})
            .then((res) => {
                let dataLogin = {
                    username: this.user.username,
                    token_access: res.data.access,
                    token_refresh: res.data.refresh,
                }
                this.$emit('CompletedLogin', dataLogin)/*complete sign up! falta*/
            })
            .catch((error) =>{
                alert("Error: fallo en el registro.")
            })
        }
    }
}
</script>

<style>
    .signUp_user {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container_signUp_user {
        width: 80%;
        height: 90%;
        background-color: rgba(255,255,255, .5);
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

    .signUp_user h2 {
        width: 100%;
        padding: 10px 0;
        font-size: 30px;
        font-family: var(--font-titulos);
        text-align: center;
        text-transform: uppercase;
    }

    .signUp_user form {
        width: 50%;
        height: 80%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .signUp_user input {
        width: 65%;
        padding: 10px 10px;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 10px;
    }

    .signUp_user button {
        padding: 10px 20px;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 10px;
        font-family: var(--font-letra);
        font-weight: bold;
        text-transform: uppercase;
    }

    .signUp_user button:hover {
        background-color: var(--main-color);
        border-color: transparent;
    }

    .opcion {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .opcion button {
        width: 65%;
    }

    .opcion .face:hover {
        background-color: blue;
        border-color: transparent;
    }

    .opcion .gmail:hover {
        background-color: #fff;
        border-color: transparent;
    }
</style>
