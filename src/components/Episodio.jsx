const Episodio = ({ number, name, fecha }) => {
  return (
    <div className='accordion-body' style={{ padding: '4px 10px' }}>
      <div className='container-fluid card border-secondary rounded-pill' style={{ padding: '0px 20px' }}>
        <strong className='line-clamp'>{`${number}.  ${name}`}</strong>    ({fecha})
      </div>
    </div>
  )
}

export default Episodio
