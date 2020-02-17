import VueKatex from 'vue-katex'
import 'katex/dist/katex.min.css';
import './plugins/codeMirror';
import 'highlight.js/styles/monokai-sublime.css';

import Class from '@components/Class.vue'
import CodeArea from '@components/CodeArea.vue'
import Description from '@components/Description.vue'
import Method from '@components/Method.vue'
import Parameter from '@components/Parameter.vue'
import TexDisplay from '@components/TexDisplay.vue'

const Plugin = {
  install(Vue, options) {
    Vue.use(VueKatex)
    // Add components
    Vue.component('DocsClass', Class)
    // Vue.component('CodeArea', CodeArea)
    // Vue.component('Description', Description)
    // Vue.component('Method', Method)
    // Vue.component('Parameter', Parameter)
    // Vue.component('TexDisplay', TexDisplay)
  }
};

export default Plugin