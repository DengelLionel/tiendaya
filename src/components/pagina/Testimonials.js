import React from 'react'

const Testimonials = () => {
    const customers = [
        {
            avatar:
                'https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp',
            testimonial:
                'Gracias a Crea Tienda Ya, mi sueño de tener una tienda en línea se hizo realidad. Su diseño personalizado y soporte técnico impecable me han ayudado a destacar en el competitivo mundo de la moda. ¡Los recomiendo ampliamente!',
            name: 'María G.',
        },
        {
            avatar:
                'https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp',
            testimonial:
                'Crear mi tienda en línea con Crea Tienda Ya ha sido una experiencia increíble. Su plataforma fácil de usar y el equipo de diseño han hecho que mi negocio crezca exponencialmente. ¡Gracias por llevar mi tienda al siguiente nivel',
            name: 'Juan M.',
        },
        {
            avatar:
                'https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp',
            testimonial:
                'Estoy encantada con mi tienda en línea de Crea Tienda Ya. La optimización para móviles y el enfoque en la experiencia del cliente han aumentado mis ventas significativamente. ¡Definitivamente recomendaría a Crea Tienda Ya a otros emprendedores!',
            name: 'Jhon R.',
        },
    ]

    return (
        <div className="py-16 bg-white container px-6 text-gray-600 md:px-12 ">
            <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">
                ¿Qué dicen nuestros clientes?
            </h2>
            <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                {customers.map((customer, index) => (
                    <div
                        key={index}
                        className={`p-6 border border-gray-100 rounded-xl bg-gray-50 ${
                            index === 0
                                ? 'text-center sm:p-8 h-full flex flex-col justify-center space-y-4'
                                : 'sm:flex sm:space-x-8 sm:p-8'
                        }`}>
                        <img
                            className="w-20 h-20 mx-auto rounded-full"
                            src={customer.avatar}
                            alt="user avatar"
                            height="220"
                            width="220"
                            loading="lazy"
                        />
                        <div
                            className={`space-y-4 mt-4 text-center sm:mt-0 ${
                                index !== 0 ? 'sm:text-left' : ''
                            }`}>
                            <p className="text-gray-600 md:text-xl">
                                {' '}
                                <span className="font-serif">"</span>{' '}
                                {customer.testimonial}{' '}
                                <span className="font-serif">"</span>
                            </p>
                            <div>
                                <h6 className="text-lg font-semibold leading-none">
                                    {customer.name}
                                </h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
