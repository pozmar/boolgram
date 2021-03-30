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
.container{
  display:flex;
  justify-content:center;
}
</style>
