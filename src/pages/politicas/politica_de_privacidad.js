import React from 'react'
import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import Footer from '@/components/pagina/Footer'
import Whatsapp from '@/components/pagina/Whatsapp'
const politica_de_privacidad = () => {
    return (
        <>
            <Head>
                <title>Politica de privacidad - Crea tienda ya</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white h-full">
                <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
                    <div className="max-w-3xl mx-auto bg-white p-8 shadow">
                        <h1 className="text-2xl font-bold mb-4">
                            Política de Privacidad de "Crea Tienda Ya"
                        </h1>
                        <p className="mb-4">
                            En "Crea Tienda Ya" valoramos y respetamos tu
                            privacidad. Esta política de privacidad explica cómo
                            recopilamos, utilizamos y protegemos la información
                            personal que nos proporcionas cuando utilizas
                            nuestros servicios.
                        </p>
                        <h3 className="text-xl font-bold mb-2">
                            Recopilación de Información:
                        </h3>
                        <p className="mb-4">
                            Podemos recopilar información personal como tu
                            nombre, dirección de correo electrónico, número de
                            teléfono y detalles de contacto al registrarte o
                            utilizar nuestros servicios.
                        </p>
                        <h3 className="text-xl font-bold mb-2">
                            Uso de la Información:
                        </h3>
                        <p className="mb-4">
                            Utilizamos la información personal proporcionada
                            para brindar y mejorar nuestros servicios, procesar
                            transacciones y responder a tus consultas y
                            solicitudes.
                        </p>
                        <h3 className="text-xl font-bold mb-2">
                            Protección de Datos:
                        </h3>
                        <p className="mb-4">
                            Tu información personal está protegida y almacenada
                            de manera segura. No compartimos ni vendemos tu
                            información con terceros sin tu consentimiento.
                        </p>
                        <h3 className="text-xl font-bold mb-2">
                            Cookies y Tecnologías Similares:
                        </h3>
                        <p className="mb-4">
                            Utilizamos cookies y tecnologías similares para
                            mejorar tu experiencia en nuestro sitio web y
                            personalizar el contenido según tus intereses.
                        </p>
                        <h3 className="text-xl font-bold mb-2">
                            Enlaces a Terceros:
                        </h3>
                        <p className="mb-4">
                            Nuestro sitio web puede contener enlaces a sitios de
                            terceros. No nos responsabilizamos por las prácticas
                            de privacidad de estos sitios y te recomendamos leer
                            sus políticas de privacidad.
                        </p>
                        <h3 className="text-xl font-bold mb-2">
                            Cambios en la Política de Privacidad:
                        </h3>
                        <p className="mb-4">
                            Podemos actualizar esta política de privacidad de
                            vez en cuando. Cualquier cambio será publicado en
                            nuestro sitio web.
                        </p>
                        <h3 className="text-xl font-bold mb-2">
                            Consentimiento:
                        </h3>
                        <p className="mb-4">
                            Al utilizar nuestros servicios, aceptas los términos
                            de esta política de privacidad.
                        </p>
                        <p className="mb-4">
                            Para cualquier pregunta o inquietud sobre nuestra
                            política de privacidad, por favor contáctanos en
                            info@creatiendaya.com.
                        </p>
                        <p className="mb-4">
                            Fecha de última actualización: 01/08/2023
                        </p>
                    </div>
                </div>
                <Whatsapp />
            </main>
            <Footer />
        </>
    )
}

export default politica_de_privacidad
