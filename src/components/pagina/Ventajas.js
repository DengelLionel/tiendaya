import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStore, faShop } from '@fortawesome/free-solid-svg-icons'
const Ventaja = ({ titulo, descripcion, nombreIcon, colorborde }) => (
    <div
        className={`flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-5 bg-white rounded-md shadow-xl border-l-4 ${colorborde} h-auto gap-[10px] shadow-md lg:shadow-xl`}>
        <div className="flex justify-center ">
            <FontAwesomeIcon
                icon={nombreIcon}
                className="w-[40px] h-[40px]"
                style={{ color: '#00a329', width: '40px', height: '40px' }}
            />
        </div>

        <div className="font-bold text-xl font-latonormal">{titulo}</div>
        <div className="font-normal text-sm font-latonormal">{descripcion}</div>
    </div>
)
const Ventajas = () => {
    return (
        <div className=" w-full flex flex-col items-center pt-[100px] pb-[100px] lg:gap-[20px] md:justify-center md:items-center text-center ">
            <h2 className="text-xl  md:text-3xl leading-normal lg:leading-[3rem] tracking-wide font-bold lg:font-extrabold text-gray-700 font-montserrat  text-center lg:w-[400px]">
                ¿POR QUÉ ESCOGER "CREA TIENDA YA"?
            </h2>
            <div className="flex sm:flex-row  flex-col space-y-2 sm:space-x-2 lg:gap-[20px] flex-row w-full items-center justify-center h-auto">
                <Ventaja
                    titulo="Especialistas en Shopify y WooCommerce"
                    colorborde="border-blue-300"
                    nombreIcon={faStore}
                    descripcion="Expertos en plataformas líderes de comercio electrónico."
                />
                <Ventaja
                    titulo="Social Media Friendly"
                    colorborde="border-green-300"
                    nombreIcon={faHeart}
                    descripcion="Tu tienda lista para conectar con tus redes sociales."
                />
                <Ventaja
                    titulo="Tienda a tu medida"
                    colorborde="border-purple-300"
                    nombreIcon={faShop}
                    descripcion="Nos adaptamos a lo que necesitas, no al revés."
                />
            </div>
        </div>
    )
}

export default Ventajas
