import { createStore } from "vuex";

import rootMutations from "./mutation";
import rootActions from "./action";
//import rootGetters from "/getters";

const store = createStore({
  state() {
    return {
      overlay: false,
      lastListId: 3,
      lastCardId: 5,
      currentData: null,
      category:[],
      article:[],  
      lists: [],
      cards: [],
      comments: [],
    
    };
  },
  mutations: rootMutations,
  actions: rootActions, 
  getters: {
      getarticle: state => {
      return state.article;
      },

      getcategory: state => {
      return state.category;
      },
      getOverlay (state, getters) {
        return state.overlay
      },
      getLists(state)
      {
        return state.lists
      },
      getCards(state)
      {
        return state.cards
      },
      getComments(state)
      {
        return state.comments
      },
  } 
});

export default store;