import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import APP2 from './APP2.jsx'
import APP3 from './APP3.jsx'
import APP4 from './APP4.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <APP2 />
    <APP3 />
    <APP4 />
  </StrictMode>
)
