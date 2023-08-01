import React from 'react'
import Image from 'next/legacy/image'
const Banner = () => {
    return (
        <div className="relative w-full h-[129px]">
            <Image
                src={
                    'https://img.freepik.com/foto-gratis/concepto-distribucion-suministro-fabricacion-produccion-producto_53876-138508.jpg?w=900&t=st=1690904724~exp=1690905324~hmac=c0c9a1b14a7385ad19f7c8044092672e35a2b1c26d2d9175080ed13670f4cde2'
                }
                alt="banner"
                layout="fill"
                objectFit="cover"
            />
            <h1 className=" absolute top-[27%] left-[15%] lg:top-[18%] lg:left-[30%] text-[3rem] lg:text-[5rem] font-montserrat font-extrabold text-blackTransparente">
                SERVICIOS
            </h1>
        </div>
    )
}

export default Banner
