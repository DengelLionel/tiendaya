import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import IconFacebook from '../icons/IconFacebook'
import IconInstagram from '../icons/IconInstagram'
import IconTiktok from '../icons/IconTiktok'

const Footer = () => {
    return (
        <footer className="bg-negro2 w-full h-[350px] flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:w-full lg:items-center lg:justify-between lg:pl-[90px] lg:pr-[90px]">
                <Link href="/">
                    <div className=" w-[120px] h-[120px] relative">
                        <Image
                            src="https://res.cloudinary.com/darps1cta/image/upload/v1690912236/creatiendaya/crea-tienda-ya-white.png"
                            layout="fill"
                            priority={true}
                            objectFit="contain"
                            alt="crea tienda ya"
                        />
                    </div>
                </Link>

                <Link
                    className="text-blancoTres flex flex-row gap-[10px] items-center"
                    href={'mailto:info@creatiendaya.com'}>
                    {' '}
                    <FontAwesomeIcon icon={faEnvelope} /> info@creatiendaya.com
                </Link>
                <div className="flex flex-row gap-[15px] pt-[20px] pb-[20px]">
                    <Link
                        target="_blank"
                        href="https://www.facebook.com/creatiendaya">
                        {' '}
                        <IconFacebook fill="#46464D" />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://www.instagram.com/creatiendaya/">
                        {' '}
                        <IconInstagram fill="#46464D" />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://www.tiktok.com/@creatiendaya">
                        {' '}
                        <IconTiktok fill="#46464D" />
                    </Link>
                </div>
            </div>
            <div className="flex bg-negro w-full p-[20px] h-full flex-col gap-[10px] pt-[20px]">
                <p className="text-gray-300 text-sm text-center">
                    Crea tienda ya © 2023 Todos los derechos reservados
                </p>
                <Link
                    className="text-verde text-sm text-center"
                    href={'/politicas/politica_de_privacidad'}>
                    Politica de privacidad
                </Link>
            </div>
        </footer>
    )
}

export default Footer
