import { useState,useEffect } from "react";
import Saludo from "./components/Saludo";
import ListadoUsuarios from "./components/ListadoUsuarios";
import TodoApp from "./components/TodoApp";
import FormularioUsuario from "./components/FormularioUsuario";


function App() {
  const [usuarios, setUsuarios] = useState(() => {
    const guardados = localStorage.getItem("usuarios");
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  const [nuevoUsuario, setNuevoUsuario] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [nombreEditado, setNombreEditado] = useState("");

  const agregarUsuario = () =>{
    if (nuevoUsuario.trim() === "") return;

    const nuevo = {
      id: Date.now(),
      name: nuevoUsuario,
      completed: false
  };

  setUsuarios([...usuarios, nuevo]);
  setNuevoUsuario("");
  };

  const guardarEdicion = (id) => {
    if (nombreEditado.trim() === "") return;

    const usuariosActualizados = usuarios.map((user) =>
      user.id === id
        ? { ...user, name: nombreEditado }
         : user     
      );
      
      setUsuarios(usuariosActualizados);
      setEditandoId(null);
      setNombreEditado("");

  };


    

    const eliminarUsuario = (id) => {
      const usuariosFiltrados = usuarios.filter(
        (user) => user.id !== id
      );
      setUsuarios(usuariosFiltrados);
    };

      const toggleCompletado = (id) => {
      const actualizados = usuarios.map((user) =>
      user.id === id
    ? { ...user, completed: !user.completed}
  : user
   );
    setUsuarios(actualizados);
    };

    const propsUsuarios = {
      usuarios,
      editandoId,
      nombreEditado,
      setNombreEditado,
      setEditandoId,
      guardarEdicion,
      eliminarUsuario,
      toggleCompletado
    };

  return (
    <>
      <h1>Proyecto ayuda-chaty 😎</h1>
      <Saludo />
      <TodoApp />


      <h3>Agregar usuario:</h3>

      <FormularioUsuario
        nuevoUsuario={nuevoUsuario}
        setNuevoUsuario={setNuevoUsuario}
        agregarUsuario={agregarUsuario}
      />  

      <h2>Usuarios:</h2>

      <ListadoUsuarios {...propsUsuarios} />
        
    </>  
  );
};

export default App;  
  

