function ListadoUsuarios({
  usuarios,
  editandoId,
  nombreEditado,
  setNombreEditado,
  setEditandoId,
  guardarEdicion,
  eliminarUsuario
}) {
  return (
    <ul>
      {usuarios.map((user) => (
        <li key={user.id}>
          {editandoId === user.id ? (
            <>
              <input
                value={nombreEditado}
                onChange={(e) => setNombreEditado(e.target.value)}
              />

              <button onClick={() => guardarEdicion(user.id)}>
                Guardar
              </button>

              <button onClick={() => setEditandoId(null)}>
                Cancelar
              </button>
            </>
          ) : (
            <>
              {user.name}

              <button
                onClick={() => {
                  setEditandoId(user.id);
                  setNombreEditado(user.name);
                }}
              >
                Editar
              </button>

              <button onClick={() => eliminarUsuario(user.id)}>
                Eliminar
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ListadoUsuarios;