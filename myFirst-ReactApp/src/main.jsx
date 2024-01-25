import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { FavoriteFood } from './Greeting.jsx'
import { IntroJSX } from './IntroJSX.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <FavoriteFood />
    {/* <IntroJSX /> */}
  </React.StrictMode>,
)
