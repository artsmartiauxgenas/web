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
- Un **dossier par saison** dans `docs/saisons/` (ex : `2025`)
- Un **fichier unique pour les informations administratives** dans `_data/club.yaml`
- Des **dossiers publics** (vitrine, cours, blog)
- Un **dépôt privé** séparé pour les documents sensibles

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

- **Un seul fichier par sujet**, bien nommé et daté.
- **Aucun document ne doit rester isolé** sur un poste personnel.
- **Utiliser Git** ou une solution de synchronisation pour suivre les évolutions.
- **Taguer les documents** par type et par saison pour permettre une navigation croisée.

