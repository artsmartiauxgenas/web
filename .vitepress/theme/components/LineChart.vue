<template>
  <div ref="chartRef" class="chart"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

import { useData } from 'vitepress'

const { isDark } = useData()

// Register required components
echarts.use([CanvasRenderer, LineChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent, ToolboxComponent]);

const props = defineProps({
  option: {
    type: Object,
    required: true,
  },
});

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value, isDark._value ? 'dark' : 'default')
    chartInstance.setOption(props.option)
  }
})

watch(
  () => props.option,
  (newOption) => {
    if (chartInstance) {
      chartInstance.setOption(newOption)
    }
  },
  { deep: true }
)

watch(isDark, (newVal) => {
  console.log('Dark mode changed:', newVal)
    if (chartInstance) {
      chartInstance.setTheme(newVal ? 'dark' : 'default')
    }
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.dispose()
  }
})
</script>

<style scoped>
.chart {
  width: 100%;
  height: 400px;
}
</style>
