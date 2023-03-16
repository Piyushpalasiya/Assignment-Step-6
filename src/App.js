import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Login from './component/Login/Login'
import NavBar from './component/NavBar';
import Gridel from './Pages/Gridel'




 function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/navbar" element={<NavBar />} />  
           {/* <Route path="/dashboard" element={<Dashboard />} />  */}
           <Route path="/gridel" element={<Gridel/>} /> 


          
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;