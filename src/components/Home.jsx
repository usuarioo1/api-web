import React from 'react'
import Acordion from './home/Acordion'
import Hero from './home/Hero'
import Code from './home/Code'


const Home = () => {
    return (
        <div>
            {/* <Carrusel /> */}
            <Hero />


            {/* <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center">
                <div className="mb-4">
                    <h2 className="text-xl font-bold">API WEB</h2>
                </div>
                <div className="mb-4">
                    <p>Sitio Web creado con el fin de educar respecto a las API y sus diferentes usos, acá encontraras información desde que es una API, sus aplicaciones más comunes y hasta como construir tu propia API, VAMOS!</p>
                </div>
            </div> */}



            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-4xl font-bold text-center mb-10 ">Qué es una API?</h2>
                <div className="mb-4 flex justify-center">
                    <img src="https://www.planningpme.es/img/planningpme-api.jpg" alt="Imagen" className="w-100 h-64 object-cover" />
                </div>
                <div className="mb-4">

                </div>
                <div className="mb-4">
                    <p>Una API, o Interfaz de Programación de Aplicaciones (del inglés, Application Programming Interface), es un conjunto de reglas y protocolos que permite que diferentes programas de software interactúen entre sí. Es como un mensajero que lleva una solicitud de un programa a otro y luego devuelve la respuesta al programa original.


                        Imagina que estás en un restaurante. El menú es como una API: te muestra las opciones que puedes solicitar. Cuando eliges lo que quieres comer, el camarero (que actúa como la API) lleva tu pedido a la cocina y luego trae la comida de vuelta a tu mesa.


                        En términos de software, una API permite que diferentes programas se comuniquen entre sí. Por ejemplo, si estás utilizando una aplicación de clima en tu teléfono, esa aplicación utiliza una API para obtener los datos del clima de un servidor en algún lugar. La aplicación envía una solicitud a través de la API (el pedido), el servidor procesa esa solicitud (la cocina prepara la comida) y luego la API devuelve los datos del clima a la aplicación (el camarero trae la comida a tu mesa).


                        Las APIs son esenciales para la funcionalidad de la mayoría de las aplicaciones de software modernas. Permiten que las aplicaciones compartan datos y realicen acciones entre sí de una manera estandarizada y segura. Por ejemplo, cuando utilizas una aplicación en tu teléfono para publicar una foto en las redes sociales, esa aplicación utiliza una API para interactuar con el servidor de la red social.


                        En resumen, una API es una forma de permitir que diferentes programas de software interactúen entre sí, lo que permite una mayor funcionalidad y una mejor experiencia para el usuario.</p>
                </div>
            </div>

            <Acordion />

            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center">
                <div className="mb-4">
                    <h2 className="text-3xl font-bold">¿Cómo se ve una llamada a una API?</h2>
                </div>
                
            </div>
            <Code />
        </div>
    )
}

export default Home
