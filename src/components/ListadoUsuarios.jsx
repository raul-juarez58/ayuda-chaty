import Usuario from "./Usuario";

  function ListadoUsuarios({
  usuarios,
  editandoId,
  nombreEditado,
  setNombreEditado,
  setEditandoId,
  guardarEdicion,
  eliminarUsuario,
  toggleCompletado
}) {
  return (
    <ul>
      {usuarios.map((user) => (
        <Usuario
          key={user.id}
          user={user}
          editandoId={editandoId}
          nombreEditado={nombreEditado}
          setNombreEditado={setNombreEditado}
          setEditandoId={setEditandoId}
          guardarEdicion={guardarEdicion}
          eliminarUsuario={eliminarUsuario}
          toggleCompletado={toggleCompletado}
          />
      ))}
    </ul>
  );
}

export default ListadoUsuarios;