<template>
<div class="degrade">
  <div id="app" class="app">
    <div class="header">
      <h1>CN!</h1>

      <nav v-if="is_auth">
        <button @click="loadhome">Inicio</button>
        <button @click="loadAccount">Cuenta</button>
        <button @click="logout">Cerrar Sesión</button>
      </nav>

      <nav v-else>
        <button @click="loadLogin">Iniciar Sesión</button>
        <button @click="loadSignUp">Registrarse</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view 
        @completedLogin = "completedLogin"
        @logout="logout">

      </router-view>
    </div>

    <div class="footer">
      <h2>Class-Now!</h2>
    </div>

  </div>
</div>
</template>


<script>
// no se puede dejar vacio
  export default {
    name: 'app',
    data: function(){
      return{
        is_auth: false,
      }
    },
    methods: {
      verifyAuth: function(){
        this.is_auth = localStorage.getItem("isAuth") || false;
        if(this.is_auth)
          this.$router.push({name: "home"})
        else
          this.$souter.push({name: "login"})
      },
      loadLogin: function(){
        this.$router.push({name:'login'})
      },
      loadSignUp: function(){
        this.$router.push({name:'signup'})
      },
      loadHome: function(){
        this.$router.push({name:'home'})
      },
      loadAccount: function(){
        this.$router.push({name:'account'})
      },
      logout: function(){
        logalStorage.clear();
        alert("Sesión Cerrada");/*eliminara todas las claves, llave valor */
        this.verifyAuth();
      },
      completedLogin: function(data){
        logalStorage.setItem("isAuth", true),
        logalStorage.setItem("username", data.username);
        logalStorage.setItem("token_access", data.token_access);
        logalStorage.setItem("token_refres", data.token_refresh);
        alert("autenticacion Exitosa")
        this.verifyAuth()
      }
    },
    created: function(){

    }
  }
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

  @font-face {
    font-family: Shapiro;
    src: url(https://dl.dropbox.com/s/yrofnl512d28sx9/Shapiro.otf);
}
  * {
    margin: 0;
    padding: 0;
  }

  body {
    --main-color: #16a085;
    --hover: #60d8ba;
    --main-color-tras: rgba(22, 160, 133, 0.5);
    --font-letra: 'Source Sans Pro', sans-serif;
    --font-titulos: 'Shapiro';
    font-family: var(--font-letra);
    color: #000; 

    background-image: url(assets/Fondo.jpg);
    background-size: cover;
    background-attachment: fixed;

  }

  .degrade {
    height: 100vh;
    background: -webkit-linear-gradient(to left, transparent, var(--main-color));  /* Chrome 10-25, Safari 5.1-6 */
    background-image: linear-gradient(to left, transparent, var(--main-color)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .header {
    width: 100%;
    height: 10vh;
    min-height: 80px; /*en el video esta de 100px*/
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1 {
    width: 20%;
    margin-left: 20px;
    font-family: var(--font-titulos);
  }

  .header nav {
    width: 50%; /*en el video esta de 20%*/
    height: 100%;
    display: flex;
    justify-content: flex-end; /*en el video esta space-around*/
    align-items: center;
    padding: 10px; /*en el video no esta*/
    gap: 20px; /*en el video no esta*/
  }
  .header nav button {
    padding: 10px 20px;
    border-radius: 10px;
    background-color: transparent;
    border: none;
    font-size: 13px; /*en el video esta de 20px y en .header nav*/
    font-family: var(--font-letra) ;
    font-weight: bold;
    text-transform: uppercase;
  }

  .header nav button:hover {
    background-color: var(--main-color);
  }

  .main-component {
    height: 80vh; /*en el video esta 75vh */
  }

  .footer {
    width: 100%;
    height: 5vh; /*En el video esta en 10 para que min-height sea de 76*/
    min-height: 45px; /*en el video esta de 80px */
    background-color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }
</style>