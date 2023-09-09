<template>
  <div class="title-div hide" id="titlebox">
    <span class="sub">English</span>
    <span class="title">Dictionary</span>
  </div>
</template>



<style lang='scss' scoped>
  .title-div {
    // Layout
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    width: fit-content;

    // Box
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    margin-top: 8vh;
    

    // Misc
    user-select: none;
    @include hideTime;

    // Children
    .title {
      font-size: 4em;
      @include hideTime;
    }
    .sub {
      font-size: 2em;
      @include hideTime;
    }
  }

  .hide { 
    margin-top: 30vh;
    .title {
      font-size: 5em;
    }
    .sub {
      font-size: 2.5em;
    }    
  }


  @media only screen and (max-width: 500px)  {
    .hide {
      .title {
      font-size: 4em;
      }
      .sub {
        font-size: 2em;
      }
    }
  }
</style>