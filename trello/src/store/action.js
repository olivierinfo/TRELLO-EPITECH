import axios from "axios";

export default {
    createList(context, payload) {
      context.commit("createNewList", payload);
    },

    createCard(context, payload) {
      context.commit("createNewCard", payload);
      console.log(2, "CREATE CARD in action.js")
    },

    toggleOverlay(context) {
      context.commit("toggleOverlay");
    },

    openForm(context, payload) {
      context.commit("openForm", payload);
    },

    saveCard(context, payload) {
      context.commit("saveCard", payload);
    },
    
    deleteCard(context, payload) {
      context.commit("deleteCard", payload);
    },
   
   // Ca marche pas Touche ! // Read des Category
    // getCardsCategory(context,payload){
    // axios
    //  .get('https://twp.oxy-development.fr/wp-json/wp/v2/categories')
   
    //  .then(response => (this.info = response,
    //    console.log("getCardsCategory",this.info.data)))
 
    // },

      loadCategory({ commit }) {
          axios
              .get('https://twp.oxy-development.fr/wp-json/wp/v2/categories', {
                  headers: {
                    'Authorization': 'Basic ZXBpdGVjaDpFcGl0ZWNoMTM=',
                  }
              })
              .then(response => response.data)
              .then(category => {
                  console.log(category);
              commit('SET_Category', category)
          })
      },

      loadArticle({ commit }) {
        axios
            .get('https://twp.oxy-development.fr/wp-json/wp/v2/posts', {
                headers: {
                  'Authorization': 'Basic ZXBpdGVjaDpFcGl0ZWNoMTM=',
                }
            })
            .then(response => response.data)
            .then(article => {
                console.log(article);
            commit('SET_Article', article)
        })
    },
    loadComments({ commit }) {
      axios
          .get('https://twp.oxy-development.fr/wp-json/wp/v2/comments', {
              headers: {
                'Authorization': 'Basic ZXBpdGVjaDpFcGl0ZWNoMTM=',
              }
          })
          .then(response => response.data)
          .then(comments => {
              console.log(comments);
          commit('SET_Comments', comments)
      })
  },
    
      
    // //Read Des Articles 
    // getCardsArticle(context,payload){
    // axios
    //   .get('https://twp.oxy-development.fr/wp-json/wp/v2/posts/254')
    //   .then(response => (this.info = response.data))
    // },

    // //Read Des Commentaires 
    // getCardsComment(context,payload){
    // axios
    //   .get('https://twp.oxy-development.fr/wp-json/wp/v2/comments')
    //   .then(response => (this.info = response.data))
    // }

  };
   