<template lang="pug">
div.docs-container
  div.docs-class(v-html='markdownHtml')
</template>

<script>
import markdown from "!raw-loader!../../../README.md";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript"
import bash from "highlight.js/lib/languages/bash"
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);

export default {
  components: {
  },

  data: () => ({
    markdown
  }),

  computed: {
    markdownHtml() {
      const highlight = function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return (
              '<pre class="hljs"><span>' +
              hljs.highlight(lang, str, true).value +
              "</span></pre>"
            );
          } catch (__) {
            console.error("Highlight parsing error");
          }
        }
        return (
          '<pre class="hljs"><span>' +
          md.utils.escapeHtml(str) +
          "</span></pre>"
        );
      };
      const md = new MarkdownIt({
        highlight,
        html: true
      });
      return md.render(markdown);
    },

    divStyle() {
      return {
        width: `${this.$store.windowSize.x}px`,
        height: `${this.$store.windowSize.y}px`,
        display: "flex",
        "flex-direction": "row",
        "justify-content": "center",
        "align-items": "center",
        background: "#00796B"
      };
    }
  },

  mounted() {},

  methods: {}
};
</script>

<style>
.docs-container {
  display: flex;
  height: 100%;
  justify-content: center;
  background: #f0f2f5
}

.docs-class {
  max-width: 920px;
  height: 100%;
  background: white;
  padding: 64px;
  padding-top: 48px;
  border-left-style: solid;
  border-right-style: solid;
  border-color: #00000022;
  border-width: 1px;
}
</style>