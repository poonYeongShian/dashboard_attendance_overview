<script setup lang="ts">
import { useClockInOutStore } from '../stores/clockInOutStore'

const store = useClockInOutStore()

const handleCardClick = (type: number) => {
  if (store.selectedClockType === type) {
    store.resetFilter()
  } else {
    store.setSelectedClockType(type)
  }
}
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    <div
      v-for="card in store.categoryCards"
      :key="card.type"
      @click="handleCardClick(card.type)"
      :class="[
        'flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all',
        store.selectedClockType === card.type
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 bg-white hover:border-gray-300'
      ]"
    >
      <div class="flex items-center gap-3 flex-1 min-w-0">
        <i :class="['text-2xl shrink-0', card.icon, card.textColor]" aria-hidden="true"></i>
        <span class="text-sm font-medium text-gray-700 min-w-0 truncate">{{ card.label }}</span>
      </div>
      <span
        :class="[
          'inline-flex items-center justify-center w-7 h-7 rounded-full text-white font-bold shrink-0',
          card.badgeColor
        ]"
      >
        {{ card.count }}
      </span>
    </div>
  </div>
</template>
