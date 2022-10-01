<template>
    <div class="clase">
    <h2>Listado de clases</h2>

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
                </tr>
            </thead>
            <tbody>
                <tr v-for="clase in clases" :key="clase.id">
                    <td>{{clase.id}}</td>
                    <td>{{clase.tema}}</td>
                    <td>{{clase.tema}}</td>
                    <td>{{clase.hora}}</td>
                    <td>{{clase.fecha}}</td>
                    <td>{{clase.profesor}}</td>
                    <td>{{clase.estudiante}}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <button @click="volver" class="btn btn-primary">Atras</button>
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
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
