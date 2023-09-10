<template>
  <div class="searchbar hide" id="searchbox">
    <input type="text" placeholder="Search..." id="inputbox"  @keyup.enter="$emit('word')">
    <div class="logo">
      <button>

      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" @click="$emit('word')">
        <path
          d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
      </svg>
    </button>
    </div>
  </div>
</template>

<script setup>

  const emit = defineEmits(['word'])


</script>

<style lang='scss' scoped>
  .searchbar {
    display: flex;
    justify-content: center;
    user-select: none;
    width: fit-content;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    .logo {
      border-bottom: 1px solid rgba($dark, 0.36);
      padding: 10px;

      button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        transform: scale(1);
        transition: all 0.06s ease-in-out;
        &:hover {
          transform: scale(1.2);
          fill: $dark;
          svg {
            fill: $dark;
          }
        }
        &:active {
          transform: scale(0.95);
        }
      }

      svg {
        fill: rgba($dark, 0.36);
      }
    }


    input {
      // Layout
      width: 310px;

      // Block
      border: none;
      border-bottom: 1px solid rgba($dark, 0.36);
      outline: none;
      padding: 10px;

      // Element
      background-color: transparent;
      font-size: 20px;
      font-weight: 400;
      color: rgba($dark, 1);
      &::placeholder { 
        color: rgba($dark, 0.36);
      }
    }
  }



</style>