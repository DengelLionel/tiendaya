import React from 'react'

const AccionBannerColor = () => {
    return (
        <div className="bg-verde w-full h-full flex flex-col items-center justify-center pl-[30px] pr-[30px] pt-[45px] pb-[45px] gap-[20px] lg:flex-row lg:gap-[50px]">
            <h3 className="tracking-wide text-xl text-center leading-normal text-blancoTres font-bold font-montserrat lg:text-2xl">
                "Crea tienda ya" es exactamente lo que necesitas
            </h3>
            <button className="bg-transparent border-2 border-white tracking-wide w-[250px] leading-normal text-blancoTres  font-bold font-montserrat text-center pb-[15px] pt-[15px] pr-[10px] pl-[10px]">
                {' '}
                CONTÁCTANOS{' '}
            </button>
        </div>
    )
}

export default AccionBannerColor
