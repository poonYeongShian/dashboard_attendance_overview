```markdown
# Employee Clock In/Out Dashboard - README

## Overview
Create a Vue 3 component for displaying employee clock in/out data with interactive category cards, create it below existing DonutChart

## Tech Stack
- Vue 3 Composition API
- TypeScript
- Pinia for state management
- PrimeVue DataTable
- Chart.js (Donut chart)
- Tailwind CSS (inline utility classes only)

## API Data Structure

```typescript
interface ClockInOutResponse {
  clockSummary: ClockSummaryItem[]
}

interface ClockSummaryItem {
  clockType: number  // 0-5
  count: number
  details: ClockDetail[]
}

interface ClockDetail {
  userId: number
  employeeUserId: string
  employeeId: string
  employeeName: string
  deviceChannel: number
  description: string
  clockTime: string  // HH:mm:ss format
}
```

### Clock Types
- `0` - In
- `1` - BreakOut
- `2` - ResumeIn
- `3` - Out
- `4` - InOT
- `5` - OutOT

### Sample API Response
```json
{
  "clockSummary": [
    {
      "clockType": 0,
      "count": 0,
      "details": []
    },
    {
      "clockType": 1,
      "count": 1,
      "details": [
        {
          "userId": 1,
          "employeeUserId": "A1001",
          "employeeId": "1001",
          "employeeName": "Alexander Walker",
          "deviceChannel": 2,
          "description": "PFCC Tower, Puchong, 47100, Malaysia",
          "clockTime": "13:42:00"
        }
      ]
    },
    {
      "clockType": 2,
      "count": 0,
      "details": []
    },
    {
      "clockType": 3,
      "count": 0,
      "details": []
    },
    {
      "clockType": 4,
      "count": 0,
      "details": []
    },
    {
      "clockType": 5,
      "count": 0,
      "details": []
    }
  ]
}
```

## Component Architecture

### 1. Main Component: `ClockInOutDashboard.vue`
- Container component that orchestrates the layout
- Uses Pinia store for state management
- Triggers API data fetch on mount
- Layout structure:
  - Date header showing current date
  - Category cards row
  - Donut chart (optional visualization)
  - Data table with filtered results

### 2. Pinia Store: `clockInOutStore.ts`

#### State
```typescript
{
  clockSummary: ClockSummaryItem[]
  selectedClockType: number | null  // null = show all
  loading: boolean
  error: string | null
}
```

#### Getters
- `totalEmployees`: Total count across all clock types
- `filteredDetails`: Returns details filtered by selectedClockType
- `categoryCards`: Array of card data with labels, counts, colors, icons

#### Actions
- `fetchClockInOutData()`: Simulate API call with delay (500-1000ms)
- `setSelectedClockType(type: number | null)`: Update filter
- `resetFilter()`: Clear selected type

### 3. Category Cards Component: `ClockTypeCategoryCards.vue`
- Display cards for each clock type (Clock In, Break, Clock Out, Overtime In, Overtime Out)
- Each card shows:
  - Icon (use appropriate icons for each type)
  - Label
  - Count badge
  - Color coding based on type
- Cards are clickable to filter the data table
- Active card has distinct styling (border/background)
- Uses Pinia store for state and actions

#### Card Styling (Tailwind)
- Use color schemes:
  - In: Blue (`bg-blue-50 border-blue-500 text-blue-600`)
  - BreakOut: Orange (`bg-orange-50 border-orange-500 text-orange-600`)
  - Out: Red (`bg-red-50 border-red-500 text-red-600`)
  - InOT: Green (`bg-green-50 border-green-500 text-green-600`)
  - OutOT: Green (`bg-green-50 border-green-500 text-green-600`)
- Active state: Darker background and border
- Hover effect: Scale or shadow transition


### 4. Data Table Component: `ClockInOutDataTable.vue`
- PrimeVue DataTable displaying filtered employee details
- Columns:
  - User ID (`employeeUserId`)
  - Employee ID (`employeeId`)
  - Name (`employeeName`)
  - Clock Type (convert number to readable label)
  - Time (`clockTime`)
  - Location (`description`)
- Uses Pinia store getter `filteredDetails`
- Show "No records found" when filtered results are empty
- Sortable columns
- Pagination if needed (optional)
- Styling with Tailwind classes on DataTable slots

## Styling Requirements (Tailwind CSS)

### General Guidelines
- **All styling must use inline Tailwind utility classes**
- No `<style>` blocks or external CSS files
- Use Tailwind for:
  - Layout (flex, grid, spacing)
  - Colors and backgrounds
  - Typography (font sizes, weights)
  - Borders and shadows
  - Hover/active states
  - Responsive breakpoints

### Component-Specific Styling

#### Dashboard Container
- `class="w-full max-w-7xl mx-auto p-4 md:p-6 space-y-6"`

#### Date Header
- `class="text-2xl font-bold text-gray-800 mb-4"`

#### Category Cards Row
- `class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"`

