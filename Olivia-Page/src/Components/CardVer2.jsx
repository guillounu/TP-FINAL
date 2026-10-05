

function CardVer2({ title, cover, altText, description, url, platform }) {
  return (
    <article className="film-art">
      <h4>{title}</h4>
      <div className="body-film">
        <div className="film-img">
          <img src={cover} alt={altText} />
        </div>
        <p>{description}</p>
      </div>
      <a href={url} target="_blank">
        Disponible en {platform}
      </a>
    </article>
  );
}

export default CardVer2;
