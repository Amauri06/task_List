import { FaPlusSquare } from "react-icons/fa";
import { useState } from "react";

function TaskForm({ task, setTask }) {
  const [inputTask, setInputTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([
      ...task,
      {
        id: task.length,
        title: inputTask,
        completed: false,
      },
    ]);
    setInputTask('')
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-form__input"
        type="text"
        placeholder="Agregar una nueva tarea"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
      />
      <button className="task-form__btn">
        <FaPlusSquare className="task-form__icon-btn"/>
      </button>
    </form>
  );
}

export default TaskForm;
