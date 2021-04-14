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
      <div>
    <div class="container" :key="i" v-for="(story, i) in stories" data-aos-offset="100" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
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
        <!--<span v-if="story.liked===false"><i class="far fa-heart fa-2x" @click="open(story)"></i>
          </span>
          <span v-else>
          <i class="fas fa-heart fa-2x" @click="open(story)"></i>
          </span>-->
          <i class="far fa-heart fa-2x"></i>
          <i class="far fa-comment fa-2x"></i>

      </div>
      <div class="likes">
          <div class="image" v-if="typeof(story.likes !== 'undefined') && typeof(story.likes[0]) !== 'undefined'"><img :src="story.likes[0].profile_picture" alt=""></div>
          <p>Piace a <span  v-if="typeof(story.likes) !== 'undefined' && typeof(activeProfile) !== 'undefined' && typeof(story.likes[0]) !== 'undefined'"><strong>{{story.likes[0].username}}</strong>
          </span> 
          
          e <strong><span>{{story.likes.length}}</span> altri</strong></p>

      </div>
      <div class="comments">
          <div class="user-comment">
              <span><strong>{{story.profile_name}}</strong></span>
              <span>{{story.post_text}} </span>
              <button href="#" class="btn-comments" @click="show()">Mostra tutti e <span>{{story.comments.length}}</span> i commenti</button>
              
              
                <div class="comment" :key="i" v-for="(comment,i) in story.comments">
                <span v-if="isActive == false? i<=2: comment"><strong>{{comment.username}}</strong></span>
                <span v-if="isActive == false? i<=2: comment">{{comment.text}} </span>
                
                </div>
                <div class="my-comment" v-if="typeof(activeProfile) !== 'undefined'">
                <span><strong>{{activeProfile.newMessage}}</strong></span>
                <span>{{activeProfile.newMessage}}</span>
                </div>
                <div class="time">

                  <time-ago :datetime="story.date.date" :locale="locale"></time-ago>
                  <span class="ago">ago</span>
              </div>
          </div>

      </div>
      <div class="write">
          <input 
          type="text"  
          placeholder="Aggiungi un commento"
          v-model="input.text"
          @click="open(story)">
          <button class="btn-add" @click="submit()"><strong>Pubblica</strong></button>
      </div>

    </div>
  
  
  </div>
  <button @click="loadMore()" v-if="this.stories.length<8">Vedi altri post</button>
  <button v-else>Non ci sono altri contenuti</button>
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
      isActive: true,
      locale: "en",
      value: new Date(),
      loaded: true,
      loading:false,
      busy:false,
      limit:1,
      liked: false,
      myUser:{
        profilePicture:"assets/profile.png",
        username:"pozmar"
      },
      input:{
        text:'',
        username: 'pozmar'
      },
      activeProfile:'undefined',
      like:{
        profilePicture:"assets/profile.png",
        username:"pozmar"
      }
    }
  },
  mounted() {
    setTimeout(()=>{
    this.loadMore();
    this.setLoad();
    this.show();
    this.setActive();
    this.addLike();
  }, 3000)
   
    
  },
  
  methods:{
   
      loadMore(){
         this.busy = true;
         axios.get(`https://flynn.boolean.careers/exercises/api/boolgram/posts`).then(response => {
         const append = response.data.slice(
          this.stories.length,
          this.stories.length + this.limit
        );
        
        this.stories = this.stories.concat(append);
        this.busy = false;
        
      }).then(this.setActive).then(this.addLike);
     
      },
      show(){
        this.isActive =!this.isActive;
       
      },
      setLoad(){
          this.loaded =!this.loaded;
        },
      setActive(){
           this.activeProfile=this.stories[0]
          
        },
      open(story){
          this.activeProfile = story;
          console.log(this.activeProfile);
           
        },
        
      submit(){
        if(this.input.text != '' && typeof(this.activeProfile) !== 'undefined'){
         let newMessage = {...this.input};
         this.activeProfile.comments.push(newMessage);
         this.input.text ='';
        }
      },
      /*likes() {
        if(typeof(this.activeProfile) !== 'undefined'){
          let newLike={...this.like};
          
        this.activeProfile.likes.push(newLike);
        this.activeProfile.liked =true;
        //console.log(this.activeProfile.likes); 
        }
      },
      dislike() {
        
        if(typeof(this.activeProfile) !== 'undefined' && typeof(this.activeProfile.likes)!== 'undefined'){
          
                this.activeProfile.likes.splice(-1);
                this.activeProfile.liked =false;
                //console.log(this.activeProfile);
            
          }
        },
        addLike(){
          for(let i = 0; i <this.stories.length; i++){
            this.stories[i].liked=false;
             //console.log(this.stories);
          }
         
            
          },
        isLiked(story){
       
        this.story.liked =!this.story.liked;
        console.log(story); 
        },*/
        
      
       
  },
    
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
      .ago{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 14px;
        cursor: pointer;
        color: #657786;
      }
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
      .btn-comments:hover, .btn-add:hover{
        cursor: pointer;
      }
      .time span[data-v-4e1f4bc7]{
        margin-right: 5px;
      }
      .container-comment i:hover{
        cursor: pointer;
      }
      .more:hover{
        cursor: pointer;
      }
</style>