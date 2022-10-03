<template>
    <div>
        <div>
            <h2>Editar clase</h2>

            <form @submit.prevent= "update">
                <label for="tema">Tema:</label>
                <input type="text" id="tema" v-model="clases.tema"/>
                <br>
                <label for="hora">Hora:</label>
                <input type="text" id="hora" v-model="clases.hora"/>
                <br>
                <label for="fecha">Fecha</label>
                <input type="text" id="fecha" v-model="clases.fecha"/>
                <br>
                <label for="profesor">Profesor:</label>
                <input type="text" id="profesor" v-model="clases.profesor"/>
                <br>
                <label for="estudiante">Estudiante:</label> 
                <input type="text" id="estudiante" v-model="clases.estudiante"/>
                <br>
                

                <button type="submit">Editar</button>
            </form>
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

</style>
