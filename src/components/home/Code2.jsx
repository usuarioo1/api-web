import React from 'react'

const Code2 = () => {
    return (
        <div className='"flex flex-col items-center justify-center min-h-screen"'>
            <div className='text-center'>
                Para realizar una llamada a la API de Mindicador en JavaScript y obtener los datos de un indicador específico, puedes utilizar la URL proporcionada: https://mindicador.cl/api/&#123;tipo_indicador&#125;. Los indicadores disponibles son: uf, ivp, dolar, dolar_intercambio, euro, ipc, utm, imacec, tpm, libra_cobre, tasa_desempleo y bitcoin.
            </div>
            <ol className='list-decimal text-center mt-10 mb-9'>
                <li><code> ✔ Entrega los últimos valores registrados de los principales indicadores: https://mindicador.cl/api</code></li>
                <li><code> ✔ Entrega los valores del último mes del indicador consultado: https://mindicador.cl/api/&#123;tipo_indicador&#125;</code></li>
                <li><code> ✔ Entrega el valor del indicador consultado según la fecha especificada: https://mindicador.cl/api/&#123;tipo_indicador&#125;/&#123;dd-mm-yyyy&#125;</code></li>
                <li><code> ✔ Entrega los valores del indicador consultado según el año especificado: https://mindicador.cl/api/&#123;tipo_indicador&#125;/&#123;yyyy&#125;</code></li>
            </ol>
        </div>
    )
}

export default Code2
