<template>
  <div class="containaer__general-app">
    <transition name="fade">
      <ModalCharacterInfo v-if="showCharacterInfo" />
      <div class="wrapper__principal" v-else>
        <div class="wrapper__list">
          <h1 style="margin: 0">HEROS AND VILLAINS DATA</h1>
          <div class="name__character">
            <h1>{{ nameCharacter }}</h1>
          </div>
          <ListCharacters />
        </div>
        <LateralImageCharacter />
      </div>
    </transition>
  </div>
</template>

<script>
import ListCharacters from "./components/ListCharacters/ListCharacters.vue";
import LateralImageCharacter from "./components/LateralImageCharacter/LateralImageCharacter.vue";
import ModalCharacterInfo from "./components/ModalCharacterInfo/ModalCharacterInfo.vue";
export default {
  name: "App",
  components: {
    ListCharacters,
    LateralImageCharacter,
    ModalCharacterInfo,
  },
  created() {
    this.$store.dispatch("GET_CHARACTERS");
  },
  computed: {
    showCharacterInfo() {
      return this.$store.state.showCharacterInfo;
    },
    nameCharacter() {
      if (this.$store.state.selected_character) {
        if (!this.$store.state.selected_character.blocked) {
          return this.$store.state.selected_character.name;
        } else {
          return "";
        }
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap");
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Oswald", sans-serif;
  color: #eeeeee;
  background: rgb(5, 29, 32);
  background: linear-gradient(
    90deg,
    rgba(5, 29, 32, 1) 1%,
    rgba(5, 25, 28, 1) 50%,
    rgba(0, 0, 0, 1) 83%
  );
  min-height: 100vh;
}
.wrapper__principal {
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  padding: 50px;
  justify-content: center;
  .wrapper__list {
    margin: 100px 0;
    height: 350px;
    .name__character {
      height: 60px;
      h1 {
        margin: 0;
      }
    }
  }
  @media (max-width: 1000px) {
    padding: 30px;
    grid-template-columns: 1fr;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
