import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "./FormularioEmpleado.css"

function FormularioEmpleado({onGuardar}) {

    const location = useLocation()
    const navigate = useNavigate()

    const empleadoRecuperado = location.state?.empleado || null 

    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState("")
    // 1. CORREGIDO: "Tecnología" con mayúscula para que coincida con el <select>
    const [departamento, setDepartamento] = useState("Tecnología") 
    const [turno, setTurno] = useState("Mañana")                 
    const [activo, setActivo] = useState(true)
    const [fechaIngreso, setFechaIngreso] = useState("")
    const [salario, setSalario] = useState("")

    useEffect(() => {
        if (empleadoRecuperado) {
            setNombre(empleadoRecuperado.nombre)
            setEdad(empleadoRecuperado.edad)
            // Aquí usamos "Tecnología" como salvavidas por si viene vacío
            setDepartamento(empleadoRecuperado.departamento || "Tecnología")
            setTurno(empleadoRecuperado.turno || "Mañana")
            setActivo(empleadoRecuperado.activo)
            setFechaIngreso(empleadoRecuperado.fechaIngreso)
            setSalario(empleadoRecuperado.salario)
        } else {
            setNombre("")
            setEdad("")
            // 2. CORREGIDO: "Tecnología" cuando se limpia el formulario para un nuevo empleado
            setDepartamento("Tecnología")
            setTurno("Mañana")
            setActivo(true) 
            setFechaIngreso("")
            setSalario("")
        }
    }, [empleadoRecuperado])

    function manejarGuardar(e) {
        e.preventDefault(); 
        
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
                    <option value="Tecnología">Tecnología</option>
                    <option value="Recursos Humanos">Recursos Humanos</option>
                    <option value="Finanzas">Finanzas</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Ventas">Ventas</option>
                    <option value="Logística">Logística</option>
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

            <label className="estado-container">
                Estado: <input type="checkbox" checked={activo} onChange={(e) => setActivo(e.target.checked)} /> Activo
            </label>

            <div className="botones-container">
                <button type="submit">Guardar</button>
                <button type="button" onClick={manejarCancelar}>Cancelar</button>
            </div>
        </form>
    )
}

export default FormularioEmpleado;