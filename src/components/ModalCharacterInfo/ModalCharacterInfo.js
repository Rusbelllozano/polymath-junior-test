export default {
  name: "ModalCharacterInfo",
  data() {
      return {
          text:"",
      }
  },
  methods: {
    closeModal() {
      this.$store.commit("showCharacterInfo");
    },
    darleClick() {
    console.log('hola');
        this.text = "soy un texto que agregue dando click"
      
      alert("HOLAAA SOY UN ALERT");
    },
  },
  computed: {
    character_info() {
      return this.$store.state.selected_character;
    },
  },
};
