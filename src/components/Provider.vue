<template>
  <slot />
</template>

<script lang="ts" setup>
import { createExampleContext } from '../composables/example'

const props = defineProps({
  value: { type: String, required: true },
})

console.log('Provider - Creating example context with', props.value)
createExampleContext(props.value)
</script>
