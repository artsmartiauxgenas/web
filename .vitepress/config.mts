import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'fr-FR',
  title: "Arts Martiaux Genas",
  description: "Arts Martiaux à Genas",
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Equipe', link: '/club', activeMatch: '/club' },
      { text: 'FAQ', link: '/docs/faq', activeMatch: '/faq' },
      { text: 'Docs', link: '/docs', activeMatch: '/docs' },
      { text: 'Blog', link: '/blog', activeMatch: '/blog' },
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Administration',
          link: '/docs/legal',
          collapsed: true,
          items: [
            { text: 'Décisions', link: '/docs/legal/rfc' },
            { text: 'Publications JO', link: '/docs/legal/publications-jo' },
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
            { text: 'Nouveau nom', link: '/blog/post-1-nouveau-nom' },
          //  { text: 'Ouverture des inscriptions', link: '/blog/2025-07-17-ouverture-inscriptions' },
          //  { text: 'Forum des associations', link: '/blog/2025-08-15-forum-associations' },
          ]
        }
      ]
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
        forceLocale: true
      }
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/artsmartiauxgenas/web' }
    ],

    footer: {
      message: 'Association loi 1901 soutenue par la <a href="https://genas.fr" target="_blank">Ville de Genas</a> et la <a href="https://www.ffkarate.fr/" target="_blank">Fédération Française de Karaté</a>',
      copyright: 'Copyright © 1993-present <a href="https://github.com/artsmartiauxgenas" target="_blank">Arts Martiaux Genas</a>'
    }
  },

})
