<!-- eslint-disable vue/no-static-inline-styles -->
<template>
  <!-- This is the de-facto tree renderer -->
  <recursive-structure-renderer :components="components" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { type Component } from './components/RecursiveStructureRenderer.ce.vue'

// This is the structure
const components = ref([{
  id: '1', name: 'Item 1', components: [
    {
      id: '2', name: 'Subitem 1', components: [
        { id: '4', name: 'Subitem-2 1' },
        { id: '5', name: 'Subitem-2 2' },
      ],
    },
    {
      id: '3', name: 'Subitem 2',
    },
  ],
}] as Component[])
</script>
