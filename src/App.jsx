import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Route,Router,Routes} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './User/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
         <Routes>
         <Route path="/" element={<Dashboard />} />

         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
