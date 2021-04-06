<template>

  
  <div class="story">
    <div class="header-loader" v-if="loaded==true">
      <div class="img-loader"></div>
      <div class="lines">
        <div class="line-one"></div>
        <div class="line-two"></div>
      </div>
    </div>
    <div class="image-loader" v-if="loaded==true">
       
      </div>
    <div class="container" :key="i" v-for="(story, i) in stories" v-on:intersect="intersected">
      <div class="header">
          <div class="profile"><img :src="story.profile_picture" alt=""></div>
          <div class="name"><p>{{story.profile_name}}</p></div>
          <div class="more"><i class="fas fa-ellipsis-h"></i></div>

      </div>
      <div class="image">
          <img :src="story.post_image" alt="">
      </div>
  
   <div class="container-comment">
      <div class="header">
          <i class="far fa-heart fa-2x"></i>
          <i class="far fa-comment fa-2x"></i>

      </div>
      <div class="likes">
          <div class="image" v-if="typeof(story.likes !== 'undefined') && typeof(story.likes[0]) !== 'undefined'"><img :src="story.likes[0].profile_picture" alt=""></div>
          <p>Piace a <span  v-if="typeof(story.likes !== 'undefined') && typeof(story.likes[0]) !== 'undefined'"><strong>{{story.likes[0].username}}</strong></span> e <strong><span>{{story.likes.length}}</span> altri</strong></p>

      </div>
      <div class="comments">
          <div class="user-comment">
              <span><strong>{{story.profile_name}}</strong></span>
              <span>{{story.post_text}} </span>
              <button href="#" @click="show()">Mostra tutti e <span>{{story.comments.length}}</span> i commenti</button>
              
              
                <div class="comment" :key="i" v-for="(comment,i) in story.comments">
                <span v-if="isActive == false? i<=2: comment"><strong>{{comment.username}}</strong></span>
                <span v-if="isActive == false? i<=2: comment">{{comment.text}} </span>
                
                </div>
                <div class="time">
                  <time-ago :datetime="story.date.date" :locale="locale"></time-ago>
                  <span>fa</span>
              </div>
          </div>

      </div>
      <div class="write">
          <input type="text" placeholder="Aggiungi un commento">
          <a href=""><strong>Pubblica</strong></a>
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
      stories: [],
      isActive: false,
      locale: "en",
      value: new Date(),
      loaded: true,
      observer:null
      
    }
  },

 
  mounted() {
   
    setTimeout(()=>{
    
     axios.get('https://flynn.boolean.careers/exercises/api/boolgram/posts').then(res=>this.stories=res.data).then(this.setLoad()).then(this.show());
    
  }, 3000)
    
  this.observer = new IntersectionObserver(([entry])=>{
    if(entry && entry.isIntersecting){
      this.$emit('intersect');
    }
  });
  this.observer.observe(this.$el);
  },
  methods:{
      show(){
        this.isActive =!this.isActive;
       
      },
      setLoad(){
          this.loaded =!this.loaded;
        }
       
  }
}
</script>

<style lang="scss" scoped>
  .story{
    padding:10px;
    margin:50px 0;
      .header{
        display:flex;
        align-items: center;
        margin: 0 20px;
        .more{
          margin-left: auto;
        }
          .profile img{
            width:60px;
            height:60px;
            border-radius: 50%;
            border-radius: 50%;
            border: 2px solid red;
            padding:3px;
          }
          .name p{
            font-size:25px;
            font-weight: bold;
            margin-left: 20px;
          }
      }
      .image img{
        width: 100%;
        
      }
  }
  .container{
    margin: 50px 0px;
    border: 2px solid lightgrey;
    padding:20px;
  }
    .container-comment .header{
      display:flex;
      align-items: center;
      justify-content:flex-start;
        i{
          margin:20px 10px;
        }
    }
    .likes{
      display:flex;
      align-items: center;

    }
      .likes .image{
        width:30px;
        height:30px;
        margin-right: 20px;
        img{
          border-radius: 50%;
         
        }
      }
      .comment{
        margin: 5px 0;
      }
  .user-comment span:not(:last-child){
    margin-right:10px;
  }
  button{
    background-color: white;
    border: none;
    display:block;
    padding:5px 0;
    margin-top:10px;
    font-family: serif;
    color:grey;
    font-size:20px;
  }
    .time{
      margin-top: 30px;
      margin-bottom:20px;
   }
   .write{
     display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
      input{
        border: none;
        height: 50px;
        width: 70%;
        font-size: 15px;
      }
      a{
        text-decoration: none;
        color: #0095f6;
      }
   }
   span .v-time-ago__text{
        font-family: serif;
        color:red;
      }
      time-ago{
        font-family: serif;
        color:red;
      }
      //loader
      .header-loader{
        height:100px;
        display:flex;
        justify-content:flex-start;
        align-items: center;
      }
      .img-loader{
        width:60px;
        height:60px;
        border-radius:50%;
        background-color:grey;
      }
      .lines{
        margin: 0 20px;
      }
      .line-one{
        width:120px;
        height:20px;
        background-color:grey;
        margin-bottom: 10px;
      }
      .line-two{
        width: 80px;
        height:20px;
        background-color:grey;
      }
      .image-loader{
        width: 700px;
        height:700px;
        background-image: linear-gradient(to right, lightgrey, white);
        animation: load 1s ease infinite;
        background-size: 200%;
      }
      @keyframes load{
        0%{
            background-position:left;
          }
        100%{
            background-position: right;
            }
      }
</style>