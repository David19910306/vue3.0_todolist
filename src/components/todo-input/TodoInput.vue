<template>
  <div>
    <input type="text" v-model="inputValue" @keyup.enter="setTodoList"/>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core"
import {IUseTodo, useTodo} from '@/hook'
export default defineComponent({
  name: 'TodoInput',
  setup(){
    const inputValue = ref<string>('')
    const {setTodo}:IUseTodo = useTodo()

    const setTodoList = function(e: KeyboardEvent):void{
      if(inputValue.value.trim().length) {
        //设置数据
        setTodo(inputValue.value)
        inputValue.value = ''
      }
    }

    return {inputValue, setTodoList}
  }
})
</script>
<style lang="">
  
</style>