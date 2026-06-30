<template>
  <div ref="chartRef" class="chart"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { useData } from 'vitepress'

echarts.use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])

const { isDark } = useData()

const props = defineProps({
  title: { type: String, default: '' },
  // [{ name: 'Libellé', value: 7000 }, ...]
  items: { type: Array, required: true },
})

const euro = (v) => Number(v).toLocaleString('fr-FR') + ' €'

const option = () => ({
  title: { text: props.title, left: 'center' },
  tooltip: {
    trigger: 'item',
    formatter: (p) => `${p.name}<br/><b>${euro(p.value)}</b> (${p.percent}%)`,
  },
  legend: { bottom: 0, type: 'scroll' },
  series: [
    {
      type: 'pie',
      radius: ['45%', '70%'],
      center: ['50%', '46%'],
      avoidLabelOverlap: true,
      itemStyle: { borderColor: 'transparent', borderWidth: 2 },
      label: { formatter: '{d}%', fontSize: 11 },
      data: props.items.filter((i) => Number(i.value) > 0),
    },
  ],
})

const chartRef = ref(null)
let chartInstance = null

function initChart() {
  if (chartRef.value) {
    chartInstance?.dispose()
    chartInstance = echarts.init(chartRef.value, isDark.value ? 'dark' : 'default')
    chartInstance.setOption(option())
  }
}

function onResize() {
  chartInstance?.resize()
}

onMounted(() => {
  initChart()
  window.addEventListener('resize', onResize)
})

watch(isDark, initChart)
watch(() => props.items, () => chartInstance?.setOption(option(), true), { deep: true })

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  chartInstance?.dispose()
})
</script>

<style scoped>
.chart {
  width: 100%;
  height: 360px;
}
</style>
