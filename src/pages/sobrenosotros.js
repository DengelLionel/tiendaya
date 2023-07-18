import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import FlexibleSection from '@/components/pagina/FlexibleSection'
import { memo } from 'react'
import SobreNosotros from '@/components/sobrenosotros'
const Sobrenostros=()=> {
    return (
        <>
            <Head>
                <title>Crea tienda ya</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white">
                <SobreNosotros/>
            </main>
            {/*       <Footer /> */}
        </>
    )
}
export default memo(Sobrenostros)