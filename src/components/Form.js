import React, { useState } from 'react'
import firebase from '../utils/firebase';

export default function Form(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleDesc = (event) => {
        setDesc(event.target.value);
    }

    const createTodo = () => {
        if (title.length !== 0) {
            const todoRef = firebase.database().ref('todoDB');
            const todo = {
                title,
                desc,
                complete: false,
            };

            todoRef.push(todo);
            setTitle("");
            setDesc("");
            // alert("Submitted");
            // props.showAlert("ToDo added successfully", "success");
        }else{
            alert("Title can't be empty");
            // props.showAlert("Title can't be empty.", "danger");
        }
    }


    return (
        <>
            
            <div className="container my-4">

                <h3><b style={{color:"white"}}>Add a Todo</b></h3>

                <div className="mb-3">
                    <input style={{backgroundColor: "#212121", color:"white"}} type="text" className="form-control" value={title} onChange={handleTitle} id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3" style={{color:"white"}}>
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input style={{backgroundColor: "#212121", color:"white"}} type="text" value={desc} onChange={handleDesc} className="form-control" id="desc1" />
                </div>
                <button onClick={createTodo} className="btn btn-outline-primary">Add Todo</button>
               
            </div>

        </>
    )
}
