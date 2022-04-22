<template>
<draggable :options="{ group: 'cards' }" group="cards" ghostClass="ghost">
    <span class="element-card" v-for="articles in article.filter(article => article.categories[0] == listId)" :key="articles.id" @click="SendId(articles.id)">
        {{articles.title.rendered}}
    </span>
</draggable>
</template>

<script>
import {
    VueDraggableNext
} from "vue-draggable-next";
import {
    mapState
} from 'vuex';
export default {
    props: ["listId", "listName"],
    components: {
        draggable: VueDraggableNext,
    },
    mounted() {
        this.$store.dispatch('loadArticle')
    },
    computed: mapState([
        'article',
    ]),

    methods: {
        SendId(id) {
            this.$emit("setArticleId", id)
        },
    },
    // computed: {

    //   cards() {
    //     const cardFilteredByListId = this.$store.getters["cards"];
    //      return this.$store.getters.getCards;
    //     // return cardFilteredByListId.filter((card) => { //a modifier 
    //     //   if (card.listId === this.listId) {
    //     //     return true;
    //     //   } else {
    //     //     return false;
    //     //   }
    //     // });
    //   },

    //   //   computed: {
    //   //     lists() {
    //   //         return this.$store.getters.getLists; //utiliser la meme methodes 
    //   //     },
    //   // },

    //   overlayIsActive() {
    //     return this.$store.getters["overlay"];
    //   },
    // },
};
</script>

<style scoped>
.element-card {
    position: relative;
     background: linear-gradient(rgba(206, 206, 206, 0.753), rgb(123, 176, 207));
    height: auto;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    min-height: 30px;
    margin-bottom: 10px;
    word-break: break-all;
    text-align: left;
}
</style>
