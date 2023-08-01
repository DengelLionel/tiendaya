import React, { useContext, useEffect, useRef } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/legacy/image'
import Link from 'next/link'
/* import { useRouter } from 'next/router' */
import NavbarMenu from './NavbarMenu'
const NavBarMobil = () => {
    /*    const router = useRouter() */

    const { isOpen, setIsOpen } = useContext(PaginaContextValue)

    const navRef = useRef()

    useEffect(() => {
        const handleClickOutside = event => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <nav
            ref={navRef}
            className={`h-[70px] fixed z-[999] bg-white shadow-md md:h-[70px] pt-[16px] pb-[16px] transition-all duration-[700ms] border-b-[1px] border-blueOne border-opacity-25 w-full lg:hidden`}>
            <div className="flex justify-between items-center mb-[10px]">
                <div className=" flex flex-row gap-[22px] ml-[30px] transition-all duration-[0.5s]  lg:hidden">
                    {isOpen ? (
                        <FontAwesomeIcon
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-blueTwo"
                            style={{ width: '25px', height: '25px' }}
                            icon={faArrowLeft}
                        />
                    ) : (
                        <FontAwesomeIcon
                            onClick={() => setIsOpen(!isOpen)}
                            icon={faBars}
                            className={`text-blueTwo transition-all duration-[0.5s] ${
                                isOpen ? 'rotate-12' : 'rotate-0'
                            }`}
                            style={{ width: '25px', height: '25px' }}
                        />
                    )}
                </div>
                <div className="relative w-[190px] h-[42px]">
                    <Link href={'/'}>
                        <Image
                            layout="fill"
                            objectFit="contain"
                            priority={true}
                            src={
                                'https://res.cloudinary.com/darps1cta/image/upload/v1689460545/creatiendaya/crea-tienda-ya.jpg'
                            }
                            alt="crea tienda ya"
                        />
                    </Link>
                </div>
            </div>

            <div
                className={`${
                    isOpen
                        ? 'block transition-all duration-[0.5s] absolute left-0 bg-[#fafafa] shadow-lg w-[270px] h-[500px] opacity-100 visible overflow-y-auto'
                        : 'opacity-0  transition-all duration-[0.5s] invisible w-0  h-[500px] left-[-100%]'
                } lg:block`}>
                <NavbarMenu />
            </div>
        </nav>
    )
}

export default NavBarMobil
