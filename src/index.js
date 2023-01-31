import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login/Login'
import Main from './pages/Main/Main'
import Signup from './pages/Signup/Signup'
import './styles/reset.scss'
import './styles/common.scss'
import Router from './Router'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Router />)
