// REACT LIB
import React from 'react'
import ReactDOM from 'react-dom/client'

// APP COMPONENT
import App from './app'

// GLOBAL STYLE + TAILWIND
import './assets/global.css'

// REACT CREATE ROOT 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
