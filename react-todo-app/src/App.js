/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import './App.css';
import Form from "./components/Form";
// eslint-disable-next-line no-unused-vars
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo]= useState(null);
  // const [toggleSubmit]

  useEffect(() => {
    getLocalfromTodos(); 
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos])

  const saveLocalTodos = () => {
    // if(localStorage.getItem('todos') === null){
    //   localStorage.setItem('todos', JSON.stringify([]));

    // } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    // }
  }; 

  const getLocalfromTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));

    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      // console.log(todos)
      setTodos(todoLocal);
    }
  }
  return (
    <div className ="App">
      <header>
      </header>
      <Form 
        todos={todos} 
        setTodos = {setTodos} 
        inputText = {inputText}
        setInputText={setInputText}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        // findTodo={findTodo}
        />
      <TodoList 
        setTodos={setTodos} 
        todos={todos} 
        setEditTodo={setEditTodo}
       
        />
      
    </div>
  );
}

export default App;