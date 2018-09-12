<template>
 <div class="home">
   <h1 class="home-title">Hello</h1>
   <img class="home-logo" :src="images.logo" alt="logo">
   <p>This is {{framework}}</p> 
 </div>
</template>

<script>
import logoImg from "../assets/img/logo.png"

export default {
  data() {
    return {
      framework: "vue",
      images: {
        logo: logoImg
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  &-logo {
    width: 200px;
    height: 200px;
  }
}
</style>
