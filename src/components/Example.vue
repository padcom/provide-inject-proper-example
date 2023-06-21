<template>
  <div>
    <slot :item="(item as T)" />
  </div>
</template>

<script lang="ts" setup generic="T = any">
defineProps<{ item: T }>()
defineSlots<{ default(props: { item: T }): any }>()
</script>
