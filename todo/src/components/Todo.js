import React, { useState } from 'react'
import { addTodo, deleteTodo, removeTodo  } from '../actions'
import {useDispatch,useSelector} from 'react-redux'
import './todo.css'

const Todo = () => {
    const [inputData , setInputData]=useState('')
    const list=useSelector((state)=>state.todoReducers.list)
    const dispatch=useDispatch()

  return (
    <>
      <div className='main-div'>
        <div >
            <div className='child-div'>
             <figure>
                <figcaption>📝Add Your List Here</figcaption>
             </figure>
             </div><br />
             <div className='addItems'>
              <input type="text"  className='items' placeholder='Add Items...' value={inputData} onChange={(event)=>setInputData(event.target.value)}/>
              <i className='fa fa-plus button' onClick={()=>dispatch(addTodo(inputData),setInputData(''))}></i>              
             </div>
              <br />
             <div className='showItems'>
             {
              list.map((elem)=>{
                return(
                <div className='eachItems' key={elem.id}>
                  <h3 >{elem.data}</h3>
                  <i className='far fa-trash-alt delete' onClick={()=>dispatch(deleteTodo(elem.id),setInputData(''))}></i>

                </div>
              )})
             }                
             </div>

             <div className='remove'>
              <button  className='removeItems'onClick={()=>dispatch(removeTodo())}>Remove All</button>
             </div>

        </div>

        </div>
    </>
  )
}

export default Todo
