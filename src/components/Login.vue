<template>
    <div class="login_user">
        <div class="container_lu">
            <h2>Iniciar Sesión</h2>
            <form @submit.prevent="processLoginUser">
                <input type="text" v-model="user.username" placeholder="Username">
                <br>
                <input type="password" v-model="user.password" placeholder="Password">
                <br>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>

        <div class="info_dere">
            <h1>Class<br>Now!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate necessitatibus esse laborum eum doloremque quod aperiam ratione ullam ipsum corporis ab sequi et aliquam enim, minus atque molestias repellendus!</p>
        </div>
    </div>
</template>

<script>
    import axios from "../utils/axios"

    export default {
        name: 'Login', 
        data: function() {
            return {
                user: {
                    username:"",
                    password:""
                }
            }
        },
        methods: {
            processLoginUser: function(){
                
                axios.post("login/", this.user, {headers: {}})
                .then((res) => {
                    let dataLogin = {
                        username: this.user.username,
                        token_access: res.data.access,
                        token_refresh: res.data.refresh,
                    }
                    this.$emit('CompletedLogin', dataLogin)
                })
                .catch((error) =>{
                    if(error.response.status == "401")
                        alert("Error 401: Credenciales Incorrectas")
                })
            }
        }
    }
</script>


<style>
    .login_user {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .container_lu {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .container_lu h2 {
        color: #000;
    }

    .container_lu form {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    .container_lu input {
        width: 50%;
        height: 40%;
        padding: 8px 20px;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 10px;
    }

    .container_lu button {
        padding: 10px 20px;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 10px;
        font-family: var(--font-letra);
        font-weight: bold;
        text-transform: uppercase;
    }

    .container_lu button:hover {
        background-color: var(--main-color);
        border-color: transparent;
    }

    .info_dere {
        height: 100%;
        width: 50%;
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        text-align: right;
    }

    .info_dere h1 {
        width: 100%;
        font-size: 120px;
        font-family: var(--font-titulos);
        line-height: 90px;
    }

    .info_dere p {
        width: 100%;
    }
</style>