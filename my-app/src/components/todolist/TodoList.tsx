import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Todo } from '../Modals'
import SingleTodo from '../singleTodo/SingleTodo'
import  '../style.css' 

interface props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completed : Todo[]
    setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>
}
    
const TodoList = ({todos,setTodos,completed, setCompleted}:props) => {
  return (
    <div className="container">
        <Droppable droppableId='TodosList'>
            { (provided) => (
                    <div className='todos' ref={provided.innerRef} {...provided.droppableProps}>
                    <span className="todos-heading">Active Task</span>
                    {
                        todos.map((todo, index) => {
                           return <SingleTodo 
                           index={index}
                           todo={todo}
                           key={todo.id}
                           todos={todos}
                           setTodos={setTodos} />
                        })
                    }
                    {provided.placeholder }
                </div>
            )
            }
       
        </Droppable>
        <Droppable droppableId='TodosRemove'>
     {
         (provided) => (
<div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
    <span className="todos-heading">Completed Task</span>
        {
            completed.map((todo, index) => {
               return <SingleTodo 
               index={index}
               todo={todo}
               key={todo.id}
               todos={completed}
               setTodos={setCompleted} />
            })
        }  
        {provided.placeholder }
    </div>
         )
     }
    
        </Droppable>
    </div>
  )
}

export default TodoList