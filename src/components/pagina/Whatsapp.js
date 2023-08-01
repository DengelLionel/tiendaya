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
            <div className="lg:absolute lg:right-[65px] lg:bg-white lg:text-negro lg:font-bold lg:font-latonormal lg:text-center lg:p-[5px] lg:rounded-br-full lg:rounded-bl-full lg:rounded-tl-full lg:rounded-tr-none lg:shadow-xl lg:w-[200px]">
                Chatea con nosotros
            </div>
        </Link>
    )
}

export default Whatsapp
