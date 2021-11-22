export default {
  name: "BoxCharacter",
  props: {
    character_info: Object,
  },
  methods: {
    viewCharacter() {
      this.$store.commit("view_character", this.character_info);
    },
    checkViewed() {
      this.$store.commit("view_character", null);
    },
    selectCharacter() {
      this.$store.commit("view_character", this.character_info);
      this.$store.commit("showCharacterInfo");
      this.$store.commit("check_view_character", this.character_info);
    },
  },
};
