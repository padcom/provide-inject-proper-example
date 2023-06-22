<template>
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
    <Provider value="1">
      <h5>Provider "1" content from App.vue</h5>
      <Consumer name="a">
        <h5>Consumer "a" content from App.vue</h5>
      </Consumer>
      <Consumer name="b">
        <h5>Consumer "b" content from App.vue</h5>
        <Provider value="2">
          <h5>Provider "2" content from App.vue</h5>
          <Consumer name="c">
            <h5>Consumer "c" content from App.vue</h5>
          </Consumer>
          <Mixed value="3">
            <h5>Mixed "3" content from App.vue</h5>
            <Consumer name="d">
              <h5>Consumer "d" content from App.vue</h5>
            </Consumer>
          </Mixed>
        </Provider>
      </Consumer>
      <Consumer name="e">
        <h5>Consumer "e" content from App.vue</h5>
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
import Example from './components/Example.vue'
import Provider from './components/Provider.vue'
import Consumer from './components/Consumer.vue'
import Mixed from './components/Mixed.vue'
</script>

<style lang="postcss">
:root {
  --border-style: dashed;
  --border-size: 1px;
}

.providers {
  margin-top: 10px;
  margin-bottom: 20px;
}

h4 {
  margin: 2px 0 2px 0;
}

.legend {
  padding: 6px;
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
