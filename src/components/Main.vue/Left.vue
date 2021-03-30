<template>
  <div class="left">
    <Stories/>
    <div class="container">
      <Story/>
      
    </div>
  </div>
</template>

<script>
import Stories from "./Stories"
import Story from "./Story"

export default {
    components:{
        Stories,
        Story,
       
    }
}
</script>

<style lang="scss" scoped>
.left{
  width:60%;
  margin:100px 10px;
}
</style>