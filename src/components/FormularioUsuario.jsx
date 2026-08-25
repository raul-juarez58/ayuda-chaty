function FormularioUsuario( {
    nuevoUsuario,
    setNuevoUsuario,
    agregarUsuario
}) {
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