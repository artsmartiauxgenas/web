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

Cette charte pose les fondations de notre organisation documentaire pour garantir la continuité, la clarté et la transmission dans la durée. Elle s’adresse à toute personne impliquée dans la gestion ou la pédagogie du club.

## 1. Pourquoi documenter ? (Objectifs et publics)

### Objectifs

1. **Informer** le public et les futurs adhérents via une vitrine claire et à jour.
2. **Accompagner** les membres et les enseignants dans la vie du club (cours, inscriptions, règlements).
3. **Soutenir** la gouvernance du club par une organisation simple, lisible et accessible.

### Publics concernés

- **Le grand public** : valeurs, cours, inscriptions
- **Les adhérents** : fonctionnement, documents annuels
- **Les enseignants** : programmes, consignes pédagogiques
- **Le bureau** : pilotage, documents officiels, budget, AG

## 2. Ce que nous documentons (Périmètre)

### Types de contenus couverts

- **Institutionnel** : statuts, règlements, RNA, SIRET
- **Saisonnier** : AG, budgets, plannings, inscriptions
- **Pédagogique** : contenus de cours, sécurité
- **Communication** : affiches, messages types
- **Modèles** : PV, formulaires, feuilles de présence
- **Archives** : anciennes versions des statuts, PV passés, etc.

### Accès

- Tous les documents sont publics **sauf** les éléments de gestion privée (contrats, adhérents, factures, RIB...).

## 3. Où tout se trouve (Organisation du site)

### Structure principale

```
/
├── index.md             → Vitrine publique
├── blog/                → Actualités, événements
├── docs/
│   ├── admin/           → Documents de référence (statuts, règlements…)
│   ├── years/2024-25/   → Dossier saisonnier
│   ├── guides/          → Tutoriels pour les actions courantes
│   └── meta/            → Fonctionnement interne, cette charte incluse
├── _data/club.yaml      → Données officielles (RNA, SIRET, etc.)
```

### Privé (non publié)

Un dépôt distinct contient les documents confidentiels :
- Contrats, RIB, comptabilité complète, adhérents

## 4. Qui fait quoi ? (Rôles documentaires)

| Rôle        | Responsabilités principales                        |
|-------------|----------------------------------------------------|
| Président   | Supervision générale, validation des documents clés |
| Secrétaire  | PV, convocations, règlements, documents institutionnels |
| Trésorier   | Budgets, finances, justificatifs, subventions       |
| Enseignants | Programmes, contenus pédagogiques, sécurité         |

Les contributions peuvent être rédigées ensemble ou à l’initiative de chacun.

## 5. Comment on s’y prend (Règles de structuration)

1. **Une seule source de vérité**  
   - `_data/club.yaml` contient les données administratives
   - `docs/admin/` contient les statuts et règlements par version

2. **Chaque document a un contexte temporel**  
   - Les documents d'une saison sont dans `docs/years/20XX-YY/`

3. **Aucun fichier ne doit rester isolé**  
   - Tous les fichiers doivent être intégrés dans un dossier logique ou le dépôt privé

4. **Chaque document est lisible, daté, identifié**  
   - Le nom du fichier et son contenu doivent permettre de savoir quoi, quand, par qui

## 6. Accès, partage et confidentialité

- Le site est public par défaut
- Les documents sensibles sont dans un dépôt privé
- Une page ou un lien restreint peut être mis en place si nécessaire

## 7. Ressources utiles

- [club.yaml](/_data/club.yaml) : données administratives du club
- [docs/admin/](/docs/admin/) : documents de référence
- [docs/meta/](/docs/meta/) : fonctionnement, charte, conventions
- [docs/years/2024-25/](/docs/years/2024-25/) : saison en cours

---

> Cette charte peut être revue et actualisée chaque saison. Il revient au bureau en place de la maintenir à jour et de la transmettre à toute nouvelle personne entrant dans l’équipe.
