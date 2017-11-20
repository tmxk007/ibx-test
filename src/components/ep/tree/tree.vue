<template>
     <div class="ep-tree"> 
       <el-input @keydown.native="filterKeydown"
            :placeholder="placeholder"
            v-model="filterText">
        </el-input>

        <el-tree
            class="filter-tree"
            :data="data"
            :props="defaultProps"
            default-expand-all
            ref="tree">
        </el-tree>
    </div>
</template>

<script>
export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filterChange();
    }
  },
  methods: {
    filterKeydown(ev) {
      var tree = this.$refs.tree;
      if (ev.key == "Enter" || ev.key == "ArrowDown") {
        tree.filterNode(this.filterText);
      } else if (ev.key == "ArrowUp") {
        tree.filterNode(this.filterText, true);
      }
    }
  },
  props: {
    data: Array,
    placeholder: String,
    defaultProps: Object
  },
  data() {
    return {
      filterText: ""
    };
  }
};
</script>

<style>
.ep-tree .is-current > .el-tree-node__content {
  background-color: #428bca;
  color: #FFFF;
}
.ep-tree .el-tree-node__content{
  height: 32px;
}
</style>

<style lang="scss" scoped>

</style>