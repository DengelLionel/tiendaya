import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import CuadroServicio from './CuadroServicio';
const services = [
  {
    category: 'Desarrollo Web y Soporte Técnico',
    items: [
        {titulo:"Desarrollo de tiendas en línea con Shopify y WooCommerce.",
        descripcion:"Te ayudamos a crear tu tienda online.",
        llamadaaccion:"¡Empieza hoy!",
        link:"/servicios/"
    },
    {
        titulo:'Creación de páginas web en WordPress',
        descripcion:"Diseñamos sitios web profesionales de WordPress personalizados a tus necesidades.",
        llamadaaccion:"¡Crea tu sitio WordPress ahora!",
        link:"/servicios/"
    },
    {
        titulo:'Desarrollo web (creación paginas web) a código',
        descripcion:"Desarrollamos soluciones web personalizadas desde cero para cumplir tus objetivos específicos.",
        llamadaaccion:"¡Personaliza tu web hoy!",
        link:"/servicios/"
    },
      {titulo:'Soporte técnico continuo',
        descripcion:'Mantenimiento y actualizaciones constantes para asegurar el rendimiento óptimo de tu tienda',
        llamadaaccion:'¡Obtén soporte ahora!',
        link:"/servicios/"},
        {
            titulo:'Optimización para móviles',
            descripcion:'Aseguramos una experiencia de compra excelente en todos los dispositivos.',
            llamadaaccion:'¡Optimiza ahora!',
            link:'/servicios/'
        },
        {
            titulo:'Integración de sistemas de pago',
            descripcion:'Configuramos la plataforma de pago que mejor se adapte a tu negocio.',
            llamadaaccion:'¡Integra pagos ahora!',
            link:'/servicios/'
        }
    
  
    ],
  },
  {
    category: 'Diseño y Contenido',
    items: [
        {titulo:'Diseño gráfico',
        descripcion:'  Creamos diseños atractivos y funcionales para potenciar tu marca en el entorno digital.',
    llamadaaccion:'¡Diseña ahora!',
link:'/servicios/'},
        {
            titulo:'Servicios de copywriting',
            descripcion:'Redactamos contenido cautivador que atraerá a tus clientes y mejorará el SEO de tu tienda.',
            llamadaaccion:'¡Obtén contenido ahora!',
            link:'/servicios/'
        }
    
    ],
  },
  {
    category: 'Analítica y Estrategia de Negocio',
    items: [
        {titulo:'Analítica web y de ventas',
        descripcion:'Ofrecemos análisis detallados para ayudarte a comprender y optimizar el comportamiento de tus clientes.',
        llamadaaccion:'¡Analiza ahora!',
        link:'/servicios/'},
        {titulo:'Estrategia de marketing digital y SEO',
        descripcion:'Creamos estrategias personalizadas para aumentar tu visibilidad online y atraer a más clientes.',
        llamadaaccion:'¡Mejora tu visibilidad ahora!',
        link:'/servicios/'}
    ],
  },
  {
    category: 'Servicios de Formación',
    items: [
     {
        titulo:'Formación en eCommerce y marketing digital',
        descripcion:'Te proporcionamos las herramientas y conocimientos necesarios para gestionar y hacer crecer tu tienda en línea.',
        llamadaaccion:'¡Aprende ahora!',
        link:'/servicios/'
     }
    ],
  },
];

export default function Services() {
  return (
    <section className="mt-[140px] bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {services.map((service, i) => (
          <div key={i} className="space-y-6">
            <h2 className="text-3xl font-bold text-green-900 "> <FontAwesomeIcon icon={faCheckDouble} style={{color: "#08e222",}} />  {service.category}</h2>
            <ul className="space-y-4">
              {service.items.map((item, j) => (
                <li key={j} className="flex space-x-3">
            <CuadroServicio titulo={item.titulo} descripcion={item.descripcion} llamadaaccion={item.llamadaaccion} link={item.link}/> 
  
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
