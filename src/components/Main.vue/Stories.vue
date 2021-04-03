<template>
<div>
  <div class="stories">
    <div class="loader" v-if="loaded==true">
      <div class="spinner">

      </div>
      <div class="box">
        <div class="image" :class="loaded==true?'load': ''" >
        </div>
      </div>
      <div class="box">
        <div class="image" :class="loaded==true?'load': ''" >
        </div>
      </div>
      <div class="box">
        <div class="image" :class="loaded==true?'load': ''" >
        </div>
      </div>
      <div class="box">
        <div class="image" :class="loaded==true?'load': ''" >
       </div>
    </div>
      <div class="box">
        <div class="image" :class="loaded==true?'load': ''" >
       </div>
    </div>
  </div>
     
    <div class="image">
      <div class="img" :key="i" v-for="(image, i) in images"><img v-if="i<=4" :src="image.profile_picture" alt="">
      <span v-if="i<=4"><strong>{{image.profile_name}}</strong></span>
      </div>
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
      loaded: true
      
    }
  },
  mounted(){
      setTimeout(()=>{
      axios.get('https://flynn.boolean.careers/exercises/api/boolgram/profiles').then(res=>this.images=res.data).then(this.setLoad)
      }, 3000)
      },
      methods: {
        setLoad(){
          this.loaded =!this.loaded;
        }
      
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
    position: relative;
    .image{
      display:flex;
    
    .img{
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
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
  }
    .image.load{
      background-color:lightgrey;
      width:60px;
      height:60px;
      border-radius: 50%;
      margin: 10px 10px;
      border: 1px solid grey;
     
    }
    
    .loader{
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
    .box{
      width:130px;
    }
    .spinner{
      width:80px;
      height:80px;
      border-radius: 50%;
      border: 5px solid lightgrey;
      border-right: 3px solid black;
      position: absolute;
      top: 90%;
      left: 90%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin{
      to{
        transform: rotate(1turn);
      }
    }
</style>