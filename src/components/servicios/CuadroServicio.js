import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
const CuadroServicio = ({
    titulo,
    descripcion,
    llamadaaccion,
    link,
    icono,
}) => {
    return (
        <div className="container pt-[20px] px-6 space-y-8  ">
            <div
                className={`justify-center text-center gap-6 md:text-left md:flex  lg:items-center lg:gap-16`}>
                <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 md:w-[250px] lg:w-[300px]">
                    <div className="flex flex-row justify-between">
                        <FontAwesomeIcon
                            icon={icono}
                            style={{
                                color: '#00C957',
                                width: '36',
                                height: '36',
                            }}
                        />
                        <Link
                            href={link}
                            className=" text-gray-300 hover:text-gray-400">
                            <FontAwesomeIcon
                                icon={faSquarePlus}
                                style={{ width: '20', height: '20' }}
                            />
                        </Link>
                    </div>
                    <Link href={link}>
                        <h2 className="text-xl pt-[10px] tracking-wide leading-normal text-blancoTres hover:text-verde transition-all duration-[500ms] font-bold">
                            {titulo}{' '}
                        </h2>
                    </Link>
                    <p className="text-md tracking-wide leading-normal text-gray-400">
                        {descripcion}
                    </p>
                    <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                        <button
                            title={llamadaaccion}
                            className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max">
                            <span className="block tracking-wide leading-normal text-white font-semibold">
                                {llamadaaccion}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CuadroServicio
