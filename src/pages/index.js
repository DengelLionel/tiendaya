import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import FlexibleSection from '@/components/pagina/FlexibleSection'

export default function Home() {
    return (
        <>
            <Head>
                <title>Crea tienda ya</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white">
                <FlexibleSection />
                <FlexibleSection />
                <FlexibleSection />
                {/*    <Servicios />
                <Info />
                <NuestrasAreas />
                <ProductosDestacados />
                <Whatsapp />
                <ConocePromocines />
                <Marcas />
                */}
            </main>
            {/*       <Footer /> */}
        </>
    )
}
