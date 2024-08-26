import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'  //Browser router- used to wrap the entire react application
import AuthProvider from './context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthProvider>
    <div className='dark:bg-slate-900 dark:text-white'>
    <App />
    </div>
    </AuthProvider>
    </BrowserRouter>
)
