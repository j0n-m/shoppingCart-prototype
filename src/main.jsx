import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css' //reset style
import Router from './components/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
