import axios from 'axios'

const baseUrl = 'https://api.tvmaze.com/search/shows?q='
const urlSerie = 'https://api.tvmaze.com/shows/'

export const getSeries = async (query) => {
  return await axios.get(`${baseUrl}${query}`)
}
export const getSerie = async (id) => {
  return await axios.get(`${urlSerie}${id}`)
}
export const getEpisodios = async (id) => {
  return await axios.get(`${urlSerie}${id}/episodes`)
}
export const getCast = async (id) => {
  return await axios.get(`${urlSerie}${id}/cast`)
}
