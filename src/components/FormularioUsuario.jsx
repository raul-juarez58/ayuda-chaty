import UsuarioContext from "../context/UsuarioContext";
import {useContext} from "react";

    function FormularioUsuario() { 
    const {    
    nuevoUsuario,
    setNuevoUsuario,
    agregarUsuario
    } = useContext(UsuarioContext);


   return (
    <>
        <input
           type="text"
           value={nuevoUsuario}
           onChange={(e) => setNuevoUsuario(e.target.value)}
           placeholder="Nombre" 
        />
        <button onClick={agregarUsuario}>
            Agregar
        </button>
    </>
    
    );
}

export default FormularioUsuario;