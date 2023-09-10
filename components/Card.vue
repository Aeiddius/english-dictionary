<template>
  <div class="card hide" id="cardbox">
    

    <Content :content="content" @word="change"/>
  </div>
</template>

<script setup>
  const content = ref()

  const run = async () => {
    const query = document.getElementById("inputbox").value.trim().replace(/\+/g, " ")
    setquery(query)
    if (query == "") {
      hide()
      return
    }
    const { data: result} = await useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
    if (result.value == null) {
      hide()
      return
    }
    console.log("this: ", result.value)
    content.value = result.value[0]
    unhide()

    window.scrollTo(0, 0);
  }

  const change = async () => {
      await nextTick(async () => {
        await run()
      })
  }
  
  const unhide = () => {
    for (const id of ["titlebox", "cardbox", "containerbox"]) {
      document.getElementById(id)?.classList.remove("hide")
    }
    document.getElementById("card-content")?.classList.remove("hide-content")
  }

  const hide = () => {
    for (const id of ["titlebox", "cardbox", "containerbox"]) {
      document.getElementById(id)?.classList.add("hide")
    }
    document.getElementById("card-content")?.classList.add("hide-content")
  }
  
  const setquery = (query) => {
    const url = new URL(window.location);  
    url.searchParams.set("q", query);
    
    history.replaceState(null, null, ' ');
    history.pushState({}, "", url);
  }
  
  defineExpose({
    run
  });

  
  onMounted(async () => {
    const url = new URL(window.location);  
    const query = url.searchParams.get("q");

    if (query) {
      document.getElementById("inputbox").value = query
      await change();
      
    }

      // Setup forward and backward handler using johanholmerin's code
      window.addEventListener('forward', event => {
        console.log("forward")
      });

      window.addEventListener('back', event => {
        console.log("backward")
      });


  })

</script>

<style lang='scss' scoped>
  .card {
    // Layout
    position: relative;
    width: 500px;
    height: fit-content;
    flex-shrink: 0;
    margin: 0 auto;
    margin-bottom: 100px;
    
    // Block
    border-radius: 30px;
    padding: 40px;
    margin-top: 40px;
    
    // Element
    background: #FAFBFF;
    box-shadow: 0px 4px 70px 5px rgba(19, 19, 57, 0.12);
    
    // Font
    font-size: 15px;
    line-height: 18px;
    text-align: justify;
    overflow-x: hidden;
    @include hideTime;

    .content {
      @include hideTime;
      
      width: 100%;
      height: 100%;
    }
  }

  .hide {
    user-select: none;
    transform: translateY(25vh) !important;
    overflow-y: hidden;
    user-select: none;
    height: 40vh;
    .content {
      color: transparent;
    }
  }

  @media screen and (max-width: 600px) {
    .card {
      width: 100% !important;
    }
    .searchbar {
      width: 100%;
    }
  }

  @media screen and (max-width: 400px) {
    .card {
      padding: 30px;
      padding-top: 40px;
    }
  }
</style>