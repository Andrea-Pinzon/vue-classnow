<template>
    <div class="formulario_contacto">
        <div class="info">
            <h1>Envíe su formulario</h1>
            <form action="https://formsubmit.co/milenitha.666666@gmail.com" method="POST">
                <label for="Nombre">Nombre Completo</label>
                <input type="text" name ="name">

                <label for="email">Correo Electronico</label>
                <input type="email" name ="email">

                <label for="phone">Celular</label>
                <input type="text" name ="phone">

                <label for="subject">Asunto</label>
                <input type="text" name ="subject">

                <label for="comments">Comentarios</label>
                <textarea type="comments" cols="15" rows="5"></textarea>

                <input type="submit" value="Enviar" @click="exito">

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
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .info {
        width: 70%;
        background-color: pink;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        text-align: center;
    }

    .info h1 {
        width: 80%;
        margin-left: 20px;
        font-family: var(--font-titulos);
    }
</style>