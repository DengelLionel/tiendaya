import Servicios from '@/components/servicios'
import {memo} from 'react'
import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'

const servicios = () => {
  return (
    <>
            <Head>
                <title>Crea tienda ya</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white">
                <Servicios/>
              
            </main>
            {/*       <Footer /> */}
        </>
  )
}

export default memo(servicios)