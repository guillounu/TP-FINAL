import React from "react";

function Gallery({images}) {
  return (
    <div>
      
      <section className="gallery-section">
        <div className="gallery">
            {images.map((item) => (
                <img key={item.id} className='gallery-item'  src={item.src} alt={item.alt} />
            ))}            
        </div>
      </section>
    </div>
  );
}

export default Gallery;
