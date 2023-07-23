import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
const Redes = () => {
    return (
        <div className="flex flex-col gap-[20px] lg:gap-0 lg:flex-row items-center justify-center">
            <div className=" w-full md:w-1/2 flex flex-col items-center lg:w-[400px] lg:gap-[20px] md:justify-center md:items-center text-center ">
                <h2 className="text-2xl md:text-4xl leading-normal lg:leading-[3rem] tracking-wide font-bold lg:font-extrabold text-gray-100 font-montserrat  text-center">
                    Elevate sobre el ruido de las{' '}
                    <span className="text-purple-100 font-latonormal">
                        {' '}
                        redes sociales
                    </span>
                </h2>
                <p className="text-lg tracking-wide text-gray-100 mb-4 font-latoitalic">
                    ¿Instagram, Facebook, TikTok o LinkedIn?
                </p>
                <Link
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-8 py-4 text-lg text-white bg-green-800 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 font-latoitalic"
                    href="/">
                    Comienza Ahora
                </Link>
            </div>
            <figure className="relative w-[340px] h-[340px] lg:w-[500px] lg:h-[500px] top-0 left-0">
                <Image
                    src="https://res.cloudinary.com/darps1cta/image/upload/v1689912558/creatiendaya/campa%C3%B1as-redes-sociales-tienda-online-shopify_foklbs.png"
                    alt="Image 1"
                    layout="fill"
                    objectFit="contain"
                />
            </figure>
            <div className=" w-full md:w-1/2 flex flex-col items-center lg:w-[400px] lg:gap-[20px] md:justify-center md:items-center text-center ">
                <p className="text-lg tracking-wide text-gray-200 mb-4 font-latoitalic">
                    Desarrolla una estrategia robusta en medios digitales para
                    propulsar tu negocio a nuevas alturas.
                </p>
            </div>
        </div>
    )
}

export default Redes
