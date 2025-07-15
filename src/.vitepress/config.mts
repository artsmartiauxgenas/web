import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'fr-FR',
  title: "Arts Martiaux Genas",
  description: "Arts Martiaux à Genas",
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
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
            { text: 'Publications JO', link: '/docs/legal/depots' },
            { text: 'Mandats', link: '/docs/legal/mandats' },
          ]
        },
        {
          text: 'Saison 2025-26',
          link: '/docs/ssn/2025-26',
          collapsed: false,
          items: [
            { text: 'Règlement intérieur', link: '/docs/ssn/2025-26/reglement' },
            { text: 'Cours et horaires', link: '/docs/ssn/2025-26/horaires' },
            {
              text: 'Evénements',
              collapsed: true,
              items: [
              ]
            },
          ]
        },
        {
          text: 'Saison 2024-25',
          link: '/docs/ssn/2024-25',
          collapsed: true,
          items: [
          ]
        },
        {
          text: 'Guides',
          link: '/docs/guides',
          collapsed: true,
          items: [
            { text: 'Charte pédagogique', link: '/docs/guides/charte-pedagogique' },
            { text: 'Accueil adhérents', link: '/docs/guides/adherents' },
            { text: 'Accueil bénévoles', link: '/docs/guides/benevoles' },
            { text: 'Licences', link: '/docs/guides/licences' },
            { text: 'Evénement', link: '/docs/guides/event' },
            { text: 'Communication', link: '/docs/guides/communication' },
            { text: 'Préparation AG', link: '/docs/guides/ag' },
            { text: 'Plan comptable', link: '/docs/guides/pca' },
            { text: 'RGPD', link: '/docs/guides/rgpd' },
            { text: 'Passation', link: '/docs/guides/handover' },
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
            { text: 'Bal des pompiers', link: '/blog/2025-07-12-bal-pompiers' },
            { text: 'Nouveau nom', link: '/blog/2025-07-10-nouveau-nom' },
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
      copyright: 'Copyright © 1993-present <a href="https://github.com/artsmartiauxgenas" target="_blank">Arts Martiaux Genas</a> · RNA : W691055588 · SIRET : 414 756 668 00037 · <a href="mailto:info@amgenas.fr">info@amgenas.fr</a>'
    }
  },

  markdown: {
    image: {
      lazyLoading: true
    }
  },
  
  sitemap: {
    hostname: 'https://artsmartiauxgenas.fr'
  }
})
