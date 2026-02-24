import React from 'react'
import SectionTitle from '../components/SectionTitle'

const Skills = () => {
  return (
     <section id='skills' className='w-full min-h-screen max-h-none pt-16 px-[10%] pb-0'>
     <SectionTitle titleText1="My" titleText2=" Skills" />
     
     <div className='h-full w-full flex items-center justify-between relative mt-20'>
      <div className='h-80 w-80'></div>
      <div className='h-80 w-80'></div>
     </div>

    </section>
  )
}

export default Skills
