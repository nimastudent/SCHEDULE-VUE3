<template>
  <td class="duration-title">{{ title }}</td>
</template>

<script setup>
import "./style/duration-title.scss";
const props = defineProps({
  title: String,
});
</script>

<style lang="scss" scoped></style>
