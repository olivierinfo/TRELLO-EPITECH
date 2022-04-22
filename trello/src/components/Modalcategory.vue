<template>
<div class="modal-backdrop">
    <div class="modal">
        <span class="element-card" >
           <div class="div">
               <div class="left">
            <button  type="button" class="close btn btn-default" data-dismiss="modal" @click="closeCategory"><h7>X</h7></button>
                </div>
            <h4>
                {{categoryName}}
            </h4>
                
             <button  type="button" class="delete close btn btn-default" data-dismiss="modal" @click="deleteCategory(categoryId)"><h10>Delete {{categoryName}}</h10></button>
             </div>
        </span>     
    </div>
</div>
</template>

<script>

export default {
   props: ["categoryId","categoryName"],
   methods:{
       closeCategory(){
            console.log("close category")
            this.$emit("closeCategory")
        },
        deleteCategory(id){
            console.log("delete category")
            const url = "https://twp.oxy-development.fr/wp-json/wp/v2/categories/"+id+"?force=true";
                fetch(url, {
                    headers: {
                    'Authorization': 'Basic ZXBpdGVjaDpFcGl0ZWNoMTM=',
                    },
                    method: "DELETE",
                }),
                window.alert("the article has been deleted, please click OK to reload the webpage ");
                window.location.reload();
        }
   }
}

</script>

<style scoped>

.div{
    border-radius: 10px;
        padding: 10px;
        width: 100%;
        /* display: flex; */

}

.delete{
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-top: 10px;
    max-height: 30px;
}
.left{

  width: 29px;
}
h4{
    text-align: center;
    background: rgb(88, 83, 83);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
}
h7{
    margin-top: 0,5rem;
    margin-bottom: 0rem;
    font-weight: 500;
    line-height: 1.2;
}
.close{
    transition-duration: 0.4s;
    background-color: white;
    color: rgb(245, 6, 6);
    border: 2px solid #e41111;
    border-radius: 10px;
    padding: 0px 7px;
   }

.close:hover {
  background-color: #e95252; /* Green */
  color: white;
}
.element-card{
    background: linear-gradient(rgb(195, 195, 195), rgb(124, 133, 138));
    margin-bottom: 0px;
    display: flex;
    border-radius: 10px;
}

.boucleComment {
  text-align: center;
  color: grey;
  font-size: 20px;

}
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.modal {
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    max-width: 800px;
    position: relative;
    top: 50px;
    /* z-index: 1; */
    border-radius: 10px;
    background: rgb(207, 203, 203);
    padding: 10px;
    min-width: 250px;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
}

.modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
}

.btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease;
}
</style>