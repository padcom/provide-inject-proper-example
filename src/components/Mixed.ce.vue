<template>
  <div class="mixed">
    <h4>Mixed</h4>
    <div v-if="parent">Parent injected value: {{ parent }}</div>
    <div v-else>No parent value provided</div>
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

const props = defineProps({ value: { type: String, default: '' } })

const current = createExampleContext(props.value)
console.log('Mixed - current', current)
const parent = useExampleContext()
console.log('Mixed - parent', parent)
</script>

<style lang="postcss" scoped>
.mixed {
  border: dashed 1px orangered;
  padding: 8px;
  margin: 4px;
}
</style>
