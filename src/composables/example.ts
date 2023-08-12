import { createInjectionState } from './createInjectionState'
import { ref } from 'vue'

const [createExampleContext, useExampleContext] = createInjectionState((msg: string) => {
  const field = ref(msg)

  return { field }
})

export {
  createExampleContext,
  useExampleContext,
}
