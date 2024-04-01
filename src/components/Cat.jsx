'use client'
import React, { useState, useEffect } from 'react';
import 'dotenv/config'

const Cat = () => {
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=CAT_API_KEY')
      .then(response => response.json())
      .then(data => {
        // Aquí puedes manejar los datos de la respuesta de la API
        const lastThreeImages = data.slice(-3); // Obtener los últimos 3 elementos del array
        setCatImages(lastThreeImages); // Establecer las imágenes en el estado
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []); // 

  return (
    <div>
      <h1 className='text-4xl text-center mt-7'>Gatitos del Día</h1>
      <div className="grid grid-cols-3 gap-4 mt-10">

        {catImages.map((cat, index) => (
          <img key={index} src={cat.url} alt={`Cat ${index}`} className="rounded-lg shadow-lg w-5/6 m-auto" />
        ))}
      </div>
    </div>
  );
};

export default Cat;
