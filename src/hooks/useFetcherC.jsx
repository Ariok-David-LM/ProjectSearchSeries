import { useEffect, useState } from 'react'
import { getCast } from '../utils/getSeries'

const useFetcherEpi = (id) => {
  const [dataState, setDataState] = useState()
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const { data } = await getCast(id)
    if (data.name !== 'Not Found') {
      setDataState(data)
    } else {
      setDataState({})
    }
    setLoading(false)
  }
  useEffect(() => {
    getData()
  }, [id])
  return { dataState, loading }
}

export default useFetcherEpi
