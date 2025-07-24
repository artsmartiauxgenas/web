
## Header

- Le Club : présentation, équipe
- Disciplines
  - Karaté
  - Karaté Défense Training & Santé
  - Body Fight & MMA Fit+Fun
- FAQ
- Docs
- Blog
- Contact

## Hero

- Rejoindre le club
- Voir les horaires
- Contacter l'équipe

## Sidebar

- Bienvenue
- Infos pratiques
  - Cours & Horaires
  - Tarifs & Inscriptions
  - Règlement intérieur
  - Evénements
- Vie associative
  - Manifeste / Projet
  - Contribuer
  - Rejoindre le CA
  - Guides
- Gouvernance
  - Statuts (src/docs/legal/statuts/latest.md)
  - Assemblées générales (src/docs/legal/ag/)
  - Conseil d'administration (src/docs/legal/ca/)
  - Budgets (src/docs/legal/budgets/)
  - RFC (src/docs/rfc/)
- Liens
  - Liens profonds
  - Liens externes

## Strucutre Web/API

| URL                                  | Contenu                                         |
| ------------------------------------ | ----------------------------------------------- |
| `/`                                  | Page d’accueil                                  |
| `/club`                              | Présentation du club : équipe, partenaires, valeurs, lien vers mentions légales |
| `/inscription`                  | Tarifs, modalités                               |
| `/cours`                      | Cours et horaires, lien vers /inscription              |
| `/cours/karate`                | Karaté                                          |
| `/cours/karate-defense`        | Karaté défense                                  |
| `/cours/body-fight`            | Body Fight                                      |
| `/blog`                              | Accueil du journal                              |
| `/blog/2025-26`                      | Billets de la saison en cours                   |
| `/blog/2024-25`                      | Saison x                               |
| `/saison`                            | Saison en cours (alias vers `/saisons/2025-26`) |
| `/saisons/`                          | Liste des saisons                               |
| `/saisons/2025-26`                   | Détails de la saison                            |
| `/legal`                             | Accès central aux documents statutaires         |
| `/legal/mandats`                     | Historique des mandats                          |
| `/legal/statuts`                     | Version en vigueur                              |
| `/legal/statuts/`                     | Liste des statuts                  |
| `/legal/statuts/2021`                | Version antérieure                              |
| `/legal/reglement`                   | Règlement intérieur en vigueur                  |
| `/legal/reglements/`                   | Liste des Règlements intérieurs                 |
| `/legal/reglements/2021`                | Version antérieure                              |
| `/legal/assemblees/`                     | Liste des AG et AGE                                      |
| `/legal/assemblees/2025-04-17-pv-ag`               | PV d’AG                                         |
| `/legal/assemblees/2025-04-17-ov-age`               | PV d’AGE                                        |
| `/legal/conseil/2025-07-16-pv-ca-public`               | PV de CA                                        |
| `/legal/journal-officiel/2025-07-16-declaration` | Déclaration et Preuve de dépôt                                 |
| `/legal/budgets/2025-26-budget`             | Budget de la saison                     |
| `/legal/budgets/2025-26-bilan`             | Bilan de la saison                     |
| `/guides`                            | Accès aux guides internes                       |
| `/guides/inscription`                | Comment s'inscrire                              |
| `/guides/contribuer`                 | Comment contribuer                              |
| `/guides/rejoindre-ca`               | Rejoindre le CA                                 |
| `/rfc`                               | Liste des RFC                                   |
| `/rfc/rfc-01`                        | RFC spécifique                                  |
| `/faq`                    | Foire aux questions                             |
| `/contact`                | Contact                                         |
| `/mentions-legales`       | Mentions légales                                |





## Structure

