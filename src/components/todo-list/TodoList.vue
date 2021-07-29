<template>
  <h1>TodoList</h1>
  <todo-item v-for="todo in todolist" :key="todo.id" :item="todo" @removeTodo="removeTodo"
    @setStatus="setStatus" @setDoing="setDoing"></todo-item>
</template>
<script lang="ts">
import { IUseTodo, useTodo } from '@/hook'
import { ITodo } from '@/type'
import { defineComponent, PropType } from '@vue/runtime-core'
import TodoItem from './TodoItem.vue'
export default defineComponent({
  components: { TodoItem },
  props:{
    todolist:{
      type: Array as PropType<ITodo[]>
    }
  },
  name: 'TodoList',
  setup(){
    const {removeTodo, setStatus, setDoing}:IUseTodo = useTodo()
    return {removeTodo, setStatus, setDoing}
  }
})
</script>
<style lang="">
  
</style>