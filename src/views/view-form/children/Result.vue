<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>{{ $t('sum') }}</span>
  </div>
    <div class="sum">
      <div>{{ $t('max') }}：{{ max + '￥' }}</div>
      <div>{{ $t('min') }}：{{ min + '￥' }}</div>
      <div>{{ $t('average') }}：{{ average + '￥' }}</div>
      <div>{{ $t('sum') }}：{{ sum + '￥' }}</div>
    </div>
</el-card>
</template>

<<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      max:"max",
      min:"min",
      sum:"sum",
      average:"average"
    })
  }
};
</script>

<style lang="scss" scoped>
.box-card {
  margin: 20px;
}
.sum {
  float: right;
  margin-bottom: 15px;
  color: #5a5e66;
}
.sum > div {
  margin: 8px;
}
</style>