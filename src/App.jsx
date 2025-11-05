import './App.css'
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from './pages/Weather';
import Home from './pages/Home';
import Navbar from './components/Navbar'; // You need to import Navbar

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  )
}

export default App
