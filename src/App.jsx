import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Home from './Home'

const App = () => {
  return (
    // <Home/>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        {/* <Route path='*' element={<UrlError/>}></Route> */}
      </Routes>
      <Routes>
        <Route exact path = '/Login' element ={<Login/>}></Route>
      </Routes>
    </Router>
  )
}

export default App