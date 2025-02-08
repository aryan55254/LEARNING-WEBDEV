import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import State01 from './State01.jsx'
import State02 from './State02.jsx'
import State03 from './State03.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <State01 />
    <State02 />
    <State03 />
  </StrictMode>,
)
