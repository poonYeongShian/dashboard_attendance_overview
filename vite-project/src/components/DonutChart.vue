<script setup lang="ts">
import { onMounted, ref, watch, computed } from 'vue'
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js'
import { useAttendanceStore, CATEGORY_NAMES, CATEGORY_COLORS } from '../stores/attendanceStore'
import CategoryCards from './CategoryCards.vue'
import EmployeeDataTable from './EmployeeDataTable.vue'
import UserFilter from './UserFilter.vue'
import DateFilter from './DateFilter.vue'

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend, DoughnutController)

const store = useAttendanceStore()
const chartCanvas = ref<HTMLCanvasElement | null>(null)
let chartInstance: Chart | null = null

const chartData = computed(() => {
  const overview = store.attendanceData.isToday 
    ? store.attendanceData.overview 
    : store.attendanceData.overview.filter(item => item.category !== 5)
  return {
    labels: overview.map(item => CATEGORY_NAMES[item.category] || item.categoryName),
    data: overview.map(item => item.count),
    backgroundColor: overview.map(item => CATEGORY_COLORS[item.category] || '#6b7280'),
    categories: overview.map(item => item.category)
  }
})

const createChart = () => {
  if (chartCanvas.value) {
    if (chartInstance) {
      chartInstance.destroy()
    }

    chartInstance = new Chart(chartCanvas.value, {
      type: 'doughnut',
      data: {
        labels: chartData.value.labels,
        datasets: [{
          label: 'Attendance',
          data: chartData.value.data,
          backgroundColor: chartData.value.backgroundColor,
          borderWidth: 2,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true,
            displayColors: false,
            backgroundColor: (context) => {
              const first = context.tooltip?.dataPoints?.[0]
              const bg = first?.dataset?.backgroundColor
              if (Array.isArray(bg) && typeof first?.dataIndex === 'number') {
                return bg[first.dataIndex] || '#111827'
              }
              if (typeof bg === 'string') {
                return bg
              }
              return '#111827'
            },
            callbacks: {
              title: () => '',
              label: function(context) {
                const label = context.label || ''
                const value = context.parsed || 0
                const total = store.attendanceData.totalCount
                const percentage = total > 0 ? ((value / total) * 100).toFixed(2) : '0.00'
                return `${label}: ${percentage}%`
              }
            }
          }
        },
        onClick: (_event, elements) => {
          if (elements.length > 0 && elements[0]) {
            const index = elements[0].index
            const category = chartData.value.categories[index]
            if (category !== undefined) {
              store.setSelectedCategory(category)
            }
          }
        }
      }
    })
  }
}

onMounted(() => {
  createChart()
})

watch(() => store.attendanceData.overview, () => {
  createChart()
}, { deep: true })
</script>

<template>
  <div class="space-y-6">
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="flex flex-col lg:flex-row gap-6 lg:items-start items-center">
        <div class="shrink-0 w-80 lg:mr-10">
          <!-- Filters -->
          <div class="flex flex-col sm:flex-row gap-2 mb-4">
            <UserFilter />
            <DateFilter />
          </div>

          <!-- Donut Chart -->
          <div class="relative w-80 h-80">
            <canvas ref="chartCanvas" class="w-full h-full block"></canvas>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none">
              <div class="text-gray-500 text-lg">Total</div>
              <div class="text-4xl font-bold text-gray-900">{{ store.attendanceData.totalCount }}</div>
            </div>
          </div>
        </div>
        
        <!-- Category Cards and Employee Table Side by Side -->
        <div class="flex-1 w-full lg:w-auto min-w-0 flex flex-col lg:flex-row gap-6">
          <div class="shrink-0">
            <CategoryCards />
          </div>
          <div class="flex-1 min-w-0 overflow-hidden">
            <EmployeeDataTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
