import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootswatch/dist/vapor/bootstrap.min.css'
import '../src/styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import Paths from './components/Paths'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </>
)
