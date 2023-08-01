const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {
        extend: {
        
            colors:{
                "blackTransparente":"rgba(0,0,0,.5)",
                "blancoTransparente":"rgba(255.255.255)",
                "plomo":"#595858",
                "plomoTwo":"#9998B3",
                "blueOne":"#274C77",
                "blancoOne":"#EEEFF3",
                "blancoTwo":"#F7F8F7",
                "blancoTres":"#FDFDFD",
                "negro":"#0F0F10",
                "blueTwo":"#1f2951",
                "blueTres":"#6893AE",
                "verde":"#00C957",
                "verde_hover":"#00e576",
                "azul":"#151536",
                "color2":"#07edea",
                "pinkk":"#f152f4",
                "greenn":"#24f057",
                
             
                     },
            fontFamily:{
                montserrat:"var(--font-montserrat)",
                latoitalic:"var(--font-latoitalic)",
                latonormal:"var(--font-latonormal)",
                playitalic:"var(--font-playitalic)",
                playnormal:"var(--font-playnormal)"
            },
            boxShadow: {
                'marca': '35px 0 60px -15px rgba(0, 0, 0, 0.5)',
                'nav': '35px 0 60px -15px rgba(0, 0, 0, 0.5)',
                'shadownuevo':'0 10px 29px 0 rgba(68, 88, 144, 0.1)',
                'search':'0 0 0 0.2rem rgba(32,216,102,.5)'
              },
            backgroundImage:{
                'subtle-prism': "url('/subtle-prism.svg')",
                'negroblu':"url('/negroblu.svg')"
            }
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
