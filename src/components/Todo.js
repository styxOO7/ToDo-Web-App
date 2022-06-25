import React from 'react'
import firebase from '../utils/firebase';

export default function Todo({ todo }) {
    // console.log(todo);

    const deleteTodo = () => {
        const todoRef = firebase.database().ref('todoDB').child(todo.id);
        todoRef.remove();
    }

    const done = () => {
        const todoRef = firebase.database().ref('todoDB').child(todo.id);
        todoRef.update({
            complete: !todo.complete,
        });
    }

    return (
        <>
            {!todo.complete ? <div className="container my-4">
                <div>
                    <h4>{todo.title}</h4>
                    <p>{todo.desc}</p>

                    <button type="button" className="btn btn-success" onClick={done}>Done</button>
                    <button type="button" className="btn btn-danger mx-2" onClick={deleteTodo}>Delete</button>
                </div>
                <hr />
            </div> : ""}

        </>
    )
}
