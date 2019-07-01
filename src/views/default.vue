<template>
  <div>
    <h1>{{lighting}}</h1>
    <div class="demo"></div>
    <div aspectratio w-188-246 class="color">
      <div aspectratio-content>
        元素容器宽高比例子 postcss-aspect-ratio-mini 依赖库<br/>
        这里放你的内容
      </div>
    </div>
    <div class="example">
      postcss-write-svg插件主要用来处理移动端1px的解决方案 使用的是border-image
    </div>
    <div class="example-bg"> <!-- 感觉没效果 使用方式不对？ -->
      <div style="">postcss-write-svg插件主要用来处理移动端1px的解决方案 使用的是background-image<br/>
      由于有一些低端机对border-image支持度不够友好，个人建议你使用background-image的这个方案。</div>
    </div>
    <div
      class="flexBox"
      iflex="
        mainDir:left
        flexWrap:wrap
        mainAlign:center
        crossAlign:stretch
        box:first
      "
    >
      <div class="flex-item">flexBox iflex 依赖库 使用示例</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item" iflex-item="grow:0 shrink:0">5</div>
      <div class="flex-item">6</div>
      <div class="flex-item">7</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'default',
  data() {
    return {
      lighting: '123',
    };
  },
};
</script>
<style lang="less" scoped>
.demo{
  width: 100px;
  height: 300px;
  background-color: red;
}
// 元素容器宽高比例子 postcss-aspect-ratio-mini 依赖库
[w-188-246] {
  aspect-ratio: '188:246'; // aspect-ratio属性不能和其他属性写在一起
}
[w-188-246] {
  width: 188px;
  background-color: yellow;
}

.example {
  border: 1px solid transparent; // 00b1ff 是颜色值
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='2px'%3E%3Crect fill='%2300b1ff' width='100%25' height='50%25'/%3E%3C/svg%3E") 2 2 stretch;
}
.example-bg {
  background: white url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%2300b1ff' width='100%25' height='100%25'/%3E%3C/svg%3E");
}

.flex-item{
  width: 90px;
  height: 50px;
  background-color: #cccccc;
  margin: 5px;
  padding: 10px;
}
</style>
