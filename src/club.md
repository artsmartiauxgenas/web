---
layout: page
sidebar: false
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const members = [
  {
    avatar: '/club/IMG_0766.jpeg',
    name: 'Ayoub Otmani',
    title: 'Entraîneur, 3ème DAN, Directeur technique Karaté',
    links: [
      { icon: 'twitter', link: '' }
    ]
  },
  {
    avatar: '/club/8a3a9e8f.jpg',
    name: 'Bernardo Dupont',
    title: 'Entraîneur, 4ème DAN, Référent AITO Rhône-Alpes FFK',
    links: [
      { icon: 'twitter', link: '' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Thibaud Roux',
    title: 'Entraîneur en formation',
    links: [
      { icon: 'twitter', link: '' }
    ]
  },
  {
    avatar: '/club/IMG_2034.jpeg',
    name: 'Geoffrey Petri',
    title: 'Président',
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Cyrille Protière',
    title: 'Secrétaire',
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Dragos Mocanu',
    title: 'Trésorier',
  },
  {
    avatar: '/club/d2e20ad1.jpg',
    name: 'Laurent Galin',
    title: 'Membre CA',
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Notre équipe
    </template>
    <template #lead>
      Ils ne portent pas tous un kimono, mais chacun a sa mission spéciale.
      Professeurs, bénévoles, maîtres de l’ombre...<br/>
      faîtes connaissance avec notre équipe.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members />
  <VPTeamPageSection>
    <template #title>Nos partenaires</template>
    <template #lead>Voir les <a href="/sponsors/">organismes qui nous soutiennent</a></template>
    <template #members>
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Informations du club</template>
    <template #lead>Voir les <a href="/docs/legal/">informations administratives</a></template>
    <template #members>
    </template>
  </VPTeamPageSection>
</VPTeamPage>