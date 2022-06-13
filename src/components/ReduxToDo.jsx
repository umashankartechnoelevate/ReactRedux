import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addToDo,deleteToDo} from '../action/action'
import './todo.css'

function ReduxToDo() {

const [userInput, setuserInput] = useState('')

        let dispatch=useDispatch()
        
        let list=useSelector((state)=>state.reducer.list)
        console.log( "in raect redux todo",list);
        
    let addUserValue=(event)=>{
        setuserInput(
            event.target.value
        )
    }

    console.log(userInput);
// console.log(addToDo);
  return (
    <div>
       
      <div className="maindiv bg-secondary mb-5">
            <div className="text-center pt-4 mb-4"><h1>Todo List</h1></div>
                <div className="offset-2 subdiv text-start">
                    <label className="fw-bold">Add Todo</label><br />
                    <input id="input" className="w-75" placeholder="Add new Todo" value={userInput} onChange={(event)=>{addUserValue(event)}}/> <br /><br />
                    <buttun onClick={()=>dispatch(addToDo(userInput),setuserInput(''))} className=" btn btn-sm btn-primary ">Submit</buttun><br /><br />
                    
                {
                    list.map((value,index)=>{
                     return (<div key={index}>
                        <div className="bg-white w-75 newlist" >
                                <p className="mb-1 ms-3 pt-1">{value.data}</p>
                            <div>
                               <span><i className="far fa-check-square"></i></span>
                                <span><i onClick={()=>dispatch(deleteToDo(index))} className="far fa-window-close"></i></span>
                            </div>
                        </div><br/>
                            </div>)
                    })    
                }   
            </div>
        </div>
    </div>
  )
}

export default ReduxToDo