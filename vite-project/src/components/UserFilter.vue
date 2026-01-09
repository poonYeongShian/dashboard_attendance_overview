<template>
  <div class="flex items-center gap-2">
    <label>Users:</label>
    <Select
      v-model="selectedUser"
      :options="users"
      @change="handleUserChange"
      placeholder="Select a user"
      class="w-24"
      :pt="{ root: { style: 'border: none; box-shadow: none' } }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Select from 'primevue/select'
import { useAttendanceStore } from '../stores/attendanceStore'

const store = useAttendanceStore()

const selectedUser = ref(store.selectedUserFilter)
const users = computed(() => store.uniqueUsers)

const handleUserChange = () => {
  store.setSelectedUserFilter(selectedUser.value)
}

// Sync with store changes
watch(() => store.selectedUserFilter, (newValue) => {
  selectedUser.value = newValue
})
</script>
