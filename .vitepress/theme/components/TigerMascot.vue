<script setup>
import { ref } from 'vue'

const belts = [
  { id: 'blanche',      label: 'Blanche',       kyu: '9e kyu',  c1: '#FFFFFF', c2: null      },
  { id: 'blanche-jaune',label: 'Blanche–Jaune', kyu: '8e kyu',  c1: '#FFFFFF', c2: '#FFD400' },
  { id: 'jaune',        label: 'Jaune',          kyu: '7e kyu',  c1: '#FFD400', c2: null      },
  { id: 'jaune-orange', label: 'Jaune–Orange',   kyu: '6e kyu',  c1: '#FFD400', c2: '#FF7A00' },
  { id: 'orange',       label: 'Orange',         kyu: '5e kyu',  c1: '#FF7A00', c2: null      },
  { id: 'orange-verte', label: 'Orange–Verte',   kyu: '4e kyu',  c1: '#FF7A00', c2: '#2E9E3F' },
  { id: 'verte',        label: 'Verte',          kyu: '3e kyu',  c1: '#2E9E3F', c2: null      },
  { id: 'verte-bleue',  label: 'Verte–Bleue',    kyu: '2e kyu',  c1: '#2E9E3F', c2: '#1E78D6' },
  { id: 'bleue',        label: 'Bleue',          kyu: '2e kyu',  c1: '#1E78D6', c2: null      },
  { id: 'bleue-marron', label: 'Bleue–Marron',   kyu: '1er kyu', c1: '#1E78D6', c2: '#6D3B1A' },
  { id: 'marron',       label: 'Marron',         kyu: '1er kyu', c1: '#6D3B1A', c2: null      },
  { id: 'noire',        label: 'Noire',          kyu: '1er dan', c1: '#1A1A1A', c2: null      },
]

const accessories = [
  { id: 'sunglasses', label: '🕶️ Lunettes cool' },
  { id: 'bandana',    label: '🥷 Bandeau ninja'  },
  { id: 'scarf',      label: '🧣 Écharpe'        },
  { id: 'medal',      label: '🥇 Médaille'       },
  { id: 'cape',       label: '🦸 Cape de héros'  },
]

const selectedBelt = ref('blanche')
const active = ref(new Set())

const belt = () => belts.find(b => b.id === selectedBelt.value)
const has  = (id) => active.value.has(id)

function toggle(id) {
  const s = new Set(active.value)
  s.has(id) ? s.delete(id) : s.add(id)
  active.value = s
}

function beltFill()   { const b = belt(); return b.c2 ? 'url(#belt-grad)' : b.c1 }
function beltStroke() { const b = belt(); return b.c1 === '#FFFFFF' ? '#CFCFCF' : 'rgba(0,0,0,0.22)' }
function swatchStyle(b) {
  return {
    background: b.c2 ? `linear-gradient(to right, ${b.c1} 50%, ${b.c2} 50%)` : b.c1,
    border: b.c1 === '#FFFFFF' ? '1.5px solid #CCC' : '1.5px solid rgba(0,0,0,0.15)'
  }
}

function download() {
  const svg   = document.getElementById('tiger-svg')
  const clone = svg.cloneNode(true)
  clone.setAttribute('width',  '360')
  clone.setAttribute('height', '460')

  const blob = new Blob([new XMLSerializer().serializeToString(clone)], { type: 'image/svg+xml' })
  const url  = URL.createObjectURL(blob)

  const img = new Image()
  img.onload = () => {
    const size  = 1024
    const scale = Math.min((size - 80) / 360, (size - 80) / 460)
    const w = 360 * scale, h = 460 * scale
    const x = (size - w) / 2,  y = (size - h) / 2

    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = size
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, size, size)
    ctx.drawImage(img, x, y, w, h)

    const a = document.createElement('a')
    a.download = `tigre-amgenas-${selectedBelt.value}.png`
    a.href = canvas.toDataURL('image/png')
    a.click()
    URL.revokeObjectURL(url)
  }
  img.src = url
}
</script>

