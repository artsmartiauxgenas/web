# Arts Martiaux Genas — Site et documentation

Ce dépôt contient l’ensemble du site statique du club Arts Martiaux Genas, généré avec [Lume](https://lume.land/) et organisé pour centraliser :

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
├── faq.md               → Questions pratiques et courantes
├── club/                → Présentation du club (valeurs, disciplines, équipe)
├── blog/                → Actualités et annonces (articles datés)
├── docs/                → Documentation interne structurée
│   ├── admin/           → Statuts, règlements, documents institutionnels
│   ├── meta/            → Charte documentaire, fonctionnement, structure
│   ├── guides/          → Tutoriels pour les membres du bureau ou les enseignants
│   ├── years/           → Dossiers par saison (ex : 2024-25)
│   └── onboarding/      → Ressources pour accueillir un nouveau membre du bureau
├── assets/              → Logos, fichiers statiques
├── _data/club.yaml      → Données administratives officielles (RNA, SIRET, etc.)
├── _includes/           → Layouts et blocs HTML pour le rendu (Lume + Vento)
├── _components/         → Composants UI (facultatif)
└── _config.ts           → Configuration du site Lume
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

1. Une seule source de vérité par information (ex : `club.yaml` pour les infos administratives).
2. Chaque document est lié à une saison ou à une fonction précise.
3. Aucun fichier isolé hors du dépôt ou d’un dossier structuré.
4. Tous les documents doivent être datés, lisibles, et identifiables.

---

## 🛠️ Comment contribuer

### Prérequis

- [Deno](https://deno.land) (version récente)
- Git

### Installation locale

```bash
deno task serve
```

Le site sera disponible en local sur :  
[http://localhost:3000](http://localhost:3000)

### Commandes utiles

- `deno task build` → génère le site statique dans `_site/`

### Structure Lume

Ce site utilise :
- **Lume** comme générateur statique
- **Vento** pour les layouts et composants
- Un fichier `_config.ts` pour configurer les chemins, plugins, exclusions (`private/`, `.env`, etc.)

---

## 🤝 Contact

Pour toute contribution, question ou reprise du site, merci de contacter le président ou le secrétaire du club.
