import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Privacy from './Privacy.jsx'
import Terms from './Terms.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/politica-privacidade" element={<Privacy />} />
      <Route path="/termos-de-uso" element={<Terms />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
)
