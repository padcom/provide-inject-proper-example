<template>
  <div class="consumer">
    <h4>Consumer</h4>
    <div>Name: {{ name }}</div>
    <div>Context: {{ context }}</div>
    <div class="content">
      <slot v-bind="context" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRaw } from 'vue'
import { useExampleContext } from '../composables/example'

const props = defineProps({
  name: { type: String, default: 'from Consumer' },
})

const context = useExampleContext()
console.log('Consumer - Injected ', JSON.stringify(toRaw(context)), 'into', props.name)
</script>

<style lang="postcss" scoped>
.consumer {
  border: var(--border-style) var(--border-size) green;
  padding: var(--element-padding);
  margin: var(--element-margin);
}
</style>
