<template>
    <div class="historial">
        <h1>Este es el historial de las clases.</h1>

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
    }
}
</script>


<style>
    .historial h1 {
        background-color: pink;
    }
</style>