module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '대한민국 대표 호스팅 블루웹 - 도메인 / SSL / 워드프레스',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'Blueweb Hosting' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'images/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rajdhani:300,400,500,600,700%7CRoboto:300,300i,400,400i,500,500i,700,700i,900,900i&amp;subset=cyrillic,cyrillic-ext,latin-ext' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js', body: true },
      { src: '/js/jquery.js', body: true },
      { src: '/js/uikit.min.js', body: true },
      { src: '/js/components/slider.js', body: true },
      { src: '/js/components/slideshow.js', body: true },
      { src: '/js/components/parallax.js', body: true },
      { src: '/js/components/sticky.js', body: true },
      { src: '/js/jquery.countTo.js', body: true },
      { src: '/js/mediaelement.js', body: true },
      { src: '/js/instafeed.min.js', body: true },
      { src: '/js/template-config.js', body: true }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/uikit.css',
    '~/assets/css/components/slider.css',
    '~/assets/css/components/slideshow.css',
    '~/assets/css/components/slidenav.css',
    '~/assets/css/components/dotnav.css',
    '~/assets/css/small-icon.css',
    '~/assets/css/elements.css',
    '~/assets/css/style.css',
    '~/assets/css/mediaquery.css'
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ]
}
