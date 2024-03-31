import React from 'react';
import Link from 'next/link'

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
    <div>
      <div className='w-full sm:w-2/4 flex items-center justify-center mx-auto my-auto'>
        <div className="mockup-code">
          <pre>
            <code dangerouslySetInnerHTML={{ __html: codigo }} />
          </pre>
        </div>

      </div>

      <Link href='/indicador'><button className="btn glass mx-auto my-4 block text-lg bg-slate-500">Probar API</button></Link>

    </div>


  );
};

export default Code;
