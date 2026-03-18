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
              <input
                type="checkbox"
                checked={user.completed}
                onChange={() => toggleCompletado(user.id)}
                />

                <span className={user.completed ? "completed" : ""}>
                  {user.name}
                </span> 

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