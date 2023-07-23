import { memo } from 'react'
import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import Whatsapp from '@/components/paginainfo/Whatsapp'
import TodoSearch from '@/components/producto/TodoSearch'
const search = () => {
    return (
        <>
            <Head>
                <title>Buscando</title>
            </Head>

            <HeaderPrincipal />

            <main className="bg-white">
                <TodoSearch />
                <Whatsapp />
            </main>
        </>
    )
}

export default memo(search)
