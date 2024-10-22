import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import Header from './components/Header'
import Hero from './components/Hero'
import Catagory from './components/Catagory'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSections from './components/InfoSections'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
        {/* header */}
        <Header/>
        {/* hero  */}
        <Hero/>
        {/* Catagory */}
        <Catagory/>
        {/* Most search cars */}
        <MostSearchedCar/>
        {/* info sections */}
        <InfoSections/>
        {/* footer */}
        <Footer/>
    </div>
  )
}

export default Home