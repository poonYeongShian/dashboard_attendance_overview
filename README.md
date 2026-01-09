# Dashboard Company Attendance Overview - Requirements

## Tech Stack
- Vue 3 Composition API
- TypeScript
- Pinia for state management (components should interact through Pinia, not props)
- PrimeVue DataTable
- Chart.js (Donut chart)
- Use short delay to simulate API fetch

## Architecture

### Container 1: Dashboard Company Attendance Overview

#### Left Side
- **Donut Chart** (Chart.js)
  - Display attendance data by category
  - Categories: `Workday`, `NonWorkday`, `OnLeave`, `Tardiness`, `Absent`, `ShiftNotStarted`
  - Default: Select first category
  
- **User Filter Dropdown**
  - Filter based on user list
  - Affects employee details table in right side
  - Default: "All"
  
- **Date Filter**
  - Affects both Container 1 and Container 2
  - Default: Today

#### Right Side
- **Employee Details Table** (PrimeVue DataTable)
  - Data key: `userId`
  - Columns:
    - `employeeUserId`
    - `employeeId`
    - `employeeName`
    - `dayTypeId`
    - `deviceChannel`
    - `clockTime`
    - `lastClockedAt`
    - `shiftStartTime`
    - `leaves` (array)
    - `tardiness` (array)
  - Shows employees from selected category

#### API Response Format (Container 1)
```json
{
  "isToday": true,
  "totalCount": 106,
  "overview": [
    {
      "category": 0,
      "categoryName": "Workday",
      "percentage": 0,
      "count": 0,
      "details": [
        {
          "userId": 168,
          "employeeUserId": "T1001",
          "employeeId": "T1001",
          "employeeName": "QC 1001",
          "dayTypeId": "O",
          "deviceChannel": 0,
          "clockTime": null,
          "lastClockedAt": null,
          "shiftStartTime": null,
          "leaves": [],
          "tardiness": []
        }
      ]
    }
  ]
}
```

---

### Container 2: Clock In/Out

#### Top Section
- Display selected date from Container 1
- Call second API with filter parameter
- Display clock type categories with counts
- Categories include `clockType` and `count`
- Categories are clickable
- Default: Select `clockType: 0`

#### Bottom Section
- **Employee Details Table** (PrimeVue DataTable)
  - Data key: `userId`
  - Columns:
    - `employeeUserId`
    - `employeeId`
    - `employeeName`
    - `deviceChannel`
    - `description`
    - `clockTime`

#### API Response Format (Container 2)
```json
{
  "clockSummary": [
    {
      "clockType": 0,
      "count": 0,
      "details": []
    },
    {
      "clockType": 3,
      "count": 1,
      "details": [
        {
          "userId": 972,
          "employeeUserId": "A8888",
          "employeeId": "",
          "employeeName": "yenlong2",
          "deviceChannel": 2,
          "description": "1600, Amphitheatre Parkway, 94043, Mountain View, California, United States",
          "clockTime": "15:20:28"
        }
      ]
    }
  ]
}
```

---

## Shared State (Pinia Store)
- Both containers share the same Pinia store
- Store should track:
  - Selected date
  - Selected category (Container 1)
  - Selected clock type (Container 2)
  - Selected user filter
  - API data for both containers

---

## Requirements Summary
1. Create a well-structured component architecture
2. Use Pinia for all state management (no props between components)
3. Simulate API calls with short delays
4. Implement filters that affect multiple containers
5. Use PrimeVue DataTable for all tables
6. Use Chart.js donut chart for visualization
7. Make category/clock type selections interactive and clickable