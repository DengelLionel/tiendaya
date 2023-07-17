import Link from 'next/link'
/* import { useRouter } from 'next/router' */
const Li = ({ children }) => {
    /*     const router = useRouter() */

    return (
        <li className="relative pb-[7px] overflow-hidden before:content-[''] before:absolute before:w-full before:h-[4px] before:rounded-md before:bottom-0 before:left-[-100%] before:bg-green-400 before:transition-all before:duration-[0.3s] hover:before:left-0">
            {children}
        </li>
    )
}
export default function NavbarMenu() {
    return (
        <ul className="flex flex-col lg:flex-row gap-[20px] p-[20px] lg:gap-[30px] lg:p-0">
            <Li>
                <Link
                    href="/"
                    className="text-gray-600 text-md font-montserrat font-bold  lg:font-bold lg:text-[13px] uppercase">
                    Inicio
                </Link>
            </Li>
            <Li>
                <Link
                    href="#"
                    className="text-gray-600 font-montserrat font-bold  lg:font-bold lg:text-[13px] uppercase">
                    Sobre nosotros
                </Link>
            </Li>
            <Li>
                <Link
                    href="#"
                    className="text-gray-600  font-montserrat font-bold  lg:font-bold lg:text-[13px] uppercase">
                    Typography
                </Link>
            </Li>
            <Li>
                <Link
                    href="#"
                    className="text-gray-600  font-montserrat font-bold  lg:font-bold lg:text-[13px] uppercase">
                    Contact us
                </Link>
            </Li>
        </ul>
    )
}
