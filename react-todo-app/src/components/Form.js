/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../App.css";

function Form ({setInputText, todos, setTodos,inputText, editTodo, setEditTodo}){

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
        todo.id === id ? {title, id, completed}: todo
        );

    setTodos(newTodo);
    setEditTodo("");
    }
    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);

    }; 
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(!editTodo){
        setTodos([...todos, {text: inputText, completed: false, id: Math.random()*1000}])
        setInputText("");
        } else {
            updateTodo(inputText, editTodo.id, editTodo.completed)
        }
    }; 
    return (
        <form>
            <div className="heading">
                <h1>Add to do list</h1>
                <div id="icon" className="d-flex justify-content-center">
                </div>
            </div>
            <div className="todo-card">
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo" placeholder="Add task..." />
                <button onClick = {submitTodoHandler} className="addTodo btn btn-success">Add</button>
            </div>
         
        </form>

    )
};

export default Form; 
