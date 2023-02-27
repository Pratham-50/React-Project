import React from 'react'
import {TaskTodo} from './TaskTodo'
export const Todos = (props) =>{
    const contStyle= {
        minHeight: "70vh"
    }
    return(
        <div className='container my-3' style={contStyle}>
            <h3 className='text-center'>Todo List</h3>
            {
                props.todos.length===0? "No Todos to display":
                props.todos.map((todo)=>{
                    return <TaskTodo todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
                })
            }
        </div>
    ) 
}