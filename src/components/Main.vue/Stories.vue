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
      <div class="img" @click="activate(), open(profile)" :key="i" v-for="(profile, i) in profiles">
        <img v-if="i<=4" :src="profile.profile_picture" alt="">
        <span v-if="i<=4"><strong>{{profile.profile_name}}</strong></span>
        
      </div>
 
    </div>
  </div>

   <div class="my-story" :class="isActive==true?'block':'hide'">
    <span @click="activate()">X</span>
    <div v-if="typeof activeProfile !== 'undefined'" >
    <img v-if="typeof activeProfile !== 'undefined'" :src="activeProfile.profile_picture" alt="" >
    
</div>

  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  
    data(){
    return{
      profiles: undefined,
      loaded: true,
      isActive:false,
      activeProfile: undefined,
      
     
      
    }
  },
  created(){
    
  },
  mounted(){
      setTimeout(()=>{
      axios.get('https://flynn.boolean.careers/exercises/api/boolgram/profiles').then(res=>this.profiles=res.data).then(this.setLoad).then(this.setActive);
      
      }, 3000)
  },
  
      methods: {
        setLoad(){
          this.loaded =!this.loaded;
        },
        activate(){
          this.isActive =!this.isActive;
        },
        setActive(){
           this.activeProfile=this.profiles[0]
           console.log(this.activeProfile);
        },
        open(profile){
         
          this.activeProfile = profile;
          console.log(profile);
          console.log(this.activeProfile);
           
          
        }
      
  },
 

  
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
    .my-story{
      height:80vh;
      width:70%;
      background-color: #272727;
      position:absolute;
      top: 10%;
        span{
          float: right;
        }
    }
    .block{
      display:block;
    }
    .hide{
      display:none;
    }
</style>