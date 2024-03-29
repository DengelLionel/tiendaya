import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import FlexibleSection from '@/components/pagina/FlexibleSection'
import Personalizacion from '@/components/pagina/Personalizacion'
import Redes from '@/components/pagina/Redes'
import Ventajas from '@/components/pagina/Ventajas'
import Testimonials from '@/components/pagina/Testimonials'
import FAQ from '@/components/pagina/FAQ'
import Footer from '@/components/pagina/Footer'
import Whatsapp from '@/components/pagina/Whatsapp'

export default function Home() {
    return (
        <>
            <Head>
                <title>Crea tienda ya</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white h-full">
                <div className="w-full h-[900px] sm:h-[650px] md:h-[400px] bg-fixed lg:h-[600px] bg-subtle-prism bg-no-repeat bg-center bg-cover">
                    <FlexibleSection />
                </div>
                <Personalizacion />
                <div className="w-full h-[900px] bg-fixed lg:h-[600px] bg-negroblu bg-no-repeat bg-center bg-cover  flex items-center justify-center">
                    <Redes />
                </div>
                <Ventajas />
                <Testimonials />
                <FAQ />
            </main>
            <Whatsapp />
            <Footer />
        </>
    )
}
