import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface ClockDetail {
  userId: number
  employeeUserId: string
  employeeId: string
  employeeName: string
  deviceChannel: number
  description: string
  clockTime: string
}

export interface ClockSummaryItem {
  clockType: number
  count: number
  details: ClockDetail[]
}

export interface ClockInOutResponse {
  clockSummary: ClockSummaryItem[]
}

export const useClockInOutStore = defineStore('clockInOut', () => {
  // State
  const clockSummary = ref<ClockSummaryItem[]>([])
  const selectedClockType = ref<number | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Clock type labels
  const clockTypeLabels: Record<number, string> = {
    0: 'Clock In',
    1: 'Break Out',
    2: 'Resume In',
    3: 'Clock Out',
    4: 'Overtime In',
    5: 'Overtime Out'
  }

  // Getters
  const totalEmployees = computed(() => {
    return clockSummary.value.reduce((sum, item) => sum + item.count, 0)
  })

  const filteredDetails = computed(() => {
    if (selectedClockType.value === null) {
      return clockSummary.value.flatMap(item => 
        item.details.map(detail => ({
          ...detail,
          clockType: item.clockType,
          clockTypeLabel: clockTypeLabels[item.clockType]
        }))
      )
    }
    
    const filtered = clockSummary.value.find(
      item => item.clockType === selectedClockType.value
    )
    
    return filtered?.details.map(detail => ({
      ...detail,
      clockType: filtered.clockType,
      clockTypeLabel: clockTypeLabels[filtered.clockType]
    })) || []
  })

  const categoryCards = computed(() => {
    const configs = [
      {
        type: 0,
        label: 'Clock In',
        icon: 'pi pi-sign-in',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-500',
        textColor: 'text-blue-600',
        badgeColor: 'bg-blue-500'
      },
      {
        type: 1,
        label: 'Break Out',
        icon: 'pi pi-bell',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-500',
        textColor: 'text-orange-600',
        badgeColor: 'bg-orange-500'
      },
      {
        type: 2,
        label: 'Resume In',
        icon: 'pi pi-play',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-500',
        textColor: 'text-purple-600',
        badgeColor: 'bg-purple-500'
      },
      {
        type: 3,
        label: 'Clock Out',
        icon: 'pi pi-sign-out',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-500',
        textColor: 'text-red-600',
        badgeColor: 'bg-red-500'
      },
      {
        type: 4,
        label: 'Overtime In',
        icon: 'pi pi-moon',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-500',
        textColor: 'text-green-600',
        badgeColor: 'bg-green-500'
      },
      {
        type: 5,
        label: 'Overtime Out',
        icon: 'pi pi-star',
        bgColor: 'bg-teal-50',
        borderColor: 'border-teal-500',
        textColor: 'text-teal-600',
        badgeColor: 'bg-teal-500'
      }
    ]

    return configs.map(config => {
      const summary = clockSummary.value.find(item => item.clockType === config.type)
      return {
        ...config,
        count: summary?.count || 0
      }
    })
  })

  // Actions
  const fetchClockInOutData = async () => {
    loading.value = true
    error.value = null

    try {
      // Simulate API call with random delay
      await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 500))

      // Mock data
      const mockData: ClockInOutResponse = {
        clockSummary: [
          {
            clockType: 0,
            count: 74,
            details: Array.from({ length: 74 }, (_, i) => ({
              userId: 1000 + i,
              employeeUserId: `A${1000 + i}`,
              employeeId: `${1000 + i}`,
              employeeName: `Employee ${i + 1}`,
              deviceChannel: Math.floor(Math.random() * 5) + 1,
              description: 'PFCC Tower, Puchong, 47100, Malaysia',
              clockTime: `${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`
            }))
          },
          {
            clockType: 1,
            count: 0,
            details: []
          },
          {
            clockType: 2,
            count: 0,
            details: []
          },
          {
            clockType: 3,
            count: 89,
            details: Array.from({ length: 89 }, (_, i) => ({
              userId: 3000 + i,
              employeeUserId: `${3000 + i}`,
              employeeId: `${3000 + i}`,
              employeeName: `Employee Out ${i + 1}`,
              deviceChannel: Math.floor(Math.random() * 5) + 1,
              description: 'PFCC Tower, Puchong, 47100, Malaysia',
              clockTime: `${String(Math.floor(Math.random() * 12) + 13).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`
            }))
          },
          {
            clockType: 4,
            count: 0,
            details: []
          },
          {
            clockType: 5,
            count: 0,
            details: []
          }
        ]
      }

      clockSummary.value = mockData.clockSummary
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch data'
    } finally {
      loading.value = false
    }
  }

  const setSelectedClockType = (type: number | null) => {
    selectedClockType.value = type
  }

  const resetFilter = () => {
    selectedClockType.value = null
  }

  return {
    // State
    clockSummary,
    selectedClockType,
    loading,
    error,
    // Getters
    totalEmployees,
    filteredDetails,
    categoryCards,
    // Actions
    fetchClockInOutData,
    setSelectedClockType,
    resetFilter
  }
})
