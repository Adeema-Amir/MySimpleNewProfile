"use client"
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CardGroup from './components/Card'
import HeroSection from './components/HeroSection'
import Carousel from './components/Carousel'
import Main from './components/Main'

function page() {
  return (
    <>
      <Navbar />
      <Main />
      <br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {/* <br /><br />
      <HeroSection />
      <br /><br />
      <CardGroup />
      <br /><br />
      <Carousel />
      <br /><br /> */}
      <Footer />
    </>
  )
}

export default page
