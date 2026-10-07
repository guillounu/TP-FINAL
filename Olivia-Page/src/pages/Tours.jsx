//imports de las imagenes que pertenecen a la galería
import SOURwt1 from "../assets/img/ORBR005.jpg";
import GUTSwt1 from "../assets/img/GUTS2.jpg";
import SOURwt2 from "../assets/img/ORBR008.jpg";
import SOURwt3 from "../assets/img/SOUR-TOUR.jpg";
import SOURwt4 from "../assets/img/SOUR-TOUR2.jpg";
import SOURwt5 from "../assets/img/SOUR-TOUR3.jpg";
import SOURwt6 from "../assets/img/SOUR4.jpg";
import GUTSwt2 from "../assets/img/GUTS-Argentina.jpg";

//array de datos para que la galería se llene con las imágenes sin tener que llamar más de una vez al componente
const tourImages = [
  { id: 1, src: SOURwt1, alt: "SOUR worldtour" },
  { id: 2, src: GUTSwt1, alt: "GUTS worldtour" },
  { id: 3, src: SOURwt2, alt: "SOUR Worldtour" },
  { id: 4, src: SOURwt3, alt: "SOUR Worldtour" },
  { id: 5, src: SOURwt4, alt: "SOUR Worldtour" },
  { id: 6, src: SOURwt5, alt: "SOUR Worldtour" },
  { id: 7, src: SOURwt6, alt: "SOUR Worldtour" },
  { id: 8, src: GUTSwt2, alt: "GUTS worldtour" },
];

import React from "react";
import Gallery from "../Components/Gallery";

function Tours() {
  return (
    <main>
      <h1 className="page-title">SUS GIRAS</h1>

      <p>
        La cantante estadounidense Olivia Rodrigo ha encabezado dos giras de
        conciertos para promocionar sus álbumes de estudio. Comenzando por el
        "SOUR TOUR" dónde concretó hasta 49 shows, entre Europa y America del
        norte. Su segunda gira de conciertos "Guts World Tour" la llevó a
        realizar 102 conciertos, sumando a la lista Asia, America del sur y
        Oceanía.
      </p> 
{/*sección de la galería, que se llena con el array de datos*/}
      <Gallery images={tourImages} />
    </main>
  );
}

export default Tours;
