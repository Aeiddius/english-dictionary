<template>
  <button class="btn" type="button">
    {{ content }}
  </button>
</template>

<script lang="ts" setup>
  const props = defineProps({
    content: {
      type: String,
      required: true
    }
  })
  
</script>

<style lang='scss' scoped>
  .btn {
    // Layout
    
    min-width: 70px;
    width: fit-content;
    height: 40px;
    // Block
    padding: 10px;
    border-radius: 10px 10px 0px 0px;
    border: none;

    // Element
    background-color: white;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.10);

    // Misc
    user-select: none;
    transition: all 0.1s ease-in;
    cursor: pointer;
    transform: scale(1);
    rotate: -90deg;
    
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      background-color: $dark;
      color: white;
    }
  }
</style>