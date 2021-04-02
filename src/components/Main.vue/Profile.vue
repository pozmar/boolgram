<template>
  <div class="profile-container">
      <div class="image"><img src="../../assets/profile.jpg" alt=""></div>
      <div class="name">
          <p><strong>pozmar</strong></p>
          <p>Martina Pozzerle</p>
      </div>
      <div class="link"><a href="">Passa a</a></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .profile-container{
        display:flex;
        justify-content: space-between;
        margin-bottom: 50px;
            img{
                width:60px;
                height:60px;
                border-radius: 50%;
            }
            p{
                margin:0;
            }
            p:last-child{
                color:grey;
            }
    }
    a{
        text-decoration: none;
        color: #0095f6;
    }
</style>