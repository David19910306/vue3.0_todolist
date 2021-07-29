import { ITodo, IState, TODO_STATUS } from "@/type";
import { REMOVE_TODO, SET_DOING_STATUS, SET_STATUS, SET_TODO, SET_TODO_LIST } from "./actionsType";

export default {
  [SET_TODO](state:IState, todo:ITodo):void{
    // state.list.unshift(todo)
    state.list = [todo, ...state.list]
    console.log(state.list)
  },

  [SET_TODO_LIST](state: IState, todoList:ITodo[]):void{
    state.list = todoList
  },

  [REMOVE_TODO](state:IState, id:number):void{
    //删除的一种方式
    // const index = state.list.findIndex(todo => todo.id === id)
    // state.list.splice(index, 1)

    //删除的另一种方式
    state.list = state.list.filter((todo:ITodo) => todo.id !== id)
  },

  [SET_STATUS](state:IState, id:number){
    state.list = state.list.map((todo:ITodo) => {
      if(todo.id === id){
        switch(todo.status){
          case TODO_STATUS.FINISHED:
            todo.status = TODO_STATUS.WILLDO
          break
          case TODO_STATUS.WILLDO:
          case TODO_STATUS.DOING:
            todo.status = TODO_STATUS.FINISHED
          break
          default: break
        }
      }
      return todo
    })
  },

  [SET_DOING_STATUS](state:IState, id:number){
    state.list = state.list.map((todo:ITodo) => {
      if(todo.id !== id){
        if(todo.status === TODO_STATUS.DOING){
          todo.status = TODO_STATUS.WILLDO
        }
      }else{
        todo.status = TODO_STATUS.DOING
      }
        

      return todo
    })
  }
}