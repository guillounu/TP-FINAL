
//imports de las img que pertenecen a las cards
import CardVer2 from "../Components/CardVer2";
import coverAmericanGirl from "../assets/img/Americangirl.jpg";
import coverBizardvaark from "../assets/img/Bizaardvark.webp";
import coverHSMtm from "../assets/img/hsm.webp";
import coverDh2u from "../assets/img/drivinghome2you.jpg";
import coverGutsWT from "../assets/img/GUTSWT.jpg";

//array de datos para que la cards se llenen solas, sin tener que llamar más de una vez al componente
const moviesInfo = [
  {
    id: 1,
    title: 'American Girl: Grace Stirs Up Success (2015)',
    cover:coverAmericanGirl,
    altText: 'Grace Stirs Up Success portada',
    description:'Grace está emocionada por el verano hasta que su madre anuncia que la familia viaja a París; Grace tiene que aprender a llevarse bien con su prima francesa y tratar de encontrar una manera de ayudar a mantener la panadería de sus abuelos abierta.',
    url: "https://www.primevideo.com/-/es/detail/0Q18ZAYUKL4U60EXFSAAEC886M",
    platform: 'Prime Video',
  },
  {id: 2,
    title: 'BIZAARDVARK (2016)',
    cover:coverBizardvaark,
    altText: 'Bizaardvark portada',
    description:'Las mejores amigas Paige y Frankie crean videos musicales cómicos para su popular canal en línea, con diez mil inscritos.',
    url: "https://www.disneyplus.com/es-ar/browse/entity-d1d5d540-7fef-4cc9-a20a-f3f3b297c045",
    platform: 'Disney+',},
  {id: 3,
    title: 'High school musical: The musical: The series (2019)',
    cover:coverHSMtm,
    altText: 'HSM:THE MUSICAL portada',
    description:'Un grupo de estudiantes de la escuela secundaria East High prepara una presentación de "High School Musical", pero aprenderán rápidamente que puede haber tanto drama en la vida real como en la ficción.',
    url: "https://www.disneyplus.com/es-ar/browse/entity-23ff57da-f65b-46e8-a47e-2514e9b5baff",
    platform: 'Disney+',
  },
  {
    id: 4,
    title: 'Olivia Rodrigo: driving home 2 u (2022)',
    cover:coverDh2u,
    altText: 'drivinghome2u portada',
    description:'La cantautora Olivia Rodrigo explora el proceso creativo detrás de su primer álbum en un viaje íntimo que empieza en Salt Lake City y termina en Los Ángeles.',
    url: "https://www.disneyplus.com/es-ar/browse/entity-e1ed34a6-0ac4-421f-b259-49e29c697e57",
    platform: 'Disney+',
  },
  {id: 5,
    title: 'Olivia Rodrigo: GUTS World Tour (2024)',
    cover: coverGutsWT,
    altText: "GUTS world tour portada",
    description:'En un concierto en su ciudad natal, Los Ángeles, Olivia Rodrigo pone todo su corazón en una noche llena de éxitos número uno y baladas pop-rock.',
    url: "https://www.netflix.com/ar/title/81930855",
    platform: 'Netflix',
  },
];

function Filmografia() {
  return (
    <article>
      <h1>FILMOGRAFÍA</h1>

      <p className="film-desc">
        Aparte de su carrera como cantante, Olivia, comenzó su camino artistico
        como actriz; acá podes conocer las producciones en las que participó.
      </p>
{/* sección de las cards que se llenan con el array de datos */}
      <section className="filmografía">
        {moviesInfo.map((movie) => (
          <CardVer2
            key={movie.id}
            title={movie.title}
            cover={movie.cover}
            altText={movie.altText}
            description={movie.description}
            url={movie.url}
            platform={movie.platform}
          />
        ))}
      </section>
    </article>
  );
}

export default Filmografia;
