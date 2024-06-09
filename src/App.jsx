
import './App.css'
import Forms from './Forms/Forms'
import RegistrationContainer from './RegistrationPageForm/RegistationContainer'
import mainImg from './assets/main-hero.png'






function App() {
 
  return (
    <>
      <div>
         <img src={mainImg} alt="main" className='main-img' />
      </div>
      <h1>Присоединяйся к нам!!</h1>
      <div className="card">
       <Forms />
       <RegistrationContainer/>
     </div>
      <p className="read-the-docs">
       Для получения корпоративной почты обратитесь к администратору
      </p>
    </>
  )
}

export default App
