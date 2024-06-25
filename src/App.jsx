import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home_Page from './Pages/Home_Page'
import ProductPage from './Pages/ProductPage'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Cart from './Pages/Cart'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home_Page />}></Route>
          <Route exact path='/productPage/:id' element={<ProductPage />}></Route>
          <Route exact path="/about_us" element={<About />}></Route>
          <Route exact path="/contact_us" element={<Contact />}></Route>
          <Route exact path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App