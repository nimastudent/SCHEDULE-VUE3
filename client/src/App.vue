<template>
	<schedule-table></schedule-table>
	<!-- <my-message-box
		:title="'删除课程'"
		:btnCancelText="'取消'"
		:btnConfirmText="'删除'"
	></my-message-box> -->
	<!--  title: "删除课程",
    btnCancelText: "取消",
    btnConfirmText: "删除", -->
</template>

<script setup>
import ScheduleTable from "./components/ScheduleTable";
import MyMessageBox from "./components/MyMessageBox/MyMessageBox";

// import { onMounted } from "vue";
// import axios from "axios";

// onMounted(async () => {
//   const res = await axios.get("http://127.0.0.1:3000/initial_data");
//   console.log(res);
// });
</script>
<style lang="scss" scoped></style>
