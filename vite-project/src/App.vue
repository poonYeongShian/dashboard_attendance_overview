<script setup lang="ts">
import DonutChart from './components/DonutChart.vue'
import ClockInOutDashboard from './components/ClockInOutDashboard.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class=" mx-auto">
      
      <div class="space-y-6">
        <!-- Donut Chart with Category Cards and Employee Table -->
        <DonutChart />
        
        <!-- Clock In/Out Dashboard -->
        <ClockInOutDashboard />
      </div>
    </div>
  </div>
</template>
