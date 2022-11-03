<template>
  <div class="my-select">
    <div class="selected-value" @click="showOptionList">
      {{ selectdValue }}
    </div>
    <div class="option-list" v-if="visible">
      <a
        class="list-item"
        href="javascript:;"
        v-for="item of data"
        :key="item.id"
        @click="selectValue(item)"
      >
        {{ item[textKey] }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive, toRefs } from "vue";
import "./index.scss";

const { data, textKey, defaultValue } = defineProps({
  data: Object,
  textKey: String,
  defaultValue: String,
});

const emit = defineEmits(["update"]);

const state = reactive({
  selectdValue: defaultValue || data[0][textKey],
  visible: false,
});

const setVisible = (visi) => {
  state.visible = visi;
};

const showOptionList = () => {
  setVisible(!state.visible);
};

const selectValue = (item) => {
  state.selectdValue = item[textKey];
  setVisible(false);
  emit("update", state.selectdValue);
};

const { selectdValue, visible } = toRefs(state);
</script>
