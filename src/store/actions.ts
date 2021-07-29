import { IState, ITodo } from "@/type";
import { Commit } from "vuex";
import { REMOVE_TODO, SET_DOING_STATUS, SET_STATUS, SET_TODO, SET_TODO_LIST } from "./actionsType";

interface IContext{
  commit: Commit
  state: IState
}
export default {
  [SET_TODO](context:IContext, todo:ITodo):void{
    // console.log(context, todo)
    context.commit(SET_TODO, todo)
  },

  [SET_TODO_LIST](context:IContext, todolist:ITodo[]):void{
    context.commit(SET_TODO_LIST, todolist)
  },

  [REMOVE_TODO](contex:IContext, id:number):void{
    contex.commit(REMOVE_TODO, id)
  },

  [SET_STATUS](context:IContext, id:number){
    context.commit(SET_STATUS, id)
  },

  [SET_DOING_STATUS](context:IContext, id:number){
    context.commit(SET_DOING_STATUS, id)
  }
}