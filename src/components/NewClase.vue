<template>
    <div class="new">
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
                

                <button type="submit" class="btn btn-primary">Agendar</button>
            </form>

            <div class="bot-pri">
                <button @click="volver" class="btn btn-primary">Atras</button>    
            </div> 
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
    .new {
        width: 100%;
        height: 100%;
        padding: 10px 100px;
        box-sizing: border-box;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        }

    .new h2 {
        width: 100%;
        font-family: var(--font-titulos);
        text-align: center;
        text-transform: uppercase;
        color: #000;
    }

    .new form {
        width: 90%;
        height: 85%;
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        align-content: center;
        gap: 5px;
    }

    .new input {
        width: 40%;
        padding: 10px 10px;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 10px;
    }

    .bot-pri {
        display: flex;
        justify-content: flex-end;
        padding: 5px 0;
    }
</style>
