<template>
    <div class="container">
        <h2 class="text-center text-dark">titulo por aqui</h2>

        <button @click="volver" class="btn btn-primary">Atras</button>
    </div>
</template>

<script>
import axios from 'axios';
    
export default {
    name: 'clase',
    data(){
        return {
            fields: [
                { key: 'id', label: 'Id'},
                { key: 'tema', label: 'Tema'},
                { key: 'hora', label: 'Hora'},
                { key: 'fecha', label: 'Fecha'},
                { key: 'profesor', label: 'Profesor'},
                { key: 'estudiante', label: 'Estudiante'},
                { key: 'action', label: 'Accion'}
            ],
            clases: []
        }
    },
    methods: {
        volver: function(){
        this.$router.push({name: "account"})
        },
        getClass (){
            const path = 'https://classnow-be.herokuapp.com/clases/' /*no se cual es xD */
            axios.get(path).then((response) => {
                this.clases = response.data/*no estoy segura si es this.class */
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    },
    created() {
        this.getClass()
    }
}
</script>





<style>
    .clase {
        background-color: red;
        }

    /* .clase {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .informacion_perfil {
        width: 50%;
        height: 80%;
        padding: 25px 40px;
        box-sizing: border-box;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .informacion_perfil h1 {
        width: 80%;
        font-family: var(--font-letra);
        text-transform: uppercase;
    }

    .informacion_perfil p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        font-weight: bold;
        text-transform: uppercase;
    }

    .informacion_perfil span {
        width: 60%;
        padding: 10px 20px;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 10px;
        font-family: var(--font-letra);
        font-weight: bold;
        text-transform: capitalize;
    }

    .botones {
        width: 50%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .botones button {
        width: 50%;
        padding: 10px 20px;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 10px;
        font-family: var(--font-letra);
        font-weight: bold;
        text-transform: uppercase;
    }

    .botones button:hover {
        background-color: var(--main-color);
        border-color: transparent;
    } */
</style>
