import ListadoUsuarios from "./components/ListadoUsuarios";
import Saludo from "./components/Saludo";
import TodoApp from "./components/TodoApp";
import FormularioUsuario from "./components/FormularioUsuario";

function App() {

  return (
    <>
      <h1>Proyecto ayuda-chaty 😎</h1>
      <Saludo />
      <TodoApp />

      <h3>Agregar usuario:</h3>

      <FormularioUsuario />

      <h2>Usuarios:</h2>

      <ListadoUsuarios />
        
    </>  
  );
};

export default App;  
  

