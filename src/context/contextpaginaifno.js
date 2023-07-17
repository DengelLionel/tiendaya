import React from 'react'
import { createContext, useState } from 'react'
export const PaginaContextValue = createContext()
const Contextpaginaifno = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const data = {
        isOpen,
        setIsOpen,
    }
    return (
        <PaginaContextValue.Provider value={data}>
            {children}
        </PaginaContextValue.Provider>
    )
}

export default Contextpaginaifno
