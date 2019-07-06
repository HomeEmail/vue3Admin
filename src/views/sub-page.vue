<template>
  <div class="sub-page">
    <h1>subpage</h1>
    <h2>chroma-js库用例</h2>
    <p>temperature属性例子</p>
    <el-slider
      v-model="temperatureNum"
      :min="0"
      :max="30000"
      show-input>
    </el-slider>
    <div style="width:100px;height:40px;" :style="sliderColorShowCss">
      22
    </div>
    <span>{{hexValue}}</span>
    <h2>HSV:色度hue(0-360), 饱和度saturation(0-1), and 值value(0-1)</h2>
    <p>注意对于无色彩的颜色 （black, white, and grays）hue将是NaN</p>
    <div>hue</div>
    <el-slider
      v-model="hsv.hue"
      :min="0"
      :step="0.01"
      :max="360"
      show-input>
    </el-slider>
    <div>saturation</div>
    <el-slider
      v-model="hsv.saturation"
      :min="0"
      :step="0.0001"
      :max="1"
      show-input>
    </el-slider>
    <div>value</div>
    <el-slider
      v-model="hsv.value"
      :min="0"
      :step="0.0001"
      :max="1"
      show-input>
    </el-slider>
    <div style="width:100px;height:40px;" :style="hsvSliderColorShowCss">
      11
    </div>
    <span>hex:{{hexByHsvValue}}</span><span> temperature:{{temperatureValue}}</span>
  </div>
</template>

<script>
import chroma from 'chroma-js';

export default {
  name: 'subPage',
  data() {
    return {
      temperatureNum: 0,
      hsv: {
        hue: 360,
        saturation: 1,
        value: 1,
      },
    };
  },
  computed: {
    sliderColorShowCss() {
      const hexColor = chroma.temperature(this.temperatureNum);
      return {
        background: hexColor, // 奇怪的是用backgroundColor ie11显示不了
      };
    },
    hexValue() {
      const hexColor = chroma.temperature(this.temperatureNum);
      return hexColor;
    },
    hexByHsvValue() {
      const hexColor = chroma.hsv(this.hsv.hue, this.hsv.saturation, this.hsv.value);
      return hexColor;
    },
    hsvSliderColorShowCss() {
      const hexColor = chroma.hsv(this.hsv.hue, this.hsv.saturation, this.hsv.value);
      return {
        background: hexColor, // 奇怪的是用backgroundColor ie11显示不了
      };
    },
    temperatureValue() {
      const hexColor = chroma.hsv(this.hsv.hue, this.hsv.saturation, this.hsv.value);
      return chroma(hexColor).temperature();
    },
  },
  mounted() {
    console.log('chroma("#ff0000").temperature()', chroma('#ff0000').temperature());
    console.log('chroma.temperature(2000)', chroma.temperature(2000));
    console.log('chroma("orange").hsv()', chroma('orange').hsv());
    console.log('chroma("white").hsv()', chroma('white').hsv());
  },
};
</script>

<style lang="less" scoped>
.sub-page{
  padding: 20px;
}
.flexclass{
  display: flex;
}
</style>
