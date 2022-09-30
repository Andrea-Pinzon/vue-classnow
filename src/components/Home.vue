<template>
    <div class="home">
        <div class="informacion">
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, impedit. Earum doloremque illo, nobis quibusdam, odio recusandae consequuntur sit temporibus impedit enim, quia eos unde doloribus eligendi repellendus? Rem nobis temporibus perferendis fugit similique perspiciatis, libero, facilis laborum quaerat voluptates aliquam dicta aspernatur a vel delectus quo. Maiores molestias nisi cumque velit! Nesciunt praesentium alias repellendus distinctio dicta odit odio quibusdam.</p>
        </div>
    </div>
</template>

<script>
    export default {
        // name: "Home",
        // data: function(){
        //     return {
        //         username: localStorage.getItem("username") ||  ''
        //     }
        // }
    }
</script>

<style>
    .home {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .informacion {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        text-align: center;
    }

    .informacion h1 {
        width: 80%;
        margin-left: 20px;
        font-family: var(--font-titulos);
    }

    .informacion p {
        padding: 0 20px;
    }
</style>