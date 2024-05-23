import React from 'react'
import Header from '../components/Home/Header'
import SectionAbout from '../components/Home/SectionAbout'
import Focus from '../components/Home/Focus'
import Project from '../components/Home/Project'
import SectionContact from '../components/Home/SectionContact'


const Home = () => {

  return (
    <>
     <Header/>
     <SectionAbout/>
     <Focus/>
     <Project/>
     <SectionContact/>
    </>
  )
}

export default Home