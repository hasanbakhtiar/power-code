import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppUseLayoutEffect from './components/AppUseLayoutEffect'
import AppUseImperativeHandle from './components/AppUseImperativeHandle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppUseImperativeHandle />
  </React.StrictMode>,
)
