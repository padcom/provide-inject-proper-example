// YOU WILL WONDER WHY IT IS HERE. READ IN LINE 15

import { type InjectionKey, inject, provide } from 'vue'

export function createInjectionState<Arguments extends Array<any>, Return>(
  composable: (...args: Arguments) => Return,
): readonly [useProvidingState: (...args: Arguments) => Return, useInjectedState: () => Return | undefined] {
  const key: string | InjectionKey<Return> = Symbol('InjectionState')
  const useProvidingState = (...args: Arguments) => {
    const state = composable(...args)
    provide(key, state)

    return state
  }
  // the `undefined` silences dev-time warning. It should be somehow possible to add it here
  const useInjectedState = () => inject(key, undefined)

  return [useProvidingState, useInjectedState]
}
