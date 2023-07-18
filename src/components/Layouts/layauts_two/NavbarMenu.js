import { useRouter } from 'next/router'
import Link from 'next/link'
import { useContext } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'
const Li = ({ children, href }) => {
  const { asPath } = useRouter()
  const isActive = asPath === href;
  const { setIsOpen } = useContext(PaginaContextValue)
  return (
    <li className={` relative overflow-hidden pr-[10px] pb-[10px] pt-[10px] pl-[10px] lg:pt-0 lg:pl-0 lg:pr-0 lg:pb-[7px] ${isActive ? 'bg-green-400 text-white lg:text-gray-600 lg:bg-transparent lg:border-b-[.3px] lg:border-green-400 lg:rounded-md' : 'text-gray-600'}`}>
      <Link onClick={()=>setIsOpen(false)} href={href} passHref>
        <span className={`cursor-pointer block lg:before:absolute lg:before:w-full lg:before:h-[4px] lg:before:rounded-md lg:before:bottom-0 lg:before:left-[-100%] lg:before:bg-green-400 lg:before:transition-all lg:before:duration-[0.3s] lg:hover:before:left-0 ${isActive && 'lg:before:left-0'}`}>
          {children}
        </span>
      </Link>
    </li>
  )
}

export default function NavbarMenu() {
  return (
    <ul className="flex flex-col lg:flex-row gap-[20px] lg:p-[20px] lg:gap-[30px] lg:p-0">
      <Li href="/">
        <span className="text-md font-montserrat font-bold lg:font-bold lg:text-[13px] uppercase">
          Inicio
        </span>
      </Li>
      <Li href="/sobrenosotros">
        <span className="font-montserrat font-bold lg:font-bold lg:text-[13px] uppercase">
          Sobre nosotros
        </span>
      </Li>
      <Li href="/servicios">
        <span className=" font-montserrat font-bold lg:font-bold lg:text-[13px] uppercase">
          Servicios
        </span>
      </Li>
      <Li href="/contactanos">
        <span className=" font-montserrat font-bold lg:font-bold lg:text-[13px] uppercase">
          Contactanos
        </span>
      </Li>
    </ul>
  )
}
