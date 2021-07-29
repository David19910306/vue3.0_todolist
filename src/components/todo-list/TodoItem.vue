<template>
  <div>
    <input type="checkbox" :checked="item.status === FINISHED" @click="setStatus(item.id)" />
    <span :class="item.status === FINISHED? 'line-through': ''">{{item.content}}</span>
    <button @click="removeTodo(item.id)">删除</button>
    <button v-if="item.status !== FINISHED" @click="setDoing(item.id)" 
      :class="item.status === DOING? 'doing': 'willdo'">{{item.status === DOING? '正在做...': '马上做'}}</button>
  </div>
</template>
<script lang="ts">
import { ITodo, TODO_STATUS } from "@/type"
import { defineComponent, PropType } from "@vue/runtime-core"

interface IStatueState{
  FINISHED:TODO_STATUS;
  DOING:TODO_STATUS;
  WILLDO:TODO_STATUS;
}
export default defineComponent({
  name: 'TodoItem',
  props:{
    item:{
      type:Object as PropType<ITodo>//vue3中的类型断言
    }
  },
  setup(props, {emit}){
    const statusState:IStatueState = {FINISHED:TODO_STATUS.FINISHED, DOING:TODO_STATUS.DOING, WILLDO:TODO_STATUS.WILLDO}

    const setStatus = (id:number) => {
      emit('setStatus', id)
    }

    const removeTodo = (id:number) => {
      emit('removeTodo', id)
    }

    const setDoing = (id:number) => {
      emit('setDoing', id)
    }

    return {
      ...statusState, setStatus, removeTodo, setDoing
    }
  }
})
</script>
<style scoped>
  .line-through{
    text-decoration: line-through;
  }

  .doing{
    background: #dcdcdc;
    color: #ccc;
  }

  .willdo{
    background: orange;
    color: white;
  }
</style>