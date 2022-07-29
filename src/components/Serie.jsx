import { useParams } from 'react-router-dom'
import useFetcherS from '../hooks/useFetcherS'
import Loading from './Loading'

import InfoSerie from './InfoSerie'
import Temporadas from './Temporadas'
import Cast from './Cast'

const Serie = () => {
  const { id } = useParams()
  const { dataState: data, loading } = useFetcherS(id)
  return (
    <div className='container-fluid justify-content-center px-4'>
      {loading
        ? <Loading />
        : <InfoSerie data={data} />}
      <Temporadas />
      <Cast />
    </div>
  )
}

export default Serie
