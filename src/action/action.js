export let addToDo = (data) => {
  return {
    type: "ADD_TODO",
    payload:{
      id:new Date().getTime().toString(),
      data:data
    }
  };
};

export let deleteToDo=(id)=>{
  return {
    type:"DELETE_TODO",
    id:id
  }
}
