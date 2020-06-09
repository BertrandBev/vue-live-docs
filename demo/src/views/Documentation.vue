<template lang='pug'>
.docs-container
  DocsClass.docs-class(:data='data'
                 :env='env')
    template(v-slot:default='props')
      .grey--text.text--darken-2 {{ getResult(props) }}
</template>

<script>
import doc from "../../docs/doc.json";
import _ from "lodash";
import { Float } from '../../docs/classes/Float.js'

export default {
  name: "Documentation",

  props: {
    className: String
  },

  components: {
  },

  data: () => ({}),

  computed: {
    data() {
      return doc.filter(obj => obj.namespace === this.className)[0];
    },

    env() {
      return {
        Float
      }
    }
  },

  methods: {
    getResult(props) {
      return props.result ? props.result.v : ''
    }
  },

  watch: {
    
  },

  mounted() {
  }
};
</script>

<style scoped>
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