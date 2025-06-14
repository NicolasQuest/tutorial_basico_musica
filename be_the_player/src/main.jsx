import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Harmony from './Harmony.jsx'
import App from "./App.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<App/>}> </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
