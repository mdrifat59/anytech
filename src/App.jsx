import React from 'react'
import './App.css' 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rootlayout from './layout/RootLayout/Rootlayout'
import Home from './pages/Home'

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Rootlayout />}>
          <Route path='/' element={<Home />}></Route>
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App
