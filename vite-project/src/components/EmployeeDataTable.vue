<template>
  <div class="w-full max-w-full overflow-x-auto">
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-xl font-bold text-gray-900">
        {{ selectedCategoryName }} ({{ employeeCount }} USERS)
      </h2>
    </div>
    <DataTable 
      :value="employees" 
      dataKey="userId"
      :scrollable="true"
      scrollHeight="flex"
      :style="{ height: '390px' }"
    >
      <Column field="employeeUserId" header="User ID"  class="min-w-32"></Column>
      <Column field="employeeId" header="Employee ID"  class="min-w-32"></Column>
      <Column field="employeeName" header="Name"  class="min-w-48">
        <template #body="slotProps">
          <div class="truncate max-w-xs" :title="slotProps.data.employeeName">
            {{ slotProps.data.employeeName }}
          </div>
        </template>
      </Column>
      <Column v-if="showClockTime" field="clockTime" header="Clock Time"  class="min-w-32">
        <template #body="slotProps">
          {{ formatDateTime(slotProps.data.clockTime) }}
        </template>
      </Column>
      <Column v-if="showScheduleStartTime" field="shiftStartTime" header="Schedule Start Time"  class="min-w-32">
        <template #body="slotProps">
          {{ formatTime(slotProps.data.shiftStartTime) }}
        </template>
      </Column>
      <Column v-if="showLastClocking" field="lastClockedAt" header="Last Clocking"  class="min-w-40">
        <template #body="slotProps">
          {{ formatDateTime(slotProps.data.lastClockedAt) }}
        </template>
      </Column>
      <Column v-if="showLeaves" header="Leaves" class="min-w-48">
        <template #body="slotProps">
          <div v-if="slotProps.data.leaves.length > 0" class="space-y-1">
            <div v-for="(leave, index) in slotProps.data.leaves" :key="index" class="text-xs">
              <span class="font-medium">{{ leave.leaveType }}</span>
              <span v-if="leave.isPendingLeave" class="ml-1 text-amber-600">(Pending)</span>
              <span v-if="leave.isFullDay" class="ml-1 text-gray-500">(Full Day)</span>
            </div>
          </div>
          <span v-else class="text-gray-400">-</span>
        </template>
      </Column>
      <Column v-if="showTardiness" header="Tardiness" class="min-w-32">
        <template #body="slotProps">
          <span v-if="slotProps.data.tardiness.length > 0">{{ slotProps.data.tardiness.length }}</span>
          <span v-else class="text-gray-400">-</span>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useAttendanceStore, CATEGORY_NAMES } from '../stores/attendanceStore'

const store = useAttendanceStore()

const employees = computed(() => store.filteredEmployees)

const selectedCategory = computed(() => store.selectedCategory)
const isToday = computed(() => store.attendanceData.isToday)

const showClockTime = computed(() => selectedCategory.value === 0)
const showLastClocking = computed(() => {
  if (selectedCategory.value === 1) return true
  if (selectedCategory.value === 5) return true
  if (selectedCategory.value === 4) return isToday.value
  return false
})
const showLeaves = computed(() => selectedCategory.value === 2)
const showTardiness = computed(() => selectedCategory.value === 3)
const showScheduleStartTime = computed(() => {
  if (selectedCategory.value === 5) return true
  if (selectedCategory.value === 4) return isToday.value
  return false
})

const selectedCategoryName = computed(() => {
  const categoryData = store.selectedCategoryData
  if (!categoryData) return ''
  return CATEGORY_NAMES[categoryData.category] || categoryData.categoryName
})

const employeeCount = computed(() => {
  return employees.value.length
})

const formatDateTime = (dateTime: string | null) => {
  if (!dateTime) return '-'
  try {
    const date = new Date(dateTime)
    return date.toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  } catch {
    return dateTime
  }
}

const formatTime = (time: string | null) => {
  if (!time) return '-'
  return time
}
</script>
