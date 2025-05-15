import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Inicial from './pages/Inicial'
import CustomNavbar from './components/CustomNavbar'

const App = () => {
  return (
    <BrowserRouter>
    <CustomNavbar/>
      <Container className='my-4'>
        <Routes>
          <Route path='/' element={<Inicial/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App