import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import FlexibleSection from '@/components/pagina/FlexibleSection'
import Backgro from '@/components/pagina/Backgro'
export default function Home() {
    return (
        <>
            <Head>
                <title>Crea tienda ya</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white">
            <div className="w-full h-[300px] lg:h-[400px] bg-subtle-prism bg-no-repeat bg-center bg-cover">
</div>
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
