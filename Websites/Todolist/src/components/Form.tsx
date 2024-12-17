import React from 'react'
import { useState } from 'react'

const Form = () => {

  const [tasks, setTasks] = useState([])
  const [newTask , setNewTask] = useState("")

  function HandleInputChange(event) {
    setNewTask(event.target.value)
  }

  function addTask(){

  }

  function deleteTask(index){

  }

  function moveTaskDown(index){

  }



  
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input type="text" onChange={HandleInputChange} value={newTask} />
        <button className="add-task" onClick={addTask}>Add Task</button>
      </div>
      <ol>
        {tasks.map((task, index) => 
          <li key={index}><span className="text">{task}</span><button className="delete" onClick={deleteTask}></button></li>
        )}
      </ol>
    </div>
  )

}

export default Form