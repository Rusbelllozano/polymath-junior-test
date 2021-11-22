export default {
  name: "ModalCharacterInfo",
  methods: {
    closeModal() {
      this.$store.commit("showCharacterInfo");
    },
  },
  computed: {
    character_info() {
      return this.$store.state.selected_character;
    },
  },
};
