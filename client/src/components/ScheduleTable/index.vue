<template>
  <div class="schedule-table">
    <table border="1" cellpadding="0">
      <week-title></week-title>
      <tr v-for="item of duration" :key="item.begin_time">
        <duration-title :title="item.title"></duration-title>
        <td v-for="n in 7" :key="n"></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { onMounted, reactive, toRefs } from "vue";
import { getInitialData } from "./scripts/service";
import "./style/index.scss";
import WeekTitle from "./WeekTitle.vue";
import DurationTitle from "./DurationTitle.vue";

const state = reactive({
  duration: [],
  schedule: [],
  course: [],
  teacher: [],
});

onMounted(async () => {
  const { schedule, duration, course, teacher } = await getInitialData();

  state.schedule = schedule;
  state.duration = duration;
  state.teacher = teacher;
  state.course = course;
});

const { schedule, duration, course, teacher } = toRefs(state);
</script>

<style lang="scss" scoped></style>
