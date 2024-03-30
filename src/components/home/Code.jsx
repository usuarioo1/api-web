import React from 'react';

const Code = () => {
  const codigo = `
    const tipoIndicador = 'dolar';
    const apiUrl = \`https://mindicador.cl/api/\${tipoIndicador}\`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Aquí puedes trabajar con los datos obtenidos
      })
      .catch(error => {
        console.error('Se produjo un error al obtener los datos:', error);
      });
  `;

  return (
    <div className='w-full sm:w-2/4 flex items-center justify-center mx-auto my-auto'>
      <div className="mockup-code">
        <pre>
          <code dangerouslySetInnerHTML={{ __html: codigo }} />
        </pre>
      </div>
    </div>

  );
};

export default Code;
