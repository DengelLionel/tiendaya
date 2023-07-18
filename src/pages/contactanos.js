import Servicios from '@/components/servicios'
import {memo} from 'react'
import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import FormularioContactanos from '@/components/contactanos/FormularioContactanos'
const contactanos = () => {
  return (
    <>
            <Head>
                <title>Crea tienda ya</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white mt-[140px]">
                <FormularioContactanos/>
              
            </main>
            {/*       <Footer /> */}
        </>
  )
}

export default memo(contactanos)