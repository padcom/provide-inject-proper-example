import { ref, type Ref } from 'vue'
import { createInjectionState } from '@vueuse/core'

const [createDialogContext, useDialogContext] = createInjectionState((
  dialog: Ref<HTMLDialogElement | undefined>,
  close: (returnValue?: string) => void,
) => ({
  title: ref('Dialog title'),
  dialog,
  close,
}))

function useDialogContextWithErrorChecking() {
  const context = useDialogContext()
  if (!context) {
    throw new Error('No dialog context provided - this component can only live in the context of a dialog')
  }

  return context
}

export {
  createDialogContext,
  useDialogContextWithErrorChecking as useDialogContext,
}
