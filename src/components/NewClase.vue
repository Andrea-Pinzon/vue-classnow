<template>
    <div>
        <div>
            <h2>Agendar Clase</h2>

            <form @submit.prevent= "processAgenda">
                <input type="text" v-model="form.tema" placeholder="Tema"/>
                <br>
                <input type="text" v-model="form.hora" placeholder="Hora"/>
                <br>
                <input type="text" v-model="form.fecha" placeholder="Fecha"/>
                <br>
                <input type="text" v-model="form.profesor" placeholder="Profesor"/>
                <br> 
                <input type="text" v-model="form.estudiante" placeholder="Estudiante"/>
                <br>
                

                <button type="submit">Agendar</button>
            </form>

            <button @click="volver" class="btn btn-primary">Atras</button>  
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'

export default {
    data() {
        return {
            form:{
                tema: '',
                hora: '',
                fecha: '',
                estudiantes: '',
                profesor: '',
            }
        }
    },
    methods: {
        volver: function(){
        this.$router.push({name: "clase"})
        },
        processAgenda: function(){
            const path= 'https://classnow-be.herokuapp.com/clases/'

            axios.post(path, this.form, {headers: {}})
            .then((response) => {
                this.form.tema = response.data.tema
                this.form.hora = response.data.hora
                this.form.fecha = response.data.fecha
                this.form.estudiantes = response.data.estudiantes
                this.form.profesor = response.data.profesor

                swal("Libro creado exitosamente!", "", "success")
            }) 
            .catch ((error) => {
                swal("Creacion fallida!", "", "error")
            })
        }
    },
    created(){
        
    }
}
</script>


<style>

</style>
