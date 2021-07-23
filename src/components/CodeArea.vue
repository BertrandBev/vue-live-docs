<template lang='pug'>
v-col.py-0.px-0
  div(style='position: relative'
      @click='onClick')
    pre.hljs(v-if='!editable')
      span(v-html='highlightedCode')
    codemirror(v-else
               ref="codeMirror"
               :value="code")
    div.actionBar
      v-btn(icon fab dark small color='green'
            @click='run')
        v-icon mdi-play
  v-row.mt-3.mx-0(v-if='eval')
    v-alert(v-model='showResult'
            border='left'
            outlined
            dismissible
            min-width='100%'
            icon='mdi-chevron-right'
            color='green')
      slot(:result='result')
        .grey--text.text--darken-2 {{result}}
    v-alert(v-model='showError'
            dismissible
            border='left'
            color='red'
            dark dense
            min-width='100%'
            icon='mdi-alert-circle-outline') {{ error }}
</template>

<script>
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

export default {
  name: "CodeArea",

  props: {
    code: String,
    eval: Boolean,
    env: {
      type: Object,
      default: () => {}
    }
  },

  components: {
  },

  data: () => ({
    editable: false,
    showResult: false,
    result: null,
    showError: false,
    error: null
  }),

  computed: {
    highlightedCode() {
      return hljs.highlight("javascript", this.code, true).value;
    },
  },

  watch: {
    code() {
      this.showResult = false;
      this.showError = false;
    }
  },

  methods: {
    onClick() {
      console.log('on click');
      if (!this.editable)
        this.edit();
    },

    edit() {
      this.editable = true;
    },

    getCode() {
      return this.editable
        ? this.$refs.codeMirror.codemirror.getValue()
        : this.code;
    },

    run() {
      if (this.eval) {
        this.showResult = false;
        this.showError = false;
        let code = this.getCode();
        try {
          let f = new Function(Object.keys(this.env), code);
          this.result = f(...Object.values(this.env)); // TODO: pass args
          // eig.GC.flush()
          console.log("result", this.result)
          this.showResult = true;
        } catch (e) {
          this.showError = true;
          this.error = e;
        }
      } else {
        this.$emit("run", this.getCode());
      }
    },

    clear() {
      this.showResult = false;
    }
  }
};
</script>

<style>
.CodeMirror {
  height: auto !important;
  padding-top: 4px;
  padding-bottom: 4px;
  /* min-height: 48px */
}
.CodeMirror-scroll {
  height: auto;
  /* overflow-y: hidden;
  overflow-x: auto; */
}
.actionBar {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
}
</style>
