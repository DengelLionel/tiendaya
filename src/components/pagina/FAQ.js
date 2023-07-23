import React from 'react'

export default function FAQ() {
    return (
        <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
                <p className="text-neutral-500 text-xl mt-3">
                    Preguntas frecuentes
                </p>
            </div>
            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                <Question
                    question="¿Necesito tener habilidades técnicas para tener una tienda online?"
                    answer="No, en 'Crea Tienda Ya' manejamos todos los aspectos técnicos de la configuración y mantenimiento de tu tienda online."
                />
                <Question
                    question="¿Qué plataformas de comercio electrónico utilizas para crear las tiendas online?"
                    answer="Nos especializamos en crear tiendas online en Shopify y WooCommerce, dos de las plataformas de comercio electrónico más populares y confiables."
                />
                <Question
                    question="¿Puedo personalizar mi tienda online a mi gusto?"
                    answer="Absolutamente, trabajamos contigo para asegurarnos de que tu tienda online refleje la personalidad de tu marca y satisfaga tus necesidades comerciales."
                />
                <Question
                    question="¿Cuánto tiempo lleva desarrollar mi tienda en línea?"
                    answer="El tiempo de desarrollo depende de la complejidad de la tienda que deseas. Por lo general, una tienda básica puede estar lista en 2 a 4 semanas."
                />
                <Question
                    question="¿Qué tipo de soporte ofrecen después de que mi tienda online está en funcionamiento?"
                    answer="Ofrecemos soporte continuo para asegurarnos de que tu tienda online funcione sin problemas. También ofrecemos servicios de gestión de redes sociales y marketing digital para ayudar a aumentar la visibilidad de tu tienda."
                />
                <Question
                    question="¿Cómo ayudan a que mi tienda sea encontrada en línea?"
                    answer="Implementamos estrategias de SEO para mejorar el ranking de tu tienda en los motores de búsqueda, lo que ayuda a aumentar la visibilidad de tu tienda en línea y a atraer a más clientes."
                />
            </div>
        </div>
    )
}

function Question({ question, answer }) {
    return (
        <div className="py-5">
            <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>{question}</span>
                    <span className="transition group-open:rotate-180">
                        <svg
                            fill="none"
                            height="24"
                            shapeRendering="geometricPrecision"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width="24">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </span>
                </summary>
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {answer}
                </p>
            </details>
        </div>
    )
}
