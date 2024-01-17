import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Hola, encontra la mejor relacion calidad-precio del pais'} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados: '} />} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>ERROR 404</h1>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
