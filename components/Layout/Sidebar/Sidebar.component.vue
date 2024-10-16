<script setup>
  const sidebarStore = useSidebarStore()
</script>

<template>
  <aside
    id='Sidebar'
    class='sidebar component sticky max-md:fixed flex-initial top-0 max-md:top-6 rounded-lg bg-neutral-200 transition-all duration-200'
    :class="{
      'w-20': sidebarStore.isSidebarCollapsed,
      'w-60': !sidebarStore.isSidebarCollapsed
    }">
    <div class='sidebar-container component-container flex flex-col h-full justify-between'>
      <LayoutSidebarHeaderComponent />
      <LayoutSidebarNavbarComponent />
      <LayoutSidebarFooterComponent />
    </div>
  </aside>
</template>

<style lang='sass' scoped>
  #Sidebar
    height: calc(100vh - 3rem)
</style>