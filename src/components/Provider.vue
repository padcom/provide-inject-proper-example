<template>
  <div class="provider">
    <h4>Provider</h4>
    <div>Provided context: {{ context }}</div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createExampleContext } from '../composables/example'

const props = defineProps({
  value: { type: String, required: true },
})

console.log('Provider - Creating example context with', props.value)
const context = createExampleContext(props.value)
</script>

<style lang="postcss" scoped>
.provider {
  border: var(--border-style) var(--border-size) blue;
  padding: 4px;
}
</style>
