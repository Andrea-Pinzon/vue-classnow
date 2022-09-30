<template>
    <div class="infoperfil">
        <div class="perfil">
            <h1>Informacion Personal</h1>
            <p>Username: <span>{{username}}</span></p>
            <p>Nombre Completo: <span>{{name}} {{lastname}}</span></p>
            <p>Correo: <span>{{email}}</span></p>
            <p>Celular: <span>{{phone}}</span></p>
        </div>

        <div class="botonescost">
            <button @click="volverahome">Agenda tu clase</button>
            <button @click="Historial">Historial</button>
            <button @click="Pagos">Metodos de pago</button>
        </div>
    </div>
</template>

<script>
import axios from '../utils/axios'
import jwt_decode from "jwt-decode"

export default {
    name:"account",
    data: function(){
        return {
            username: '',
            name: '',
            lastname: '',
            email: '',
            phone: '',
            rol: '',
            loaded: false
        }
    },
    methods: {
    volverahome: function(){
        this.$router.push({name:'clase'})
      },
    Historial: function(){
        this.$router.push({name:'historial'})
      },
    Pagos: function(){
        this.$router.push({name:'pagos'})
      },
    }
}
</script>



<style scoped>
    .infoperfil {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .perfil {
        width: 50%;
        height: 80%;
        padding: 25px 40px;
        box-sizing: border-box;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .perfil h1 {
        width: 80%;
        font-family: var(--font-letra);
        text-transform: uppercase;
    }

    .perfil p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        font-weight: bold;
        text-transform: uppercase;
    }

    .perfil span {
        width: 60%;
        padding: 10px 20px;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 10px;
        font-family: var(--font-letra);
        font-weight: bold;
        text-transform: capitalize;
    }

    .botonescost {
        width: 50%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .botonescost button {
        width: 50%;
        padding: 10px 20px;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 10px;
        font-family: var(--font-letra);
        font-weight: bold;
        text-transform: uppercase;
    }

    .botonescost button:hover {
        background-color: var(--main-color);
        border-color: transparent;
    }
</style>