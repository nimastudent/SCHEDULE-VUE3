<template>
  <button :class="`my-btn btn-${type}`"><slot></slot></button>
</template>

<script setup>
const porps = defineProps({
  type: {
    typo: String,
    default: "Button",
  },
});
</script>

<style lang="scss" scoped>
.my-btn {
  height: 33px;
  padding: 0 15px;
  border-radius: 3px;
  cursor: pointer;

  &.btn-default {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
}
</style>
