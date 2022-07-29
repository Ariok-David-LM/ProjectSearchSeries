import React from 'react'
import Loading from './Loading'
import Series from './Series'

const Home = ({ series, loading }) => {
  return (
    <div className='container-fluid'>
      {loading ? <Loading /> : <Series data={series} />}
    </div>
  )
}

export default Home
