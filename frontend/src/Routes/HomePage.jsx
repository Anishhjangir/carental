import React from 'react'
import Hero from '../components/hero'
import Cetegory from '../components/cetegory'
import City from '../components/city'
import MostSearched from '../components/mostSearched'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Cetegory/>
        <MostSearched/>
        <City/>
    </div>
  )
}

export default HomePage
