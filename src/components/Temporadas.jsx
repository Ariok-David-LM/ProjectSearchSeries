import { useParams } from 'react-router-dom'
import useFetcherEpi from '../hooks/useFetcherEpi'
import { getEpisodes, getSeasons } from '../utils/getSeasons'
import Loading from './Loading'
import Temporada from './Temporada'

const Temporadas = () => {
  const { id } = useParams()
  const { dataState: data, loading } = useFetcherEpi(id)

  return (
    <div className='container-fluid bg-primary d-flex flex-column justify-content-center mb-4 px-4 pb-4' style={{ borderRadius: '20px' }}>
      <div className='conatiner-fluid text-center fs-3 mb-3 text-success'>Seasons</div>
      <div className='accordion' id='accordionExample' style={{ borderRadius: '20px' }}>
        {loading
          ? <Loading />
          : (
            <>
              {getSeasons(data).map(item => (
                <Temporada number={item} episodios={getEpisodes(data, item)} key={item} />
              )
              )}
            </>
            )}
      </div>
    </div>
  )
}

export default Temporadas