.
├── .github/
│   └── workflows/
│       └─ gh-deploy.sh
├── .vitepress/
│   ├── theme/
│   │   ├── style.css
│   │   └── index.ts
│   └── config.mts
├── src/
│   ├── blog/
│   │   ├── index.md                      # Page d'accueil du blog "Journal du Club"
│   │   ├── 2025-26/
│   │   │   ├── index.md                  # Posts saison 2025-26
│   │   │   └── 2025-09-forum.md
│   │   └── 2024-25/
│   │       ├── index.md                  # Posts 2025-26 (archive)
│   │       └── 2024-09-forum.md
│   ├── club/
│   │   ├── horaires.md               # Horaires et lieux
│   │   ├── inscription.md            # Tarifs et inscription
│   │   └── index.md                  # Présentation de l'équipe, des sponsors
│   ├── disciplines/                    # Description des disciplines
│   │   ├── index.md
│   │   ├── karate.md
│   │   └── body-fight.md
│   ├── docs/
│   │   ├── index.md                      # Introduction
│   │   ├── legal/
│   │   │   ├── index.md                  # Liens utiles pour la partie gouvernance
│   │   │   ├── mandats.md                # Historique des mandats
│   │   │   ├── statuts/
│   │   │   │   ├── index.md              # Liste de toutes les versions
│   │   │   │   ├── latest.md             # Redirection vers version en vigueur
│   │   │   │   ├── 2025-statuts.md
│   │   │   │   └── 2021-statuts.md
│   │   │   ├── reglements/
│   │   │   │   ├── index.md              # Liste de toutes les versions
│   │   │   │   ├── latest.md             # Redirection vers version en vigueur
│   │   │   │   ├── 2025-reglement.md
│   │   │   │   └── 2023-reglement.md
│   │   │   ├── ag/
│   │   │   │   ├── index.md              # Liste de toutes les versions
│   │   │   │   ├── latest.md             # Redirection vers version en vigueur
│   │   │   │   └── 2025-04-17-pv-ag.md
│   │   │   ├── ca/
│   │   │   │   ├── index.md              # Liste de toutes les versions
│   │   │   │   └── 2025-07-16-pv-ca-public.md # PV de réunion du CA (version synthétique/publique)
│   │   │   ├── journal-officiel/
│   │   │   │   ├── index.md              # Liste des dépôts et déclarations
│   │   │   │   └── 2025-07-16-declaration.md # Déclaration
│   │   │   └── budgets/
│   │   │       ├── index.md              # Liste des budgets et bilan
│   │   │       ├── 2025-26-budget.md     # Budget prévisionnel
│   │   │       ├── 2025-26-bilan.md      # Bilan financier
│   │   │       ├── 2024-25-budget.md     # Budget prévisionnel
│   │   │       └── 2024-25-bilan.md      # Bilan financier
│   │   ├── guides/
│   │   │   ├── index.md                  # Liste des guides
│   │   │   ├── contribuer.md
│   │   │   └── rejoindre-ca.md
│   │   ├── events/
│   │   │   ├── index.md                  # Redirection vers la saison en cours
│   │   │   ├── all.md                    # Liste des saisons
│   │   │   ├── 2025-26/                  # Evénements saison 2025-26
│   │   │   │   └── index.md              # Liste des événements 2025-26 et lien vers all
│   │   │   └── 2024-25/                  # Evénements saison 2024-25
│   │   │       └── index.md              # Liste des événements 2024-25 et lien vers all
│   │   ├── saisons/
│   │   │   ├── index.md                  # Liste des saisons
│   │   │   ├── latest.md                 # Redirection vers saison en cours
│   │   │   ├── 2025-26.md                # Saison 2025-26
│   │   │   └── 2024-25.md                # Saison 2024-25
│   │   └── rfc/
│   │       ├── index.md                  # Liste des RFC
│   │       ├── rfc-01-gouvernance.md
│   │       └── rfc-02-structure.md
│   ├── faq.md
│   ├── mentions-legales.md
│   └── contact.md
├── README.md
├── LICENCE
└── CONTRIBUTING.md

Contenu de la sidebar docs/

- Introduction (src/docs/index.md)
- Le Club
  - Disciplines (src/docs/club/disciplines/)
  - Valeurs & fonctionnement (manifeste)
  - Saison en cours (src/docs/saisons/latest)
- Infos pratiques
  - Cours (src/docs/club/horaires.md)
  - Tarifs & inscriptions (src/docs/club/inscription.md)
  - Règlement intérieur (src/docs/legal/reglements/latest.md)
  - Evénements (src/docs/events/)
- Vie associative
  - Contribuer (src/docs/guides/contribuer.md)
  - Rejoindre le CA (src/docs/guides/rejoindre-ca.md)
  - Guides
    - How-tos
- Gouvernance
  - Statuts (src/docs/legal/statuts/latest.md)
  - Assemblées générales (src/docs/legal/ag/)
  - Conseil d'administration (src/docs/legal/ca/)
  - Budgets (src/docs/legal/budgets/)
  - RFC (src/docs/rfc/)
