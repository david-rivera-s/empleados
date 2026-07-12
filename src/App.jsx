import { useState } from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import data from './data/empleados'
import Empleados from "./pages/Empleados"
import FormularioEmpleado from './pages/FormularioEmpleado'
import Navbar from './components/Navbar'
import NoEncontrada from './pages/NoEncontrada'

function App() {
  const [empleados, setEmpleados] = useState(data)
  
  function agregarEmpleado(nuevoEmpleado) {
    setEmpleados([...empleados, nuevoEmpleado])
  }

  function eliminarEmpleado(id) {
    const filtrados = empleados.filter((emp) => emp.id !== id)
    setEmpleados(filtrados)
  }

  function editarEmpleado(empleadoEditado) {
    const actualizados = empleados.map((emp) => 
      emp.id === empleadoEditado.id ? empleadoEditado : emp
    )
    setEmpleados(actualizados)
  }

  function manejarGuardar(empleado) {
    const existe = empleados.find((emp) => emp.id === empleado.id)
    if (existe) {
      editarEmpleado(empleado)
    } else {
      agregarEmpleado(empleado)
    }
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route 
            path="/" 
            element={
              <Empleados 
                empleados={empleados} 
                onEliminar={eliminarEmpleado} 
              />
            } 
          />
          <Route 
            path="/nuevo" 
            element={<FormularioEmpleado onGuardar={manejarGuardar} />} 
          />
          <Route 
            path="/editar" 
            element={<FormularioEmpleado onGuardar={manejarGuardar} />} 
          />
          <Route
            path='*'
            element={
              <NoEncontrada
                
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App