import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoApp() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem("tareas");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  const [nuevaTarea, setNuevaTarea] = useState("");
  const [filtro, setFiltro] = useState("todas");
    const tareasFiltradas = tareas.filter((t) => {
      if (filtro === "pendientes") return !t.completada;
      if (filtro === "completadas") return t.completada;
      return true;
    });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;

    const tarea = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false
    };

    setTareas([...tareas, tarea]);
    setNuevaTarea("");
  };

  const eliminarTarea = (id) => {
    const filtradas = tareas.filter((t) => t.id !== id);
    setTareas(filtradas);
  };

  const toggleTarea = (id) => {
    const actualizadas = tareas.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );

    setTareas(actualizadas);
  };

  return (
    <>
    <p>
        Total: {tareas.length} |
        Completadas: {tareas.filter(t => t.completada).length}
    </p>
      <h2>Lista de Tareas 📝</h2>

      <div>
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
        <button onClick={() => setFiltro("completadas")}>Completadas</button>
      </div>

      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea..."
      />

      <button onClick={agregarTarea}>Agregar</button>

      <ul>
        {tareasFiltradas.map((t) => (
          <TodoItem
            key={t.id}
            tarea={t}
            toggleTarea={toggleTarea}
            eliminarTarea={eliminarTarea}
            />
        ))}
      </ul>
    </>
  );
}

export default TodoApp;