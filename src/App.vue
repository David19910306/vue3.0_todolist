<template>
  <div class="wrapper">
    <todo-input></todo-input>
    <todo-list :todolist="todolist"></todo-list>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, toRefs } from 'vue';
import { Store, useStore } from 'vuex';
import TodoInput from './components/todo-input/TodoInput.vue';
import TodoList from './components/todo-list/TodoList.vue';
import { IUseTodo, useTodo } from './hook';

export default defineComponent({
  components: { TodoInput, TodoList },
  name: 'App',
  setup(){
    const {setTodoList}:IUseTodo = useTodo()
    const store:Store<any> = useStore()
    onMounted(() => {
      setTodoList()
    })
    
    const todolist = computed(() => {
      return store.state.list
    })

    return {todolist}
  }
});
</script>

<style>

</style>
