<template>
  <div class="mixed">
    <h4>Mixed</h4>
    <div>Parent injected value: {{ parent }}</div>
    <div>
      Currently provided value: {{ current }}
      <button @click="current.field.value = 'Changed in Mixed.vue!'">Test me</button>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createExampleContext, useExampleContext } from '../composables/example'

defineProps<{ value: string }>()

const current = createExampleContext('New context value created in Mixed.vue')
console.log('Mixed - current', current)
const parent = useExampleContext()
console.log('Mixed - parent', parent)
</script>

<style lang="postcss" scoped>
.mixed {
  border: var(--border-style) var(--border-size) orangered;
  padding: 4px;
  margin: 2px;
}
</style>
