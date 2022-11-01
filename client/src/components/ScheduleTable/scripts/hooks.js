import { reactive } from "vue";

const data = reactive({
  schedule: [], //策略模式待会儿
  teacher: [],
  duration: [],
  course: [],
  formData: [],
});

export function useInitialData() {
  function setInitialData({ schedule, duration, course, teacher }) {
    data.schedule = schedule;
    data.duration = duration;
    data.teacher = teacher;
    data.course = course;
  }

  function setSchedule({ type, resule }) {}

  return [data, setInitialData, setSchedule];
}

export function useFormData() {
  function setFormData(item) {
    data.formData = item;
  }

  return [setFormData];
}