<template>
  <div class="mascot-wrapper">

    <!-- ── TIGER ── -->
    <div class="mascot-preview">
      <svg id="tiger-svg" viewBox="0 0 360 460" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="belt-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="50%" :stop-color="belt().c1" />
            <stop offset="50%" :stop-color="belt().c2 ?? belt().c1" />
          </linearGradient>
        </defs>

        <!-- Cape -->
        <g v-if="has('cape')">
          <path d="M132,252 Q104,340 120,422 Q150,442 180,442 Q210,442 240,422 Q256,340 228,252 Q204,270 180,270 Q156,270 132,252 Z"
                fill="#E5484D" stroke="#C03A3E" stroke-width="3"/>
          <path d="M150,262 Q138,345 150,425" stroke="#F26d70" stroke-width="2.5" fill="none" opacity="0.5"/>
          <path d="M210,262 Q222,345 210,425" stroke="#F26d70" stroke-width="2.5" fill="none" opacity="0.5"/>
        </g>

        <!-- Legs + feet -->
        <rect x="150" y="350" width="26" height="58" rx="12" fill="#F2F2F2" stroke="#DCDCDC" stroke-width="2"/>
        <rect x="184" y="350" width="26" height="58" rx="12" fill="#F2F2F2" stroke="#DCDCDC" stroke-width="2"/>
        <ellipse cx="160" cy="410" rx="21" ry="11" fill="#EE9A2E"/>
        <ellipse cx="200" cy="410" rx="21" ry="11" fill="#EE9A2E"/>

        <!-- Gi body -->
        <path d="M132,248 Q130,250 130,256 L128,346 Q128,354 136,354 L224,354 Q232,354 232,346 L230,256 Q230,250 228,248 Q204,264 180,264 Q156,264 132,248 Z"
              fill="#F2F2F2" stroke="#DCDCDC" stroke-width="2"/>
        <path d="M180,264 L150,250 L147,304 Z" fill="#E6E6E6"/>
        <path d="M180,264 L210,250 L213,304 Z" fill="#E6E6E6"/>
        <line x1="180" y1="264" x2="180" y2="354" stroke="#E2E2E2" stroke-width="1.5"/>

        <!-- Belt -->
        <rect x="124" y="298" width="112" height="20" rx="4"
              :fill="beltFill()" :stroke="beltStroke()" stroke-width="1.5"/>
        <rect x="168" y="294" width="38" height="27" rx="4"
              :fill="beltFill()" :stroke="beltStroke()" stroke-width="1.5"/>
        <rect x="174" y="320" width="11" height="40" rx="3" :fill="belt().c1" stroke="rgba(0,0,0,0.12)" stroke-width="1"/>
        <rect x="188" y="320" width="11" height="48" rx="3" :fill="belt().c2 ?? belt().c1" stroke="rgba(0,0,0,0.12)" stroke-width="1"/>

        <!-- Medal -->
        <g v-if="has('medal')">
          <path d="M168,250 L176,288 M212,250 L204,288" stroke="#E5484D" stroke-width="7"/>
          <circle cx="190" cy="294" r="19" fill="#F6CF3F" stroke="#D9AC16" stroke-width="2.5"/>
          <text x="190" y="301" text-anchor="middle" font-size="20" fill="#D9AC16">★</text>
        </g>

        <!-- Scarf -->
        <g v-if="has('scarf')">
          <path d="M134,250 Q180,274 226,250 Q220,270 180,278 Q140,270 134,250 Z"
                fill="#E5484D" stroke="#C03A3E" stroke-width="1.5"/>
          <path d="M150,272 Q140,310 146,344" stroke="#E5484D" stroke-width="15" stroke-linecap="round" fill="none"/>
        </g>

        <!-- Arms — cute guard pose -->
        <path d="M138,260 Q112,272 116,240" stroke="#F2F2F2" stroke-width="30" stroke-linecap="round" fill="none"/>
        <path d="M222,260 Q248,272 244,240" stroke="#F2F2F2" stroke-width="30" stroke-linecap="round" fill="none"/>
        <circle cx="116" cy="232" r="19" fill="#EE9A2E" stroke="#D17F1E" stroke-width="2"/>
        <circle cx="244" cy="232" r="19" fill="#EE9A2E" stroke="#D17F1E" stroke-width="2"/>

        <!-- Ears -->
        <ellipse cx="114" cy="80" rx="33" ry="35" fill="#F2A03E"/>
        <ellipse cx="114" cy="84" rx="18" ry="19" fill="#E07C20"/>
        <ellipse cx="246" cy="80" rx="33" ry="35" fill="#F2A03E"/>
        <ellipse cx="246" cy="84" rx="18" ry="19" fill="#E07C20"/>

        <!-- Head -->
        <circle cx="180" cy="152" r="98" fill="#F2A03E"/>

        <!-- Forehead stripes -->
        <path d="M165,72 Q168,90 166,106" stroke="#5A3A1E" stroke-width="6" stroke-linecap="round" fill="none"/>
        <path d="M180,68 Q180,88 180,104" stroke="#5A3A1E" stroke-width="6" stroke-linecap="round" fill="none"/>
        <path d="M195,72 Q192,90 194,106" stroke="#5A3A1E" stroke-width="6" stroke-linecap="round" fill="none"/>
        <!-- Side stripes -->
        <path d="M96,134 Q113,141 110,156" stroke="#5A3A1E" stroke-width="5" stroke-linecap="round" fill="none"/>
        <path d="M92,158 Q109,163 106,178" stroke="#5A3A1E" stroke-width="5" stroke-linecap="round" fill="none"/>
        <path d="M264,134 Q247,141 250,156" stroke="#5A3A1E" stroke-width="5" stroke-linecap="round" fill="none"/>
        <path d="M268,158 Q251,163 254,178" stroke="#5A3A1E" stroke-width="5" stroke-linecap="round" fill="none"/>

        <!-- Muzzle -->
        <ellipse cx="180" cy="182" rx="48" ry="35" fill="#FFF1DD"/>

        <!-- Cheeks (rosy) -->
        <ellipse cx="124" cy="180" rx="15" ry="10" fill="#FF8FA3" opacity="0.55"/>
        <ellipse cx="236" cy="180" rx="15" ry="10" fill="#FF8FA3" opacity="0.55"/>

        <!-- Eyes -->
        <ellipse cx="150" cy="150" rx="25" ry="28" fill="white"/>
        <circle  cx="153" cy="156" r="18" fill="#2A1A0F"/>
        <circle  cx="145" cy="149" r="6.5" fill="white"/>
        <circle  cx="158" cy="161" r="3" fill="white" opacity="0.7"/>
        <ellipse cx="210" cy="150" rx="25" ry="28" fill="white"/>
        <circle  cx="207" cy="156" r="18" fill="#2A1A0F"/>
        <circle  cx="199" cy="149" r="6.5" fill="white"/>
        <circle  cx="212" cy="161" r="3" fill="white" opacity="0.7"/>

        <!-- Nose -->
        <path d="M170,165 Q180,161 190,165 Q186,176 180,178 Q174,176 170,165 Z" fill="#3A2418"/>

        <!-- Mouth (:3) -->
        <path d="M180,178 Q171,189 161,183" stroke="#3A2418" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M180,178 Q189,189 199,183" stroke="#3A2418" stroke-width="3" stroke-linecap="round" fill="none"/>

        <!-- Whisker dots -->
        <circle cx="146" cy="192" r="2.4" fill="#C9A77F"/>
        <circle cx="138" cy="186" r="2.4" fill="#C9A77F"/>
        <circle cx="214" cy="192" r="2.4" fill="#C9A77F"/>
        <circle cx="222" cy="186" r="2.4" fill="#C9A77F"/>

        <!-- ── ACCESSORIES ── -->

        <!-- Bandana -->
        <g v-if="has('bandana')">
          <rect x="88" y="116" width="184" height="26" rx="6" fill="#1F2933"/>
          <path d="M272,128 Q296,114 308,122 Q300,138 282,140 Z" fill="#1F2933"/>
          <text x="180" y="136" text-anchor="middle" font-size="17" fill="#E5484D" font-family="serif" font-weight="bold">武</text>
        </g>

        <!-- Sunglasses -->
        <g v-if="has('sunglasses')">
          <ellipse cx="150" cy="150" rx="30" ry="25" fill="#1A1A2E" stroke="#F6CF3F" stroke-width="3.5"/>
          <ellipse cx="210" cy="150" rx="30" ry="25" fill="#1A1A2E" stroke="#F6CF3F" stroke-width="3.5"/>
          <line x1="179" y1="150" x2="181" y2="150" stroke="#F6CF3F" stroke-width="5"/>
          <line x1="120" y1="150" x2="90" y2="146" stroke="#F6CF3F" stroke-width="3.5" stroke-linecap="round"/>
          <line x1="240" y1="150" x2="270" y2="146" stroke="#F6CF3F" stroke-width="3.5" stroke-linecap="round"/>
          <ellipse cx="140" cy="142" rx="8" ry="5" fill="white" opacity="0.18"/>
          <ellipse cx="200" cy="142" rx="8" ry="5" fill="white" opacity="0.18"/>
        </g>
      </svg>
    </div>

    <!-- ── CONTROLS ── -->
    <div class="mascot-controls">

      <section>
        <h3>🥋 Ceinture</h3>
        <div class="belt-picker">
          <span class="belt-swatch" :style="swatchStyle(belt())"></span>
          <select v-model="selectedBelt" class="belt-select">
            <option v-for="b in belts" :key="b.id" :value="b.id">
              {{ b.label }} — {{ b.kyu }}
            </option>
          </select>
        </div>
      </section>

      <section>
        <h3>✨ Accessoires</h3>
        <div class="acc-grid">
          <button
            v-for="a in accessories"
            :key="a.id"
            class="acc-btn"
            :class="{ active: has(a.id) }"
            @click="toggle(a.id)"
          >
            {{ a.label }}
          </button>
        </div>
      </section>

      <button class="dl-btn" @click="download">
        ⬇️ Télécharger
      </button>

    </div>
  </div>
