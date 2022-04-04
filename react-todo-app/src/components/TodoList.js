/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'; 
import Todo from './Todo';

function TodoList({todos, setTodos}){
    // console.log(todo);
    return(
        <div className="container app-background d-flex justify-content-center">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        todo={todo} 
                        key= {todo.id} 
                        text={todo.text}
                        // setEditTodo={setEditTodo}
                        />
                ))}
            </ul>
             
        </div>
        
    )
  
};

export default TodoList;