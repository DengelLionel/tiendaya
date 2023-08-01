import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCheckDouble,
    faShop,
    faWindowMaximize,
    faLaptopCode,
    faGears,
    faMobileScreen,
    faCreditCard,
    faPenFancy,
    faPaste,
    faSplotch,
    faChartColumn,
    faChalkboardUser,
} from '@fortawesome/free-solid-svg-icons'
import CuadroServicio from './CuadroServicio'
import Banner from './Banner'

const services = [
    {
        category: 'Desarrollo Web y Soporte Técnico',
        items: [
            {
                titulo:
                    'Desarrollo de tiendas en línea con Shopify y WooCommerce.',
                descripcion: 'Te ayudamos a crear tu tienda online.',
                llamadaaccion: '¡Empieza hoy!',
                icono: faShop,
                link: `/servicios/desarrollo-shopify-woocommerce`,
            },
            {
                titulo: 'Creación de páginas web en WordPress',
                descripcion:
                    'Diseñamos sitios web profesionales de WordPress personalizados a tus necesidades.',
                llamadaaccion: '¡Crea tu sitio WordPress ahora!',
                icono: faWindowMaximize,
                link: '/servicios/',
            },
            {
                titulo: 'Desarrollo web (creación paginas web) a código',
                descripcion:
                    'Desarrollamos soluciones web personalizadas desde cero para cumplir tus objetivos específicos.',
                llamadaaccion: '¡Personaliza tu web hoy!',
                icono: faLaptopCode,
                link: '/servicios/',
            },
            {
                titulo: 'Soporte técnico continuo',
                descripcion:
                    'Mantenimiento y actualizaciones constantes para asegurar el rendimiento óptimo de tu tienda',
                llamadaaccion: '¡Obtén soporte ahora!',
                icono: faGears,
                link: '/servicios/',
            },
            {
                titulo: 'Optimización para móviles',
                descripcion:
                    'Aseguramos una experiencia de compra excelente en todos los dispositivos.',
                llamadaaccion: '¡Optimiza ahora!',
                icono: faMobileScreen,
                link: '/servicios/',
            },
            {
                titulo: 'Integración de sistemas de pago',
                descripcion:
                    'Configuramos la plataforma de pago que mejor se adapte a tu negocio.',
                llamadaaccion: '¡Integra pagos ahora!',
                icono: faCreditCard,
                link: '/servicios/',
            },
        ],
    },
    {
        category: 'Diseño y Contenido',
        items: [
            {
                titulo: 'Diseño gráfico',
                descripcion:
                    '  Creamos diseños atractivos y funcionales para potenciar tu marca en el entorno digital.',
                llamadaaccion: '¡Diseña ahora!',
                icono: faPenFancy,
                link: '/servicios/',
            },
            {
                titulo: 'Servicios de copywriting',
                descripcion:
                    'Redactamos contenido cautivador que atraerá a tus clientes y mejorará el SEO de tu tienda.',
                llamadaaccion: '¡Obtén contenido ahora!',
                icono: faPaste,
                link: '/servicios/',
            },
        ],
    },
    {
        category: 'Marketing Digital',
        items: [
            {
                titulo: 'Analítica web y de ventas',
                descripcion:
                    'Ofrecemos análisis detallados para ayudarte a comprender y optimizar el comportamiento de tus clientes.',
                llamadaaccion: '¡Analiza ahora!',
                icono: faSplotch,
                link: '/servicios/',
            },
            {
                titulo: 'Estrategia de marketing digital y SEO',
                descripcion:
                    'Creamos estrategias personalizadas para aumentar tu visibilidad online y atraer a más clientes.',
                llamadaaccion: '¡Mejora tu visibilidad ahora!',
                icono: faChartColumn,
                link: '/servicios/',
            },
        ],
    },
    {
        category: 'Servicios de Formación',
        items: [
            {
                titulo: 'Formación en eCommerce y marketing digital',
                descripcion:
                    'Te proporcionamos las herramientas y conocimientos necesarios para gestionar y hacer crecer tu tienda en línea.',
                llamadaaccion: '¡Aprende ahora!',
                icono: faChalkboardUser,
                link: '/servicios/',
            },
        ],
    },
]

export default function Services() {
    return (
        <section className="mt-[70px] flex flex-col justify-center items-center bg-gray-50 ">
            <Banner />
            <div className="w-full h-full bg-negro grid grid-cols-[repeat(1,auto)] ">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className=" text-center mb-[20px] lg:mb-[50px]">
                        <FontAwesomeIcon
                            icon={faCheckDouble}
                            style={{ color: '#00C957', width: '18' }}
                        />{' '}
                        <h2 className="text-2xl text-center font-bold text-blancoTres tracking-wide leading-normal lg:3xl ">
                            {' '}
                            {service.category}
                        </h2>
                        <section className="grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(2,auto)] md:gap-0  lg:grid-cols-[repeat(3,auto)] lg:gap-[20px] ">
                            {service.items.map((item, j) => (
                                <CuadroServicio
                                    key={j}
                                    ide={j}
                                    titulo={item.titulo}
                                    icono={item.icono}
                                    descripcion={item.descripcion}
                                    llamadaaccion={item.llamadaaccion}
                                    link={item.link}
                                />
                            ))}
                        </section>
                    </div>
                ))}
            </div>
        </section>
    )
}
