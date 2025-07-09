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
