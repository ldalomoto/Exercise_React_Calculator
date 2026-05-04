import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore: allow importing CSS side-effect in TSX
import './style/App.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)