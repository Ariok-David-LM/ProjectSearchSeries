export const getSeasons = (episodios) => {
  const temporadas = []
  let temporada = 0
  episodios.forEach(element => {
    if (element.number === 1) {
      temporada++
      temporadas.push(temporada)
    }
  })
  return temporadas
}

export const getEpisodes = (episodios, season) => {
  const episodiosTemporada = []
  episodios.forEach(element => {
    if (element.season === season) {
      episodiosTemporada.push(element)
    }
  })
  return episodiosTemporada
}
