import React, { useState } from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {

  // const [alert, setAlert] = useState(null);

  // for object. a function made so that whenever the function calls it sets the alert accordingly

  // const showAlert = (message, type)=>{
  //     setAlert({
  //       msg: message,
  //       type: type
  //     })
  // }

  return (
    <div style={{ backgroundColor: "#212121", minHeight:"100vh", minWidth:"100vw"}}>
      <Navbar title="To-Do" />
      <Form />
      <TodoList/>
      <Footer/>
    </div>
  );
}

export default App;
