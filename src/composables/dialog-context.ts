import { ref, type Ref } from 'vue'
import { createInjectionState } from '@vueuse/core'

const [createDialogContext, useDialogContextWithoutErrorHandling] = createInjectionState((
  dialog: Ref<HTMLDialogElement | undefined>,
) => {
  const title = ref('Hello, world!')

  function close(returnValue: string | undefined) {
    dialog.value?.close(returnValue || '')
  }

  function showModal(): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
      if (!dialog.value) {
        reject(new Error('No dialog to show!'))
      } else {
        dialog.value.returnValue = ''
        dialog.value.addEventListener('close', () => { resolve(dialog.value?.returnValue) }, { once: true })
        dialog.value.showModal()
      }
    })
  }

  return { dialog, title, close, showModal }
})

function useDialogContext() {
  const context = useDialogContextWithoutErrorHandling()
  if (!context) {
    throw new Error('No dialog context provided - this component can only live in the context of a dialog')
  }

  return context
}

export {
  createDialogContext,
  useDialogContext,
}
