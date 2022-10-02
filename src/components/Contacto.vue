<template>
    <div class="formulario_contacto">
        <div class="info">
            <h2>Contactenos</h2>
            <form action="https://formsubmit.co/9047145694742bc000b16ea1a5cad353" method="POST">
                <label for="Nombre">Nombre Completo:</label>
                <input type="text" name ="name">
                <br>
                <label for="email">Correo Electronico:</label>
                <input type="email" name ="email">
                <br>
                <label for="phone">Celular:</label>
                <input type="text" name ="phone">
                <br>
                <label for="subject">Asunto:</label>
                <input type="text" name ="subject">
                <br>
                <label for="comments">Comentarios:</label>
                <textarea type="comments" cols="10" rows="1"></textarea>
                <br>
                <input type="submit" value="Enviar" @click="exito" class="botton">

                <input type="hidden" name="_next" value="https://class-nowapp-vue.herokuapp.com/contacto">
                <input type="hidden" name="_captcha" value="false">
            </form>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert'

    export default {
        name: "Home",
        data: function(){
            return {
                    username: localStorage.getItem("username") ||  ''
            }
        },
        methods: {
            exito: function(){
            swal("Mensaje enviado!", "", "success")
        },
    }
}
</script>

<style>
    .formulario_contacto {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .info {
        width: 80%;
        height: 85%;
        background-color: rgba(255,255,255, .5);
        border-radius: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

    .info h2 {
        width: 100%;
        padding: 5px 0;
        font-family: var(--font-titulos);
        text-align: center;
        text-transform: uppercase;
    }

    .info form {
        width: 90%;
        height: 80%;
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }

    .info label {
        width: 30%;
    }

    .info input, .info textarea {
        width: 50%;
        padding: 10px 10px;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 10px;
    }

    .botton {
        width: 50%;
        padding: 10px 20px;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 10px;
        font-family: var(--font-letra);
        font-weight: bold;
        text-transform: uppercase;
        justify-content: flex-end;
    }

    .botton:hover {
        background-color: var(--main-color);
        border-color: transparent;
    }
</style>