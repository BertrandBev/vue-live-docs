// import VueKatex from 'vue-katex'
// import 'katex/dist/katex.min.css';
// Vue.use(VueKatex)
import './plugins/codeMirror';
import 'highlight.js/styles/monokai-sublime.css';

import DocsClass from '@components/DocsClass.vue'
import CodeArea from '@components/CodeArea.vue'

const Plugin = {
  install(Vue, options) {
    // Add components
    Vue.component('DocsClass', DocsClass)
    Vue.component('CodeArea', CodeArea)
  }
};

export default Plugin