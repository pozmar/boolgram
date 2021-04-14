<template>
  <div class="nav">
      <div class="logo"><img src="../assets/logo.png" alt=""></div>
      <div class="search">
          <input type="text" placeholder="cerca">
      </div>
      
      <div class="react">
          <i class="far fa-heart fa-2x"></i>
          <i class="fas fa-home fa-2x"></i>
          <img src="../assets/profile.jpg" alt="">
      </div>
  </div>
</template>

<script>

export default {

    
    
}
    


</script>

<style lang="scss" scoped>
    
    .nav{
        display:flex;
        justify-content: space-between;
        width:80%;
        margin: 0 auto;
        align-items: center;
        padding: 20px 0;
        .logo img{
            width:150px;
            height:50px;
        }
        .react{
            display:flex;
            justify-content:center;
            align-items: center;
        }
        .react img{
            width:60px;
            height:60px;
            border-radius: 50%;
            }
        }
        .react i{
            margin: 0 10px;
        }
    input{
        text-align: center;
        border: 1.5px solid lightgrey;
        padding: 10px 50px;
    }
</style>