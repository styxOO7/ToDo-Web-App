import React from 'react'
import firebase from '../utils/firebase';

export default function TodoHistory({ todo }) {
    console.log(todo);

    const deleteTodo = () => {
        const todoRef = firebase.database().ref('todoDB').child(todo.id);
        todoRef.remove();
    }

    return (
        <>

            {todo.complete ? <div className="container my-4">
                <div>
                    <h4>{todo.title}</h4>
                    <p>{todo.desc}</p>
                    <button type="button" className="btn btn-info mx-2" onClick={deleteTodo}>Remove</button>
                </div>
                <hr />
            </div> : ""}

        </>
    )
}
