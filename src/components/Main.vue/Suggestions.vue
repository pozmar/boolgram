<template>
  <div class="sugg-container">
      <div class="header">
        <p>Suggerimenti per te</p>
        <a href="">Mostra tutti</a>
      </div>
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
    }
  },
  mounted(){

      axios.get('https://flynn.boolean.careers/exercises/api/boolgram/profiles').then(res=>this.profiles=res.data)
      console.log(this.profiles);
      }
      
  }

</script>

<style lang="scss" scoped>
    .header{
        display:flex;
        justify-content: space-between;
    }
    ul li{
        display:flex;
        justify-content: space-between;
          .users{
            display:flex;
            align-items: center;
          
            img{
              width:40px;
              height:40px;
              border-radius: 50%;
            }
            p{
              display:inline-block;
              margin-left: 5px;
              font-weight: bold;
            }
          }
        }
</style>