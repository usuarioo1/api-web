import React from 'react'

const Acordion = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-center mb-10 mt-10">
                API REST, API RESTFUL
            </div>
            <div className="collapse collapse-arrow bg-base-200 w-2/3">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    API REST
                </div>
                <div className="collapse-content">
                    <p>Una API REST, o API de Transferencia de Estado Representacional, es una API que sigue los principios de la arquitectura REST. Esta arquitectura se basa en el intercambio de recursos y está centrada en HTTP. Con una API REST, las solicitudes se realizan de forma independiente, utilizando la caché para evitar llamadas recurrentes al servidor, y siguiendo una interfaz uniforme para la manipulación de recursos</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 w-2/3">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    API RESTFUL
                </div>
                <div className="collapse-content">
                    <p>Una API RESTful es una API que cumple completamente con los criterios de la arquitectura REST. Esto significa que sigue los principios de REST de manera estricta, permitiendo que las aplicaciones se comuniquen de manera eficiente y segura. Las APIs RESTful son independientes de la tecnología utilizada y permiten que tanto las aplicaciones cliente como las servidoras se desarrollen en varios lenguajes de programación sin afectar el diseño de la API.</p>
                </div>
            </div>
        </div>

    )
}

export default Acordion
