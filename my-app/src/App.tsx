import React, { useState } from 'react';
import './App.css';
import InputField from './components/input/InputField';
import { Todo } from './components/Modals';
import TodoList from './components/todolist/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

const App = () => {
const [todo, setTodo] = useState<string>("")
const [todos, setTodos] = useState<Todo[]>([])
const [completed, setCompleted] = useState<Todo[]>([])

const HandleAdd = (e:React.FormEvent) => {
  e.preventDefault()
  if(todo){
    setTodos([...todos, {id:Date.now(),todo: todo, isDone: false}])
    setTodo('')
  }
}
const onDragEnd = ( result : DropResult) =>{
  const {source,  destination} = result
  console.log(result);
  if(!destination) return ;
  if(destination.droppableId === source.droppableId && destination.index === source.index ) return;
  let add,
  active=todos,
  complete=completed;

if(source.droppableId === 'TodosList'){
  add=active[source.index]
  active.splice(source.index, 1)
}else{
  add=complete[source.index]
  complete.splice(source.index, 1)
}

if(destination.droppableId === 'TodosList'){
  active.splice(destination.index, 0, add)
}else{
  complete.splice(destination.index, 0, add)
}

setCompleted(complete)
setTodos(active)

}

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
      <span className='heading'>TaskIfy</span>
      <InputField todo={todo} setTodo={setTodo} HandleAdd={HandleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} completed={completed} setCompleted={setCompleted} />
    </div>
    </DragDropContext>
    
  );
}

export default App;
