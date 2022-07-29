const InfoSerie = ({ data }) => {
  return (
    <div className='container-fluid bg-primary d-flex flex-column mb-4 px-4 pb-4' style={{ borderRadius: '20px' }}>
      <div className='container-fluid text-center fs-2 text-success mb-3'>{data.name}</div>
      <div className='container-fluid d-sm-flex px-0'>
        <div className='container-fluid d-flex flex-column pe-sm-4 mx-0 p-0 col-sm-3 col-12'>
          <img src={data?.image?.medium === undefined ? '../src/assets/img/NoImg.png' : `${data?.image?.medium}`} alt='serie' />
          <button type='button' className={`btn btn-${data.status === 'Ended' ? 'danger' : 'success'} disabled mt-2`}>{data.status}</button>
        </div>
        <div className='container-fluid d-flex flex-column mt-sm-0 mt-3 col-sm-9 col-12 text-info' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '20px' }}>
          <div className='container-fluid fs-3'>Synopsis</div>
          <div className='container-fluid mt-3'>
            {
            data.genres.length === 0
              ? <span className='badge rounded-pill bg-info me-2'>No genre</span>
              : (
                <>
                  {data.genres.map(item => (
                    <span className='badge rounded-pill bg-info me-2' key={item}>{item}</span>
                  )
                  )}
                </>
                )
            }
          </div>
          <div className='container-fluid fs-5 d-flex align-items-center my-3 text-center' style={{ height: '100%' }}>{(data.summary).replace(/(<([^>]+)>)/ig, '')}</div>
        </div>
      </div>
    </div>
  )
}

export default InfoSerie
