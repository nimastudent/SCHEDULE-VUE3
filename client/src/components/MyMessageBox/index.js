import { createApp, watch } from "vue";
import MyMessageBoxComponent from "./MyMessageBox.vue";

// 知识盲点一 ： createApp   mount
function MyMessageBox(options) {
	const messageBox = createApp(MyMessageBoxComponent, options);

	showMessageBox(messageBox, options);
}

function showMessageBox(app, { confirm, cancel }) {
	const fra = document.createDocumentFragment();
	const vm = app.mount(fra);
	document.body.appendChild(fra);
	vm.setVisible(true);

	watch(vm.state, state => {
		if (!state.visible) {
			switch (state.type) {
				case "CANCLE":
					typeof cancel === "function" && cancel();
					break;
				case "CONFIRM":
					typeof confirm === "function" && confirm();
					break;
				default:
					break;
			}
		}

		hideMessage(app);
	});
}

function hideMessage(app) {
	app.unmount();
}
export default MyMessageBox;
