# Example usage of provide/inject in Vue.js

This example shows how to properly use the `provide`/`inject` through [`@vueuse/core/createInjectionState`](https://vueuse.org/shared/createInjectionState/).

## Interesting observation to be made

For simplicity, the component _providing_ data will be called `Provider` and will take a value that it will later on `provide()` and the consumer will be called `Consumer` and will be responsible for displaying that value on the screen.

Imagine you have the following tree of components:

```
App
 - Provider (value=1)
   - Consumer (a)
   - Provider (value=2)
     - Consumer (b)
   - Consumer (c)
```

What happens is the first `Provider` provides the value `1`. Then there is a `Consumer` "a" that `inject`s this value. All good so far.

Then there is another `Provider` that, again, using the same key, provides another value - in this case a `2`. Naturally there is a `Consumer` "b", which gets the value provided by the `Provider` _closest_ to the `Consumer` - in this case it's the value `2`.

The interesting part starts when we want to consume the first Provider's value one more time. Which value shall `Consumer` "c" get? `1` or `2`?

The answer is, obviously, `1`, because we want the value that is closest to the provider. If something provides under that same `InjectionKey` a different value it shall be visible _only_ to its children because it acts as a new root.

Now what would happen if we created another type of component that would both consume current context and provide a new one?

To answer this we need to have an example. This is what is happening in `example.ts`:

```
const [createExampleContext, useExampleContext] = createInjectionState(
  (msg: string) => ({ field: ref(msg) })
)
```

This gives us the `createExampleContext` that is scope-bound to `useExampleContext` and uses an `InjectionKey` that both share. This means that no matter how many times you'll call `createExampleContext` it will _always_ call Vue's `provide(thatKey, value)`. In theory, if the injection mechanism would work based on a global lookup table, that would be the end of it - the second call to `provide` would override it all and we'd be done. But, the way it works is, if your `parent` component doesn't have the value then please ask it's parent up until you arrive at no grand grand grand pa's to interrogate in which case you get the default value _and_ a warning that nobody told you what that value should be. So, since in our case we do call the `provide()` function we break the chain of responsibility thus _NOT_ overriding the parent's value of that same `InjectionKey`! That's brilliant!!!

### The bottom line

The bottom line is, that Vue.js is cool, it has always been gathering the best of all the other frameworks and, with a twist, making it... well... _better_, for the lack of a better word.

And in your app, if you need to use it, just use it.
## Bonus material

We've been having a conversation with my boss Today about generics and slots in Vue and we were a grumbling a bit about how it's insufficient and all. Then I started digging something up some completely different dirt and came across `defineSlots` - that with combination with `defineProps` (the `generic` version) and the use of `v-slot` passes on all the information from where it has been defined to where it has been provided. That's kinda cool too :)

Since generic components are pretty cool it'd be nice to also have more imperative way of using those components. This isn't currently possible with `<script lang="ts" setup generic="...">` - see [this](https://github.com/vuejs/core/issues/8373#issuecomment-1601140491) Github issue for more details and an explanation how much type information should actually be needed.
