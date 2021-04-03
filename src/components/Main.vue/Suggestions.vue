<template>
  <div class="sugg-container">
      <div class="header">
        <p>Suggerimenti per te</p>
        <a href="">Mostra tutti</a>
      </div>
      
       <ul v-if="loaded==true">
          <li>
            <div class="user-loader">
              <div class="image-loader"></div>
              <div class="name-loader"></div>
          </div>
          </li>
          <li>
            <div class="user-loader">
              <div class="image-loader"></div>
              <div class="name-loader"></div>
          </div>
          </li>
          <li>
            <div class="user-loader">
              <div class="image-loader"></div>
              <div class="name-loader"></div>
          </div>
          </li>
          <li>
            <div class="user-loader">
              <div class="image-loader"></div>
              <div class="name-loader"></div>
          </div>
          </li>
          <li>
            <div class="user-loader">
              <div class="image-loader"></div>
              <div class="name-loader"></div>
          </div>
          </li>
          <li>
            <div class="user-loader">
              <div class="image-loader"></div>
              <div class="name-loader"></div>
          </div>
          </li>
          <li>
            <div class="user-loader">
              <div class="image-loader"></div>
              <div class="name-loader"></div>
          </div>
          </li>
          <li>
            <div class="user-loader">
              <div class="image-loader"></div>
              <div class="name-loader"></div>
          </div>
          </li>
        </ul>
        <ul>
          <li :key="i" v-for="(profile, i) in profiles">
              <div class="users">
                <img :src="profile.profile_picture" alt="">
                <p>{{profile.profile_name}}</p>
              </div>
              <a href="">Segui</a>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
      profiles: undefined,
       loaded: true
    }
  },
  mounted(){
      setTimeout(()=>{
      axios.get('https://flynn.boolean.careers/exercises/api/boolgram/profiles').then(res=>this.profiles=res.data).then(this.setLoad)
      console.log(this.profiles)},3000)
      
  },
  methods: {
        setLoad(){
          this.loaded =!this.loaded;
        }
      
  }
}
</script>

<style lang="scss" scoped>
    .header{
        display:flex;
        justify-content: space-between;
        margin-bottom: 30px;
        align-items: center;
    }
    ul{
      margin: 0;
      padding: 0;
    }
    ul li{
        display:flex;
        justify-content: space-between;
        margin: 30px 0;
        align-items: center;
          .users{
            display:flex;
            align-items: center;
          
            img{
              width:60px;
              height:60px;
              border-radius: 50%;
              margin-right: 20px;
            }
            p{
              display:inline-block;
              margin-left: 5px;
              font-weight: bold;
            }
          }
        }
        .header a{
          color: black;
          text-decoration:none;
          font-weight:bold;
        }
        .header p{
          color: grey;
        }
        ul li a{
          text-decoration: none;
          color: #0095f6;
        }
        .user-loader{
          display:flex;
          justify-content:flex-start;
          align-items: center;
        }
       .image-loader{
         width:60px;
         height:60px;
         border-radius: 50%;
         background-color:lightgrey;
         border: 1px solid grey;
       }
       .name-loader{
         width:120px;
         height: 20px;
         background-image: linear-gradient(to right, lightgrey, white);
         animation: load 1s ease infinite;
         background-size: 200%;
         margin-left: 20px;
       }
       @keyframes load {
    
    0%{
      background-position:left;
    }
    100%{
      background-position: right;
    }
       }
</style>