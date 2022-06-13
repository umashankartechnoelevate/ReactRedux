
let initialData={
  list:[]
}
let reducer=(state=initialData, action)=>{
    switch (action.type){
      case "ADD_TODO":

      // const{id,data}=action.payload
        return {
          ...state,
          list:[
                ...state.list,
            {
              id:action.payload.id,
              data:action.payload.data
            }
          ]
      }
        case "DELETE_TODO":
  
        let newList=state.list.filter((val,id)=>id!==action.id)
        
          return {
            ...state,
           list:newList
        }
      default:return state;
    }
  }

export default reducer;