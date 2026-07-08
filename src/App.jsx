import { useState } from 'react' 
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import data from './data/empleados'
import Empleados from "./pages/Empleados"
import FormularioEmpleado from './pages/FormularioEmpleado'
import Navbar from './components/Navbar'

// Componente intermedio para manejar la edición y capturar el state de React Router
function PaginaEditar({ onEditar }) {
  const location = useLocation()
  const navigate = useNavigate()
  // Recuperamos el empleado enviado por el navigate("/editar", {state: ...})
  const empleadoAEditar = location.state?.empleado

  return (
    <FormularioEmpleado 
      onGuardar={(emp) => {
        onEditar(emp)
        navigate("/") // Redirige a la tabla al terminar
      }} 
      empleadoAEditar={empleadoAEditar} 
      onCancelar={() => navigate("/")} 
    />
  )
}

// Componente intermedio para manejar la creación de un nuevo empleado
function PaginaNuevo({ onAgregar }) {
  const navigate = useNavigate()
  
  return (
    <FormularioEmpleado 
      onGuardar={(emp) => {
        onAgregar(emp)
        navigate("/") // Redirige a la tabla al terminar
      }} 
      empleadoAEditar={null} 
      onCancelar={() => navigate("/")} 
    />
  )
}

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
                onEditar={editarEmpleado}
              />
            } 
          />
          <Route 
            path="/nuevo" 
            element={<PaginaNuevo onAgregar={agregarEmpleado} />} 
          />
          <Route 
            path="/editar" 
            element={<PaginaEditar onEditar={editarEmpleado} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App