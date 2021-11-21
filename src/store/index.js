import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    list_characters: [],
    selected_character: null,
    showCharacterInfo: false,
  },
  mutations: {
    add_new_character(state, character) {
      state.list_characters.push({
        ...character,
        viewed: false,
        blocked: false,
      });
    },
    block_characters(state) {
      state.list_characters.slice(0, 20).forEach((character) => {
        character.blocked = true;
      });
    },
    view_character(state, character) {
      state.selected_character = character;
    },
    // select_character(state) {
    //   state.selected_character = character;
    // },
    check_view_character(state, character_info) {
      let changedViewed = state.list_characters.find(
        (character) => character.id === character_info.id
      );
      changedViewed.viewed = true;
    },
    showCharacterInfo(state) {
      state.showCharacterInfo = !state.showCharacterInfo;
    },
  },
  actions: {
    GET_CHARACTERS({ commit }) {
      for (let index = 0; index < 39; index++) {
        axios
          .get(`${process.env.VUE_APP_URL_API + "id/" + (index + 1)}.json`)
          .then((res) => {
            commit("add_new_character", res.data);
            commit("block_characters");
          });
      }
    },
  },
});
