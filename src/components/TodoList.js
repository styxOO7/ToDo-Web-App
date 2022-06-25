import React, { useState, useEffect } from 'react'
import Todo from './Todo';
import TodoHistory from './TodoHistory';
import firebase from '../utils/firebase';

export default function TodoList() {

    const [todoList, setTodoList] = useState();

    const [todoLen, setTodoLen] = useState(0);

    useEffect(() => {
        const todoRef = firebase.database().ref('todoDB');
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];

            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
            }

            // console.log(todoList.length);

            setTodoList(todoList);

            setTodoLen(todoList.length);
            // console.log(todoList);
        });
    }, []);

    return (
        <>
            <div className="container">

                <div className="container my-5">
                    <h1 className="text-center" style={{ color: "white" , textAlign:"center"}} >Todos List</h1>
                </div>


                {/* pending tasks */}
                <div className="accordion" id="accordionExample" style={{ textAlign: "center" }}>
                    <div className="accordion-item" style={{ backgroundColor: "rgb(39 37 35)", color: "white" }}>
                        <h2 className="accordion-header" id="headingOne">
                            <button style={{ backgroundColor: "#2e2e34", color: "white" }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" >
                                Pending Tasks
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">

                                {todoLen
                                    ? todoList.map((todo, index) => <Todo todo={todo} key={index} />) : <p style={{ color: "white" }}>No Pending Tasks</p>}
                            </div>
                        </div>
                    </div>


                    {/* completed tasks */}
                    <div className="accordion-item" style={{ backgroundColor: "rgb(39 37 35)", color: "white" }}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button style={{ backgroundColor: "#2e2e34", color: "white" }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Completed Tasks
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {todoList
                                    ? todoList.map((todo, index) => <TodoHistory todo={todo} key={index} />) : ''}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
