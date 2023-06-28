import Contact from '@/components/clients/Contact'
import MoveToTop from '@/components/clients/MoveToTop'
import Skills from '@/components/clients/Skills'
import WhoAmI from '@/components/clients/who/WhoAmI'
import Works1 from '@/components/clients/Works1'
import Works2 from '@/components/clients/Works2'
import Hero from '@/components/Hero'
import React from 'react'

const Homepage = () => {
  return (
    <div className='HomeWrapper'>
        <Hero/>
        <div id='about'>
          <WhoAmI/>
        </div>

        <div id='skills'>
          <Skills/>
        </div>
        <div id='projects'>
          <Works1/>
        </div>
        <Works2/>

        <div id='contact'>
            <Contact/>
        </div>
        
        <MoveToTop/>
    </div>
  )
}

export default Homepage