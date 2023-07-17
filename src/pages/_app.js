import 'tailwindcss/tailwind.css'
import Contextpaginaifno from '@/context/contextpaginaifno'
import { Montserrat } from '@next/font/google'
import { Lato } from '@next/font/google'
import { Playfair_Display } from '@next/font/google'
import '@/css/global.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
const montserrat = Montserrat({
    style: ['normal'],
    weight: ['400', '700'],
    variable: '--font-montserrat',
    subsets: ['latin'],
})
const latoitalic = Lato({
    style: ['italic'],
    weight: ['300', '400'],
    variable: '--font-latoitalic',
    subsets: ['latin'],
})
const latonormal = Lato({
    style: ['normal'],
    weight: ['300', '400', '700', '900'],
    variable: '--font-latonormal',
    subsets: ['latin'],
})
const playItalic = Playfair_Display({
    style: ['italic'],
    weight: ['700'],
    variable: '--font-playitalic',
    subsets: ['latin'],
})
const playNormal = Playfair_Display({
    style: ['normal'],
    weight: ['900'],
    variable: '--font-playnormal',
    subsets: ['latin'],
})
const App = ({ Component, pageProps }) => (
    <main
        className={`${montserrat} ${latoitalic} ${latonormal} ${playItalic} ${playNormal}`}>
        <Contextpaginaifno>
            <Component {...pageProps} />
        </Contextpaginaifno>
    </main>
)

export default App
