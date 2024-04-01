'use client'
import React, { useState, useEffect } from 'react';
import 'dotenv/config'

const Cat = () => {
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=beng&api_key=${process.env.CAT_API_KEY}`);
        const data = await response.json();
        const lastThreeImages = data.slice(-3);
        setCatImages(lastThreeImages);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchCatImages();
  }, []); 

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
