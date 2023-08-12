<script lang="ts">
// It has to be a .vue file for it to also be a .ce file.
// Therefore .ce.ts doesn't work and .vue.ce works.

/* eslint-disable no-multi-spaces */
/* eslint-disable new-cap */
import { defineComponent, h, type PropType } from 'vue'

export interface Component {
  id: string
  name: string
  components?: Component[]
}

interface Props {
  components?: Component[]
}

// This could be thought of as a function component.
// If imported in a vue app it will render just fine.
function RecursiveStructureRenderer({ components }: Props): any {
  return (components || []).map(component => h(
    'cool-mixed',                          // will render 'cool-mixed' web component
    { value: component.id },               // 'cool-mixed' will provide this value
    [                                      // children (at minimum 1 - the component name as a text node)
      component.name,                      // a text node stating the name of the component (this is the slot)
      ...RecursiveStructureRenderer({      // map all other components like this
        components: component.components,
      }),
    ],
  ))
}

// IDK if there is a way to create a functional component custom web component
// so I decided to just simply create a component the old-fashion way.
export default defineComponent({
  props: {
    components: { type: Array as PropType<Component[]>, default: () => [] },
  },
  render() {
    return RecursiveStructureRenderer({ components: this.components })
  },
})
</script>
