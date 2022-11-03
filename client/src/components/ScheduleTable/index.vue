<template>
  <div class="schedule-table">
    <table border="1" cellpadding="0">
      <week-title></week-title>
      <tr v-for="item of duration" :key="item.begin_time">
        <duration-title :title="item.title"></duration-title>
        <td v-for="n in 7" :key="n" @click="handleTDClick(item.begin_time, n)">
          <schedule-card
            v-if="schedule[item.begin_time + '_' + n]"
            :data="schedule[item.begin_time + '_' + n]"
          >
          </schedule-card>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { h, onMounted, toRefs } from "vue";
import { getInitialData } from "./scripts/service";
import { useInitialData } from "./scripts/hooks";
import { checkHasData } from "./scripts/utils";
import "./style/index.scss";
import WeekTitle from "./WeekTitle.vue";
import DurationTitle from "./DurationTitle.vue";
import ScheduleCard from "./ScheduleCard.vue";
import MyMessageBox from "../MyMessageBox";
import MyForm from "./MyForm";

const [data, setInitialData, setSchedule] = useInitialData();

onMounted(async () => {
  setInitialData(await getInitialData());

  console.log(data);
});

const handleTDClick = (beginTime, weekDay) => {
  console.log(beginTime);
  console.log(weekDay);

  const scheduleData = data.schedule[`${beginTime}_${weekDay}`];

  MyMessageBox({
    title: checkHasData(scheduleData),
    btnCancelText: "取消",
    btnConfirmText: "提交",
    insert: h(MyForm, {
      scheduleData,
      weekDay,
      beginTime,
      course: data.course,
      teacher: data.teacher,
      myTest() {
        console.log("this is test");
      },
    }),
    confirm() {
      console.log("confirm");
    },
  });
};

const { schedule, duration, course, teacher } = toRefs(data);
</script>

<style lang="scss" scoped></style>
