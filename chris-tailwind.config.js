const blues = {
    100: '#F2FAFB',
    200: '#DFF3F5',
    300: '#CCEBEF',
    400: '#A6DDE3',
    500: '#80CED7',
    600: '#73B9C2',
    700: '#4D7C81',
    800: '#3A5D61',
    900: '#263E41',
};

const grays = {
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
}

const greens = {
    100: '#E6FAF1',
    200: '#BFF2DB',
    300: '#99EBC5',
    400: '#4DDB9A',
    500: '#00CC6E',
    600: '#00B863',
    700: '#007A42',
    800: '#005C32',
    900: '#003D21',
}

const purples = {
    100: '#F5EDFA',
    200: '#E6D3F2',
    300: '#D7B8EA',
    400: '#B982DA',
    500: '#9B4DCA',
    600: '#8C45B6',
    700: '#5D2E79',
    800: '#46235B',
    900: '#2F173D',
}

const reds = {
    100: '#FDE7EC',
    200: '#FBC2CF',
    300: '#F89DB2',
    400: '#F25479',
    500: '#ED0B3F',
    600: '#D50A39',
    700: '#8E0726',
    800: '#6B051C',
    900: '#470313',
}

const yellows = {
    100: '#FCFBF2',
    200: '#F6F4DD',
    300: '#F1EEC9',
    400: '#E7E1A1',
    500: '#DCD478',
    600: '#C6BF6C',
    700: '#847F48',
    800: '#635F36',
    900: '#424024',
}

module.exports = {
    purge: [
        './resources/views/**/*.blade.php',
        './resources/js/app.js',
        './resources/js/client.js',
        './resources/js/**/*.vue',
        './resources/css/**/*.css',
    ],
    theme: {
        fontFamily: {
            display: ['Inter', 'sans-serif'],
            body: ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: {
                    lighter: purples['300'],
                    default: purples['500'],
                    darker: purples['800']
                },
                secondary: {
                    lighter: blues['300'],
                    default: blues['500'],
                    darker: blues['800']
                },
                negative: {
                    lighter: reds['300'],
                    default: reds['500'],
                    darker: reds['800']
                },
                positive: {
                    lighter: greens['200'],
                    default: greens['500'],
                    darker: greens['800']
                },
                attention: {
                    lighter: yellows['300'],
                    default: yellows['500'],
                    darker: yellows['800']
                },
                blue: blues,
                gray: grays,
                green: greens,
                purple: purples,
                red: reds,
                yellow: yellows,
            }
        },
        customForms: theme => ({
            default: {
                input: {
                    borderRadius: theme('borderRadius.lg'),
                    //backgroundColor: theme('colors.gray.200'),
                    '&:focus': {
                        borderColor: theme('colors.purple.500'),
                        boxShadow: 'none'
                        //backgroundColor: theme('colors.white'),
                    }
                },
                select: {
                    borderRadius: theme('borderRadius.lg'),
                    boxShadow: theme('boxShadow.default'),
                },
                checkbox: {
                    width: theme('spacing.6'),
                    height: theme('spacing.6'),
                },
            },
        })
    },
    variants: {},
    plugins: [
        require('@tailwindcss/custom-forms')
    ]
}
