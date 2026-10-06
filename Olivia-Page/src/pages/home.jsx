//import para llamar al componente
import CardVer1 from "../Components/CardVer1";
//imports para llamr dentro de los componentes!!
import coverSour from "../assets/img/PORTADA SOUR.jpg";
import coverGuts from "../assets/img/PORTADA GUTS ALTERNATIVA.jpg";
import coverYSPSFAGSIL from "../assets/img/PORTADA YSPSFAGSIL ALTERNATIVA.jpg";

function home() {
  return (
    <main>
      <section className="hero">
        <h2>¿Quién es Olivia Rodrigo?</h2>
        <p>
          La cantautora Olivia Rodrigo, ganadora del premio GRAMMY y con ventas
          multiplatino, es una de las artistas más influyentes de la actualidad.
          Tras batir récords con su álbum debut "SOUR" —que alcanzó el número
          uno y obtuvo la certificación de séxtuple platino, convirtiéndose en
          el álbum más rápido de la historia en lograr que todas sus canciones
          recibieran la certificación de platino o superior de la RIAA—, la
          cantautora Olivia Rodrigo (ganadora de tres premios GRAMMY®) regresó
          de forma triunfal con su segundo álbum, "GUTS", demostrando una
          sofisticación aún mayor como vocalista y letrista. El tercer álbum de
          estudio de Olivia, "you seem pretty sad for a girl so in love", ya
          está disponible.
        </p>
        <p>*Descripción tomada de Spotify.*</p>
        <a
          className="spotify-btn"
          href="https://open.spotify.com/intl-es/artist/1McMsnEElThX1knmY4oliG"
          target="_blank"
        >
          Ir a Spotify
        </a>
      </section>
      <section className="musica-section">
        <h2>Su música</h2>

        <section className="cards-section">
          <div className="cards-grid">
            <CardVer1
              img={coverSour}
              albumName={"SOUR (2021)"}
              description={
                "Es el aclamado álbum debut de estudio de la cantante estadounidense, lanzado el 21 de mayo de 2021. El disco explora la angustia juvenil, el desamor, los celos y la frustración de la adolescencia, combinando géneros como el pop comercial, el pop-punk y el rock alternativo."
              }
              urlSpoti="https://open.spotify.com/intl-es/album/6s84u2TUpR3wdUv4NgKA2j?si=QgG_amBoSuy6Tzrlvah2oA"
            />
            <CardVer1
              img={coverGuts}
              albumName={"GUTS (2023)"}
              description={
                "El segundo álbum de estudio de la artista, lanzado el 8 de septiembre de 2023 por Geffen Records. El disco explora los dolores del crecimiento, el paso a la adultez y la intuición,combinando pop, rock de los 90 y punk."
              }
              urlSpoti="https://open.spotify.com/intl-es/album/1xJHno7SmdVtZAtXbdbDZp?si=i_Guph-oRGeIQiD0CR0it"
            />

            <CardVer1
              img={coverYSPSFAGSIL}
              albumName={"You seem pretty sad for a girl so in love (2026)"}
              description={
                "El tercer álbum de estudio de Olivia Rodrigo, lanzado el 12 de junio de 2026. El disco funciona como un relato conceptual en tiempo real que explora la dolorosa dualidad entre un romance intenso y la desilusión emocional que lo acompaña."
              }
              urlSpoti="https://open.spotify.com/intl-es/album/3WZZF72ihlKPZBS4zSsNHl?si=qOHZXCFhRL6B2J5FYPoaqg"
            />
          </div>
        </section>
      </section>
    </main>
  );
}

export default home;
