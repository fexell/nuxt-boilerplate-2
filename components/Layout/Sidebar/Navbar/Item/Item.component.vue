<script setup>
  const props = defineProps([ 'class', 'to', 'icon', 'text' ])
  const sidebarStore = useSidebarStore()
</script>

<template>
  <li class='navbar-item -ml-2 -mr-2'>
    <div class='navbar-item-container'>
      <NuxtLink
        class='flex flex-row rounded-lg hover:bg-neutral-300'
        :class='props.class'
        :to='props.to'>
        <div class='navbar-item-icon flex flex-initial w-16 h-12 justify-center items-center'>
          <div class='navbar-item-icon-container'>
            <fa-icon :icon='props.icon' />
          </div>
        </div>
        <transition name='slide'>
          <div
            v-if='!sidebarStore.isSidebarCollapsed'
            class='navbar-item-text flex flex-1 items-center overflow-hidden text-nowrap'>
            <div class='navbar-item-text-container'>
              <span>{{ props.text }}</span>
            </div>
          </div>
        </transition>
      </NuxtLink>
    </div>
  </li>
</template>

<style lang='sass' scoped>
  .slide-enter-active,
  .slide-leave-active
    transition: opacity 200ms, transform 200ms

  .slide-enter-from,
  .slide-leave-to
    opacity: 0
    transform: translateX(2rem)

  .navbar-item
    > .navbar-item-container
      > a
        width: calc(100% - 1rem)
        margin: 0 auto
</style>