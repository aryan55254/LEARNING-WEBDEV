import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import State01 from './State01.jsx'
import State02 from './State02.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <State01 />
    <State02 />
  </StrictMode>,
)
