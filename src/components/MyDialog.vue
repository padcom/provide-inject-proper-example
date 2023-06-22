<!-- eslint-disable vue/no-static-inline-styles -->
<template>
  <dialog ref="dialog" @close="close">
    <h1 style="margin-top: 0; text-decoration: underline;">
      <!--
        Just an example on how we can provide the child components
        access to data that is in the context
      -->
      {{ context.title.value }}
    </h1>
    <slot v-bind="context" />
  </dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { createDialogContext } from '../composables/dialog-context'

const dialog = ref<HTMLDialogElement>()

function close(returnValue: string | undefined) {
  dialog.value?.close(returnValue || '')
}

function showModal(): Promise<string | undefined> {
  return new Promise((resolve, reject) => {
    if (!dialog.value) {
      reject(new Error('No dialog to show!'))
    } else {
      dialog.value.addEventListener('close', () => { resolve(dialog.value?.returnValue) }, { once: true })
      dialog.value.showModal()
    }
  })
}

// That's the API we provide to our child components
const context = createDialogContext(dialog, showModal, close)

// That's the API we provide to our users
defineExpose({ showModal })
</script>
