<template>
  <div class="modal hide-modal" id="modalbox">
    <div class="modal-content">
      <div v-if="mode == 'about'">
        <button @click="close">✖</button>
        <h1>About</h1>
        <p>This is an English Dictionary website built by Aeiddius as a side-project built on top of the <a href="https://dictionaryapi.dev/" target="_blank">Free Dictionary API</a>.</p>
        
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
  
  const props = defineProps({
    mode: {
      type: String
    }
  })

  const close = () => {
    document.getElementById("modalbox")?.classList.add("hide-modal")
  }
</script>

<style lang='scss' scoped>

  .modal {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: rgba(black, 0.5);
    z-index: 9999;
  }
  .modal-content {
    width: 400px;
    padding: 30px;
    background-color: white;
    border-radius: 20px;
    line-height: 23px;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }

  button {
    float: right;
    border: none;
    background-color: transparent;
    color:  rgba(black, 0.5);
    font-size: 1.4em;
    transform: scale(1);
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      color: $dark;
    }
    &:active {
      transform: scale(0.9);
    }
  }

  a {
    color: $dark;
    transition: all 0.2s ease;
    border-radius: 5px;
    padding: 2px;
    &:hover {
      background-color: $dark;
      color: white;
    }
  }
</style>