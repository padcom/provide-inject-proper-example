<template>
  <p>{{ name }}</p>
  <div>{{ data?.field }}</div>
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
