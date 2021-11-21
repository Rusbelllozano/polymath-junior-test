<template>
  <div>
    <transition name="fade">
      <div v-if="selected_character">
        <transition name="fade">
          <img
            class="image__character"
            v-if="!selected_character.blocked"
            :src="selected_character.images.md"
            :alt="selected_character.name"
          />
          <div v-else>BLOCKED CHARACTER</div>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script src="./LateralImageCharacter.js"></script>
<style lang="scss" src="./LateralImageCharacter.scss"></style>
