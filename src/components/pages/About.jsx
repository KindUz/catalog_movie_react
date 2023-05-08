import React, {useState} from 'react'
import useApi from '../../hooks/useApi'
import usePagination from '../../hooks/usePagination'
import '../../styles/style.css'
import {  Typewriter } from 'react-simple-typewriter'
import Header from '../UI/header/Header'

const About = () => {
  return (
    <div className='about__text'>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        This project was made by{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Python', 'Native JS', 'React JS!']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  )
}

export default About