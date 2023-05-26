import { FaEyeSlash, FaEye } from "react-icons/fa";

function Header({ setShowCompleted, showCompleted }) {

  const toggleCompleted = ()=>{
      setShowCompleted(!showCompleted)
  }

  return (
    
    <header className="header">
      <h1 className="header__title"> Lista de Tareas</h1>
      {showCompleted ? (
        <button
          className="header__btn"
          onClick={() => toggleCompleted()}
        >
          No mostrar completadas
          <FaEyeSlash />
        </button>
      ) : (
        <button
          className="header__btn"
          onClick={() => toggleCompleted()}
        >
          Mostrar completadas
          <FaEye/>
        </button>
      )}
    </header>
  );
}

export default Header;
