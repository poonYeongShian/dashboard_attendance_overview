import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const CATEGORY_NAMES: Record<number, string> = {
  0: 'Normal',
  1: 'Restday',
  2: 'On Leave',
  3: 'Tardiness',
  4: 'Absent',
  5: "Shift Hasn't Started"
}

export const CATEGORY_COLORS: Record<number, string> = {
  0: '#10b981', // Workday
  1: '#3b82f6', // NonWorkday
  2: '#f59e0b', // OnLeave
  3: '#eab308', // Tardiness
  4: '#ec4899', // Absent
  5: '#6b7280'  // ShiftNotStarted
}

export interface LeaveDetail {
  leaveType: string
  isPendingLeave: boolean
  startTime: string | null
  endTime: string | null
  isFullDay: boolean
}

export interface TardinessDetail {
  // Add tardiness properties as needed
}

export interface EmployeeDetail {
  userId: number
  employeeUserId: string
  employeeId: string
  employeeName: string
  dayTypeId: string
  deviceChannel: number
  clockTime: string | null
  lastClockedAt: string | null
  shiftStartTime: string | null
  leaves: LeaveDetail[]
  tardiness: TardinessDetail[]
}

export interface CategoryData {
  category: number
  categoryName: string
  percentage: number
  count: number
  details: EmployeeDetail[]
}

export interface AttendanceData {
  isToday: boolean
  totalCount: number
  overview: CategoryData[]
}

