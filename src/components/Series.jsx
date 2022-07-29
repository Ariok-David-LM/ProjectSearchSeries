import React from 'react'
import CardSerie from './CardSerie'
import NoResults from './NoResults'

const Series = ({ data }) => {
  return (
    <>
      {
        data.length === 0
          ? <NoResults />
          : (
            <div className='conatiner-fluid d-flex flex-wrap justify-content-evenly'>
              {data.map(item => (
                <CardSerie {...item} key={item.show.id} />
              )
              )}
            </div>
            )
      }
    </>
  )
}

export default Series
