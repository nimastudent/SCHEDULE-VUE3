import { httpGet, httpPost } from "../../../libs/http";
import { formatScheduleData } from "./utils";

export async function getInitialData() {
  const { schedule, duration, course, teacher } = await httpGet(
    "http://127.0.0.1:3000/initial_data"
  );

  return Promise.resolve({
    schedule: formatScheduleData(schedule),
    duration,
    course,
    teacher,
  });
}
