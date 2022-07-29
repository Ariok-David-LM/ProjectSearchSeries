import { useEffect, useState } from 'react'
import { getSerie } from '../utils/getSeries'

const useFetcherS = (id) => {
  const [dataState, setDataState] = useState()
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const { data } = await getSerie(id)
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

export default useFetcherS
