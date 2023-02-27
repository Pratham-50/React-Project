import React, { useState } from 'react'

export const AddTodo = (props) => {
    let fs = {
        width: "50%"
    }
    let btntext = {
        margin: "0px",
        padding: "5px"
    }

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc)
            alert("Title or Description cannot be blank.");
        props.addTodo(title, desc)
    }
    
    return (
        <div className="row d-flex justify-content-center text-center">
            <h3 className='mt-5'>Add Todo</h3>
            <form action="" style={fs} onSubmit={submit}>
                <div className='mb-5'>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label text-dark"><h6 className='mt-3'>Add Title</h6></label>
                    <input className="form-control form-control-sm" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Buy Milk"/>

                    <label htmlFor="exampleFormControlTextarea1" className="form-label text-dark"><h6 className='mt-3'>Add Description</h6></label>
                    <textarea className="form-control form-control-sm" type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="1L Cow Milk"></textarea>
                    
                    <button className='btn btn-info my-2'><h6 style={btntext}>Add To List</h6></button>
                </div>
            </form>
        </div>
    )
}