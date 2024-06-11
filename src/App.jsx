import { useState,useEffect } from 'react'
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList'


function App() {

  const [todos,setTodos] = useState([])
  const [todoValue,setTodoValue] = useState('');

  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  
  function deleteTodoList(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEdit(index){
    const editedValue = todos[index]
    setTodoValue(editedValue)
    deleteTodoList(index) 
  }

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos : newList}))
  }

  useEffect(()=> {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
    
  },[])

  return (
    <>
      <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos = {handleAddTodos}/>
      <ToDoList deleteTodoList={deleteTodoList} todos={todos} handleEdit={handleEdit}/>
    </>
  )
}

export default App
