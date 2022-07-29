import { useEffect, useState } from 'react'
import { getSeries } from '../utils/getSeries'

const useFetcher = (query) => {
  const [dataState, setDataState] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const { data } = await getSeries(query)
    if (data.Response !== 'False') {
      setDataState(data)
    } else {
      setDataState([])
    }
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [query])

  return { dataState, loading }
}

export default useFetcher
