<template>
    <div class="contenedor">
        <div class="row">
            <div class="col text-left"></div>
            <h2>Editar Libro</h2>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="card">
                <div class="car-body">

                    <form @onSubmit="onSubmit">
<!-- espacios de la tabla -->
                        <div class="form-group row">
                            <label for="title" class="col.sm2 col-form-label">Tema</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Tema de la clase" name="title" class="form-control" v-model.trim="form.tema">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="title" class="col.sm2 col-form-label">Hora</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Hora" name="title" class="form-control" v-model.trim="form.hora">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="title" class="col.sm2 col-form-label">Fecha</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Fecha" name="title" class="form-control" v-model.trim="form.fecha">
                            </div>
                        </div>
<!-- ¿Como haran los estudiantes para agregarse? -->
                        <div class="form-group row">
                            <label for="title" class="col.sm2 col-form-label">Estudiantes</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Estudiantes" name="title" class="form-control" v-model.trim="form.Estudiantes">
                            </div>
                        </div>
<!-- ¿Hacer que aparezca aqui el nombre del profesor quien hace el registro? -->
                        <div class="form-group row">
                            <label for="title" class="col.sm2 col-form-label">Profesor</label>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Profesor" name="title" class="form-control" v-model.trim="form.Profesor">
                            </div>
                        </div>
<!-- Botones -->
                        <div class="rows">
                            <div class="col text-left"></div>
                            <b-button type="submit" variante="primary">Editar</b-button>
                            <b-button type="submit" class="btn-large-space" :to="{name:'Clase'}"> Cancelar</b-button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            claseId: this.$route.params.claseId,
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
        onsubmit(evt){
            evt.preventDefault()
        },
        getClasse(){
            const path= 'URL/${this.claseId}/'

            axios.get(path).then((response) => {
                this.form.tema = response.data.tema
                this.form.hora = response.data.hora
                this.form.fecha = response.data.fecha
                this.form.estudiantes = response.data.estudiantes
                this.form.profesor = response.data.profesor
            }) 
            .catch ((error) => {
                console.log(error)
            })
        }
    },
    created(){
        this.getClasse
    }
}
</script>


<style scoped>

</style>
