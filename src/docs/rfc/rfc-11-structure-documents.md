---
title: Structure des documents – organisation, accès et évolutivité
description: Organisation, accès et évolutivité de la structure documentaire
id: rfc-11
tags: 
- documents
- structure
- rfc
authors: 
- name: Geoffrey Petri
  email: gpetri@amgenas.fr
date: 2025-10-16
status: draft
supersedes: 
outline: deep
---
# Structure des documents : organisation, accès et évolutivité
**Arts Martiaux Genas** · Saison 2025–26  
`rfc-11` 2025-10-16

> [!WARNING] DRAFT

## 🎯 Objectif

Cette RFC décrit l’organisation des documents de l’association Arts Martiaux Genas, en cohérence avec la [RFC-10 – Gouvernance ouverte](rfc-10-gouvernance-ouverte.md).  
Elle définit l’arborescence, les conventions de classement, la gestion par saison, et les règles de diffusion ou de confidentialité.

## 🗂️ Arborescence proposée
```
/docs/         → Documentation publique
/club/         → Infos pratiques (cours, lieux, inscriptions)
/legal/        → Statuts, bilans, AG, conventions
/gouvernance/  → Manifestes, chartes, RFC

/seasons/      → Données liées aux saisons sportives
  /2024-25/
    /ag/           → PV d’AG (AGO, AGE)
    /planning/     → Horaires des cours
    /bilan/        → Bilan d’activité et financier
    /inscriptions/ → Feuilles d’inscription, suivis anonymisés

/internal/     → Données non publiques
/gestion/      → Adhérents, finances détaillées, RH
/historique/   → Archives internes
/temp/         → Brouillons

/meta/         → Structure, scripts, conventions, backend
```

## 🧭 Gestion par saison

La vie de l'association est structurée par **saisons sportives** (juillet à juin).  
Tout document qui relève directement de cette temporalité doit être archivé dans un dossier `/seasons/YYYY-YY/`.

### 🔄 Documents saisonniers

| Document                               | Exemple de saison | Dossier cible                 |
|----------------------------------------|-------------------|-------------------------------|
| Planning des cours                     | 2024-25           | `/seasons/2024-25/planning/` |
| Procès-verbal de l’AG annuelle         | 2024-25           | `/seasons/2024-25/ag/`       |
| Bilan d’activité ou financier          | 2024-25           | `/seasons/2024-25/bilan/`    |
| Documents d'inscription / diffusion    | 2024-25           | `/seasons/2024-25/inscriptions/` |
| Statistiques d’adhésion (anonymisées)  | 2024-25           | `/seasons/2024-25/inscriptions/` |

## 🔁 Documents transverses

Certains documents s’appliquent à **plusieurs saisons**, voire à toute la durée de vie de l'association. Ils ne doivent pas être dupliqués dans les dossiers saisonniers.

| Document                               | Dossier cible         | Fréquence de mise à jour     |
|----------------------------------------|-----------------------|------------------------------|
| Statuts et règlement intérieur         | `/docs/legal/`        | Rare                         |
| Conventions de partenariat             | `/docs/legal/`        | En fonction des contrats     |
| Chartes et manifestes                  | `/docs/gouvernance/`  | À chaque évolution importante|
| RFC                                    | `/docs/gouvernance/`  | Vivantes (versionnées)       |
| Charte documentaire                    | `/meta/`              | Révisée chaque année         |

## 📋 Nommage et formats

- **Format recommandé** : `.md` pour les contenus modifiables, `.pdf` pour les documents signés.
- **Convention de nommage** :
  - PV d’AG : `2025-07-05-ag-ordinaire.md`
  - Planning : `planning-karate-ados-2024-25.md`
  - Bilans : `bilan-financier-2024-25.md`, `bilan-activite-2024-25.md`
- **Versionnage** : via Git ou par duplication horodatée.

## 🔁 Audit annuel

En fin de saison :
- Clôture du dossier saison en cours (`/seasons/XXXX-YY/`)
- Archivage des documents obsolètes
- Nettoyage du dossier `/internal/temp/`
- Revue de cette RFC si nécessaire

## 🔗 Liens utiles

- [RFC-10 – Gouvernance ouverte](rfc-10-gouvernance-ouverte)
- [Charte interne de documentation](/docs/guides/charte-documentation)
