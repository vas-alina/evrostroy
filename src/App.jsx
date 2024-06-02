import { useState } from 'react'

import './App.css'
import mainImg from './assets/main-hero.png'

import { RegistrationContainer } from './RegistrationPageForm/RegistationContainer'

function App() {
  

  return (
    <>
      <div>
         <img src={mainImg} alt="main" className='main-img' />
      </div>
      <h1>Присоединяйся к нам!</h1>
      <div className="card">
       
      </div>
      <RegistrationContainer />
      <p className="read-the-docs">
       Для получения корпоративной почты обратитесь к администратору
      </p>
    </>
  )
}

export default App
