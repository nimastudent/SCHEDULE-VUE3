import { httpGet, httpPost } from "../../../libs/http";

export async function getInitialData() {
  const { schedule, duration, course, teacher } = await httpGet(
    "http://127.0.0.1:3000/initial_data"
  );

  return Promise.resolve({
    schedule,
    duration,
    course,
    teacher,
  });
}
