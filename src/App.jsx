import { useState } from 'react' // Falta este import esencial
import './App.css'
import data from './data/empleados'
import Empleados from "./pages/Empleados";

function App() {
  const [empleados, setEmpleados] = useState(data)
  
  function agregarEmpleado(nuevoEmpleado) {
    setEmpleados([...empleados, nuevoEmpleado])
  }

  function eliminarEmpleado(id) {
    const filtrados = empleados.filter((emp) => emp.id !== id)
    setEmpleados(filtrados)
  }

  function editarEmpleado(id, empleadoEditado) {
    const actualizados = empleados.map((emp) => {
      if (emp.id === id) {
        return empleadoEditado
      } else {
        return emp
      }
    })
    setEmpleados(actualizados)
  }

  // Corregimos el return para que pinte tu componente con sus props
  return (
    <div className="container">
      <h1>Panel de Control</h1>
      <Empleados 
        empleados={empleados} 
        onEliminar={eliminarEmpleado} 
        onEditar={editarEmpleado} 
      />
    </div>
  )
}

export default App