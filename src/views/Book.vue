<template>
  <div>
      <v-text-field  v-model="book" @keypress="Search" outlined label="Burcar libro " />
    <div v-for="item in list" :key="item._id" >
        <div class="mb-2">
            <card-book :id="item._id" @quitBook="QuitBook"  @takeBook="TakeBook"  :title="item.title" :author="item.author" :pais="item.country"/>
        </div>
    </div>
    <v-row justify="center">
        <v-dialog>
            <card-sign-in/>
        </v-dialog>

    </v-row>
  </div>
</template>
<script>
import store from '../store/index'
import CardBook from "../components/CardBook.vue";
import CardSignIn from '../components/CardSignIn.vue';
export default {
  data: ()=>({
      book: "",
  }),
  components: { CardBook, CardSignIn },
  computed:{
      list(){
          return store.state.books
      }
  },
  methods:{
      Search(){
          store.dispatch('Search', this.book)
      },
      TakeBook(value){
          store.dispatch('TakeBook', value)
      },
      QuitBook(value){
          store.dispatch('QuitBook', value)
      }
  }
};
</script>