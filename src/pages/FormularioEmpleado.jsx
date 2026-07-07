import { useState } from "react"

function FormularioEmpleado() {
    // Declaramos TODOS los estados necesarios para el formulario
    const [nombre, setNombre] = useState("")
    const [salario, setSalario] = useState("")
    const [fechaIngreso, setFechaIngreso] = useState("")
    const [departamento, setDepartamento] = useState("tecnologia") // Valor inicial por defecto

    return (
        <div>
            <label>Nombre Completo</label>
            <input 
                type="text" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <label>Salario mensual</label>
            <input 
                type="number" 
                value={salario}
                onChange={(e) => setSalario(e.target.value)}
                placeholder="Ej: 2500"
            />

            <label>Fecha de ingreso</label>
            <input 
                type="date" 
                value={fechaIngreso}
                onChange={(e) => setFechaIngreso(e.target.value)}
            />

            <label>
                Selecciona un departamento:
                <select 
                    value={departamento}
                    onChange={(e) => setDepartamento(e.target.value)}
                    name="selectedDepartment"
                >
                    <option value="tecnologia">Tecnología</option>
                    <option value="recursos humanos">Recursos Humanos</option>
                    <option value="finanzas">Finanzas</option>
                    <option value="marketing">Marketing</option>
                    <option value="ventas">Ventas</option>
                    <option value="logistica">Logística</option>
                </select>
            </label>
        </div>
    )
}

export default FormularioEmpleado