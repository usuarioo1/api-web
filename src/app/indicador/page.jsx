'use client'
import React, { useState, useEffect } from 'react';

const DailyIndicatorsTable = () => {
  const [indicators, setIndicators] = useState(null);

  useEffect(() => {
    fetch('https://mindicador.cl/api')
      .then(response => response.json())
      .then(data => {
        setIndicators(data);
      })
      .catch(error => {
        console.error('Request failed', error);
      });
  }, []);

  return (
    <div>

      <h1 className='text-gray-700 text-3xl text-center mt-8 '>Indicadores Nacionales</h1>

      <div className="overflow-x-auto w-4/5 mx-auto mt-9">


        <table className="table">



          <thead className=''>

            <tr>
              <th className='w-20'></th>
              <th className="w-64">Indicador</th>
              <th className="w-64">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>UF</td>
              <td>{indicators && indicators.uf.valor}</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Dólar observado</td>
              <td>{indicators && indicators.dolar.valor}</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Dólar acuerdo</td>
              <td>{indicators && indicators.dolar_intercambio.valor}</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Euro</td>
              <td>{indicators && indicators.euro.valor}</td>
            </tr>
            <tr>
              <th>5</th>
              <td>IPC</td>
              <td>{indicators && `${indicators.ipc.valor}%`}</td>
            </tr>
            <tr>
              <th>6</th>
              <td>UTM</td>
              <td>{indicators && indicators.utm.valor}</td>
            </tr>
            <tr>
              <th>7</th>
              <td>IVP</td>
              <td>{indicators && indicators.ivp.valor}</td>
            </tr>
            <tr>
              <th>8</th>
              <td>Imacec</td>
              <td>{indicators && `${indicators.imacec.valor}%`}</td>
            </tr>
            <tr>
              <th>9</th>
              <td>Bitcoin</td>
              <td>{indicators && indicators.bitcoin.valor}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyIndicatorsTable;
