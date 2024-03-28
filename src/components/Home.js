import React from 'react'
import Nav from './Nav'
import Logos from './Logos'
import ValueProp from './ValueProp'
import Howitworks from './Howitworks'
import { AccordionFx } from './Accordion'
import Footer from './Footer'
import Hero from './Hero'
import CallToActions from './CallToActions'

function Home() {
  return (
    <div>
         <Nav/>
          <Hero/>
          <Logos/>
          <ValueProp/>
          <Howitworks/>
          <AccordionFx/>
          <CallToActions/>
          <Footer/>
    </div>
  )
}

export default Home