export const useAttendanceStore = defineStore('attendance', () => {
  // State
  const selectedDate = ref<Date>(new Date())
  const selectedCategory = ref<number>(0) // Will be set after attendanceData initialization
  const selectedUserFilter = ref<string>('All')
  const isLoading = ref(false)
  const attendanceData = ref<AttendanceData>({
    isToday: true,
    totalCount: 106,
    overview: [
      {
        category: 0,
        percentage: 0,
        details: [],
        categoryName: 'Workday',
        count: 0
      },
      {
        category: 1,
        percentage: 0,
        details: [],
        categoryName: 'NonWorkday',
        count: 0
      },
      {
        category: 2,
        percentage: 0.94,
        details: [
          {
            userId: 3,
            employeeUserId: 'A1004',
            employeeId: 'A1004',
            employeeName: 'Kyle James',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: null,
            leaves: [
              {
                leaveType: 'Hospitalization Leave',
                isPendingLeave: true,
                startTime: null,
                endTime: null,
                isFullDay: true
              }
            ],
            tardiness: []
          }
        ],
        categoryName: 'OnLeave',
        count: 1
      },
      {
        category: 3,
        percentage: 0,
        details: [],
        categoryName: 'Tardiness',
        count: 0
      },
      {
        category: 4,
        percentage: 14.15,
        details: [
          {
            userId: 1,
            employeeUserId: 'A1001',
            employeeId: '1001',
            employeeName: 'Alexander Walker',
            dayTypeId: 'W',
            deviceChannel: 2,
            clockTime: null,
            lastClockedAt: '2025-12-31T15:53:59',
            shiftStartTime: '08:54:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 138,
            employeeUserId: 'A1052',
            employeeId: 'A1052',
            employeeName: 'user 52',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '09:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 168,
            employeeUserId: 'T1001',
            employeeId: 'T1001',
            employeeName: 'QC 1001',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: null,
            leaves: [],
            tardiness: []
          },
          {
            userId: 202,
            employeeUserId: '9999',
            employeeId: '9999',
            employeeName: 'Cikgu  Lance Ong',
            dayTypeId: 'W',
            deviceChannel: 2,
            clockTime: null,
            lastClockedAt: '2025-11-28T08:00:00',
            shiftStartTime: '09:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 302,
            employeeUserId: '09',
            employeeId: '09',
            employeeName: 'Nur Fatin',
            dayTypeId: 'W',
            deviceChannel: 1,
            clockTime: null,
            lastClockedAt: '2025-10-06T09:55:13',
            shiftStartTime: '09:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 304,
            employeeUserId: '07',
            employeeId: '07',
            employeeName: 'shayuti Ikram',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '09:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 977,
            employeeUserId: '11',
            employeeId: '11',
            employeeName: 'Kamal Adli',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '09:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 1009,
            employeeUserId: '21',
            employeeId: '21',
            employeeName: 'AN User 1',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '09:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 1010,
            employeeUserId: '22',
            employeeId: '22',
            employeeName: 'AN User 2',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '09:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 1011,
            employeeUserId: '23',
            employeeId: '23',
            employeeName: 'AN User 3',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '09:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 1012,
            employeeUserId: '24',
            employeeId: '24',
            employeeName: 'AN User 4',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '09:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 1014,
            employeeUserId: '26',
            employeeId: '26',
            employeeName: 'AN User 6',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: null,
            leaves: [],
            tardiness: []
          },
          {
            userId: 1162,
            employeeUserId: 'USR6087',
            employeeId: 'EMP6087',
            employeeName: 'John Doe 6087',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: null,
            leaves: [],
            tardiness: []
          },
          {
            userId: 1451,
            employeeUserId: 'USR6376',
            employeeId: 'EMP6376',
            employeeName: 'John Doe 6376',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: null,
            leaves: [],
            tardiness: []
          },
          {
            userId: 11777,
            employeeUserId: 'C1',
            employeeId: 'C1',
            employeeName: 'Miss Furtune',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '09:00:00',
            leaves: [],
            tardiness: []
          }
        ],
        categoryName: 'Absent',
        count: 15
      },
      {
        category: 5,
        percentage: 84.91,
        details: [
          {
            userId: 97,
            employeeUserId: 'A1007',
            employeeId: '1007',
            employeeName: 'Gigi Coffee',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 98,
            employeeUserId: 'A1008',
            employeeId: '1008',
            employeeName: 'Zus Coffee',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 101,
            employeeUserId: 'A1021',
            employeeId: 'A1021',
            employeeName: 'Tealive',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '15:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 105,
            employeeUserId: 'A1015',
            employeeId: '1015',
            employeeName: 'Jamie James',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 107,
            employeeUserId: 'A1017',
            employeeId: '1017',
            employeeName: 'Twiggie',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '15:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 108,
            employeeUserId: 'A1018',
            employeeId: '1018',
            employeeName: 'TwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwiggieTwi',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 109,
            employeeUserId: 'A1050',
            employeeId: '1050',
            employeeName: 'RiverTree',
            dayTypeId: 'W',
            deviceChannel: 11,
            clockTime: null,
            lastClockedAt: '2025-09-23T17:51:00',
            shiftStartTime: '15:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 128,
            employeeUserId: 'A1020',
            employeeId: 'A1020',
            employeeName: 'user 20',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '15:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 135,
            employeeUserId: 'A1100',
            employeeId: 'A1100',
            employeeName: 'User 100',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '15:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 144,
            employeeUserId: 'A1060',
            employeeId: 'A1060',
            employeeName: 'User 60',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '15:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 154,
            employeeUserId: 'A1070',
            employeeId: 'A1070',
            employeeName: 'User 70',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 169,
            employeeUserId: 'T1002',
            employeeId: '1002',
            employeeName: 'QC 1002',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '10:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 178,
            employeeUserId: 'A1078',
            employeeId: 'A1078',
            employeeName: 'User 78',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 179,
            employeeUserId: 'A1079',
            employeeId: 'A1079',
            employeeName: 'User 79',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 185,
            employeeUserId: 'A1081',
            employeeId: 'A1081',
            employeeName: 'User 81',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 187,
            employeeUserId: 'A1083',
            employeeId: 'A1083',
            employeeName: 'User 833',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 189,
            employeeUserId: 'A1085',
            employeeId: 'A1085',
            employeeName: 'User 85',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 190,
            employeeUserId: 'A1086',
            employeeId: 'A1086',
            employeeName: 'User 86',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 203,
            employeeUserId: '2000',
            employeeId: '2000',
            employeeName: 'Cikgu Arise A',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '10:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 204,
            employeeUserId: 'A1055',
            employeeId: 'A1055',
            employeeName: 'Sally',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 205,
            employeeUserId: 'qc1003',
            employeeId: '1003',
            employeeName: 'QC1003',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 206,
            employeeUserId: 'testingacc',
            employeeId: 'testingacc',
            employeeName: 'testingacc',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 221,
            employeeUserId: '9099',
            employeeId: '8998',
            employeeName: 'ioppoi',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 243,
            employeeUserId: 'ewea',
            employeeId: 'waefewa',
            employeeName: 'dev',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '10:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 264,
            employeeUserId: 'A1200',
            employeeId: 'A1200',
            employeeName: 'User 200',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 272,
            employeeUserId: 'A2000',
            employeeId: 'A2000',
            employeeName: 'User 2000',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 273,
            employeeUserId: 'A2001',
            employeeId: 'A2001',
            employeeName: 'User 2001',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 274,
            employeeUserId: 'A2002',
            employeeId: 'A2002',
            employeeName: 'User 2002',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 275,
            employeeUserId: 'A2003',
            employeeId: 'A2003',
            employeeName: 'User 2003',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 276,
            employeeUserId: 'A2004',
            employeeId: 'A2004',
            employeeName: 'User 2004',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 277,
            employeeUserId: 'A2005',
            employeeId: 'A2005',
            employeeName: 'User 2005',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 278,
            employeeUserId: 'A2006',
            employeeId: 'A2006',
            employeeName: 'User 2006',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 282,
            employeeUserId: 'A2009',
            employeeId: 'A2009',
            employeeName: 'User 2009',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 298,
            employeeUserId: 'EM1000',
            employeeId: 'EM1000',
            employeeName: 'ZQC1',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 299,
            employeeUserId: 'TT1000',
            employeeId: 'TT1000',
            employeeName: 'ZQC Manager',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 300,
            employeeUserId: 'HR1000',
            employeeId: 'HR1000',
            employeeName: 'ZQC HR',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 303,
            employeeUserId: '08',
            employeeId: '08',
            employeeName: 'Akma Khairunnisa',
            dayTypeId: 'W',
            deviceChannel: 1,
            clockTime: null,
            lastClockedAt: '2025-10-06T10:06:29',
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 305,
            employeeUserId: 'alia1001',
            employeeId: 'S1001',
            employeeName: 'Alia Natasha',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 306,
            employeeUserId: 'Julius1002',
            employeeId: 'S1002',
            employeeName: 'Julius',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 309,
            employeeUserId: 'EM1002',
            employeeId: 'EM1002',
            employeeName: 'ZQC Probation Emp',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 352,
            employeeUserId: '00888',
            employeeId: '00888',
            employeeName: 'alibaba',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 366,
            employeeUserId: 'XX100',
            employeeId: 'XX100',
            employeeName: 'ZQC2_ZZ',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 368,
            employeeUserId: 'XX101',
            employeeId: 'XX101',
            employeeName: 'ZQC3_ZZ',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 376,
            employeeUserId: 'TTEC250',
            employeeId: 'TTEC250',
            employeeName: 'ZQA_SeniorManager1',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 399,
            employeeUserId: 'TTEC252',
            employeeId: 'TTEC252',
            employeeName: 'ZQA_Manager1',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 409,
            employeeUserId: 'TTEC260',
            employeeId: 'TTEC260',
            employeeName: 'ZQA Senior1',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 410,
            employeeUserId: 'TTEC253',
            employeeId: 'TTEC253',
            employeeName: 'ZQA AssistantManager1',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 411,
            employeeUserId: 'TTE250',
            employeeId: 'TTE250',
            employeeName: 'ZQA Senior3',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 412,
            employeeUserId: 'TTEC254',
            employeeId: 'TTEC254',
            employeeName: 'ZQA Middle1',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 420,
            employeeUserId: 'TTEC256',
            employeeId: 'TTEC256',
            employeeName: 'ZQA Junior1',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 425,
            employeeUserId: 'A5002',
            employeeId: 'A5002',
            employeeName: 'User 5002',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 431,
            employeeUserId: 'za1004',
            employeeId: 'S1004',
            employeeName: 'Zakia',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 477,
            employeeUserId: 'User1X1',
            employeeId: 'User1X1',
            employeeName: 'Test user',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 478,
            employeeUserId: 'User1X2',
            employeeId: 'User1X2',
            employeeName: 'Test user2',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 493,
            employeeUserId: 'User1X5',
            employeeId: 'User1X5',
            employeeName: 'UserPromotion1',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 498,
            employeeUserId: 'User1X6',
            employeeId: 'User1X6',
            employeeName: 'Test user6',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 499,
            employeeUserId: 'User1X7',
            employeeId: 'User1X7',
            employeeName: 'Test user7',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 500,
            employeeUserId: '1111',
            employeeId: 'A1111',
            employeeName: 'Leave user 1',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 508,
            employeeUserId: 'User1X9',
            employeeId: 'User1X9',
            employeeName: 'Test user9',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 514,
            employeeUserId: 'User1X12',
            employeeId: 'User1X12',
            employeeName: 'Test user12',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 516,
            employeeUserId: 'User1X14',
            employeeId: 'User1X14',
            employeeName: 'Test user14',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 517,
            employeeUserId: 'User1X16',
            employeeId: 'User1X16',
            employeeName: 'Test user16',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 518,
            employeeUserId: 'User1X15',
            employeeId: 'User1X15',
            employeeName: 'Test user15',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 519,
            employeeUserId: '1030',
            employeeId: 'HR1030',
            employeeName: 'HR FT',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 520,
            employeeUserId: '1031',
            employeeId: 'HR1031',
            employeeName: 'HR FT 01',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 521,
            employeeUserId: '1032',
            employeeId: 'HR32',
            employeeName: 'HR FT 02',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 578,
            employeeUserId: 'AA1',
            employeeId: 'AA1',
            employeeName: 'AA1',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 590,
            employeeUserId: '987',
            employeeId: 'A987',
            employeeName: 'SYChen',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 774,
            employeeUserId: 'EMP12',
            employeeId: 'EMP-001',
            employeeName: 'Mohd Amin',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 835,
            employeeUserId: 'A1059',
            employeeId: '',
            employeeName: 'User 50',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 865,
            employeeUserId: 'A1150',
            employeeId: '',
            employeeName: 'User 150',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 866,
            employeeUserId: '10150',
            employeeId: '10150',
            employeeName: 'John Doe 10150',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 867,
            employeeUserId: '10151',
            employeeId: '10151',
            employeeName: 'John Doe 10151',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 871,
            employeeUserId: 'A1155',
            employeeId: '',
            employeeName: 'User 155',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 879,
            employeeUserId: 'A1035',
            employeeId: '',
            employeeName: 'User 35',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 882,
            employeeUserId: 'A1302',
            employeeId: '',
            employeeName: 'User 302',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 958,
            employeeUserId: '018',
            employeeId: '018',
            employeeName: 'Rizalman',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '15:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 972,
            employeeUserId: 'A8888',
            employeeId: '',
            employeeName: 'yenlong2',
            dayTypeId: 'W',
            deviceChannel: 2,
            clockTime: null,
            lastClockedAt: '2025-12-01T15:20:28',
            shiftStartTime: '23:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 974,
            employeeUserId: 'USR8006',
            employeeId: 'EMP8006',
            employeeName: 'John Doe 8006',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '10:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 982,
            employeeUserId: 'USR8011',
            employeeId: 'EMP8011',
            employeeName: 'John Doe 8011',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 983,
            employeeUserId: 'USR8012',
            employeeId: 'EMP8012',
            employeeName: 'John Doe 8012',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 984,
            employeeUserId: 'USR8013',
            employeeId: 'EMP8013',
            employeeName: 'John Doe 8013',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 985,
            employeeUserId: 'USR8014',
            employeeId: 'EMP8014',
            employeeName: 'John Doe 8014',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '10:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 986,
            employeeUserId: 'USR8015',
            employeeId: 'EMP8015',
            employeeName: 'John Doe 8015',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 1453,
            employeeUserId: 'USR6378',
            employeeId: 'EMP6378',
            employeeName: 'John Doe 6378',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '10:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 1454,
            employeeUserId: 'USR6379',
            employeeId: 'EMP6379',
            employeeName: 'John Doe 6379',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 3701,
            employeeUserId: 'USR6787',
            employeeId: '',
            employeeName: 'John Doe 6787',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '23:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 11771,
            employeeUserId: 'A1224',
            employeeId: '',
            employeeName: 'User 1224',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '22:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 11842,
            employeeUserId: 'USR6886',
            employeeId: '',
            employeeName: 'John Doe USR6886',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '12:00:00',
            leaves: [],
            tardiness: []
          },
          {
            userId: 11954,
            employeeUserId: '5678',
            employeeId: '',
            employeeName: 'kai',
            dayTypeId: 'W',
            deviceChannel: 0,
            clockTime: null,
            lastClockedAt: null,
            shiftStartTime: '23:00:00',
            leaves: [],
            tardiness: []
          }
        ],
        categoryName: 'ShiftNotStarted',
        count: 90
      }
    ]
  })

  // Set selectedCategory to first category with non-zero count
  selectedCategory.value = attendanceData.value.overview.find(cat => cat.count > 0)?.category ?? 0

  // Computed
  const selectedCategoryData = computed(() => {
    return attendanceData.value.overview.find(item => item.category === selectedCategory.value)
  })

  const filteredEmployees = computed(() => {
    if (!selectedCategoryData.value) return []
    if (selectedUserFilter.value === 'All') {
      return selectedCategoryData.value.details
    }
    return selectedCategoryData.value.details.filter(
      emp => emp.employeeUserId === selectedUserFilter.value
    )
  })

  const uniqueUsers = computed(() => {
    const users = new Set<string>()
    attendanceData.value.overview.forEach(category => {
      category.details.forEach(emp => users.add(emp.employeeUserId))
    })
    return ['All', ...Array.from(users).sort()]
  })

  // Actions
  const setSelectedCategory = (category: number) => {
    selectedCategory.value = category
  }

  const setSelectedDate = (date: Date) => {
    selectedDate.value = date
  }

  const setSelectedUserFilter = (userFilter: string) => {
    selectedUserFilter.value = userFilter
  }

  return {
    // State
    selectedDate,
    selectedCategory,
    selectedUserFilter,
    isLoading,
    attendanceData,
    // Computed
    selectedCategoryData,
    filteredEmployees,
    uniqueUsers,
    // Actions
    setSelectedCategory,
    setSelectedDate,
    setSelectedUserFilter,
  }
})
