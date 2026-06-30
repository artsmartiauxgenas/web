# Arts Martiaux Genas — Site et documentation

Site statique du club **Arts Martiaux Genas** (Genas, 69), généré avec [VitePress](https://vitepress.dev/). Il centralise la vitrine publique du club, le blog, la documentation interne et les documents institutionnels.

🌐 [artsmartiauxgenas.fr](https://artsmartiauxgenas.fr)

## Structure du site

```
src/
├── index.md                  → Page d'accueil publique
├── club.md                   → Équipe et partenaires
├── faq.md                    → Questions fréquentes
├── horaires.md               → Redirection → /docs/horaires
├── inscription.md            → Redirection → /docs/inscription
├── contact.md
├── mentions-legales.md
├── sponsors.md
├── blog/
│   ├── 2025-26/              → Articles de la saison 2025-26
│   └── 2026-27/              → Articles de la saison 2026-27
├── docs/
│   ├── disciplines/          → Karaté Shotokan, Karaté Fitness & Défense
│   ├── guides/               → Guides opérationnels pour bénévoles et CA
│   │   └── templates/        → Templates PV AG, PV CA, convocation, RFC
│   ├── legal/                → Statuts, règlements, AG, budgets, mandats
│   ├── saisons/              → Fiches saison (2025-26, 2026-27…)
│   ├── rfc/                  → Décisions documentées (Request for Comments)
│   ├── horaires.md
│   └── inscription.md
└── public/                   → Logos, images, fichiers statiques
```

## Lancer le site en local

```bash
npm install
npm run docs:dev      # Serveur de développement → localhost:5173
npm run docs:build    # Build de production
npm run docs:preview  # Prévisualisation du build → localhost:4173
```

## Contribuer

Les contributions sont les bienvenues : corrections, mises à jour de guides, ajout d'articles de blog.

- Forker le dépôt, créer une branche, soumettre une pull request
- Les grandes décisions structurantes sont documentées sous forme de [RFC](/src/docs/rfc/)
- Consulter le [guide de contribution](src/docs/guides/contribuer.md) pour les conventions

## Données sensibles

Les documents confidentiels (RIB, contrats, liste des adhérents, comptabilité détaillée) sont conservés dans un **dépôt privé distinct**, jamais synchronisé avec ce site.

## Contact

[info@amgenas.fr](mailto:info@amgenas.fr) · [artsmartiauxgenas.fr/contact](https://artsmartiauxgenas.fr/contact)
