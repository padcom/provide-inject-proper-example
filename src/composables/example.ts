import { createInjectionState } from '@vueuse/core'
import { ref } from 'vue'

const [createExampleContext, useExampleContext] = createInjectionState((msg: string) => {
  const field = ref(msg)

  return { field }
})

export {
  createExampleContext,
  useExampleContext,
}
