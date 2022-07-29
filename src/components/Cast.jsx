import { useHorizontalScroll } from '../hooks/useSideScroll'
import Person from './Person'
import { useParams } from 'react-router-dom'
import useFetcherC from '../hooks/useFetcherC'
import Loading from './Loading'

const Cast = () => {
  const scrollRef = useHorizontalScroll()
  const { id } = useParams()
  const { dataState: data, loading } = useFetcherC(id)
  return (
    <div className='container-fluid bg-primary d-flex flex-column justify-content-center mb-4 px-4 pb-4' style={{ borderRadius: '20px' }}>
      <div className='conatiner-fluid text-center fs-3 mb-3 text-success'>Cast</div>
      <div className='container-fluid bg-dark p-2' style={{ borderRadius: '20px' }}>
        <div className='container-fluid example d-flex ' ref={scrollRef} style={{ overflow: 'scroll', scrollBehavior: 'auto' }}>
          {loading
            ? <Loading />
            : (
              <>
                {data.length === 0
                  ? <p className='text-center w-100'>NOT FOUND</p>
                  : (data.map(item => (
                    <Person data={item} key={item.character.id} />
                    ))
                    )}
              </>
              )}
        </div>
      </div>
    </div>
  )
}

export default Cast
