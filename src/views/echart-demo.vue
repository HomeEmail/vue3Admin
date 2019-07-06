<template>
  <div class="echart-demo-page">
    <h1>echart demo</h1>
    <p>例子参考：https://echarts.baidu.com/examples/</p>
    <p>文档参考:https://www.echartsjs.com/option.html</p>
    <div class="echart-item">
      <h2>折线图</h2>
      <div class="echartBox">
        <v-chart :options="options" />
      </div>
    </div>
  </div>
</template>
<script>
import 'echarts/lib/chart/line';

export default {
  name: 'echartDemo',
  data() {
    return {
      options: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {},
        }],
      },
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<style lang="less" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
.echart-demo-page{
  padding: 20px;
}
.echart-item{
  padding: 20px 0px;
}
.echartBox{
  width: 50%;
  height: 250px;
}
</style>
