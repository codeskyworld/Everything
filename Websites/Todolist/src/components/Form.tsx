import React from 'react'
import { useState } from 'react'
import  '../CSS/Form.css'

interface item{
  id:number,
  task:string
  completed: boolean,
}
const Form = () => {
  const [todos, setTodos] = useState<item[]>([
  ])

  const handleToggle = (id:number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    )
  }

  const [input, setInput] = useState<string>("")

  const handleClick = () => {
    const newTodo: item = {id: Date.now(), task: input, completed: false}
    setTodos([...todos, newTodo])
  }

  return (
    <div className="main-container">
      <h1 className="head">To-Do-List</h1>
      <ul>
        {todos.map((todo) => (
          <li className="task"key={todo.id} onClick={() => handleToggle(todo.id)} style={{visibility: todo.completed ? "hidden" : "visible"}}>{todo.task}</li>))}
      </ul>
      <input className="Task-adder" type="text" placeholder="Enter a task" onChange={(e) => setInput(e.currentTarget.value)}/>
      <button className="Task-button" onClick={handleClick}>Add Task</button>
    </div>
  )

}

export default Form