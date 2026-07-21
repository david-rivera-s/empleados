function EmpleadosList({ empleados, onEdit, onDelete }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Departamento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((empleado) => (
          <tr key={empleado.id}>
            <td>{empleado.nombre}</td>
            <td>{empleado.edad}</td>
            <td>{empleado.departamento}</td>
            <td>
              <button onClick={() => onEdit(empleado)}>Editar</button>
              <button onClick={() => onDelete(empleado.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmpleadosList;