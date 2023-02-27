import React from 'react'
export const TaskTodo = ({todo, onDelete}) =>{
    let p={
        margin: "5px"
    };
    let cardstyle={
        width: "18rem",
        display: "inline-block",
        margin: "10px"
    }
    return(
        <div className='card' style={cardstyle}>
            <div className='card-body'>
                <h5 className='pt-2'>{todo.title}</h5>
                <p style={p}>{todo.desc}</p>
                <button className="btn btn-danger btn-sm" onClick={()=>onDelete(todo)}>Delete</button>
            </div>
        </div>
    )
}