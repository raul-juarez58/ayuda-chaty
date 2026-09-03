import Usuario from "./Usuario";
import { useContext } from "react";
import UsuarioContext from "../context/UsuarioContext";

  function ListadoUsuarios(){
 

  const {usuarios} = useContext(UsuarioContext);

  return (
    <ul>
      {usuarios.map((user) => (
        <Usuario
          key={user.id}
          user={user}
          />
      ))}
    </ul>
  );
}

export default ListadoUsuarios;