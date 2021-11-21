import BoxCharacter from "../BoxCharacter/BoxCharacter.vue";
export default {
  name: "ListCharacters",
  components: {
    BoxCharacter,
  },
  computed: {
    list_characters() {
      return this.$store.state.list_characters;
    },
  },
};
