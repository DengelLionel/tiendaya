import { memo } from 'react'
import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import FormularioContactanos from '@/components/contactanos/FormularioContactanos'
import Whatsapp from '@/components/pagina/Whatsapp'
const contactanos = () => {
    return (
        <>
            <Head>
                <title>Contactanos | Crea tienda ya</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white mt-[140px]">
                <FormularioContactanos />
                <Whatsapp />
            </main>
            {/*       <Footer /> */}
        </>
    )
}

export default memo(contactanos)
