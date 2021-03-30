<template>
  <div class="right">
      <Profile/>
      <Suggestions/>
      <Footer/>
  </div>
</template>

<script>
import Profile from "./Profile"
import Suggestions from "./Suggestions"
import Footer from "./Footer"
export default {
  components:{
    Profile,
    Suggestions,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.right{
    width:40%;
    margin: 100px 10px;
}
</style>