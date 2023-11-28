import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './pages/home/Home';
import Education from './components/education/Education';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/education' element={<Education />} />
      </Routes>
    </Router>
    
  )
}

export default App