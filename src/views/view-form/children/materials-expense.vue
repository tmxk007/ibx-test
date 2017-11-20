<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>{{ $t('materials expense') }}</span>
    <el-button style="float: right; padding: 3px 0"  type="text" @click="add">{{ $t('add') }}</el-button>
  </div>
  <el-form ref="form"  v-for="row in data" label-width="110px">
    <el-row :gutter="20" :xs="24">
      <el-col :sm="12">
        <el-form-item :label="$t('cost category')+':'">
           <el-input v-model="row.type"></el-input>
        </el-form-item>
      </el-col>
      <el-col :sm="12" :xs="24">
        <el-form-item :label="$t('money')+':'">
          <el-input v-model="row.value"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>  
  <div class="subtotal">{{ $t('subtotal') }}：{{ subtotal+'￥' }}</div>
</el-card>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      data: state=>state.data.MaterialsExpense
    }),
    ...mapGetters({
      subtotal: "subtotalMaterialsExpense"
    })
  },
  methods: {
    ...mapActions({
      add: "addMaterialsExpense"
    })
  }
};
</script>

<style lang="scss" scoped>
.box-card {
  margin: 20px;
}
.subtotal {
  float: right;
  margin: 5px;
  margin-bottom: 20px;
  color: #5a5e66;
}
</style>