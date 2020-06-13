<template lang="pug">
span.pl-3.grey--text.text--darken-2.block {{ data }}
</template>

<script>
export default {
  props: {
    data: String
  }
};
</script>

<style scoped>
.block {
  border-left: 5px solid lightgray;
  white-space: pre-wrap;
}
</style>