#### Individual Card
- Base: `class="p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md"`
- Active: Add `border-opacity-100 bg-opacity-20`
- Inactive: Add `border-opacity-40 bg-opacity-10 opacity-75`

#### Chart Container
- `class="bg-white p-6 rounded-lg shadow-md"`

#### DataTable Container
- `class="bg-white rounded-lg shadow-md overflow-hidden"`

#### DataTable Header
- `class="text-lg font-semibold text-gray-700 p-4 bg-gray-50 border-b"`

## Implementation Steps

1. **Create Pinia Store** (`stores/clockInOutStore.ts`)
   - Define interfaces
   - Implement state, getters, and actions
   - Add simulated API fetch with setTimeout

2. **Create Category Cards Component**
   - Import Pinia store
   - Render cards using store getter
   - Add click handlers to update filter
   - Style with Tailwind

3. **Create Donut Chart Component** (Optional)
   - Setup Chart.js with donut configuration
   - Use store chartData getter
   - Style container with Tailwind

4. **Create Data Table Component**
   - Setup PrimeVue DataTable
   - Map columns to data fields
   - Use store filteredDetails getter
   - Style with Tailwind classes

5. **Create Main Dashboard Component**
   - Import all child components
   - Initialize store and fetch data on mount
   - Arrange layout with Tailwind grid/flex
   - Add loading and error states

6. **Testing**
   - Verify API simulation works
   - Test filtering by clicking cards
   - Check responsive design at different breakpoints
   - Validate TypeScript types

## Example Card Configuration

```typescript
const cardConfigs = [
  {
    type: 0,
    label: 'Clock In',
    icon: '→',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-600',
    badgeColor: 'bg-blue-500'
  },
  {
    type: 1,
    label: 'Break',
    icon: '☕',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-500',
    textColor: 'text-orange-600',
    badgeColor: 'bg-orange-500'
  },
  {
    type: 2,
    label: 'Clock Out',
    icon: '←',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-500',
    textColor: 'text-red-600',
    badgeColor: 'bg-red-500'
  },
  {
    type: 3,
    label: 'Overtime In',
    icon: '🌙',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-500',
    textColor: 'text-green-600',
    badgeColor: 'bg-green-500'
  },
  {
    type: 4,
    label: 'Overtime Out',
    icon: '🌙',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-500',
    textColor: 'text-green-600',
    badgeColor: 'bg-green-500'
  }
]
```

## Final Notes

- All component interactions happen through Pinia store (no props/emits between sibling components)
- Simulate API delay: 500-1000ms using `setTimeout`
- Handle loading and error states gracefully
- Make UI responsive using Tailwind breakpoints
- Ensure accessibility (keyboard navigation, ARIA labels)
- Use TypeScript strict mode for type safety
- Follow Vue 3 Composition API best practices with `<script setup>`

---

**Ready to implement!** Use this README as your specification to generate the complete code for the Employee Clock In/Out dashboard.
```