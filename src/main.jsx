import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import Cars from './pages/Cars.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/view" element={<Search/>}></Route>
        <Route path="/cars" element={<Cars/>}></Route>
        {/* <Route path="/add" element={<AddCar/>}></Route>
        <Route path="/edit" element={<EditCar/>}></Route> */}
      </Routes>
    </Router>
  </React.StrictMode>,
)
