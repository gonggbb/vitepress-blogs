import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'jsgong ',
  description: 'Life-long learning',
  base: '/vitepress-blogs/',
  head: [
    [ 'link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } ],
    // 渲染为: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    [ 'link', { rel: 'icon', href: './icon.png' } ],
    ["meta", { name: "keywords", content: "HTML, CSS, JavaScript,前端" }]
    // 渲染为: <link rel="icon" href="/logo.svg" />
  ],
  themeConfig: {
    logo: '/icon.png',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
