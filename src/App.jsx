import Header from "./components/Header";
import "./App.css";
import TaskForm from "./components/TaskForm";
import { useState, useEffect} from "react";
import ShowTask from "./components/ShowTask";

function App() {
  
  const [task, setTask] = useState([]);
 
  // verificamos si existen tareas en el localStorage, si existe la agregamos al estado
  // si no existe no hacemos nada

  useEffect(()=>{
    let data = localStorage.getItem('task')
     
    if(data){
      setTask(JSON.parse(data))
    }
    
  }, [])

  // si hay un cambio en el estado ,guardamos ese cambio al localStorage
  useEffect(()=> {
    localStorage.setItem('task', JSON.stringify(task) )
  }, [task])


// si  el estado no tiene ningun valor le asignamos por defecto true
// si el estado  ya tiene un valor obtenemos el que esta en localStorage

let configShowCompleted = JSON.parse(localStorage.getItem('showCompleted')) ?? true


  const [showCompleted, setShowCompleted] = useState(configShowCompleted);
  
  // si hay un cambio en el estado ,guardamos ese cambio al localStorage
  useEffect(()=> {
    localStorage.setItem('showCompleted', showCompleted.toString() )
  }, [showCompleted])

  

  return (

    <div className="container">
      <Header setShowCompleted={setShowCompleted} showCompleted={showCompleted}/>
      <TaskForm task={task} setTask={setTask} />
      <ShowTask task={task} setTask={setTask} showCompleted={showCompleted} />
    </div>
  );
}

export default App;
