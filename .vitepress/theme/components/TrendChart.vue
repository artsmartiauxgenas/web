<template>
  <div ref="chartRef" class="chart"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as echarts from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { useData } from 'vitepress'

echarts.use([CanvasRenderer, BarChart, LineChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent])

const { isDark } = useData()

const props = defineProps({
  title: { type: String, default: '' },
  categories: { type: Array, required: true },
  // [{ name, type: 'bar'|'line', data: [...], color? }]
  series: { type: Array, required: true },
})

const euro = (v) => Number(v).toLocaleString('fr-FR') + ' €'

const option = () => ({
  title: { text: props.title, left: 'center' },
  tooltip: {
    trigger: 'axis',
    valueFormatter: euro,
  },
  legend: { bottom: 0 },
  grid: { left: '3%', right: '4%', top: 48, bottom: 40, containLabel: true },
  xAxis: { type: 'category', data: props.categories },
  yAxis: { type: 'value', axisLabel: { formatter: (v) => v.toLocaleString('fr-FR') } },
  series: props.series.map((s) => ({
    name: s.name,
    type: s.type || 'bar',
    data: s.data,
    color: s.color,
    label: s.type === 'line' ? { show: true, formatter: (p) => euro(p.value) } : undefined,
  })),
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
watch(() => props.series, () => chartInstance?.setOption(option(), true), { deep: true })

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
