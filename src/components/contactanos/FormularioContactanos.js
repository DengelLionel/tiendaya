import React from 'react'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import PhoneInput from './PhoneInput'
const FormularioContactanos = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [telefono, setTelefono] = useState('')
    const [errorserv, setErrorserv] = useState(null)
    const [enviando, setEnviando] = useState(false)
    const [enviado, setEnviado] = useState(false)
    const [errorNombre, setErrorNombre] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorMensaje, setErrorMensaje] = useState('')
    const [errorTelefono, setErrorTelefono] = useState('')
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const handleEnviarContacto = async event => {
        event.preventDefault()
        setEnviando(true)
        if (!nombre.trim()) {
            setErrorNombre('Por favor, ingrese su nombre.')
            setEnviando(false)
            return
        } else setErrorNombre('')

        if (!email.trim()) {
            setErrorEmail('Por favor, ingrese su correo electrónico.')
            setEnviando(false)
            return
        } else setErrorEmail('')

        if (!telefono.trim()) {
            setErrorTelefono('Por favor, ingrese su número de teléfono.')
            setEnviando(false)
            return
        } else setErrorTelefono('')

        if (!mensaje.trim()) {
            setErrorMensaje('Por favor, ingrese su mensaje.')
            setEnviando(false)
            return
        } else setErrorMensaje('')
        try {
            await csrf()
            const contactame = {
                nombre: nombre,
                email: email,
                mensaje: mensaje,
                telefono: telefono,
            }
            await axios.post('/api/cliente_contactanos', contactame)
            setEnviado(true)
            setNombre('')
            setEmail('')
            setMensaje('')
            setTelefono('')
        } catch (error) {
            setErrorserv(error)
        } finally {
            setEnviando(false)
        }
    }

    useEffect(() => {}, [errorserv])

    return (
        <div className="p-4 lg:p-8 flex items-center justify-center">
            <form
                onSubmit={handleEnviarContacto}
                className="w-full md:max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-10 space-y-6 text-gray-700">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="name">
                        Nombre Completo
                    </label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        id="name"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        placeholder="John Doe"
                    />
                    {errorNombre && (
                        <p className="text-red-500 text-xs italic mt-2">
                            {errorNombre}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="email">
                        Correo electrónico
                    </label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="john@example.com"
                    />
                    {errorEmail && (
                        <p className="text-red-500 text-xs italic mt-2">
                            {errorEmail}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="telefono">
                        Telefono o celular
                    </label>
                    <PhoneInput
                        setPhone={setTelefono}
                        error={errorTelefono}
                        setError={setErrorTelefono}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="mensaje">
                        Mensaje
                    </label>
                    <textarea
                        value={mensaje}
                        onChange={e => setMensaje(e.target.value)}
                        className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    {errorMensaje && (
                        <p className="text-red-500 text-xs italic mt-2">
                            {errorMensaje}
                        </p>
                    )}
                </div>
                <button
                    disabled={enviando}
                    className="w-full bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                    type="submit">
                    {enviando ? 'Enviando...' : 'Contactame'}
                </button>
            </form>
            {enviado && (
                <p className="text-blue-500 font-medium mt-4">
                    ¡Gracias por tu mensaje! Nos pondremos en contacto contigo
                    pronto.
                </p>
            )}
        </div>
    )
}

export default FormularioContactanos
