import Episodio from './Episodio'

const Temporada = ({ number, episodios }) => {
  return (
    <div className='accordion-item mb-1' style={{ borderRadius: '20px' }}>
      <h2 className='accordion-header' id={`h${number}`}>
        <button style={{ borderRadius: '20px' }} className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target={`#s${number}`} aria-expanded='false' aria-controls={`s${number}`}>
          {`Season ${number}`}
        </button>
      </h2>
      <div id={`s${number}`} className='accordion-collapse collapse' aria-labelledby={`h${number}`} data-bs-parent='#accordionExample'>
        {episodios.map(item => (
          <Episodio number={item.number} name={item.name} fecha={item.airdate} key={`${number}-${item.number}`} />
        )
        )}
      </div>
    </div>
  )
}

export default Temporada
