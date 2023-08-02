import React from 'react'
import Image from 'next/legacy/image'
const NuestrosClientes = () => {
    return (
        <div className="pt-[20px] pb-[20px] lg:pt-[50px] lg:pb-[50px] flex flex-col w-full items-center justify-center bg-negro2">
            <h2 className="text-xl  md:text-3xl leading-normal lg:leading-[3rem] tracking-wide font-bold lg:font-extrabold text-blancoTres font-montserrat  text-center lg:w-[400px] lg:pb-[20px]">
                Nuestros Clientes
            </h2>
            <section className=" w-full flex flex-wrap items-center justify-center gap-[15px] lg:gap-[35px] ">
                <div className="relative w-[200px] h-[90px] transition-all duration-[300ms] grayscale hover:grayscale-0">
                    <Image
                        src={
                            'https://res.cloudinary.com/darps1cta/image/upload/v1687493114/nexo/Nexo-Medic_Logo_dklapo.png'
                        }
                        alt="cliente"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="relative w-[200px] h-[90px] transition-all duration-[300ms] grayscale hover:grayscale-0">
                    <Image
                        src={
                            'https://res.cloudinary.com/darps1cta/image/upload/v1690936587/creatiendaya/fivicon_isatex_fforlj.jpg'
                        }
                        alt="cliente"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="relative w-[200px] h-[90px]  transition-all duration-[300ms] grayscale hover:grayscale-0">
                    <Image
                        src={
                            'https://res.cloudinary.com/darps1cta/image/upload/v1690940417/creatiendaya/dtodo-store.jpg'
                        }
                        alt="cliente"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="relative w-[200px] h-[90px] transition-all duration-[300ms] grayscale hover:grayscale-0">
                    <Image
                        src={
                            'https://res.cloudinary.com/darps1cta/image/upload/v1690940703/creatiendaya/LOGO_PNG_TENDENCIA_NEW_2023_150x_w63khe.webp'
                        }
                        alt="cliente"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </section>
        </div>
    )
}

export default NuestrosClientes
