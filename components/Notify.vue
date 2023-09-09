<template>
  <div class="notify">
    {{ message }}
  </div>
</template>

<script lang="ts" setup>
  
  const props = defineProps({
    message: {
      type: String,
    }
  })
  
</script>

<style lang='scss' scoped>
  .notify {
    position: fixed;
    top: 10px;
    right: -100px;
    min-width: 100px;
    padding: 10px;
    border-radius: 10px 0px 0px 10px;

    // Element
    background-color: $dark;
    color: white;

    // Misc
    transition: all 0.3s ease-in-out;
    visibility: hidden;
  }


  .box-animate {
    animation-name: moveObject;
    animation-duration: 3s;
    animation-timing-function: linear;
  }

  @keyframes moveObject {
    from {
      right: -100px;
      visibility: hidden;
    }

    30% {
      right: 0px;
      // transform: translateX(300px);
    }
    80% {
      right: 0px;
      // transform: translateX(300px);
    }
    to {
      right: -100px;
      visibility: visible;
    }
  }

</style>