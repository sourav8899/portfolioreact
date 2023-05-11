import React from 'react'
import"./skills.css"

import Frontend from './Frontend'
import Backend from './Backend'
const Skills = () => {
  return (
    <section className="skills section flex flex-col justify-center items-center " id="skills">
    <h2 className="section__title">Skills</h2>
    <span className='section__subtitle'>My inroduction</span>
    <div className="skills__container container grid">
        <Frontend></Frontend>
    <Backend></Backend>
        
    </div>
   </section>
  )
}

export default Skills