import React from 'react'
import IconWhatsapp from '../icons/IconWhatsapp'
import Link from 'next/link'
const Whatsapp = () => {
    return (
        <Link
            target="_blank"
            href={'https://wa.link/yrxn29'}
            className="transition-all  duration-[500ms] w-[60px] h-[60px] lg:w-[65px] lg:h-[65px] shadow-lg lg:shadow-xl fixed z-[9999] right-[10px] lg:right-[30px] bottom-[20px] flex items-center justify-center rounded-full bg-verde hover:bg-verde_hover">
            <IconWhatsapp />
            <div className="absolute right-[65px] text-sm  bg-white text-negro font-bold font-latonormal text-center p-[5px] rounded-br-full rounded-bl-full rounded-tl-full rounded-tr-none shadow-xl w-[150px] lg:w-[200px] lg:text-md">
                Chatea con nosotros
            </div>
        </Link>
    )
}

export default Whatsapp
