/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
/* import './App.css' */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* import { Login } from './Login'; */
import { Home } from './Home';
import { Men } from './Men';
import { Womens } from './Womens';
import { Kids } from './Kids';
import { Contact } from './Contact';


function App() {


  return (
    <>
       <Router>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mens' element={<Men/>} />
            <Route path="/kids" element={<Kids/>} />
            <Route path="/womens" element={<Womens/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </Router> 

    </>
  )
}

export default App
