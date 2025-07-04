import { useState } from 'react'
import Home from './Home'
// node_modules/bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Create'
import Update from './Update'

function App() {
  return (

  <>
 <BrowserRouter>
 <Routes>

  <Route path='/' element={<Home />}></Route>
  <Route path='/create' element={<Create />}></Route> <Route path='/edit/:id' element={<Update/>}></Route>

</Routes>
 </BrowserRouter>
  </>

  )

}

export default App
