<template>
  <div id="app">
    <header>
      <Navbar/>
    </header>
    <main>
      <div class="container">
          <Left/>
          <Right/>
      </div>
    </main>
  </div>
</template>

<script>

import Navbar from "./components/Navbar"
import Left from "./components/Main.vue/Left"
import Right from "./components/Main.vue/Right"


export default {
  name: 'App',
  components: {
    Navbar,
    Left,
    Right
  },
  
}

</script>

<style lang="scss" scoped>
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-size:20px;
    font-family: serif;
  }
  #app{
    position: relative;
  }
  header{
        box-shadow: 0 2px 2px -2px lightgrey;
    }
  .container{
    display:flex;
    justify-content:center;
    width:80%;
    margin:0 auto;
  }
</style>
