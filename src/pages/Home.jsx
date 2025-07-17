import React from 'react'
import Homebanner from '../components/Banner/Homebanner'
import Finance from '../components/Finance'
import Philosophy from '../components/Philosophy'
import Future from '../components/Future'

const Home = () => {
  return (
    <>
        <Homebanner/>
        <Finance/>
        <Philosophy/>
        <Future/> 
    </>
  )
}

export default Home