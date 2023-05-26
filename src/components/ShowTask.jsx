import Task from "./Task";

function ShowTask({ task, setTask, showCompleted }) {
  
  const toggleCompleted = (id) => {
    setTask(
      task.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const updateTask = (id, newTitle) => {
    setTask(task.map((t) => (t.id === id ? { ...t, title: newTitle } : t)));
  };

  const deleteTask = (id) => {
    setTask(task.filter((t) => t.id !== id));
  };

  return (
    <ul className="show-task">

      { task.length > 0 ? task.map((t) => {
           
          if (showCompleted){
              
              return  <Task
                          key={t.id}
                          task={t}
                          toggleCompleted={toggleCompleted}
                          updateTask={updateTask}
                          deleteTask={deleteTask}
                       />
          }else if(!t.completed){
                return  <Task
                            key={t.id}
                            task={t}
                            toggleCompleted={toggleCompleted}
                            updateTask={updateTask}
                            deleteTask={deleteTask}
                          />
          }
          
        })
       : (
        <div className="show-task__message">
          {" "}
          ~ No hay tareas Disponibles ~{" "}
        </div>
      )}
    </ul>
  );
}

export default ShowTask;
