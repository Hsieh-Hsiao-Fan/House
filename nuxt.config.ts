// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
    css: [
        'element-plus/dist/index.css',
    ],
    // axios: {
    //     // 开启代理 (如果需要判断线上线下环境，可以通过 process.env.NODE_ENV !== 'production' 来判断)
    //     proxy: true,
    //     // 给请求 url 加个前缀 /api，如果这项不配置，则需要手动添加到请求链接前面
    //     // 如果是多个代理的时候，则不需要配置，走手动添加代理前缀
    //     prefix: '/api',
    //     // 跨域请求时是否需要使用凭证
    //     credentials: true
    //   },
    nitro: {
        devProxy: {
          "/api": {
            target: "http://127.0.0.1:8000/", // 这里是接口地址
            changeOrigin: true,
            prependPath: true,
          },
        },
      },
})
