<template>
  <div>
    <div
      class="container__character-thumbnail"
      v-if="!character_info.blocked"
      @mouseover="viewCharacter()"
      @mouseleave="checkViewed()"
      @click="selectCharacter()"
    >
      <div class="tag__character-new" v-if="!character_info.viewed">NEW</div>
      <img
        :src="character_info.images.sm"
        :alt="character_info.name"
        class="image__character"
        :class="{ 'image__character-viewed': character_info.viewed }"
      />
    </div>
    <div
      @mouseover="viewCharacter()"
      class="container__character-thumbnail"
      v-else
    >
      <img
        src="@/assets/question-sign.png"
        :alt="character_info.name"
        class="image__character-blocked"
      />
    </div>
  </div>
</template>

<script src="./BoxCharacter.js"></script>
<style scoped lang="scss" src="./BoxCharacter.scss"></style>
