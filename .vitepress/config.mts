import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'fr-FR',
  title: "Arts Martiaux Genas",
  description: "Arts Martiaux à Genas",
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Equipe', link: '/team', activeMatch: '/team' },
      { text: 'FAQ', link: '/docs/faq', activeMatch: '/faq' },
      { text: 'Docs', link: '/docs', activeMatch: '/docs' },
      { text: 'Blog', link: '/blog', activeMatch: '/blog' },
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Administration',
          link: '/docs/admin',
          collapsed: true,
          items: [
            { text: 'Statuts', link: '/docs/admin/2025-statuts' },
          ]
        },
        {
          text: 'Saison 2025-26',
          link: '/docs/years/2025-26',
          collapsed: false,
          items: [
            { text: 'Règlement intérieur', link: '/docs/years/2025-26/reglement-interieur' },
            {
              text: 'Budget',
              collapsed: true,
              items: [
              ]
            },
            {
              text: 'Evénements',
              collapsed: true,
              items: [
              ]
            },
          ]
        },
        {
          text: 'Guides',
          link: '/docs/guides',
          collapsed: true,
          items: [
          ]
        },
        {
          text: 'FAQ',
          link: '/docs/faq',
        },
      ],
      '/blog/': [
        {
          text: '2025',
          collapsed: false,
          items: [
            { text: 'Nouveau site', link: '/blog/2025-07-17-nouveau-site' },
            { text: 'Ouverture des inscriptions', link: '/blog/2025-07-17-ouverture-inscriptions' },
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/artsmartiauxgenas/web' }
    ],

    footer: {
      message: '',
      copyright: 'Copyright © 1993-present <a href="https://github.com/artsmartiauxgenas">Arts Martiaux Genas</a>'
    }
  },

})
