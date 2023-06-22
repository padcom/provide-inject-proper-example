<!-- eslint-disable vue/no-static-inline-styles -->
<template>
  <dialog ref="dialog" @close="close">
    <h1 style="margin-top: 0; text-decoration: underline;">
      {{ context.title.value }}
    </h1>
    <slot v-bind="context" />
  </dialog>

  <button @click="exampleDialogProcess">Open the dialog</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { createDialogContext } from '../composables/dialog-context'

const dialog = ref<HTMLDialogElement>()

function close(returnValue: string | undefined) {
  dialog.value?.close(returnValue)
}

function showModal() {
  return new Promise((resolve, reject) => {
    if (!dialog.value) {
      reject(new Error('No dialog to show!'))
    } else {
      dialog.value.addEventListener('close', () => { resolve(dialog.value?.returnValue) }, { once: true })
      dialog.value.showModal()
    }
  })
}

const context = createDialogContext(dialog, showModal, close)

async function exampleDialogProcess() {
  const result = await showModal()
  console.log('Dialog ended with result:', result)
}
</script>
