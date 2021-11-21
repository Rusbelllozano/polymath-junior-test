<template>
  <div>
    <transition name="fade">
      <div class="box__image-character" v-if="selected_character">
        <transition name="fade">
          <img
            class="image__character"
            v-if="!selected_character.blocked"
            :src="selected_character.images.md"
            :alt="selected_character.name"
          />
        </transition>
        <div v-if="selected_character.blocked">BLOCKED CHARACTER</div>
      </div>
    </transition>
  </div>
</template>
<script src="./LateralImageCharacter.js"></script>
<style lang="scss" src="./LateralImageCharacter.scss"></style>
