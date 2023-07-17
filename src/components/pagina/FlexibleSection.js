import React from 'react'
import Image from 'next/legacy/image'

export default function FlexibleSection() {
    return (
        <section
            id="section-start-journey"
            className="relative py-10 pt-[100px] md:py-16 xl:py-24 lg:w-[800px] flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col justify-center lg:w-[800px] items-center md:flex-row md:items-center md:justify-center lg:gap-[100px] ">
                <div className="mb-10 md:mb-0 animate__animated animate__fadeInLeft animate__duration-1s animate__delay-2s lg:w-[450px]">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-red-600">
                        Most Flexible
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Bootstrap template
                    </h3>
                    <p className="text-lg text-gray-800 mb-4">
                        Created by the industry leaders, Starbis Bootstrap
                        template includes a comprehensive set of tools which are
                        super easy to pick up and run. This template gives you a
                        huge leg up to create your own beautiful site using
                        powerful options & tools, unlimited designs, and
                        responsive framework.
                    </p>
                    <a
                        className="inline-block px-8 py-4 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        href="https://www.templatemonster.com/website-templates/starbis.html"
                        target="_blank"
                        rel="noreferrer">
                        Get Starbis Now
                    </a>
                </div>

                <div className="relative w-[340px] md:w-auto animate__animated animate__fadeInRight animate__duration-1s animate__delay-2s min-h-[400px]">
                    <figure className="absolute w-[340px] h-[340px] lg:w-[500px] lg:h-[500px] top-0 left-0">
                        <Image
                            src="https://res.cloudinary.com/darps1cta/image/upload/v1681937216/sitioweb/5_aplicaciones_de_Shopify_que_no_te_puedes_perder_para_tu_tienda_virtual_vq6zzb.jpg"
                            alt="Image 1"
                            layout="fill"
                            objectFit="contain"
                        />
                    </figure>
                    <figure className="absolute w-[290px] h-[170px] top-[125px] left-[-18px] lg:w-[408px] lg:h-[230px] lg:top-[200px] lg:left-[-120px]">
                        <Image
                            src="https://res.cloudinary.com/darps1cta/image/upload/v1681937216/sitioweb/5_aplicaciones_de_Shopify_que_no_te_puedes_perder_para_tu_tienda_virtual_vq6zzb.jpg"
                            alt="Image 2"
                            layout="fill"
                            objectFit="contain"
                        />
                    </figure>
                    <figure className="absolute w-[150px] h-[150px] top-[170px] left-0 lg:w-[220px] lg:h-[199px] lg:top-[258px] lg:left-[-89px]">
                        <Image
                            src="https://res.cloudinary.com/darps1cta/image/upload/v1681937216/sitioweb/5_aplicaciones_de_Shopify_que_no_te_puedes_perder_para_tu_tienda_virtual_vq6zzb.jpg"
                            alt="Image 3"
                            layout="fill"
                            objectFit="contain"
                        />
                    </figure>
                </div>
            </div>
        </section>
    )
}
