import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './Auth/Signup'
import LogIn from './Auth/LogIn'
import Home from './Auth/HomePage'

function App() {
  

  return (
    <>


<Routes>

<Route path='/'  element={<Home/>} />
<Route path='/Login'  element={<LogIn/>}  />
<Route path="/Home"  element={<Home/>} />


</Routes>

    </>
  )
}

export default App
