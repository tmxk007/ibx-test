<template>
	<div id="app">
    <div class="lang-type">
      <el-select v-model="langSelected" @change="changeLangType">
        <el-option v-for="item in langOptions"
          :key="item.value"
          :label="item.text"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <materials-expense></materials-expense>
    <travel-expense></travel-expense>
    <result></result>
	</div>
</template>

<script>
import Vue from "vue";
import store from '@/store'

import Localization from "../../../static/localization.js";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

// import "element-ui/lib/theme-chalk/index.css";
// import ElementUI from "element-ui";
// Vue.use(ElementUI);

const i18n = new VueI18n({
  locale: Localization.types.langSelected,
  messages: Localization.data
});

export default {
  // name: "app",
  i18n,
  store,
  components: {
    MaterialsExpense: resolve => require(["./children/materials-expense"], resolve),
    TravelExpense: resolve => require(["./children/travel-expense"], resolve),
    Result: resolve => require(["./children/result"], resolve)
  },
  data() {
    return Localization.types;
  },
  methods: {
    changeLangType(value) {
      this.$i18n.locale = value;
    }
  },
  mounted() {
    this.$store.dispatch("initData");
  }
};
</script>

<style lang="scss" scoped>
.lang-type {
  margin-left: 20px;
}
</style>