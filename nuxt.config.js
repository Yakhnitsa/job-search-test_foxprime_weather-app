export default {
    head:{
        title: 'My weather app',
        link:[
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    srcDir: 'src/',

    buildModules: [
        // Simple usage
        '@nuxtjs/vuetify',
    ]

}

module.exports = {
    build: {
        vendor: ['axios']
    },
    // plugins:[
    //     '@plugins/vuetify'
    // ],
};
