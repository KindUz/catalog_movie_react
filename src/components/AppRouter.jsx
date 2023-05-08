import React from 'react'
import About from './pages/About'
import Movies from './pages/Movies'
import MovieIdPage from './pages/MovieIdPage'
import { Routes, Route, Navigate } from 'react-router'

const AppRouter = () => {
  return (
    <Routes>
          <Route path='/about' Component={About}/>
          <Route exact path='/movies' Component={Movies}/>
          <Route exact path='/movies/:id' Component={MovieIdPage}/>
          <Route path='/*' element={<Navigate to="/movies"/>}/>
    </Routes>
  )
}

export default AppRouter