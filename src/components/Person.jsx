import React from 'react'

const Person = ({ data }) => {
  return (
    <div className='d-flex flex-column align-items-center bg-danger me-3 p-2 border-success' style={{ borderRadius: '20px' }}>
      <img src={data?.person?.image?.medium === undefined ? '../assets/img/cacodemon_doom.png' : `${data?.person?.image?.medium}`} alt='persona' style={{ width: '100px', borderRadius: '100%' }} />
      <div className='container-fluid d-flex flex-column text-white'>
        <p className='text-center'><strong>{data?.person?.name}</strong></p>
        <p className='text-center'>{data?.character?.name}</p>
      </div>
    </div>
  )
}

export default Person
