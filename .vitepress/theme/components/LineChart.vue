<template>
  <div ref="chartRef" class="chart"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { useData } from 'vitepress'
import { data as membersData } from '../../../data/members.data'

echarts.use([CanvasRenderer, LineChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent, ToolboxComponent])

const { isDark } = useData()

const props = defineProps({
  seasons: {
    type: Array,
    required: true,
  },
})

const MONTHS = ['Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin']
const COLORS = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de']

const option = computed(() => ({
  title: { text: 'Membres' },
  tooltip: { trigger: 'axis' },
  legend: { data: props.seasons },
  grid: { left: '3%', right: '3%' },
  toolbox: { feature: { saveAsImage: {} } },
  xAxis: { type: 'category', data: MONTHS },
  yAxis: { type: 'value' },
  series: props.seasons.map((season, i) => ({
    name: season,
    type: 'line',
    color: i === 0 ? COLORS[0] : 'gray',
    data: membersData[season] ?? [],
  })),
}))

const chartRef = ref(null)
let chartInstance = null

function initChart() {
  if (chartRef.value) {
    chartInstance?.dispose()
    chartInstance = echarts.init(chartRef.value, isDark.value ? 'dark' : 'default')
    chartInstance.setOption(option.value)
  }
}

onMounted(initChart)

watch(option, (newOption) => {
  chartInstance?.setOption(newOption, true)
})

watch(isDark, initChart)

onBeforeUnmount(() => {
  chartInstance?.dispose()
})
</script>

<style scoped>
.chart {
  width: 100%;
  height: 400px;
}
</style>
