<template lang='pug'>
v-col
  v-row
    .display-1.font-weight-light {{ name }}
  v-row.mt-1
    Description(:data='description')

  Method(v-if='constructorFunction'
         :data='constructorFunction'
         :constructorClass='name'
         :env='env')
    template(v-slot:default='props')
      slot(:result='props.result')
  
  Method(v-for='method, idx in staticMembers'
         :key='`static_${idx}`'
         :data='method'
         :env='env')
    template(v-slot:default='props')
      slot(:result='props.result')
  
  Method(v-for='method, idx in instanceMembers'
         :key='`instance_${idx}`'
         :data='method'
         :env='env')
    template(v-slot:default='props')
      slot(:result='props.result')
</template>

<script>
import Method from "./Method.vue";
import Description from "./Description.vue";
import _ from "lodash";

export default {
  name: "Class",

  props: {
    data: Object,
    env: {
      type: Object,
      default: () => {}
    }
  },

  components: {
    Method,
    Description
  },

  data: () => ({}),

  created() {
    console.log("class", this.data);
  },

  computed: {
    name() {
      return _.get(this.data, "name");
    },

    description() {
      return _.get(this.data, "description.children[0].children[0].value");
    },

    constructorFunction() {
      return _.get(this.data, "constructorComment");
    },

    staticMembers() {
      return _.get(this.data, "members.static", []);
    },

    instanceMembers() {
      return _.get(this.data, "members.instance", []);
    }
  },

  methods: {}
};
</script>
