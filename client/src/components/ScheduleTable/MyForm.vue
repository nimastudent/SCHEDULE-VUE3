<template>
  <div class="my-form">
    <h1>{{ _weekDay }}{{ _beginTime }}</h1>
    <div class="select-group">
      <my-select
        :data="course"
        text-key="name"
        :default-value="_course"
        @update="courseUpdate"
      ></my-select>
      <my-select
        :data="teacher"
        text-key="name"
        :default-value="_teacher"
        @update="teacherUpdate"
      ></my-select>
    </div>
  </div>
</template>

<script setup>
import "./style/my-from.scss";
import { computed, defineEmits, reactive } from "vue";
import { weekDayToChinese, timeStampToTime } from "./scripts/utils";
import MySelect from "../MySelect";

const { weekDay, beginTime, scheduleData, course, teacher } = defineProps({
  weekDay: Number,
  beginTime: String,
  scheduleData: Object,
  course: Array,
  teacher: Array,
});

const emit = defineEmits(["formUpdate", "myTest"]);

const _weekDay = computed(() => {
  return weekDayToChinese(weekDay);
});
const _beginTime = computed(() => {
  return timeStampToTime(beginTime);
});
const _course = scheduleData ? scheduleData.course : course[0].name;
const _teacher = scheduleData ? scheduleData.teacher : teacher[0].name;

const state = reactive({
  course: _course,
  teacher: _teacher,
});

const formEmit = () => {
  //   console.log(emit);
  emit("myTest");
  emit("formUpdate", {
    begin_time: beginTime,
    weekday: weekDay,
    course: state.course,
    teacher: state.teacher,
  });
};

/**
 * begin_time
 * course
 * teacher
 * weekDay
 *
 */
const courseUpdate = (course) => {
  state.course = course;
  formEmit();
};

const teacherUpdate = (teacher) => {
  state.teacher = teacher;
  formEmit();
};
</script>

<style lang="scss" scoped></style>
