<template>
  <div class="nav">
      <div class="logo"><img src="../assets/logo.png" alt=""></div>
      <div class="search">
          <input type="text">
      </div>
      <div class="react">
          <i class="far fa-heart"></i>
          <i class="fas fa-home"></i>
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
        border-bottom: 2px solid lightgrey;
        .logo img{
            width:150px;
            height:50px;
        }
        .react img{
            width:30px;
            height:30px;
            border-radius: 50%;
            }
        }
</style>