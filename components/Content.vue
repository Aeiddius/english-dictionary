<template>
  <div class="content" v-if="content" id="card-content">
   
    <div class="word-header">
      <div class="flex align-baseline" id="word">
        <h1 class="word">{{ titleCase(content.word) }}</h1>
        <span v-html="phonetic.text" v-if="phonetic.text != '[  ]'"></span>
      </div>

      <div class="flex align-baseline gap-10">
        <Audio :src="phonetic.audio" :key="phonetic.audio"/>
        <Url v-if="content.sourceUrls.length != 0" :url="content.sourceUrls[0]"/>
      </div>

    </div>
    
   
    <div v-for="(meaning, index) in content.meanings">

      <div class="meaning">
        <h2>{{ titleCase(meaning.partOfSpeech) }}</h2>
        <div class="definition" v-for="(def, index) in meaning.definitions">
          <div class="count">{{ index +1  }}.</div>
          <div>
            <div class="definition-content">{{ def.definition }}</div>
            <div class="examples" v-if="def.example">{{ def.example }}</div>
          </div>
        </div>

        <div class="synonyms" v-if="meaning.synonyms.length != 0">
          <h3>Synonyms:</h3>
          <span> 
            <template v-for="(synonym, index) in meaning.synonyms">
              <MiniLink :value="titleCase(synonym)" @word="emit('word')"/><template v-if="index+1 != meaning.synonyms.length"> </template>
            </template>
          </span>
        </div>

        <div class="antonyms" v-if="meaning.antonyms.length != 0">
          <h3>Antonyms:</h3>
          <span> 
            <template v-for="(antonym, index) in meaning.antonyms">
              <MiniLink :value="titleCase(antonym)" @word="emit('word')"/><template v-if="index+1 != meaning.antonyms.length"> </template>
            </template>
          </span>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
  
  const props = defineProps({
    content: {
      type: Object,
    }
  })

  const emit = defineEmits(['word'])

  const phonetic = ref()
  
  watch(()=> {return props.content}, (value) => {
    let addedCheck = []
    let phonetics = ""
    let audio = ""

    for (const name in value.phonetics) {
      const phoe = value.phonetics[name]
      // console.log(phoe.text)
      if (phoe.audio.trim() != "") audio = phoe.audio
      if (phoe.hasOwnProperty("audio") && phoe.hasOwnProperty("text") && phoe.text != undefined) {
        if (addedCheck.includes(phoe.text)) continue
        phonetics += phoe.text + ",  "
        addedCheck.push(phoe.text)
        
      }
     
    }

    phonetic.value = {
      text: "[ " + phonetics.replace(/\//g, '').replace(/(\,)(?!.*\1)/, '').trim() + " ]",
      audio: audio
    }
  })



  function titleCase(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
</script>

<style lang='scss' scoped>
  .content {
    visibility: visible;
    color: $dark;
    @include hideTime;
  }

  .hide-content {
    visibility: hidden;
    color: transparent;
  }

  .word-header {
    display: flex;
    align-items:baseline;
    justify-content: space-between;
    width: 100%;
    .word {
      font-size: 2.2em;
      margin-right: 10px;
    }
    
    margin-bottom: 1em;
  }

  .meaning {
    margin-bottom: 2em;

    h2 {
      font-size: 1.4em;
      margin-bottom: 20px;
    }

    .definition {
      display: flex;
      padding-left: 0.5em;
      margin-bottom: 7px;
      color: rgba($dark, 0.2) !important;
      .count {
        margin-left: 15px;
        margin-right: 10px;
        min-width: 15px;
      }
      .examples {
        font-style: italic;
        font-size: 13px;
        color: rgba($dark, 0.5);
      }

    }

    .synonyms {
      display: flex;
      margin-left: 46px;
      font-size: 12px;

      h3 {
        margin-right: 5px;
        font-weight: bold;
      }
    }

    .antonyms {
      display: flex;
      margin-left: 46px;
      font-size: 12px;

      h3 {
        margin-right: 5px;
        font-weight: bold;
      }
    }
  }

  @media screen and (max-width: 700px) {
    #word {
      flex-direction: column;
      span {
        margin-top: 10px;
      }
    }
  }

</style>