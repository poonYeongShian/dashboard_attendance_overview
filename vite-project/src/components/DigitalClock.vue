<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
const currentDate = ref('')
let intervalId: number | null = null

const updateTime = () => {
  const now = new Date()
  
  // Format time (HH:MM:SS)
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  currentTime.value = `${hours}:${minutes}:${seconds}`
  
  // Format date
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  currentDate.value = now.toLocaleDateString('en-US', options)
}

onMounted(() => {
  updateTime()
  intervalId = setInterval(updateTime, 1000) as unknown as number
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center p-8">
    <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl p-12 border border-slate-700">
      <!-- Time Display -->
      <div class="text-center mb-6">
        <div class="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wider font-mono">
          {{ currentTime }}
        </div>
      </div>
      
      <!-- Date Display -->
      <div class="text-center">
        <div class="text-xl text-slate-300 font-medium">
          {{ currentDate }}
        </div>
      </div>
      
      <!-- Decorative Elements -->
      <div class="flex justify-center gap-2 mt-8">
        <div class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        <div class="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-75"></div>
        <div class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-150"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.delay-75 {
  animation-delay: 0.075s;
}

.delay-150 {
  animation-delay: 0.15s;
}
</style>
