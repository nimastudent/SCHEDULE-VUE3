<template>
	<transition name="messagebox-fade">
		<div class="message-box" v-if="state.visible">
			<div class="wrapper">
				<header class="box-header">
					<h1>{{ title }}</h1>
				</header>
				<div class="box-board">
					<!-- <component :is="insert"></component> -->
					<div class="btn-group">
						<my-button type="default" @click="handleCancelClick">{{
							btnCancelText
						}}</my-button>
						<my-button type="primary" @click="handleConfirmClick">{{
							btnConfirmText
						}}</my-button>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup>
import "./myMessageBox.scss";
import MyButton from "../MyButton/index.vue";
import { reactive } from "vue";
const props = defineProps({
	title: {
		type: String,
		default: "MessageBox",
	},
	btnCancelText: {
		type: String,
		default: "cancel",
	},
	btnConfirmText: {
		type: String,
		default: "confirm",
	},
});

const state = reactive({
	visible: false,
	type: "CANCLE",
});

const handleCancelClick = () => {
	state.type = "CANCLE";
	setVisible(false);
};

const handleConfirmClick = () => {
	state.type = "CONFIRM";
	setVisible(false);
};

const setVisible = isVisible => {
	state.visible = isVisible;
};

defineExpose({
	state,
	setVisible,
});
</script>

<style lang="scss" scoped></style>
