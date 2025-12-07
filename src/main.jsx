import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Combine from './combine.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Combine />
  </StrictMode>,
)
