Introduction

Disciplines

Saison 2025

Guides

Administration

Gouvernance

/
├── .vitepress/
│   ├── config.ts                ← config navigation, sidebar, thème
│   └── theme/                   ← customisation éventuelle
│
├── public/
│   ├── favicon.png
│   ├── logo.svg
│   └── images/                  ← illustrations, photos publiques
│
├── scripts/                     ← outils CLI ou scripts d'indexation
│   └── generate-index.ts
│
├── src/                         ← documentation + blog (contenu principal)
│   ├── index.md                 ← page d'accueil du site
│
│   ├── club/
│   │   ├── presentation.md
│   │   ├── equipe.md
│   │   └── inscription.md
│
│   ├── legal/
│   │   ├── README.md
│   │   ├── statuts.md
│   │   ├── reglement-interieur.md
│   │   ├── index-ag.md
│   │   ├── index-bilans.md
│   │   └── index-conventions.md
│
│   ├── governance/
│   │   ├── README.md
│   │   ├── charte-documentation.md
│   │   ├── manifeste-public-first.md
│   │   ├── rfc-10-gouvernance-ouverte.md
│   │   └── rfc-11-structure-documents.md
│
│   ├── seasons/
│   │   ├── 2024-25/
│   │   │   ├── ag/
│   │   │   │   ├── 2025-07-06-ag-ordinaire.md
│   │   │   │   └── ...
│   │   │   ├── bilan/
│   │   │   │   └── bilan-financier-2024-25.md
│   │   │   ├── planning/
│   │   │   │   └── planning-karate-ados.md
│   │   │   └── inscriptions/
│   │   │       ├── formulaire-adhesion-2024-25.pdf
│   │   │       └── statistiques-anonymes.md
│   │   └── 2023-24/
│   │       └── ...
│
│   ├── blog/
│   │   ├── index.md             ← intro du blog
│   │   ├── 2025-07-nouveau-site.md
│   │   ├── 2025-07-forum-assos.md
│   │   └── 2025-07-ouverture-inscriptions.md
│
│   ├── guides/
│   │   ├── gestion-bureau.md
│   │   └── enseignant.md
│
│   └── meta/
│       ├── structure.md
│       └── tools.md
│
├── README.md                    ← description du dépôt (contributeurs)
├── LICENSE                      ← licence du code et contenus
└── deploy.sh / .github/         ← scripts ou workflow de déploiement
