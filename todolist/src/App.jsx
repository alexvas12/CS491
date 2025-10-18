import { useState } from 'react'

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
      <div className="mt-4 d-flex align-items-center flex-column border border-black border-2 p-4 w-50 mx-auto shadow-lg rounded bg-primary">
        <h1>The Important To-Do List</h1>
        <div>
          <input 
          className = "shadow rounded-2 p-1 border-2 border-black"
            type="text"
            value={input}
            placeholder="Please Add a new Task"
            onChange={(e) => setInput(e.target.value)}
          >
          </input>
          <button
            className="m-2 btn btn-success text-black fw-bold shadow-lg rounded-4"
            onClick={add_task}>
            Add Task
          </button>
        </div>
        
        <ol>
          {toDos.map((toDo, id) => (
            <li key={id}>
              <div className="d-flex justify-content-left text-black fw-bold m-2">{toDo}
              <button className=" mx-2 button bg-danger text-white rounded border-2 align-items-center d-flex shadow-lg rounded-4"
              onClick={() => delete_task(id)}>
              Delete
              </button></div>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
export default App