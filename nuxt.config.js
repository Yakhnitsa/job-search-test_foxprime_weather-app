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

    buildModules: [
        '@nuxtjs/vuetify',
    ]

}

module.exports = {
    modules: [
        'nuxt-vuex-localstorage'
    ],
}
