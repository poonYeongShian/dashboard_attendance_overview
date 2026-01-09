<template>
  <div class="grid grid-cols-2 md:grid-cols-1 gap-3">
    <div
      v-for="category in categories"
      :key="category.category"
      @click="handleCategoryClick(category.category)"
      :class="[
        'flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all',
        isSelected(category.category)
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 bg-white hover:border-gray-300'
      ]"
      style="min-width: 280px"
    >
      <div class="flex items-center gap-3">
        <div
          :class="['w-4 h-4 rounded-sm']"
          :style="{ backgroundColor: getCategoryColor(category.category) }"
        ></div>
        <span class="text-sm font-medium text-gray-700">{{ CATEGORY_NAMES[category.category] || category.categoryName }}</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-lg font-bold text-gray-900">{{ category.count }}</span>
        <span class="text-sm text-gray-500">({{ category.percentage.toFixed(2) }}%)</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAttendanceStore, CATEGORY_NAMES, CATEGORY_COLORS } from '../stores/attendanceStore'

const store = useAttendanceStore()

const categories = computed(() => {
  return store.attendanceData.isToday 
    ? store.attendanceData.overview 
    : store.attendanceData.overview.filter(item => item.category !== 5)
})

const isSelected = (category: number) => {
  return store.selectedCategory === category
}

const handleCategoryClick = (category: number) => {
  store.setSelectedCategory(category)
}

const getCategoryColor = (category: number) => {
  return CATEGORY_COLORS[category] || '#6b7280'
}
</script>
