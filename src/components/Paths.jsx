import { useRef, useState } from 'react'
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom'
import useFetcher from '../hooks/useFetcher'
import About from './About'
import Home from './Home'
import Navbar from './Navbar'
import Serie from './Serie'

const Paths = () => {
  const searchRef = useRef(null)
  const [query, setQuery] = useState('breaking')
  const { dataState: series, loading } = useFetcher(query)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setQuery(searchRef.current.value)
    navigate('/ProjectSearchSeries/')
  }

  return (
    <>
      <Navbar />
      <div className='container-fluid p-3 d-flex justify-content-center'>
        <div className='col-10'>
          <div className='input-group'>
            <input ref={searchRef} type='text' className='form-control' placeholder='Buscar series por nombre....' aria-label='Buscar' aria-describedby='button-addon2' />
            <Link to='/ProjectSearchSeries/'>
              <button onClick={handleSubmit} className='btn btn-primary' type='button' id='button-addon2'>Buscar</button>
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/ProjectSearchSeries/' element={<Outlet />}>
          <Route index element={<Home series={series} loading={loading} />} />
          <Route path=':id' element={<Serie />} />
        </Route>
      </Routes>
      <About />
    </>
  )
}

export default Paths
