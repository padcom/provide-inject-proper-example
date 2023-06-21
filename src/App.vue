<template>
  <Example v-slot="{ item }" :item="{ x: 1, y: 'two' }">
    item: {{ item }}
  </Example>
  <Provider value="1">
    <Consumer name="a" />
    <Consumer name="b" />
    <Provider value="2">
      <Consumer name="c" />
      <Mixed />
      <Consumer name="d" />
    </Provider>
    <Consumer name="e" />
    <Consumer name="f" />
  </Provider>
</template>

<script lang="ts" setup>
import Example from './components/Example.vue'
import Provider from './components/Provider.vue'
import Consumer from './components/Consumer.vue'
import Mixed from './components/Mixed.vue'
</script>
