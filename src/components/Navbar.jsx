import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container-fluid d-flex justify-content-center'>
        <div className='col-3 d-flex justify-content-center'>
          <img src='../src/assets/img/television-inteligente.png' alt='Logo' width='20%' />
        </div>
        <div className='d-flex justify-content-center col-6'>
          <NavLink className='navbar-brand' to='/'>
            <h1 className='fs-2'>Info Series</h1>
          </NavLink>
        </div>
        <div className='col-3 d-flex justify-content-center'>
          <img src='../src/assets/img/pelicula.png' alt='Logo' width='20%' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
