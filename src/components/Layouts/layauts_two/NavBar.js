import Image from 'next/legacy/image'
import Link from 'next/link'
/* import { useState } from 'react' */
import NavbarMenu from './NavbarMenu'

const Navbar = () => {
    /*    const [menuActive, setMenuActive] = useState(false)
    const [searchActive, setSearchActive] = useState(false)
 */
    /*     const toggleMenu = () => setMenuActive(!menuActive)
    const toggleSearch = () => setSearchActive(!searchActive) */
    return (
        <header className="bg-white fixed top-0 z-[999] shadow-lg w-full">
            <nav className="flex  items-center justify-between lg:pl-[60px] lg:pr-[60px]">
                <div className="flex items-center ">
                    <Link
                        className="font-semibold text-xl tracking-tight w-[220px] h-[90px] relative"
                        href="/">
                        <Image
                            src="https://res.cloudinary.com/darps1cta/image/upload/v1689460545/creatiendaya/crea-tienda-ya.jpg"
                            layout="fill"
                            objectFit="contain"
                            alt="crea tienda ya"
                        />
                    </Link>
                </div>
                <div className=" flex flex-grow lg:flex lg:justify-end lg:items-end">
                    <NavbarMenu />
                    {/* <SearchBar/> */}

                    {/*  <div>
              <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                Shopping Cart
              </a>
            </div> */}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
