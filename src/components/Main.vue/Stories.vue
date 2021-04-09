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
      <div class="img" @click="toggle(),activate(), open(profile)" :key="i" v-for="(profile, i) in profiles">
        <img v-if="i<=4" :src="profile.profile_picture" alt="">
        <span v-if="i<=4"><strong>{{profile.profile_name}}</strong></span>
        
      </div>
 
    </div>
  </div>
    <fullscreen ref="fullscreen" @change="fullscreenChange">
      
        
        <div class="box-full" v-if="typeof activeProfile !== 'undefined'" :class="fullscreen==true?'flex':'hide'">
            <img v-if="typeof activeProfile !== 'undefined'" :src="activeProfile.profile_picture" alt="" >
           
        </div>
         <span @click="toggle()" :class="fullscreen==true?'flex':'hide'">X</span>
    </fullscreen>
   

 
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
      fullscreen:false
    
      
      
     
      
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
        changingStatus(){
          if(this.isActive == true){
            setTimeout(() => {
              
            }, 5000);
            return this.isActive == false;
          }
        },
        
        setActive(){
           this.activeProfile=this.profiles[0]
           console.log(this.activeProfile);
        },
        open(profile){
         
          this.activeProfile = profile;
          console.log(this.activeProfile);
        },
        toggle () {
        this.$refs['fullscreen'].toggle();
        
        
      },
        fullscreenChange (fullscreen) {
        this.fullscreen = fullscreen;
        console.log(this.fullscreen);
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
    :fullscreen{
      display:flex;
      justify-content: space-between;
      align-items: center;
        .box-full{
          display:flex;
          flex-direction:column;
          width:50%;
          margin: 0 auto;
            img{
              width:70%;
            }
        }
        span{
          align-self: baseline;
          color:white;

        
      }
    }
    .flex{
      display:flex;
      justify-content: center;
      align-items: center;
    }
    .hide{
      display:none;
    }
</style>