import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'

const Personalizacion = () => {
    return (
        <section className="relative bg-white py-10 p-[16px]  flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-4 lg:gap-[50px]">
            <div className="relative w-full md:w-[300px]  h-[300px] md:h-[250px] lg:w-[500px] lg:h-[480px] ">
                <Image
                    src="https://res.cloudinary.com/darps1cta/image/upload/v1689896649/creatiendaya/crea-tu-tienda-y-comienza-vender.png"
                    alt="Image 1"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className=" w-full md:w-1/2 flex flex-col items-center lg:w-[480px] lg:gap-[20px] md:justify-center md:items-center text-center ">
                <h2 className="text-2xl md:text-4xl leading-normal lg:leading-[3rem] tracking-wide font-bold lg:font-extrabold text-gray-900 font-playnormal italic text-center">
                    Tu tienda,{' '}
                    <span className="text-green-400"> tu estilo</span>
                </h2>
                <p className="text-lg tracking-wide text-gray-500 mb-4 font-latoitalic">
                    Con "Crea Tienda Ya" no estás limitado a diseños
                    preestablecidos. Personaliza tu tienda online para que
                    refleje la esencia de tu marca y atraiga a tus clientes
                    ideales.
                </p>
                <Link
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-8 py-4 text-lg text-white bg-green-800 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 font-latoitalic"
                    href="/">
                    Comienza Ahora
                </Link>
            </div>
        </section>
    )
}

export default Personalizacion
