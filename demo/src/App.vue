<template lang='pug'>
v-app(v-resize="onResize")
  Drawer(ref='drawer')
  Toolbar(@toggleDrawer='toggleDrawer')
  v-content
    router-view
</template>

<script>
import Toolbar from "@dcomponents/Toolbar.vue";
import Drawer from "@dcomponents/Drawer.vue";

export default {
  name: "App",

  components: {
    Toolbar,
    Drawer
  },

  data: () => ({
  }),

  created() {
  },

  mounted() {
    this.onResize();
  },

  methods: {
    onResize() {
      this.$store.windowSize.x =
        window.innerWidth - this.$vuetify.application.left;
      this.$store.windowSize.y =
        window.innerHeight - this.$vuetify.application.top;
    },

    toggleDrawer() {
      this.$refs.drawer.toggle();
    }
  }
};
</script>

<style lang='scss'>
</style>