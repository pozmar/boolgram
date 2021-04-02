<template>
<div>
  <div class="stories">
    <div class="img" :key="i" v-for="(image, i) in images"><img v-if="i<=5" :src="image.profile_picture" alt="">
    <span v-if="i<=5"><strong>{{image.profile_name}}</strong></span>
    </div>
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
      setTimeout(()=>{
      axios.get('https://flynn.boolean.careers/exercises/api/boolgram/profiles').then(res=>this.images=res.data).then(this.less)
      console.log(this.images)}, 3000)
      },
      methods: {
        
      
  }
}

</script>

<style lang="scss" scoped>
  .stories{
    box-shadow: 0 0 3px lightgrey;
    padding:30px 0;
    text-align:center;
    margin:10px 0;
    display:flex;
    justify-content:center;
    .img{
        display:inline-block;
        margin: 0 10px;
    
      img{
        width:60px;
        height:60px;
        border-radius: 50%;
        border: 2px solid red;
        padding:3px;
        margin-bottom: 10px;
        }
        span{
          margin-top: 10px;
        }
      }
    }
    
</style>