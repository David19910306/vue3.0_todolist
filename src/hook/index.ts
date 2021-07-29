import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_STATUS, SET_DOING_STATUS } from "@/store/actionsType"
import { ITodo, TODO_STATUS } from "@/type"
import { watch } from "@vue/runtime-core"
import { Store, useStore } from "vuex"

export interface IUseTodo{
  setTodo:(value:string) => void;
  setTodoList:() => void;
  removeTodo:(id:number) => void;
  setStatus:(id:number) => void;
  setDoing:(id:number) => void;
}

interface IUselocalStorage{
  getLocalStorage:() => ITodo[];
  setLocalStorage:(todos:ITodo[]) => void
}


function useTodo():IUseTodo{

  //vue3中调用dispatch的方法
  const store:Store<any> = useStore()
  //解构存储到storage中的方法
  const {setLocalStorage, getLocalStorage}:IUselocalStorage = useLocalStorage()
  const todoList:ITodo[] = getLocalStorage() 

  //通过watch方法来监听数据的改变，当改变时保存到localStorage中
  watch(() => store.state.list, (todoList) => {
    setLocalStorage(todoList)
  })

  function setTodo(value:string){
    const todo:ITodo = {//组一个对象
      id: new Date().getTime(),
      content: value,
      status: TODO_STATUS.WILLDO
    }

    store.dispatch(SET_TODO, todo)
    
  }

  function setTodoList(){
    store.dispatch(SET_TODO_LIST, todoList)
    console.log(store.state.list)
  }

  function removeTodo(id:number):void{
    // console.log('removeTodo')
    store.dispatch(REMOVE_TODO, id)
  }

  function setStatus(id:number):void{
    // console.log('setStatus')
    store.dispatch(SET_STATUS, id)
  }

  function setDoing(id:number):void{
    // console.log('setDoing')
    store.dispatch(SET_DOING_STATUS, id)
  }

  return {
    setTodo,
    setTodoList,
    removeTodo,
    setStatus,
    setDoing
  }
}

function useLocalStorage():IUselocalStorage{
  function getLocalStorage():ITodo[]{
    return JSON.parse(localStorage.getItem('todolist') || '[]')
  }

  function setLocalStorage(todos:ITodo[]):void{
    localStorage.setItem('todolist', JSON.stringify(todos))
  }

  return {getLocalStorage, setLocalStorage}
}

export {useTodo, useLocalStorage}