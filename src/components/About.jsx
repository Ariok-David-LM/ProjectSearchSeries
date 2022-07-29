const About = () => {
  return (
    <div className='accordion' id='accordionExample'>
      <div className='accordion-item'>
        <h2 className='accordion-header' id='headingOne'>
          <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='false' aria-controls='collapseOne'>
            <h2 className='fs-5'>
              ¡Sobre esta Aplicacion!
            </h2>
          </button>
        </h2>
        <div id='collapseOne' className='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExample' style={{}}>
          <div className='accordion-body d-flex flex-column text-center'>
            Esta es una aplicacion que cuenta con una amplia cantidad de series con informacion como resumenes, temporadas y casting de las mismas.<br />
            Esto como parte de un proyecto en el cual se aplican todos los conocimeintos adquiridos en el curso Proffesional Encoding de DEV.F. <br />
            API: <a href='https://www.tvmaze.com/api' target='_blank' rel='noopener noreferrer'>https://www.tvmaze.com/api</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
