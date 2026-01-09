<template>
    <div class="w-full max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        <!-- Date Header -->
        <div class="text-2xl font-bold text-gray-800 mb-4">
            Clock In/Out - {{ formattedDate }}
        </div>

        <!-- Main Content -->
        <template>
            <!-- Category Cards -->
            <ClockTypeCategoryCards />

            <!-- Data Table -->
            <ClockInOutDataTable />
        </template>
    </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useClockInOutStore } from '../stores/clockInOutStore'
import { useAttendanceStore } from '../stores/attendanceStore'
import ClockTypeCategoryCards from './ClockTypeCategoryCards.vue'
import ClockInOutDataTable from './ClockInOutDataTable.vue'

const store = useClockInOutStore()
const attendanceStore = useAttendanceStore()

onMounted(() => {
    store.fetchClockInOutData()
})

const formattedDate = computed(() => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }
    return attendanceStore.selectedDate.toLocaleDateString('en-GB', options).replace(/\//g, '/')
})
</script>
