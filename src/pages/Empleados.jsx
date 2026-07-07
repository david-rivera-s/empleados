function Empleados({empleados, onEliminar, onEditar}) {
    return(
        <>
        <div>
            <h2>Empleados</h2>
            <p>Registros: {empleados.length}</p>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Departamento</th>
                        <th>Turno</th>
                        <th>Ingreso</th>
                        <th>Salario</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map((emp) => {
                        return (
                            <tr key={emp.id}>
                                <td>
                                    {emp.nombre}
                                </td>
                                <td>
                                    {emp.edad}
                                </td>
                                <td>
                                    {emp.departamento}
                                </td>
                                <td>
                                    {emp.turno}
                                </td>
                                <td>
                                    {emp.turno}
                                </td>
                                <td>
                                    {emp.fechaIngreso}
                                </td>
                                <td>
                                    {emp.salario}
                                </td>
                                <td>
                                    {emp.estado || "Activo"}
                                </td>
                                <td>
                                    <button onClick={() => onEditar(emp)}>
                                        Editar
                                    </button>
                                    <button onClick={() => onEliminar(emp.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Empleados