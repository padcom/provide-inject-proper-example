<template>
  <slot />
  <p>Parent: {{ parent }}</p>
  <p>Current: {{ current }}</p>
  <button @click="current.field.value = 'Changed!'">Test me</button>
</template>

<script lang="ts" setup>
import { createExampleContext, useExampleContext } from '../composables/example'

const current = createExampleContext('From Mixed.vue')
console.log('Mixed - current', current)
const parent = useExampleContext()
console.log('Mixed - parent', parent)
</script>

<style lang="postcss" scoped>
.Mixed {
  color: red;
}
</style>
