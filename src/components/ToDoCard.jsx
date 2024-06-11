import React from 'react'

export default function ToDoCard(props) {
  const {children,deleteTodoList,index,handleEdit} = props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
      <button onClick={()=>{handleEdit(index)}}>
      <i className="fa-regular fa-pen-to-square"></i>
      </button>
      <button onClick={() => {deleteTodoList(index)}}>
      <i className="fa-regular fa-trash-can"></i>
      </button>
      </div>
    </li>
  )
}