</template>

<style scoped>
.mascot-wrapper {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 1.5rem 0;
}

.mascot-preview { flex: 0 0 auto; }

.mascot-preview svg {
  width: 100%;
  max-width: 280px;
  height: auto;
  display: block;
}

.mascot-controls {
  flex: 1;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

section h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.6rem;
  color: var(--vp-c-text-1);
}

/* Belt dropdown */
.belt-picker {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.belt-swatch {
  display: inline-block;
  width: 40px;
  height: 18px;
  border-radius: 5px;
  flex-shrink: 0;
}
.belt-select {
  flex: 1;
  padding: 8px 12px;
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  cursor: pointer;
}
.belt-select:hover { border-color: var(--vp-c-brand); }

/* Accessories */
.acc-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.acc-btn {
  padding: 6px 14px;
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
  transition: border-color 0.15s, background 0.15s;
}
.acc-btn:hover  { border-color: var(--vp-c-brand); }
.acc-btn.active { border-color: var(--vp-c-brand); background: var(--vp-c-brand-soft); font-weight: 600; }

/* Download */
.dl-btn {
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background: var(--vp-c-brand);
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  transition: opacity 0.15s;
}
.dl-btn:hover { opacity: 0.85; }

@media (max-width: 640px) {
  .mascot-wrapper { flex-direction: column; align-items: center; }
  .mascot-preview svg { max-width: 220px; }
}
</style>
