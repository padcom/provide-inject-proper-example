<template>
  <button @click="close(value)">
    <slot>Close</slot>
  </button>
</template>

<script lang="ts" setup>
import { useDialogContext } from '../../composables/dialog-context'

defineProps<{ value?: string }>()

const { close } = useDialogContext()
</script>
