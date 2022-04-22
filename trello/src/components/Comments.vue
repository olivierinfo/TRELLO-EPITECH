<template>
<!-- <div  v-if="comments.filter(comment => comment.post == ArticleId).length > 0"> -->
    <!-- <h1>coucou{{comments}}</h1> -->

    <div class="boucleComment">

  
    <div class="boucle" v-for="comment in comments.filter(comment => comment.post == ArticleId)" :key="comment.id" >
                <p>{{comment.author_name}} : {{comment.content.rendered}} // {{comment.date}}    <button class="size btn btn-danger" @click="deleteComment(comment.id)">delete</button></p>
                
    </div>
    <!-- <button @click="DisplayComment" type="button" class="btn btn-primary" data-dismiss="modal"><h8>Click to add comments</h8></button> -->
    <div class = "flex" v-if="true">
        <input type="text" class="input-card" placeholder="Create a New Comments" v-model="content" @keyup.enter="addComment(ArticleId)" />
    </div>
      </div>

<!-- <div v-else>
<h1>No comments</h1>
</div> -->
</template>

<script>
import {mapState} from 'vuex';
const baseURL = 'https://twp.oxy-development.fr/wp-json/wp/v2/comments'
export default {

    props: ["ArticleId"],
    
    mounted() {
        this.$store.dispatch('loadComments'),
        console.log("mounted"),
        this.Iscomments();
    },
    computed: mapState([
        'comments',
    ]),
    data (){
        return {
            IsComment: true,
            AddnewComments: false
             }
    },
    
    methods:{
            Iscomments(){
            console.log(1,"coucou")
            this.Iscomment=true
            console.log(2, this.Iscomment)
           
            },
            deleteComment(id){
                const url = "https://twp.oxy-development.fr/wp-json/wp/v2/comments/"+id+"?force=true";
                fetch(url, {
                    headers: {
                    'Authorization': 'Basic ZXBpdGVjaDpFcGl0ZWNoMTM=',
                    },
                    method: "DELETE",
                }),
                window.alert("the comment has been deleted, please click OK to reload the webpage ");
                window.location.reload();
                    // .then((response) => response.json())
                    // .then((data) => {
                    // this.results = data.note;
                    // })
                    // .then(() => {
                    // window.location.reload();
                    // });
                },
            
            DisplayComment(){
                console.log(1, "add comment")
                if (this.AddnewComments == true){
                    this.AddnewComments = false}
                else {this.AddnewComments = true}
                console.log(2, this.AddnewComments)
            },
            async addComment(categoryId){
                console.log("Post new comments")
                console.log(categoryId)
                var formdatas = new FormData();
                formdatas.append("content", this.content);
                formdatas.append("post", categoryId);
                const resu = await fetch(`${baseURL}`, {
                    method: "post",
                    headers: {
                        'Authorization': 'Basic ZXBpdGVjaDpFcGl0ZWNoMTM=',
                    },
                    body: formdatas,
                });
                window.alert("the new comment"+" '"+(this.content)+"' "+"has been added, please click OK to reload the webpage ");
                window.location.reload();

            },
    },
}
</script>
<style scoped>
.flex{
    display: flex;
    width: 100%;
}
p{
    margin-bottom: 0px;
    height: auto;
    text-align: left;
    width: 100%;
    line-height: 20px;
}
h8{
    margin-bottom: 0rem;
}
.input-card{
  
    width: 100%;
    border-radius: 10px;
    height: 30px;
    font-size: 14px;
    margin-top: 10px;
}
.size{
    font-size: 10px;
    transition-duration: 0.4s;
     background-color: white;
  color: rgb(245, 6, 6);
  border: 2px solid #e41111;
  padding: 0px 10px;
  width: auto;
}
.size:hover {
  background-color: #e95252; /* Green */
  color: white;
}
.btn {
height: 70%;
margin-right :10px;
border-radius: 10px;
padding-bottom: 0px;
padding-top: 0px;
padding-left: 5px;
padding-right: 5px;

}
  .boucleComment>* {
        flex: 1 1 160px;
    }

.boucle{
    color: rgb(66, 66, 66);
    font-size: 15px;
    height: auto;
    margin-bottom:5px;
}
</style>