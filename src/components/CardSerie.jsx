import { Link } from 'react-router-dom'

const CardSerie = ({ show }) => {
  return (
    <Link to={`/${show.id}`} style={{ textDecoration: 'none' }}>
      <div className='card border-primary m-3 ' style={{ maxWidth: '17rem' }}>
        <div className='card-header'>
          <h4 className='text-center line-clamp'>
            {show.name}
          </h4>
        </div>
        <img src={show?.image?.medium === undefined ? '../ProjectSearchSeries/assets/img/NoImg.png' : `${show?.image?.medium}`} alt={`${show.name}`} width='265px' />
      </div>
    </Link>
  )
}

export default CardSerie
