import React from 'react'
import Navbar from '../Navbar'  
import { Outlet } from 'react-router-dom'
import Footer from '../footer'

const Rootlayout = () => {
    return (
        <>
            <Navbar /> 
            <Outlet />   
            <Footer/>
        </>

    )
}

export default Rootlayout