import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'fr-FR',
  title: "Arts Martiaux Genas",
  description: "Arts Martiaux à Genas",
  base: '/',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/app.webmanifest' }],
    ['link', { rel: 'apple-touch-icon', href: '/loog-enso-192.png' }],
  ],
  srcDir: './src',
  themeConfig: {
    logo: '/logo-enso.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Le club', link: '/club', activeMatch: '/club' },
      { text: 'Horaires', link: '/horaires', activeMatch: '/horaires' },
      { text: "S'inscrire", link: '/inscription', activeMatch: '/inscription' },
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
            { text: 'Karaté Fitness & Défense', link: '/docs/disciplines/karate-fitness-defense' },
          ]
        },
        {
          text: 'Infos pratiques',
          collapsed: false,
          items: [
            { text: 'Saison en cours', link: '/docs/saisons/latest' },
            { text: 'Cours & horaires', link: '/docs/horaires' },
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
              link: '/docs/guides/',
              items: [
                { text: 'Charte pédagogique', link: '/docs/guides/charte-pedagogique' },
                { text: 'Accueil adhérents', link: '/docs/guides/adherents' },
                { text: 'Accueil bénévoles', link: '/docs/guides/benevoles' },
                { text: 'Licences', link: '/docs/guides/licences' },
                { text: 'Evénement', link: '/docs/guides/event' },
                { text: 'Communication', link: '/docs/guides/communication' },
                { text: 'Préparation AG', link: '/docs/guides/ag' },
                { text: 'Plan comptable', link: '/docs/guides/plan-comptable' },
                { text: 'Guide du trésorier', link: '/docs/guides/conseils-tresorier' },
                { text: 'RGPD', link: '/docs/guides/rgpd' },
                { text: 'Droits à l\'image', link: '/docs/guides/droits-image' },
                { text: 'Accidents & incidents', link: '/docs/guides/accidents' },
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
            { text: 'Conseil d\'administration', link: '/docs/legal/conseils/' },
            { text: 'Décisions', link: '/docs/rfc/' },
            { text: 'Journal de l\'association', link: '/docs/saisons/journal' },
            { text: 'Saisons sportives', link: '/docs/saisons/' },
            { text: 'Règlements intérieurs', link: '/docs/legal/reglements/' },
            { text: 'Manifeste', link: '/docs/manifeste' },
          ]
        },
        {
          text: 'Partenaires',
          collapsed: true,
          items: [
            { text: 'Ville de Genas', link: 'https://genas.fr' },
            { text: 'FFKaraté', link: 'https://www.ffkarate.fr' },
            { text: 'Crédit Mutuel', link: 'https://www.creditmutuel.com' },
          ]
        },
      ],
      '/blog/': [
        {
          text: '2026-27',
          collapsed: false,
          items: []
        },
        {
          text: '2025-26',
          collapsed: true,
          items: [
            { text: 'Stage vacances avril', link: '/blog/2025-26/2026-04-13-stage-vacances' },
            { text: 'Stage Karaté-Do', link: '/blog/2025-26/2026-03-21-stage-karate-do' },
            { text: 'Stage Self-Défense', link: '/blog/2025-26/2026-03-08-stage-self-defense' },
            { text: 'Stage Karaté Mix', link: '/blog/2025-26/2026-02-28-stage-karate-mix' },
            { text: 'PV Assemblée Générale', link: '/blog/2025-26/2025-12-03-parution-pv-assemblee-generale' },
            { text: 'Assemblée Générale', link: '/blog/2025-26/2025-09-24-assemblee-generale' },
            { text: 'Liens utiles', link: '/blog/2025-26/2025-09-21-liens-utiles' },
            { text: 'Forum des associations', link: '/blog/2025-26/2025-09-06-forum-associations' },
            { text: 'Rentrée 2025', link: '/blog/2025-26/2025-08-16-saison-2025' },
            { text: 'Inscriptions ouvertes', link: '/blog/2025-26/2025-07-19-ouverture-inscriptions' },
            { text: 'Bal des pompiers', link: '/blog/2025-26/2025-07-12-bal-pompiers' },
            { text: 'Nouveau nom', link: '/blog/2025-26/2025-07-10-nouveau-nom' },
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
      { icon: 'instagram', link: 'https://www.instagram.com/artsmartiauxgenas' },
      { icon: 'facebook', link: 'https://www.facebook.com/people/Arts-Martiaux-Genas/61591289501295/' },
      { icon: 'github', link: 'https://github.com/artsmartiauxgenas/web' },
    ],

    footer: {
      message: 'Association loi 1901 soutenue par la <a href="https://genas.fr" target="_blank">Ville de Genas</a> et la <a href="https://www.ffkarate.fr/" target="_blank">Fédération Française de Karaté</a>',
      copyright: 'Copyright © 1993-present <a href="https://github.com/artsmartiauxgenas" target="_blank">Arts Martiaux Genas</a> ·  <a href="/mentions-legales">mentions légales</a> · <a href="/contact">contact</a>'
    }
  },

  markdown: {
    config: (md) => {
      md.use(footnote)
    },
    image: {
      lazyLoading: true
    }
  },

  sitemap: {
    hostname: 'https://artsmartiauxgenas.fr'
  }
})
