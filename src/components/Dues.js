import React, { useState, useEffect } from 'react'
import firebase from '../utils/firebase';

export default function Dues() {

    const [todoList, setTodoList] = useState();

    const [dues, setDues] = useState(0);

    useEffect(() => {
        const todoRef = firebase.database().ref('todoDB');
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];

            // make a varaible and store !comp in it and then setDues

            let x = 0;
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
                
                if(!todos[id].complete){
                    x = x + 1;
                console.log(x);
                    setDues(x);
                }

            }
            setTodoList(todoList);
            // console.log(todoList);
        });
    }, []);

    return (
        <button type="button" className="btn btn-warning position-relative">
            Pendings
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {dues}
                <span className="visually-hidden">unread messages</span>
            </span>
        </button>
    )
}
