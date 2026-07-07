import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Empleados from './pages/Empleados'
import data from './data/empleados'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    <Empleados empleados={data} /> 
  </StrictMode>,
)