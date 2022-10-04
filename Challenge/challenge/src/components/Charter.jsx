const Charter = ( { name, status, species, image, setImage}) => {
  return (
    <>
      <div className="color-square">
        <button 
        style={{ backgroundImage: image }}
        onClick={() => {setImage(image)}}
        >
          <img src={image}/>
        </button>
        <h3> { name } </h3>
        <h3> { status } </h3>
        <h3> { species } </h3>
      </div>
      
    </>
  )
}

export default Charter;