

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    const { description } = todo;


    return (
      <li className="list-group-item d-flex justify-content-between" onClick={() => onToggleTodo( todo )} style={{ cursor: 'pointer' }}>
        <span  
          className={
            `align-self-center ${(todo.done) 
              ? 'text-decoration-line-through' : ''}`
          }
          aria-label="span"
        >
          { description }
        </span>
      <button 
        className="btn btn-danger" 
        onClick={ () => onDeleteTodo(todo) }
      >
        Borrar
      </button>
    </li>
    )
}
