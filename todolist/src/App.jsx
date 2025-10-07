import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [toDos, setToDos] = useState([])
  const [input, setInput] = useState("")

  //adding a task
  let add_task = () =>{
    if(input.length == 0) return;
    setToDos([...toDos,input]);
    setInput("");
  }

  //deleting a task
  let delete_task = (id) => {
    let altered_list = [...toDos];
    altered_list.splice(id,1);
    setToDos(altered_list);
  }

  return (
    <>
      <div className="to-do">
        <h1>The Important To-Do List</h1>
        
        <div>
          <input 
            type="text"
            value={input}
            placeholder="Please Add a new Task"
            onChange={(e) => setInput(e.target.value)}
          >
          </input>
          <button 
            className="add_button"
            onClick={add_task}>
            Add Task
          </button>
        </div>
        
        <ol>
          {toDos.map((toDo, id) => (
            <li key={id}>
              {toDo}
              <button 
              className="delete_button"
              onClick={() => delete_task(id)}>
              Delete
              </button>
            </li>
          ))}
          
        </ol>
      </div>
    </>
  )
}

export default App