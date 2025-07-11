# Arts Martiaux Genas — Site et documentation

Ce dépôt contient l’ensemble du site statique du club Arts Martiaux Genas, et organisé pour centraliser :

- la **vitrine publique** du club,
- le **blog**,
- la **documentation interne et institutionnelle**,
- les **documents saisonniers** (cours, AG, budget...),
- ainsi qu’un **système de gouvernance documentaire clair et durable**.

---

## 🌐 Structure générale du site

```
/
├── index.md             → Page d'accueil publique
├── club/                → Présentation du club (valeurs, disciplines, équipe)
├── blog/                → Actualités et annonces (articles datés)
├── docs/                → Documentation interne structurée
│   ├── admin/           → Statuts, règlements, documents institutionnels
│   ├── meta/            → Charte documentaire, fonctionnement, structure
│   ├── guides/          → Tutoriels pour les membres du bureau ou les enseignants
│   ├── years/           → Dossiers par saison (ex : 2024-25)
│   ├── onboarding/      → Ressources pour accueillir un nouveau membre du bureau
│   └── faq.md           → Questions pratiques et courantes
├── public/              → Logos, fichiers statiques
```

---

## 📁 Détail des dossiers clés

- **`/docs/years/2024-25/`**  
  Contient les documents de la saison : budget, AG, planning, documents liés aux événements.

- **`/docs/admin/`**  
  Centralise les documents institutionnels : statuts (actuels et passés), règlements, annonces officielles.

- **`/docs/guides/`**  
  Fournit des tutoriels pour les actions courantes : réserver une salle, organiser un stage, etc.

- **`/docs/meta/`**  
  Explique l’organisation de la documentation, la logique des dossiers, et les conventions à respecter.

- **`_data/club.yaml`**  
  Contient les données officielles du club (nom, RNA, SIRET, adresse, email, site, etc.).

---

## 🔒 À propos du dépôt privé

Les documents confidentiels (RIB, contrats, liste des adhérents, comptabilité détaillée, etc.) sont conservés dans un **dépôt privé distinct**. Ce dépôt n’est **jamais publié** ni synchronisé avec ce site.

---

## ✅ Bonnes pratiques à respecter

1. Une seule source de vérité par information.
2. Chaque document est lié à une saison ou à une fonction précise.
3. Aucun fichier isolé hors du dépôt ou d’un dossier structuré.
4. Tous les documents doivent être datés, lisibles, et identifiables.

---

## 🛠️ Comment contribuer

### Prérequis

- Node
- Git
- Vitepress

### Installation locale

```bash
npx vitepress dev .
```

---

## 🤝 Contact

Pour toute contribution, question ou reprise du site, merci de contacter le président ou le secrétaire du club.

Migration vers

```

/                         # Racine
├── legal/
│   ├── statuts.md
│   ├── projet-associatif.md
│   ├── reglement.md
│   ├── assurances/**     # Attestations de RC annuelle
│   ├── encadrants/**     # Déclarations, diplômes, casiers (si requis)
│   ├── depots/**         # Dépôts de statuts en préfecture
│   ├── rfc/
│   │   └── ...
│   └── ag/index.md
├── seasons/2025-26/
│   ├── ag/2026-06-30/
│   ├── reglement.md
│   ├── bilan-financier.md
│   ├── subventions/**    # Dossiers de subvention + justificatifs
│   └── ...


/                         # Racine
├── legal/                # Textes fondateurs et gouvernance longue durée
│   ├── statuts.md
│   ├── projet-associatif.md
│   ├── reglement-type.md
│   ├── rfc/
│   │   ├── rfc-001-statuts-initiaux.md
│   │   ├── rfc-002-projet-associatif-2024-2028.md
│   │   ├── rfc-003-statuts-modifiés.md
│   │   └── ...
│   ├── ag/              # Assemblées générales (non saisonnières)
│   │   ├── 2023-06-30-ag-extraordinaire/
│   │   │   ├── convocation.pdf
│   │   │   ├── pv.md
│   │   │   └── feuille-presence.pdf
│   │   └── 2024-09-15-ag-ordinaire/
│   │       ├── ...
│   └── assurances/      # Certificats d'assurance responsabilité civile etc.
├── seasons/             # Une saison = une archive complète
│   ├── 2025-26/
│   │   ├── context.md         # RFC applicables, projet en vigueur, etc.
│   │   ├── reglement.md
│   │   ├── planning.md
│   │   ├── fiche-inscription.pdf
│   │   ├── bilan-financier.md
│   │   ├── rfc/
│   │   │   ├── rfc-004-reglement-2025-26.md
│   │   │   ├── rfc-005-modification-horaires.md
│   │   │   └── ...
│   │   ├── evenements/        # Tous les événements de la saison
│   │   │   ├── stage-octobre/
│   │   │   │   ├── description.md
│   │   │   │   ├── bilan-financier.md
│   │   │   │   └── affiches/
│   │   │   └── fête-club/
│   │   ├── ag/                # AG de fin de saison (doublon autorisé avec `legal/ag/`)
│   │   │   └── 2026-06-30/
│   │   │       ├── convocation.pdf
│   │   │       ├── pv.md
│   │   │       └── liste-signatures.pdf
│   │   └── communications/
│   │       └── plaquette-parents.pdf
├── public/               # Documents à publier ou transmettre
│   ├── reglement-simplifie.pdf
│   └── planning-public.md
├── templates/            # Modèles vierges pour l’équipe
│   ├── fiche-inscription-template.odt
│   ├── pv-ag-template.md
│   ├── bilan-financier-event-template.md
│   └── convocation-ag-template.odt
├── meta/                 # Documentation interne
│   ├── conventions.md    # Règles de nommage, formats, workflow documentaire
│   ├── index-rfc.md      # Index global de toutes les RFC (lien vers fichiers)
│   └── roadmap.md        # Idées d’évolution pour la structure
```