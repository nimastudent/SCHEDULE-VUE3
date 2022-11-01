<template>
	<div class="schedule-card">
		<i class="icon" @click.stop="removeCard">&times;</i>
		<p>{{ weekDay }} {{ beginTime }}</p>
		<p>「{{ course }}」</p>
		<p>{{ teacher }}</p>
	</div>
</template>

<script setup>
import "./style/schedule-card.scss";
import MyMessageBox from "../MyMessageBox/index";
import { computed, h, toRefs } from "vue";
import { weekDayToChinese, timeStampToTime } from "./scripts/utils";

const props = defineProps({
	data: Object,
});

const weekDay = computed(() => {
	return weekDayToChinese(props.data.weekday);
});

const beginTime = computed(() => {
	return timeStampToTime(props.data.begin_time);
});

const removeCard = () => {
	// 打开messageBox
	MyMessageBox({
		title: "删除课程",
		btnCancelText: "取消",
		btnConfirmText: "删除",
		insert: h("p", "确定删除此课程？"),
		// insert:h(
		confirm() {
			console.log("confirm");
		},
		cancel() {
			console.log("cancel");
		},
	});
};

const { course, teacher } = toRefs(props.data);
</script>

<style lang="scss" scoped></style>
