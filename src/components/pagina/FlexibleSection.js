import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'

export default function FlexibleSection() {
    return (
        <section
            id="section-start-journey"
            className="relative py-10 pt-[100px] md:py-16 xl:py-24 lg:w-[800px] flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col justify-center lg:w-[800px] items-center md:flex-row md:items-center md:justify-center lg:gap-[100px] ">
                <div className="mb-10 md:mb-0 animate__animated animate__fadeInLeft animate__duration-1s animate__delay-2s lg:w-[450px] flex flex-col items-center gap-[10px]">
                    <h1
                        className={`text-2xl text-center md:text-4xl leading-normal lg:leading-[3rem] tracking-wide font-bold lg:font-extrabold text-white font-montserrat`}>
                        TRANSFORMA TU NEGOCIO, VÉNDELE AL MUNDO
                    </h1>
                    <h3 className="text-2xl tracking-wide md:text-xl text-center text-gray-200 font-semibold font-latoitalic mb-4">
                        Da vida a tu tienda online en minutos y acelera tu
                        crecimiento
                    </h3>
                    <p className="text-lg tracking-wide text-gray-200 mb-4 text-center font-latoitalic">
                        <i>¡El mundo está listo para tu producto! </i>
                    </p>
                    <Link
                        className="inline-block px-8 py-4 text-lg text-white shadow-md border-2 hover:bg-green-600 bg-transparent rounded-lg  transition-colors duration-300 font-latoitalic"
                        href="/"
                        target="_blank"
                        rel="noreferrer">
                        Comienza Ahora
                    </Link>
                </div>

                <div className="relative w-[340px] md:w-auto animate__animated animate__fadeInRight animate__duration-1s animate__delay-2s min-h-[400px]">
                    <figure className="absolute w-[340px] h-[340px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] top-0 left-0">
                        <Image
                            src="https://res.cloudinary.com/darps1cta/image/upload/v1689896647/creatiendaya/dise%C3%B1os-personalizados-de-tiendas-online.png"
                            alt="Image 1"
                            layout="fill"
                            objectFit="contain"
                        />
                    </figure>
                </div>
            </div>
        </section>
    )
}
