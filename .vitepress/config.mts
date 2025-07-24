import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'fr-FR',
  title: "Arts Martiaux Genas",
  description: "Arts Martiaux à Genas",
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  srcDir: './src',
  themeConfig: {
    logo: '/logo-enso.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Le club', link: '/club', activeMatch: '/club' },
      { text: 'Docs', link: '/docs/', activeMatch: '/docs' },
      { text: 'FAQ', link: '/faq', activeMatch: '/faq' },
      { text: 'Blog', link: '/blog', activeMatch: '/blog' },
      { text: 'Contact', link: '/contact', activeMatch: '/contact' },
    ],

    sidebar: {
      '/docs/': [
        { text: 'Bienvenue', link: '/docs/' },
        {
          text: 'Disciplines',
          collapsed: false,
          items: [
            { text: 'Karaté Shotokan', link: '/docs/disciplines/karate-shotokan' },
            { text: 'Karaté Défense Training & Santé', link: '/docs/disciplines/karate-defense-training-sante' },
            { text: 'Body Fight & MMA Fit+Fun', link: '/docs/disciplines/body-fight-mma' },
          ]
        },
        {
          text: 'Infos pratiques',
          collapsed: false,
          items: [
            { text: 'Saison en cours', link: '/docs/saisons/latest' },
            { text: 'Cours & horairess', link: '/docs/horaires' },
            { text: 'Tarifs & Inscriptions', link: '/docs/inscription' },
            { text: 'Statuts', link: '/docs/legal/statuts/latest' },
            { text: 'Règlement intérieur', link: '/docs/legal/reglements/latest' },
          ]
        },
        {
          text: 'Vie associative',
          collapsed: false,
          items: [
            { text: 'Comment s\'inscrire', link: '/docs/guides/sinscrire' },
            { text: 'Contribuer', link: '/docs/guides/contribuer' },
            { text: 'Rejoindre le CA', link: '/docs/guides/rejoindre-ca' },
            {
              text: 'Guides',
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
          ]
        },
        {
          text: 'Gouvernance',
          collapsed: true,
          items: [
            { text: 'Statuts', link: '/docs/legal/statuts/' },
            { text: 'Publications', link: '/docs/legal/journal-officiel/' },
            { text: 'Assemblées générales', link: '/docs/legal/assemblees/' },
            { text: 'Budgets', link: '/docs/legal/budgets/' },
            { text: 'Mandats', link: '/docs/legal/mandats' },
            { text: 'Conseil d\'adminitration', link: '/docs/legal/conseils/' },
            { text: 'Décisions', link: '/docs/rfc/' },
            { text: 'Saisons sportives', link: '/docs/saisons/' },
            { text: 'Règlements intérieurs', link: '/docs/legal/reglements/' },
            { text: 'Manifeste', link: '/docs/manifeste' },
          ]
        },
        {
          text: 'Partenaires',
          collapsed: true,
          items: [
            { text: 'Vile de Genas', link: 'https://genas.fr' },
            { text: 'FFKaraté', link: 'https://www.ffkarate.fr' },
            { text: 'Crédit Mutuel', link: 'https://www.creditmutuel.com' },
          ]
        },
      ],
      '/blog/': [
        {
          text: '2025-26',
          collapsed: false,
          items: [
            { text: 'Inscriptions ouvertes', link: '/blog/2025-07-19-ouverture-inscriptions' },
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
      // You can add any icon from simple-icons (https://simpleicons.org/):
      { icon: 'github', link: 'https://github.com/artsmartiauxgenas/web' },
    ],

    footer: {
      message: 'Association loi 1901 soutenue par la <a href="https://genas.fr" target="_blank">Ville de Genas</a> et la <a href="https://www.ffkarate.fr/" target="_blank">Fédération Française de Karaté</a>',
      copyright: 'Copyright © 1993-present <a href="https://github.com/artsmartiauxgenas" target="_blank">Arts Martiaux Genas</a> ·  <a href="/mentions-legales">mentions légales</a> · <a href="/contact">contact</a>'
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
