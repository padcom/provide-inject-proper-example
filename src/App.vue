<!-- eslint-disable vue/no-static-inline-styles -->
<template>
  <h3>Dialog example</h3>
  <MyDialog v-slot="data">
    <div>{{ data }}</div>
    <div style="margin-top: 48px; display: flex; justify-content: center; gap: 24px; ">
      <CloseButton />
      <CloseButton value="a">Custom close button</CloseButton>
      <button @click="data.close('CLOSED!')">Close the dialog</button>
      <button @click="data.title.value = 'Changed in App.vue'">Change title</button>
    </div>
  </MyDialog>

  <h3>Nested providers and their consumers with <code>provide()</code>/<code>inject()</code></h3>
  <div class="legend">
    <div>
      <span class="legend-item blue">—</span>
      Provider boundaries
    </div>
    <div>
      <span class="legend-item black">—</span>
      Consumer boundaries
    </div>
    <div>
      <span class="legend-item orangered">—</span>
      Mixed item boundaries (consumes and provides something else to the children)
    </div>
  </div>

  <div class="providers">
    <Provider v-slot="{ field }" value="1">
      <h5>Provider "1" content from App.vue</h5>
      <div>APP: {{ field }}</div>
      <Consumer v-slot="{ field: field1 }" name="a">
        <h5>Consumer "a" content from App.vue</h5>
        <div>APP: {{ field1 }}</div>
      </Consumer>
      <Consumer v-slot="{ field: field1 }" name="b">
        <h5>Consumer "b" content from App.vue</h5>
        <div>APP: {{ field1 }}</div>
        <Provider v-slot="{ field: field2 }" value="2">
          <h5>Provider "2" content from App.vue</h5>
          <div>APP: {{ field2 }}</div>
          <Consumer v-slot="{ field: field3 }" name="c">
            <h5>Consumer "c" content from App.vue</h5>
            <div>APP: {{ field3 }}</div>
          </Consumer>
          <Mixed v-slot="{ current, parent }" value="3">
            <h5>Mixed "3" content from App.vue</h5>
            <div>APP parent: {{ parent }}</div>
            <div>APP current: {{ current }}</div>
            <Consumer v-slot="data" name="d">
              <h5>Consumer "d" content from App.vue</h5>
              <div>Field: <code>{{ data }} </code></div>
              <button @click="data.field!.value = 'Changed in consumer \'d\' in App.vue'">Test me</button>
            </Consumer>
          </Mixed>
        </Provider>
      </Consumer>
      <Consumer v-slot="{ field: field2 }" name="e">
        <h5>Consumer "e" content from App.vue</h5>
        <div>Field: <code>{{ field2?.value }} </code></div>
      </Consumer>
    </Provider>
  </div>

  <Example v-slot="{ item }" :item="{ x: 1, y: 'two' }">
    <h3>
      Strongly typed content of default <code>&lt;slot&gt;</code> of <code>&lt;Example&gt;</code>
      based on the data shape defined in App.vue
    </h3>
    <div>item: <code>{{ item }}</code></div>
  </Example>
</template>

<script lang="ts" setup>
import MyDialog from './components/MyDialog.vue'
import CloseButton from './components/dialog-aware/CloseButton.vue'
import Example from './components/Example.vue'
import Provider from './components/Provider.vue'
import Consumer from './components/Consumer.vue'
import Mixed from './components/Mixed.vue'
</script>

<style lang="postcss">
:root {
  --border-style: dashed;
  --border-size: 1px;
  --element-padding: 8px;
  --element-margin: 4px;
}

.providers {
  margin-top: 10px;
  margin-bottom: 20px;
}

h4 {
  margin: 2px 0 2px 0;
}

.legend {
  margin: calc(var(--element-margin) * 2);
}

.legend-item {
  font-weight: 900;
  font-size: xx-large;
  line-height: 10px;

  &.blue {
    color: blue;
  }

  &.orangered {
    color: orangered;
  }

  &.green {
    color: green;
  }
}
</style>
