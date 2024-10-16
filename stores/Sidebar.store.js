import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('SidebarStore', () => {
  const isSidebarCollapsed = ref(true)

  const toggleSidebarCollapsed = () => {
    isSidebarCollapsed.value = !isSidebarCollapsed.value
  }

  return { isSidebarCollapsed, toggleSidebarCollapsed }
})