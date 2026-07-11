import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function FormularioEmpleado({onGuardar}) {

    const location = useLocation()
    const navigate = useNavigate()

    const empleadoRecuperado = location.state?.empleado || null 

    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState("")
    const [departamento, setDepartamento] = useState("tecnologia") // Inicializado con la opción por defecto
    const [turno, setTurno] = useState("Mañana")                 // Inicializado para evitar selects vacíos
    const [activo, setActivo] = useState(true)
    const [fechaIngreso, setFechaIngreso] = useState("")
    const [salario, setSalario] = useState("")

    useEffect(() => {
        if (empleadoRecuperado) {
            setNombre(empleadoRecuperado.nombre)
            setEdad(empleadoRecuperado.edad)
            setDepartamento(empleadoRecuperado.departamento || "tecnologia")
            setTurno(empleadoRecuperado.turno || "Mañana")
            setActivo(empleadoRecuperado.activo)
            setFechaIngreso(empleadoRecuperado.fechaIngreso)
            setSalario(empleadoRecuperado.salario)
        } else {
            setNombre("")
            setEdad("")
            setDepartamento("tecnologia")
            setTurno("Mañana")
            setActivo(true) // Cambiado a true por defecto en lugar de false/""
            setFechaIngreso("")
            setSalario("")
        }
    }, [empleadoRecuperado])

    function manejarGuardar(e) {
        e.preventDefault(); // Evita recarga si se usa dentro de un form
        
        const empleado = {
            id: empleadoRecuperado !== null && empleadoRecuperado !== undefined ? empleadoRecuperado.id : Date.now(),
            nombre: nombre,
            edad: Number(edad),
            departamento: departamento,
            turno: turno,
            activo: activo,
            fechaIngreso: fechaIngreso,
            salario: Number(salario)
        }

        onGuardar(empleado)
        navigate("/")
    }

    function manejarCancelar(){
        navigate("/")
    }
    
    return (
        // Cambiado de <div> a <form> para mejor control de eventos nativos
        <form onSubmit={manejarGuardar} className="formulario-empleado">
            <label>Nombre Completo</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

            <label>Edad</label>
            <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} />

            <label>Salario mensual</label>
            <input type="number" value={salario} onChange={(e) => setSalario(e.target.value)} min="0" />

            <label>Fecha de ingreso</label>
            <input type="date" value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} />

            <label>
                Selecciona un departamento:
                <select value={departamento} onChange={(e) => setDepartamento(e.target.value)}>
                    <option value="tecnologia">Tecnología</option>
                    <option value="recursos humanos">Recursos Humanos</option>
                    <option value="finanzas">Finanzas</option>
                    <option value="marketing">Marketing</option>
                    <option value="ventas">Ventas</option>
                    <option value="logistica">Logística</option>
                </select>
            </label>

             <div className="turno-container">
                Turno:
                <label>
                    <input type="radio" value="Mañana" checked={turno === "Mañana"} onChange={(e) => setTurno(e.target.value)} /> Mañana
                </label>
                <label>
                    <input type="radio" value="Tarde" checked={turno === "Tarde"} onChange={(e) => setTurno(e.target.value)} /> Tarde
                </label>
                <label>
                    <input type="radio" value="Noche" checked={turno === "Noche"} onChange={(e) => setTurno(e.target.value)} /> Noche
                </label>
            </div>

            <label>
                Estado: <input type="checkbox" checked={activo} onChange={(e) => setActivo(e.target.checked)} /> Activo
            </label>

            {/* Al ser type="submit", ejecutará automáticamente el onSubmit del <form> */}
            <button type="submit">Guardar</button>
            <button type="button" onClick={manejarCancelar}>Cancelar</button>
        </form>
    )
}

export default FormularioEmpleado