<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>¿Ests seguro que deseas eliminar esta clase?</h3>
                <p>Tema: {{this.element.tema}}</p>
                <p>Hora: {{this.element.hora}}</p>
                <p>Fecha: {{this.element.fecha}}</p>
                <p>Estudiante: {{this.element.estudiantes}}</p>
                <p>Profesores: {{this.element.profesor}}</p>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <b-button v-on:click="deleteClass" variant="danger">Eliminar</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'

export default{
    data() {
        return {
            claseId: this.$route.params.claseId,
            element:{
                tema:'',
                hora:'',
                fecha:'',
                estudiantes:'',
                profesor:'',
            }
        }
    },
    methods: {
        getClasse(){
            const path= 'https://classnow-be.herokuapp.com/clases/${this.claseId}/'

            axios.get(path).then((response) => {
                this.element.tema = response.data.tema
                this.element.hora = response.data.hora
                this.element.fecha = response.data.fecha
                this.element.estudiantes = response.data.estudiantes
                this.element.profesor = response.data.profesor
            }) 
            .catch ((error) => {
                console.log(error)
            })
        },
        deleteClase (){
            const path= 'https://classnow-be.herokuapp.com/clases/${this.claseId}/'
            axios.delete(path).then((response) => {
                location.href= '/clase'
            })
            .catch((error) => {
                swal("No es posible eliminar clase", "", "error")
            })
        }
    },
    created() {
        this.getClasse
    }
}


</script>
