import React from 'react'

const Testimonials = () => {
    const customers = [
        {
            avatar:
                'https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp',
            testimonial:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus.',
            name: 'Jane Doe',
            role: 'Product Designer',
        },
        {
            avatar:
                'https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp',
            testimonial:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus.',
            name: 'Jane Doe',
            role: 'Product Designer',
        },
        {
            avatar:
                'https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp',
            testimonial:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus.',
            name: 'Jane Doe',
            role: 'Product Designer',
        },
    ]

    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
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
                                    <span className="text-xs text-gray-500">
                                        {customer.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
