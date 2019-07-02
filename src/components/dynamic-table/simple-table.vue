<template>
  <el-table :data="modelDatas" style="width: 100%;" :height="height" border>
    <el-table-column label="序号" align="center" type="index" width="60"/>
    <el-table-column
      v-for="item of columnDatas"
      :key="item.property"
      align="center"
      :property="item.property"
      show-overflow-tooltip
      :label="item.label"
      :width="item.width"
    ></el-table-column>
  </el-table>

</template>

<script type="text/javascript">

export default {
  name: "simpleTable",
  data() {
    return {};
  },
  // 属性
  props: {
    columnDatas: {
      type: Array,
      default: [],
    },
    modelDatas: {
      type: Array,
      default: [],
    },
    width: {
      type: String,
      default: "800px",
    },
    height: {
      type: String,
      default: "200",
    },
  },
  // 组件
  components: {},
  // 函数
  methods: {
  },
  // 监听
  watch: {},
  // 计算
  computed: {},
  // 过滤
  filters: {},
  mounted() {},
};
</script>
<style lang="less">
</style>
