import { createContext, useState, useEffect } from "react";

const UsuarioContext = createContext();

export function UsuarioProvider({ children}) {

    const [usuarios, setUsuarios] = useState(() => {
  const guardados = localStorage.getItem("usuarios");
  return guardados ? JSON.parse(guardados) : [];
});

const [nuevoUsuario,setNuevoUsuario] = useState("");

useEffect(() => {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}, [usuarios]);

const eliminarUsuario = (id) => {
  const usuariosFiltrados = usuarios.filter(
    (user) => user.id !== id
  );

  setUsuarios(usuariosFiltrados);
};


const agregarUsuario = () => {
  if (nuevoUsuario.trim() === "") return;

  const nuevo = {
    id: Date.now(),
    name: nuevoUsuario,
    completed: false
  };


  setUsuarios([...usuarios, nuevo]);
  setNuevoUsuario("");
};

const guardarEdicion = (id, nombreEditado) => {
  if (nombreEditado.trim() === "") return;

  const usuariosActualizados = usuarios.map((user) =>
    user.id === id
      ? { ...user, name: nombreEditado }
      : user
  );

  setUsuarios(usuariosActualizados);
};

const toggleCompletado = (id) => {
  const actualizados = usuarios.map((user) =>
    user.id === id
      ? { ...user, completed: !user.completed }
      : user
  );

  setUsuarios(actualizados);
};

    return (
        <UsuarioContext.Provider
         value={{
             usuarios,
             nuevoUsuario,
             setNuevoUsuario,
              eliminarUsuario,
               agregarUsuario,
               guardarEdicion,
               toggleCompletado
               }}
               >
            { children}
        </UsuarioContext.Provider>
    );
}

export  default UsuarioContext;