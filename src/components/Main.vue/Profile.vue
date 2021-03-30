<template>
  <div class="profile-container">
      <div class="image"><img src="../../assets/profile.jpg" alt=""></div>
      <div class="name">
          <p>pozmar</p>
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
            img{
                width:40px;
                height:40px;
                border-radius: 50%;
            }
    }
</style>