<template>
  <Modal mode="about"/>
  <div class="container hide" id="containerbox">
      <Front/>  
      <Searchbar @word="$refs.card.run()"/>
      <Card ref="card"/>
  </div>

  <div class="menu">
    <Button content="About" @click="openAbout"/>
    <Button content="Github" @click="openGithub"/>
  </div>
</template>

<script setup>
  const openAbout = () => {
    document.getElementById("modalbox").classList.remove("hide-modal")
  }

  const openGithub = () => {
    window.open('https://github.com/Aeiddius/english-dictionary', '_blank').focus()
  }
</script>

<style lang='scss'>
  .container {
    // Lauout
    width: 100%;
    height: 100vh; 
    
    // Element
    background: linear-gradient(107deg, rgba(241, 244, 253, 0.05) 15.42%, rgba(19, 19, 57, 0.05) 80.13%), #F1F4FD;

    overflow: auto;
    // overflow-x: hidden;
    // margin-right: calc(-1 * (100vw - 100%));
    scrollbar-gutter: stable; 
    @include hideTime;
  }

  .menu {
    position: fixed;
    bottom: 100px;
    right: -15px;

    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .hide {
    overflow-y: hidden;
  }
  
  @media only screen and (max-width: 500px)  {
    .menu {
      bottom: none;
      right: 30px;
      top: 0px;
      flex-direction: row;
      gap: 20px;

      .btn {
        rotate: 0deg;
        border-radius: 0px 0px 10px 10px;
      }
    }    
  }
  
</style>