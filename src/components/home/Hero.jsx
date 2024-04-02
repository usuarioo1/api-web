import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">API WEB</h1>
                        <p className="mb-5">Sitio Web creado con el fin de educar respecto a las API y sus diferentes usos, acá encontraras información desde que es una API, sus aplicaciones más comunes y hasta como construir tu propia API, VAMOS!</p>
                        <button className="btn btn-primary">API WEB</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
