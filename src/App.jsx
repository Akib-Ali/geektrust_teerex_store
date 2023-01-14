import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './component/navbar'
import { Home } from './component/home'
import { Shop } from './component/shop'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Shop/>
    </div>
  )
}

export default App
