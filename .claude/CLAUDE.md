# CLAUDE.md — Arts Martiaux Genas

Projet de documentation et site vitrine du club **Arts Martiaux Genas** (Genas, 69).  
Site statique généré avec VitePress. Dépôt public : [github.com/artsmartiauxgenas/web](https://github.com/artsmartiauxgenas/web)

---

## Stack technique

- **VitePress 1.x** — `srcDir: ./src`, `cleanUrls: true`, langue `fr-FR`
- **echarts** — graphiques d'évolution des adhérents (composant `LineChart.vue`)
- **markdown-it-footnote** — notes de bas de page dans les documents légaux
- Serveurs : `npm run docs:dev` → port 5173 / `npm run docs:preview` → port 4173

---

## Structure des fichiers clés

```
src/
├── index.md                        # Page d'accueil publique
├── club.md                         # Équipe (VPTeamPage)
├── faq.md                          # Questions fréquentes
├── horaires.md                     # Redirection → /docs/horaires
├── inscription.md                  # Redirection → /docs/inscription
├── blog/
│   ├── SSSS-SS/                    # Un dossier par saison (archivés : collapsed dans sidebar)
│   └── SSSS-SS/                    # Saison en cours (ouvert dans sidebar)
├── docs/
│   ├── disciplines/
│   │   ├── karate-shotokan.md
│   │   └── karate-fitness-defense.md   # Karaté Défense + Body Karaté + Karaté Mix
│   ├── guides/
│   │   ├── index.md                # Portail guides + checklist saison suivante
│   │   ├── templates/              # PV AG, PV CA, convocation, bilan, RFC, planning, inscription
│   │   └── *.md                    # Guides opérationnels
│   ├── legal/
│   │   ├── statuts/latest.md       # @include → statuts en vigueur
│   │   ├── reglements/latest.md    # @include → règlement en vigueur
│   │   ├── assemblees/             # PV AG par date
│   │   ├── conseils/               # PV CA par date
│   │   ├── budgets/                # Bilans et budgets prévisionnels
│   │   └── mandats.md              # Historique des mandats
│   ├── saisons/
│   │   ├── latest.md               # @include → fiche saison en cours (source de vérité)
│   │   └── SSSS-SS.md              # Une fiche par saison
│   └── rfc/                        # Décisions documentées (Request for Comments)
data/
└── members.data.ts                 # Données adhérents par saison { 'SSSS-SS': [...] }
.vitepress/
├── config.mts                      # Nav + sidebar (modifier ici pour la navigation)
└── theme/components/LineChart.vue  # Graphique adhérents (prop: :seasons="['2026-27', '2025-26']")
```

---

## Saison courante

**Source de vérité** : `src/docs/saisons/latest.md` (via `@include`) — toujours lire ce fichier pour connaître la saison en cours, les dates, le CA et les documents de référence. Ne pas hardcoder ces informations ici.

---

## Disciplines

| Discipline | Fichier | Âge minimum |
| :--------- | :------ | :---------: |
| Karaté Shotokan | `docs/disciplines/karate-shotokan.md` | 5 ans |
| Karaté Fitness & Défense | `docs/disciplines/karate-fitness-defense.md` | 16 ans |

**Karaté Fitness & Défense** regroupe trois pratiques sur une même page :
- `#karate-defense` — self-défense
- `#body-karate` — fitness chorégraphié (ex Body Fight)
- `#karate-mix` — MMA loisir (ex MMA Fit+Fun)

---

## Conventions de nommage

| Type | Pattern | Exemple |
| :--- | :------ | :------ |
| Article blog | `src/blog/SSSS-SS/AAAA-MM-JJ-slug.md` | `2026-27/2026-09-06-forum.md` |
| PV CA | `src/docs/legal/conseils/AAAA-MM-JJ-pv-ca-public.md` | |
| PV AG | `src/docs/legal/assemblees/AAAA-MM-JJ-pv-ag.md` | |
| Bilan | `src/docs/legal/budgets/SSSS-SS-bilan.md` | `2025-26-bilan.md` |
| Budget | `src/docs/legal/budgets/SSSS-SS-budget.md` | `2026-27-budget.md` |
| Template horaires | `src/docs/guides/templates/horaires.md` | |
| Placeholder / template | Préfixe `_` | `_template.md` |

---

## Navigation (config.mts)

**Nav principale** : Le club · Horaires · S'inscrire · Blog · Contact  
— "Docs" n'est pas dans la nav : accès via l'accueil (section Accès rapide) et `/docs/`

**Sidebar `/docs/`** : Disciplines → Infos pratiques → Vie associative → Gouvernance → Partenaires  
**Sidebar `/blog/`** : saison en cours (ouvert) → saisons précédentes (repliées, archivées)

Quand on ajoute un article de blog, l'ajouter aussi dans la sidebar `/blog/` de `config.mts`.

---

## Ton éditorial

**Public cible** : deux audiences distinctes à ne pas mélanger.

- **Visiteurs / familles** (index.md, club.md, faq.md, disciplines, horaires, inscription) :
  - Phrases courtes, langage naturel, sans jargon
  - S'adresse directement au lecteur ("vous", "vos enfants")
  - Ton chaleureux mais sans familiarité excessive
  - Pas d'emojis sauf dans les titres de section où ils sont déjà présents

- **Membres / CA** (guides, legal, saisons) :
  - Ton neutre et factuel, structuré en sections claires
  - Listes et tableaux plutôt que longs paragraphes
  - Les procédures sont rédigées à l'impératif ou à l'infinitif

**Règles communes :**
- Français, accents corrects (É, è, ç, œ…)
- Ne pas utiliser `---` comme séparateur de section dans le contenu — les titres `##` suffisent
- Dates en format littéral dans le contenu ("6 novembre 2025"), ISO dans les frontmatters (`date: 2025-11-06`)
- Montants en euros avec espace insécable : `1 200 €`
- Tirets longs `—` pour les incises, pas de double tiret `--`
- Toujours lier vers les pages connexes en fin de section ou de page

---

## Règles de contribution

### Ajouter un article de blog

1. Créer `src/blog/SSSS-SS/AAAA-MM-JJ-slug.md` avec frontmatter `title`, `description` (SSSS-SS = saison en cours, lire `latest.md`)
2. Ajouter l'entrée dans la sidebar blog de `config.mts`
3. Ajouter l'entrée dans `src/blog/SSSS-SS/index.md`
4. Si c'est l'un des 4 articles les plus récents, mettre à jour `src/index.md` (section Derniers articles)

### Mettre à jour les horaires

Modifier `src/docs/horaires.md` — les ancres (`#karate-shotokan`, `#karate-defense`, etc.) sont utilisées par les pages disciplines, ne pas les supprimer.

### Changer de saison

1. Créer `src/docs/saisons/AAAA-BB.md` (copier depuis la saison précédente)
2. Mettre à jour `src/docs/saisons/latest.md` → `@include: AAAA-BB.md`
3. Dans la fiche saison, renseigner le tableau d'événements dans une région `<!-- #region journal --> … <!-- #endregion journal -->` et le tableau du CA dans une région `<!-- #region ca --> … <!-- #endregion ca -->`
4. Ajouter la section de saison dans `src/docs/saisons/journal.md` (`<!-- @include: AAAA-BB.md#journal -->`) ; dans `src/docs/legal/mandats.md`, pointer le « CA actuel » vers la nouvelle saison (`<!-- @include: ../saisons/AAAA-BB.md#ca -->`) et ajouter une ligne au changelog « Évolution du conseil » si le CA a changé
5. Créer `src/blog/AAAA-BB/index.md`
6. Ajouter la saison dans `data/members.data.ts`
7. Mettre à jour la sidebar blog dans `config.mts` (archiver l'ancienne)
8. Ajouter en tête de `src/docs/saisons/index.md`

> Le journal de l'association (`src/docs/saisons/journal.md`) agrège les régions `#journal` des fiches saison via `<!-- @include: SSSS-SS.md#journal -->`. **Source de vérité unique** : les événements sont saisis dans la fiche saison (région `journal`), affichés à la fois sur la fiche et dans le journal. Les saisons sans fiche dédiée (≤ 2024-25) et les jalons légaux sont listés directement dans `journal.md`.
>
> **Ordre** : à l'intérieur de chaque saison, les lignes sont en ordre chronologique **ascendant** (du plus ancien au plus récent) ; le journal liste les **saisons** de la plus récente à la plus ancienne. Les lignes « niveau saison » (budget, bilan, règlement, datées `SSSS-SS`) se placent en tête du bloc.
>
> L'include par **ancre de titre** (`#mon-titre`) n'est **pas fonctionnel** en VitePress 1.6.3 (il inclut le fichier entier) — utiliser les **régions VS Code** (`<!-- #region --> / <!-- #endregion -->`).
>
> **Mandats** : le CA de chaque saison est un instantané dans la région `#ca` de sa fiche (la fiche reste **autonome**). `src/docs/legal/mandats.md` affiche deux choses : (1) le **CA actuel** = include de la région `#ca` de la **saison en cours** ; (2) **Évolution du conseil** = changelog manuel des changements (du plus récent au plus ancien), vocabulaire 🆕 Entrant · 🔄 Reconduit · 👋 Sortant. Le changelog est la seule source des changements (pas de duplication dans les instantanés).

### Ajouter un PV de CA

1. Créer `src/docs/legal/conseils/AAAA-MM-JJ-pv-ca-public.md` (depuis le template)
2. Ajouter le lien dans `src/docs/legal/conseils/index.md`
3. Ajouter la ligne dans le tableau "Réunions du CA" de la fiche saison

### Modifier la gouvernance (statuts, règlement)

- Créer le nouveau fichier versionné (ex: `2026-reglement.md`)
- Mettre à jour `latest.md` avec `@include: 2026-reglement.md`
- Créer une RFC associée dans `src/docs/rfc/`

---

## Ce qu'il ne faut pas faire

- Ne pas modifier les ancres des sections d'horaires (`{#karate-shotokan}`, `{#body-karate}`…) sans mettre à jour les liens dans les pages disciplines
- Ne pas écrire de données personnelles dans ce dépôt (coordonnées, données bancaires, contrats) — dépôt public
- Ne pas supprimer les fichiers `latest.md` qui utilisent `@include`
- Ne pas ajouter d'entrée dans la sidebar sans créer le fichier correspondant
- Ne pas hardcoder des dates de saison dans les templates — utiliser des placeholders `AAAA-MM-JJ`, `20YY-ZZ`

---

## Données sensibles

Les documents confidentiels (RIB, contrats professeurs, liste adhérents, comptabilité détaillée) sont dans un **dépôt privé distinct**. Ne jamais les ajouter ici.

---

## Références rapides

- Assurance : MACIF, sociétaire n° 6293108
- Affiliation : FFKaraté n° 0690128
- RNA : W691055588 · Siret : 414 756 668 00037
- Email club : info@amgenas.fr
- Site : artsmartiauxgenas.fr
