<template>
<div>
  <div class="stories">
    <div class="img" :key="i" v-for="(image, i) in images"><img :src="image.profile_picture" alt=""></div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
    return{
      images: undefined,
    }
  },
  mounted(){

      axios.get('https://flynn.boolean.careers/exercises/api/boolgram/profiles').then(res=>this.images=res.data)
      console.log(this.images);
      }
      
  }

</script>

<style lang="scss" scoped>
  .stories{
    width:70%;
    border:1px solid lightgrey;
    padding:20px 0;
    text-align:center;
    margin:10px 0;
    .img{
        display:inline-block;
        margin: 0 5px;
    
      img{
        width:40px;
        height:40px;
        border-radius: 50%;
  
        }
      }
    }
 
</style>