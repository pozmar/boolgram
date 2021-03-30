<template>
<div>
  <div class="story" :key="i" v-for="(story, i) in stories">
      <div class="header">
          <div class="profile"><img :src="story.profile_picture" alt=""></div>
          <div class="name"><p>{{story.profile_name}}</p></div>
          <div class="more">More Info</div>

      </div>
      <div class="image">
          <img :src="story.post_image" alt="">
      </div>
  
   <div class="container-comment">
      <div class="header">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>

      </div>
      <div class="likes">
          <div class="image"><img src="" alt=""></div>
          <p>Piace a <span>{{story.likes[0].username}}</span> e a <span>{{story.likes.length}}</span> altri</p>

      </div>
      <div class="comments">
          <div class="user-comment">
              <span>{{story.profile_name}}</span>
              <span>{{story.post_text}} </span>
              <p @click="show()">Mostra tutti e <span>{{story.comments.length}}</span> i commenti</p>
              

                <div class="comment" :key="i" v-for="(comment,i) in story.comments">
                <span>{{comment.username}}</span>
                <span>{{comment.text}} </span>
                
                </div>
                <time-ago :datetime="story.date.date" :locale="locale"></time-ago>
              <span> ago</span>
          </div>

      </div>
      <div class="write">
          <input type="text">
          <a href="">Pubblica</a>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import TimeAgo from 'vue2-timeago'
import axios from 'axios'
export default {
  components:{
    TimeAgo
  },
 data(){
    return{
      stories: undefined,
      isActive: false,
      locale: "en",
      value: new Date()
    }
  },
  mounted(){

      axios.get('https://flynn.boolean.careers/exercises/api/boolgram/posts').then(res=>this.stories=res.data)
      
      }, 
      show(){
        this.isActive =!this.isActive;
      }   
   }
        
      
  


</script>

<style lang="scss" scoped>
  .story{
    border: 1px solid lightgrey;
    padding:10px;
    
    
    margin:50px 0;
    
      .header{
        display:flex;
        justify-content:flex-start;
          .profile img{
            width:40px;
            height:40px;
            border-radius: 50%;
          }
      }
      .image img{
        width:100%;
        
      }
  }
</style>