import { useState } from "react";
import {  FaTimes, FaEdit} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

function Task({ task, toggleCompleted , updateTask, deleteTask}) {

  const [editTask, setEditTask] = useState(false);
  const [inputTask, setInputTask] = useState(task.title);

  const handleSubmit = (e) => {
    e.preventDefault();
      updateTask(task.id, inputTask)
    setEditTask(false);
  };

  return (
    <li className="show-task__task">
      
      <FontAwesomeIcon
        icon={task.completed ? faCheckSquare : faSquare}
        className="show-task__icon show-task__icon-check"
        onClick={() => toggleCompleted(task.id)}

      />
      <div className="show-task__text">
        {editTask ? (
          <form className="form-edit-task" onSubmit={handleSubmit} >
            <input
              type="text"
              className="form-edit-task__input"
              value={inputTask}
              onChange={(e) => setInputTask(e.target.value)}
            />
            <button className="form-edit-task__btn">Actualizar</button>
          </form>
        ) : (
          task.title
        )}
      </div>

      <div className="show-task__container-btn">
        <FaEdit 
          className="show-task__icon show-task__icon-action" 
          onClick={()=> setEditTask(!editTask)}
        />
        <FaTimes className="show-task__icon show-task__icon-action"
         onClick={() => deleteTask(task.id)} 
        />
      </div>
    </li>
  );
}

export default Task;
