import { useNavigate } from "react-router-dom"
import "./Empleados.css"

function Empleados({empleados, onEliminar, onEditar}) {

    const navigate = useNavigate()

    function manejarEditar(emp){
        navigate("/editar", {state: {empleado : emp} })
    }

    return(
        <div className="empleados-seccion">
            <div className="empleados-header">
                <h2>Empleados</h2>
                <span className="registros-badge">Registros: <strong>{empleados.length}</strong></span>
            </div>
            
            <div className="table-container">
                <table className="empleados-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Departamento</th>
                            <th>Turno</th>
                            <th>Ingreso</th>
                            <th>Salario</th>
                            <th>Estado</th>
                            <th className="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map((emp) => {
                            return (
                                <tr key={emp.id}>
                                    
                                    <td data-label="Nombre">{emp.nombre}</td>
                                    <td data-label="Edad">{emp.edad}</td>
                                    <td data-label="Departamento">{emp.departamento}</td>
                                    <td data-label="Turno">{emp.turno}</td>
                                    <td data-label="Ingreso">{emp.fechaIngreso}</td>
                                    <td data-label="Salario">{emp.salario}</td>
                                    
                                    <td data-label="Estado">
                                        <span className={`estado-badge ${emp.activo ? 'activo' : 'inactivo'}`}>
                                            {emp.activo ? "Activo" : "Inactivo"}
                                        </span>
                                    </td>

                                    <td data-label="Acciones" className="text-center acciones-celda">
                                        <button className="btn btn-editar" onClick={() => manejarEditar(emp)}>
                                            Editar
                                        </button>
                                        <button className="btn btn-eliminar" onClick={() => onEliminar(emp.id)}>
                                            Eliminar
                                        </button>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Empleados