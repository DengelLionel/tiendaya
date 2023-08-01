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
        </div>
    )
}

export default Banner
