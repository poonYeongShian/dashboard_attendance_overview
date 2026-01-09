<script setup lang="ts">
import { useClockInOutStore } from '../stores/clockInOutStore'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const store = useClockInOutStore()
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="text-lg font-semibold text-gray-700 p-4 bg-gray-50">
      <span v-if="store.selectedClockType !== null">
        {{ store.categoryCards.find(c => c.type === store.selectedClockType)?.label.toUpperCase() }} 
        ({{ store.filteredDetails.length }} USERS)
      </span>
      <span v-else>
        ALL CLOCK RECORDS ({{ store.filteredDetails.length }} USERS)
      </span>
    </div>
    
    <DataTable 
      :value="store.filteredDetails" 
      :paginator="true" 
      :rows="10"
      :rowsPerPageOptions="[10, 25, 50]"
      sortMode="multiple"
      class="text-sm"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    >
      <Column 
        field="employeeUserId" 
        header="User ID" 
        sortable
        headerClass="bg-blue-500 text-white font-semibold p-3"
        bodyClass="p-3"
      />
      <Column 
        field="employeeId" 
        header="Employee ID" 
        sortable
        headerClass="bg-blue-500 text-white font-semibold p-3"
        bodyClass="p-3"
      />
      <Column 
        field="employeeName" 
        header="Name" 
        sortable
        headerClass="bg-blue-500 text-white font-semibold p-3"
        bodyClass="p-3"
      >
        <template #body="slotProps">
          <span class="text-blue-600 font-medium">{{ slotProps.data.employeeName }}</span>
        </template>
      </Column>
      <Column 
        field="clockTypeLabel" 
        header="Clock Type" 
        sortable
        headerClass="bg-blue-500 text-white font-semibold p-3"
        bodyClass="p-3"
      />
      <Column 
        field="clockTime" 
        header="Time" 
        sortable
        headerClass="bg-blue-500 text-white font-semibold p-3"
        bodyClass="p-3"
      >
        <template #body="slotProps">
          <span class="font-mono font-semibold">{{ slotProps.data.clockTime }}</span>
        </template>
      </Column>
      <Column 
        field="description" 
        header="Location" 
        headerClass="bg-blue-500 text-white font-semibold p-3"
        bodyClass="p-3"
      />
      
      <template #empty>
        <div class="text-center p-8 text-gray-500">
          <div class="text-lg font-semibold">No records found</div>
        </div>
      </template>
    </DataTable>
  </div>
</template>
