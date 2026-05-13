import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')!

if (rootElement.hasChildNodes()) {
  // For pre-rendered HTML (hydrate instead of render)
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  // For client-side only
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}