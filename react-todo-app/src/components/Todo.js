/* eslint-disable no-self-compare */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

function Todo ({text,todo, todos, setTodos, setEditTodo}) {

    //Event
    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id))  
    };

    const completeHandler = () => {
        setTodos(todos.map((element) => {
            if(element.id === todo.id){
                return {
                    ...element, 
                    completed: !element.completed,
                };
            }
                return element; 
        })
        
        );
    };

    const editHandler = () => {
        const findTodo = todos.find(todo => todo.id === id) 
        setEditTodo(findTodo);
    };

  

    // const editButton = document.createElement('button')
    // editButton.classList.add('edit')
    // editButton.innerHTML = '<i class="editTodo" aria-hidden="true">Edit</i>'
    // // editButton.onclick = function(){
    // //     editTodo(liTag)
    // // }

    // const editHandler = () => {
    //     setTodos(todos.map((element) => {
    //         if(element.id === todo.id){
    //             return {
    //                 e.firstChild.nodeValue = editHandler
    //             };
    //         }
    //             return element; 
    //     })
        
    //     );
    // }; 

    //DO NOT FORGET TO onCick as C capital!!!!!!
    return(
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className ="complete-btn">Done</button>
            <button onClick={deleteHandler} className="removeTodo btn btn-danger">Remove</button>  
            <button className="edit" onClick={() =>editHandler(todo.id)}>Edit</button>  
        </div>
    )

}
export default Todo; 