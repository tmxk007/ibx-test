<template>
  <div id="app">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="表单" name="form">
          <view-form></view-form>
        </el-tab-pane>
        <el-tab-pane label="表格组件" name="table">
          <view-table></view-table>
        </el-tab-pane>
        <el-tab-pane label="树组件" name="tree">
          <view-tree></view-tree>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "tree"
    };
  },
  components: {
    ViewForm: resolve => require(["./views/view-form/view-form"], resolve),
    ViewTable: resolve => require(["./views/view-table"], resolve),
    ViewTree: resolve => require(["./views/view-tree"], resolve)
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
