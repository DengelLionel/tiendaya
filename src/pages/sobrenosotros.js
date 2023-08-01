import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import { memo } from 'react'
import SobreNosotros from '@/components/sobrenosotros'
import Whatsapp from '@/components/pagina/Whatsapp'
const Sobrenostros = () => {
    return (
        <>
            <Head>
                <title>Sobre nosotros | Crea tienda ya</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white">
                <SobreNosotros />
                <Whatsapp />
            </main>
            {/*       <Footer /> */}
        </>
    )
}
export default memo(Sobrenostros)
