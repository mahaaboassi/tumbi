import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/page'
import QR from './pages/QR/qr'

function App() {

  return (<BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/qr" element={<QR/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
