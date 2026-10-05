

function CardVer1({ img, altText, albumName, description, urlSpoti }) {
  return (
    <article className='card'>
      <img src={img} alt={altText} />
      <div className='card-body'>
       <h3>{albumName}</h3>
       <p>{description}</p>
       <a className='spotify-btn' href={urlSpoti} target='_blank'><i className='fa-brands fa-spotify'></i>Escuchalo acá</a>  
      </div>

    </article>

   
  );
}
export default CardVer1