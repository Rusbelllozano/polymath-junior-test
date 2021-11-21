<template>
  <div class="wrapper__list-characters">
    <div
      v-for="character in list_characters"
      :key="character.id"
      class="grid__characters"
    >
      <BoxCharacter :character_info="character" />
    </div>
  </div>
</template>

<script src="./ListCharacters.js"></script>
<style scoped lang="scss" src="./ListCharacters.scss"></style>
