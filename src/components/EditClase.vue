<template>
    <div class="editt">
        <div>
            <h2>Editar clase</h2>

            <form @submit.prevent= "update">
                <input type="text" id="tema" v-model="clases.tema" placeholder="Tema">
                <input type="text" id="hora" v-model="clases.hora" placeholder="Hora - 00:00:00">
                <input type="text" id="fecha" v-model="clases.fecha" placeholder="Fecha - Año/Mes/Dia">
                <input type="text" id="profesor" v-model="clases.profesor" placeholder="Profesor">
                <input type="text" id="estudiante" v-model="clases.estudiante" placeholder="Estudiante">               

                <button type="submit" class="btn btn-primary">Editar</button>
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
    name: "EditClase",
    data() {
        return {
            clases: [],
        }
    },
    methods: {
        volver: function(){
        this.$router.push({name: "clase"})
        },
        update() {
            let post = {
                "tema": this.clases.tema,
                "hora": this.clases.hora,
                "fecha": this.clases.fecha,
                "profesor": this.clases.profesor,
                "estudiante": this.clases.estudiante,
            }
            axios.put("https://classnow-be.herokuapp.com/clases/" + this.$route.params.id + "/", post)
            .then(result =>{
                this.clases.tema="";
                this.clases.hora="";
                this.clases.fecha="";
                this.clases.profesor="";
                this.clases.estudiante="";
            })
        },
    },
    mounted() {
        let slug = this.$route.params.id;
        let adress = "https://classnow-be.herokuapp.com/clases/"
        axios.get(adress + slug + "/")
        .then(data => {
            this.clases = data.data;
            console.log(data)
        })
    }
}
</script>


<style>
    .editt {
        width: 100%;
        height: 100%;
        padding: 10px 100px;
        box-sizing: border-box;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        }

    .editt h2 {
        width: 100%;
        font-family: var(--font-titulos);
        text-align: center;
        text-transform: uppercase;
        color: #000;
    }

    .editt form {
        width: 90%;
        height: 90%;
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        align-content: center;
        gap: 5px;
    }

    .editt input {
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
