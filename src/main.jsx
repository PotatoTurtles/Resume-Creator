import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GenInfo from './genInfo.jsx'
import Education from './education.jsx'
import Experience from './experience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GenInfo />
    <Education />
    <Experience />
  </StrictMode>,
)
