# Arts Martiaux Genas — Site et documentation

Ce dépôt contient l’ensemble du site statique du club Arts Martiaux Genas, et organisé pour centraliser :

- la **vitrine publique** du club,
- le **blog**,
- la **documentation interne et institutionnelle**,
- les **documents saisonniers** (cours, AG, budget...),
- un **système de gouvernance documentaire clair et durable**.

## 🌐 Structure générale du site

```
/
├── index.md             → Page d'accueil publique
├── club/                → Présentation du club (équipe)
├── blog/                → Actualités et annonces (articles datés)
├── docs/                → Documentation interne structurée
│   ├── guides/          → Tutoriels pour les membres du bureau ou les enseignants
│   ├── legal/           → Statuts, règlements, documents institutionnels
│   ├── ssn/             → Dossiers par saison (ex : 2025-26)
│   └── faq.md           → Questions pratiques et courantes
├── public/              → Logos, fichiers statiques
```

## 📁 Détail des dossiers clés

- **`/docs/ssn/2024-25/`**  
  Contient les documents de la saison : budget, AG, planning, documents liés aux événements.

- **`/docs/legal/`**  
  Centralise les documents institutionnels : statuts (actuels et passés), règlements, annonces officielles.

- **`/docs/guides/`**  
  Fournit des tutoriels pour les actions courantes : réserver une salle, organiser un stage, etc.

## 🔒 À propos du dépôt privé

Les documents confidentiels (RIB, contrats, liste des adhérents, comptabilité détaillée, etc.) sont conservés dans un **dépôt privé distinct**. Ce dépôt n’est **jamais publié** ni synchronisé avec ce site.

## ✅ Bonnes pratiques à respecter

1. Une seule source de vérité par information.
2. Chaque document est lié à une saison ou à une fonction précise.
3. Aucun fichier isolé hors du dépôt ou d’un dossier structuré.
4. Tous les documents doivent être datés, lisibles, et identifiables.
5. Aucune information personnelle n'est publiée (RGPD).

## 🛠️ Comment contribuer

### Prérequis

- Node
- Git
- Vitepress

### Exécution locale

```bash
npm run docs:dev
```

### Build local

```bash
npm run docs:build
```

## 🤝 Contact

Pour toute contribution, question ou reprise du site, merci de contacter le président ou le secrétaire du club.
