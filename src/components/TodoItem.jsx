function TodoItem({ tarea, toggleTarea, eliminarTarea }) {
  return (
    <li>
      <span
        style={{
          textDecoration: tarea.completada ? "line-through" : "none",
          cursor: "pointer"
        }}
        onClick={() => toggleTarea(tarea.id)}
      >
        {tarea.texto}
      </span>

      <button onClick={() => eliminarTarea(tarea.id)}>
        ❌
      </button>
    </li>
  );
}

export default TodoItem;