import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react';

import Home from './Com/HomePage'
import Product from './Com/LodinData'
import ProductDaitals from './Com/ProductD'
import About from './Com/About';
import NavBar from './Com/NaveBar';

function App() {
  


  return (
    <>
<NavBar/>

<Routes>

<Route path='/Home'  element={<Home/>} />
<Route path='/Product' element={<Product/>} />
<Route path='/Product/:id' element={  <Suspense fallback={<h2>Loading About...</h2>}>
            <ProductDaitals/>
            </Suspense>} />
<Route path='/About'  element={<About/>} />      
<Route path='*'  element={<Home/>}  />      




</Routes>

    </>
  )
}

export default App
