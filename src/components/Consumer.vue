<template>
  <div class="consumer">
    <h4>Consumer</h4>
    <div>Name: {{ name }}</div>
    <div>Data: {{ data }}</div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { toRaw } from 'vue'
import { useExampleContext } from '../composables/example'

const props = defineProps({
  name: { type: String, default: 'from Consumer' },
})

const data = useExampleContext()
console.log('Consumer - Injected ', JSON.stringify(toRaw(data)), 'into', props.name)
</script>

<style lang="postcss" scoped>
.consumer {
  border: var(--border-style) var(--border-size) green;
  padding: 4px;
  margin: 2px;
}
</style>
