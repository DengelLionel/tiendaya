import Servicios from '@/components/servicios'
import { memo } from 'react'
import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import Footer from '@/components/pagina/Footer'
import Whatsapp from '@/components/pagina/Whatsapp'
const servicios = () => {
    return (
        <>
            <Head>
                <title>Servicios tienda online - Crea tienda ya</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white h-full">
                <Servicios />
                <Whatsapp />
            </main>
            <Footer />
        </>
    )
}

export default memo(servicios)
