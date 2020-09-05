export default {
    head:{
        title: 'My weather app',
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: 'favicon.ico',
            },
        ],
    },
    srcDir: 'src/',

    modules: [
        '@nuxtjs/axios',
        'nuxt-vuex-localstorage'
    ],

    axios: {
        // extra config e.g
        // BaseURL: 'https://link-to-API'
    },

    buildModules: [
        // Simple usage
        '@nuxtjs/vuetify',
    ]

}

module.exports = {
    modules: [
        'nuxt-vuex-localstorage'
    ],
    plugins: [
        '~plugins/filters.js'
    ]
}
