<!-- eslint-disable vue/no-static-inline-styles -->
<template>
  <dialog ref="dialog" @close="close">
    <h1 style="margin-top: 0; text-decoration: underline;">
      <!--
        Just an example on how we can provide the child components
        access to data that is in the context
      -->
      {{ context.title }}
    </h1>
    <slot v-bind="context" />
  </dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { createDialogContext } from '../composables/dialog-context'

const dialog = ref<HTMLDialogElement>()

// That's the API we provide to our child components
const context = createDialogContext(dialog)

// That's the API we provide to our users
defineExpose({ showModal: context.showModal, close: context.close })
</script>
