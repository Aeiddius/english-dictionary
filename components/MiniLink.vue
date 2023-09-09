<template>
  <button class="mini" type="button" @click="change">
    {{ value }}
  </button>
</template>

<script setup>
  
  const props = defineProps({
    value:{
      type: String
    }
  })

  const emit = defineEmits(['word'])

  const change = () => {

    const url = new URL(window.location);  
    url.searchParams.set("q", props.value);
    
    history.replaceState(null, null, ' ');
    history.pushState({}, "", url);

    document.getElementById("inputbox").value = props.value
    emit('word')

    

  }
</script>

<style lang='scss' scoped>
  .mini {
    // padding: 5px;
    color: $dark;
    border: none;
    border-radius: 4px;
    transition: all 0.2s ease;
    font-size: 12px;
    cursor: pointer;
    transform: scale(1);
    margin-right: 5px;
    &:hover {
      background-color: $dark;
      color: white;
    }
    &:active {
      transform: scale(0.9);
    }
  }
</style>