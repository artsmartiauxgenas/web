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
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Ayoub Otmani',
    title: 'Entraîneur et directeur technique',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Bernardo Dupont',
    title: 'Entraîneur et directeur technique',
    links: [
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
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
    avatar: 'https://www.github.com/yyx990803.png',
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
  <VPTeamMembers :members />
    <VPTeamPageSection>
    <template #title>Informations du club</template>
    <template #lead>Voir les <a href="/docs/legal/">informations administratives</a>]</template>
    <template #members>
    </template>
  </VPTeamPageSection>
</VPTeamPage>