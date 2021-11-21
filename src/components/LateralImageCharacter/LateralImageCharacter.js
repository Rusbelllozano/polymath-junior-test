export default {
  name: "LateralImageCharacter",
  computed: {
    selected_character() {
      return this.$store.state.selected_character;
    },
  },
};
