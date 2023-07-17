import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState('')
    const [activarInput, setActivarInput] = useState(false)

    const handleActivarInput = () => {
        setActivarInput(true)
    }
    return (
        <div className={`relative flex items-center p-2`}>
            <input
                id="rd-search-form-input"
                placeholder="Buscar..."
                type="text"
                onChange={e => setSearchValue(e.target.value)}
                value={searchValue}
                className={`outline-none pl-3 pr-10 py-2 rounded-md border-2 border-gray-300 text-gray-700 focus:ring-2 focus:outline-none focus:border-green-400 focus:shadow-search focus:ring-green-400 transition-all duration-200 ${
                    activarInput
                        ? 'opacity-100 visible w-full '
                        : 'opacity-0 invisible w-0 '
                }`}
                autoComplete="off"
            />
            <button
                type="submit"
                onClick={handleActivarInput}
                className="absolute right-4">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-gray-500 hover:text-green-400"
                />
            </button>

            <div id="rd-search-results-live" />
        </div>
    )
}
