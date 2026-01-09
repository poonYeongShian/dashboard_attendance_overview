# Dashboard Company Attendance Overview - Requirements

## Tech Stack
- Vue 3 Composition API
- TypeScript
- Pinia for state management (components should interact through Pinia, not props)
- PrimeVue DataTable
- Chart.js (Donut chart)
- **Tailwind CSS for styling (inline utility classes)**
- Use short delay to simulate API fetch

## Architecture

### Dashboard Company Attendance Overview

#### Left Side
- **Donut Chart** (Chart.js)
  - Display attendance data by category
  - Categories: `Workday`, `NonWorkday`, `OnLeave`, `Tardiness`, `Absent`, `ShiftNotStarted`
  - Default: Select first category
  - Display percentage
  
- **User Filter Dropdown**
  - Filter based on user list
  - Affects employee details table in right side
  - Default: "All"
  
- **Date Filter**
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

#### API Response Format
```json
{
  "isToday": true,
  "totalCount": 106,
  "overview": [
    {
      "category": 0, // 0 is Workday, 1 is NonWorkday, 2 is OnLeave, 3 is Tardiness, 4 is Absent, 5 is ShiftNotStarted
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

## Shared State (Pinia Store)
- Store should track:
  - Selected date
  - Selected category
  - Selected user filter

---

## Styling Requirements
- **Use Tailwind CSS inline utility classes for all styling**
- No external CSS files or style blocks
- Apply Tailwind classes directly to HTML elements
- Ensure responsive design using Tailwind breakpoints
- Use Tailwind for spacing, colors, typography, and layout

---

## Requirements Summary
1. Create a well-structured component architecture
2. Use Pinia for all state management (no props between components)
3. Simulate API calls with short delays
4. Implement filters that affect multiple containers
5. Use PrimeVue DataTable for all tables
6. Use Chart.js donut chart for visualization
7. Make category/clock type selections interactive and clickable
8. **Style everything with inline Tailwind CSS utility classes**
