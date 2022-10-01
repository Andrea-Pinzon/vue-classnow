<template>
    <div class="clase">
    <h2>Listado de clases</h2>

    <div class="bot-pri">
        <button @click="nuevo" class="btn btn-outline-success">Nuevo</button>
    </div>

    <div class="table">
        <table class="table stripped bordered">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Tema</th>
                    <th>Hora</th>
                    <th>Fecha</th>
                    <th>Estudiante</th>
                    <th>Profesor</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="clase in clases" :key="clase.id">
                    <td>{{clase.id}}</td>
                    <td>{{clase.tema}}</td>
                    <td>{{clase.hora}}</td>
                    <td>{{clase.fecha}}</td>
                    <td>{{clase.profesor}}</td>
                    <td>{{clase.estudiante}}</td>
                    <td>
                        <button @click="editar" class="btn btn-primary">Editar</button>
                        <button @click="eliminar" class="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="bot-pri">
        <button @click="volver" class="btn btn-primary">Atras</button>    
    </div>
</div>
</template>

<script>
import axios from "../utils/axios";
    
export default {
    name: 'clase',
    data(){
        return {
            clases:null
        }
    },
    mounted(){
            this.getClases();
    },
    methods: {
        volver: function(){
        this.$router.push({name: "account"})
        },
        nuevo: function(){
        this.$router.push({name: "new"})
        },
        editar: function(){
        this.$router.push({name: "delete"})
        },
        eliminar: function(){
        this.$router.push({name: "edit"})
        },

        getClases(){
            axios.get("https://classnow-be.herokuapp.com/clases/")
            .then(response =>{
                this.clases = response.data
            })
            .catch(err => console.log(err))
        }
    }
}
</script>

<style>
    .clase {
        width: 100%;
        height: 100%;
        padding: 10px 100px;
        box-sizing: border-box;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        }

    .clase h2 {
        color: #000;
        font-family: var(--font-letra);
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
    }

    .clase table button {
        margin-left: 10px;
    }

    .bot-pri {
        display: flex;
        justify-content: flex-end;
        padding: 5px 0;
    }
</style>
