<template>
  <div class="flex items-center gap-1">
    <label>{{ dateLabel }}</label>
    <DatePicker
      v-model="selectedDate"
      @update:modelValue="handleDateChange"
      dateFormat="mm/dd/yy"
      class="w-35"
      fluid
      showIcon
      iconDisplay="input"
      :manualInput="false"
      :pt="{ pcInputText: { root: { style: 'border: none; box-shadow: none' } } }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import DatePicker from 'primevue/datepicker'
import { useAttendanceStore } from '../stores/attendanceStore'
import { getDateLabel } from '../utils/dateLabel'

const store = useAttendanceStore()

const selectedDate = ref(store.selectedDate)

const dateLabel = computed(() => {
  const value = selectedDate.value
  return getDateLabel(value ?? undefined)
})

const handleDateChange = (value: Date | Date[] | (Date | null)[] | null | undefined) => {
  if (value instanceof Date) {
    store.setSelectedDate(value)
  }
}

// Sync with store changes
watch(() => store.selectedDate, (newValue) => {
  selectedDate.value = newValue
})
</script>
