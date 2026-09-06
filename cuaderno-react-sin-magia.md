# 📒 Cuaderno React-sin-magia

## Proyecto: Ayuda-Chaty

### Rama: refactor-react-sin-magia

## 1. De App.jsx a UsuarioContext

Al comenzar la refactorización, App.jsx tenía prácticamente toda la lógica
relacionada con los usuarios:

- estado de usuarios
- localStorage
- agregar usuarios
- editar usuarios
- eliminar usuarios
- cambiar completed

La idea fue trasladar esa responsabilidad a un Context.

### UsuarioContext.jsx

UsuarioContext pasó a manejar:

- estado `usuarios`
- estado `nuevoUsuario`
- lectura inicial desde `localStorage`
- sincronización con `localStorage` mediante `useEffect`
- `agregarUsuario()`
- `guardarEdicion()`
- `eliminarUsuario()`
- `toggleCompletado()`

### UsuarioProvider

`UsuarioProvider` contiene el Context y provee mediante `value`
los datos y funciones que necesitan los componentes.

```text
UsuarioProvider
│
├── usuarios
├── nuevoUsuario
├── setNuevoUsuario
├── agregarUsuario
├── guardarEdicion
├── eliminarUsuario
└── toggleCompletado

## 2. Context vs Props vs estado local

Durante la refactorización apareció una diferencia importante:

### Context

UsuarioContext provee datos y funciones que pueden ser utilizados
por distintos componentes.

Por ejemplo:

- `FormularioUsuario` obtiene `nuevoUsuario`, `setNuevoUsuario` y
  `agregarUsuario`.
- `ListadoUsuarios` obtiene `usuarios`.
- `Usuario` obtiene `eliminarUsuario`, `guardarEdicion` y
  `toggleCompletado`.

Cada componente toma del Context solamente lo que necesita.

### Props

`Usuario` recibe `user` mediante props.

`ListadoUsuarios` obtiene `usuarios` desde el Context y utiliza `map()`
para recorrerlos:

```jsx
{usuarios.map((user) => (
  <Usuario
    key={user.id}
    user={user}
  />
))}


💡 **Esta sección es importante**, porque acá ya no estamos simplemente anotando "qué código tenemos". Estamos empezando a registrar **cómo pensar React**.

Y después de copiarla, **no hacemos ningún cambio de código todavía**. La leemos juntos y vemos si algo de la explicación no te cierra.