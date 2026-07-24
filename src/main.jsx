import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Self-hosted fonts (bundled locally, no external requests).
// Only the Latin subsets are loaded – enough for German incl. Umlaute/ß.
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-ext-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-ext-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/inter/latin-ext-600.css'
import '@fontsource/inter/latin-700.css'
import '@fontsource/inter/latin-ext-700.css'
import '@fontsource/inter/latin-800.css'
import '@fontsource/inter/latin-ext-800.css'
import '@fontsource/montserrat/latin-700.css'
import '@fontsource/montserrat/latin-ext-700.css'
import '@fontsource/montserrat/latin-800.css'
import '@fontsource/montserrat/latin-ext-800.css'
import '@fontsource/montserrat/latin-900.css'
import '@fontsource/montserrat/latin-ext-900.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
