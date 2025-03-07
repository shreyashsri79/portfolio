import React from 'react'
import Hero from './assets/components/Hero'
import Projects from './assets/components/Projects'
import AboutMe from './assets/components/AboutMe'
import ContactMe from './assets/components/ContactMe'
import EducationAndExperience from './assets/components/EducationAndExperience'
import Skills from './assets/components/Skills'

const App = () => {
  return (
    <>
      <div className='flex-col'>
        <Hero />
        <Projects />
        <AboutMe />
        <Skills />
        <EducationAndExperience />
        <ContactMe />
      </div>    
    </>
  )
}

export default App