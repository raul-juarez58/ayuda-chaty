import { useContext, useState } from "react";
import UsuarioContext from "../context/UsuarioContext";

    function Usuario({
    user
}) {
    const [nombreEditado, setNombreEditado] = useState("");
    const [editando, setEditando] = useState(false);

    const { eliminarUsuario,
        guardarEdicion,
        toggleCompletado
     } = useContext(UsuarioContext);

    return (
        <li>
            {editando ? (
                <>
                <input
                  value={nombreEditado || ""}
                  onChange={(e) => setNombreEditado(e.target.value)}
                 />

                 <button onClick={() => {
                    guardarEdicion(user.id, nombreEditado);
                    setEditando(false);

                 }}
                    >
                    Guardar
                  </button> 

                 <button onClick={() => setEditando(false)}>
                    Cancelar
                 </button>     
                </>
            ) : (
                <>
                   <input
                      type="checkbox"
                      checked={!!user.completed}
                      onChange={() => toggleCompletado(user.id)}
                    />
                    <span className={user.completed ? "completed" : ""}>
                        {user.name}
                    </span>     

                    <button
                       onClick={() => {
                        setEditando(true);
                        setNombreEditado(user.name);
                       }} 
                       >
                        Editar
                     </button>  

                     <button onClick={() => eliminarUsuario(user.id)}>
                        Eliminar
                     </button>
                </>
            )
                
            }
        </li>
    );

}

export default Usuario;