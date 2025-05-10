---
title: Charte interne de documentation
tags: 
  - charte
  - onboarding
  - interne
  - documentation
date: 2025-05-10
layout: layouts/page.vto
---
# Charte interne de documentation  
[Arts Martiaux Genas](/)

## Objectifs

La documentation du club Arts Martiaux Genas a trois fonctions principales :

1. **Informer** les visiteurs et futurs adhérents via une vitrine claire et à jour.
2. **Accompagner** les membres et les enseignants dans la vie du club (cours, inscription, règlements, communication).
3. **Soutenir** la gouvernance du club (bureau, trésorier, président) par une organisation rigoureuse, traçable et transmissible des informations administratives et financières.

### Publics concernés

- **Le grand public** : pour découvrir le club, ses valeurs et ses activités.
- **Les adhérents et parents** : pour s’inscrire, comprendre le fonctionnement, accéder aux ressources utiles.
- **Les enseignants** : pour construire les cours, partager des consignes et du contenu pédagogique.
- **Le bureau** : pour piloter le club avec clarté, structurer les saisons, assurer la continuité et répondre aux obligations légales et financières.

Chaque document publié doit être lisible par les personnes concernées, à jour dans son contexte, et facile à retrouver.

## Périmètre de la documentation

La documentation couvre :
- Les **informations institutionnelles** (statuts, RNA, SIRET…)
- Les **documents saisonniers** (AG, budgets, plannings, règlements…)
- Les **contenus pédagogiques** (programmes, consignes)
- Les **communications** (affiches, courriers, réseaux sociaux)
- Les **modèles** (feuille de présence, PV, formulaires)
- Les **documents historiques ou archivés**

## Organisation

La documentation est structurée de la manière suivante :

- Un **dossier par saison** dans `docs/saisons/` (ex : `2025`), regroupant tous les documents de l’année.
- Un fichier **`_data/club.yaml`** contenant les **données transverses officielles** (nom du club, RNA, SIRET, IBAN masqué, contacts…).
- Des **espaces publics** (`club/`, `blog/`, etc.) pour la vitrine, les annonces et la vie du club.
- Un **dépôt séparé et privé** pour les documents confidentiels (`private/`), exclu du site statique public.
- Des fichiers **modèles** dans un dossier `templates/` pour standardiser les AG, convocations, budgets, etc.

Chaque saison contient les dossiers suivants :
- `admin/` : statuts, règlement, équipe
- `AG/` : convocation, PV
- `cours/` : planning, disciplines
- `enseignants/` : programme, sécurité
- `budget/` : prévisionnel et réalisé
- `subventions/` : demandes, conventions
- `communication/` : affiches, messages

## Règles de mise à jour

- Toute nouvelle saison doit avoir son propre dossier.
- Les **statuts et règlements** doivent être **dupliqués** dans chaque saison, même s’ils ne changent pas.
- Chaque fichier doit comporter une **date** et, si pertinent, une **personne responsable** ou signataire.
- Les informations communes (RNA, SIRET…) sont centralisées dans `_data/club.yaml`.

## Responsabilités

| Rôle        | Responsabilités documentaires principales             |
|-------------|--------------------------------------------------------|
| Président   | Supervision globale, validation des documents clés     |
| Secrétaire  | Mise à jour des PV, règlements, convocations           |
| Trésorier   | Budgets, justificatifs, documents de subventions       |
| Enseignants | Mise à jour des programmes, consignes de sécurité      |

Les contributions peuvent être rédigées ensemble ou à l’initiative de chacun, selon les besoins.

## Partage et accès

- Le **site public** héberge tous les documents consultables par les membres et visiteurs.
- Un dépôt **privé** (non publié) contient les informations sensibles (RIB, bilans comptables, contrats).
- Si besoin, une partie du site peut être **restreinte par mot de passe** ou par un lien privé.

## Bonnes pratiques

Pour garantir la cohérence, la traçabilité et la maintenabilité de la documentation du club, les règles suivantes s’appliquent :

1. **Une seule source de vérité pour chaque information**  
   - Les données officielles (RNA, SIRET, adresse...) sont uniquement dans `_data/club.yaml`.
   - Les documents de référence (statuts, règlements) sont dans un seul fichier par saison.

2. **Chaque document a un contexte temporel clair**  
   - Tout document lié à une saison (AG, budget, programme, planning) doit se trouver dans le dossier de cette saison.

3. **Aucun fichier ne doit rester isolé**  
   - Tous les documents doivent être intégrés dans l’arborescence documentaire ou dans le dépôt privé.

4. **Chaque document doit être lisible, daté et identifiable**  
   - Les fichiers doivent avoir un nom clair, une date, et un auteur ou responsable si pertinent.

> Ces règles visent à permettre une prise en main rapide du fonctionnement du club par toute personne entrant au bureau ou dans l’équipe pédagogique.