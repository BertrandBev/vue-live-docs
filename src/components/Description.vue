<template lang="pug">
span.block.pl-2.grey--text.text--darken-2(style='width: 100px') {{ data }}
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