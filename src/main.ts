import { createApp, defineCustomElement } from 'vue'
import App from './App.vue'

import CoolMixed from './components/Mixed.ce.vue'
import RecursiveStructureRenderer from './components/RecursiveStructureRenderer.ce.vue'

customElements.define('cool-mixed', defineCustomElement(CoolMixed))
customElements.define('recursive-structure-renderer', defineCustomElement(RecursiveStructureRenderer))

createApp(App).mount('#app')
