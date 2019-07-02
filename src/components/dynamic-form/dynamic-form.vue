<template>
  <el-form
    :inline="from[input].formConfig.inline"
    :model="from[input].paramValue"
    :rules="from[input].rules"
    :ref="from[input].name"
    :size="from[input].formConfig.size"
    :hideRequiredAsterisk="from[input].formConfig.hideRequiredAsterisk"
    :labelPosition="from[input].formConfig.labelPosition"
    :labelWidth="from[input].formConfig.labelWidth"
    :labelSuffix="from[input].formConfig.labelSuffix"
    :showMessage="from[input].formConfig.showMessage"
    :inlineMessage="from[input].formConfig.inlineMessage"
    :statusIcon="from[input].formConfig.statusIcon"
    :class="from[input].formConfig.className"
    v-if="!!from[input].formConfig.formItems&&!!from[input].formConfig.formItems.length"
  >
    <el-form-item
      v-for="(item,index) in from[input].formConfig.formItems"
      :key="`index-${index}`"
      :label="item.label"
      :prop="item.prop"
      :style="{
        width: (
          from[input].formConfig.inline
          ?
          'auto'
          :
          parseFloat((item.span/24)*100,10)+'%'
        ),
        display: 'inline-block'
      }"
    >
      <template v-if="!!item.child&&!!item.child.length">
        <template v-for="(item2,index2) in item.child">
          <!-- 适配各种输入组件 -->
          <el-form-item
            v-if="!!item2.prop"
            :prop="item2.prop"
            :key="`index2-${index2}`"
            :style="{display:'inline-block',marginBottom:'0px'}"
          >
            <dynamic-form-el :elParentData="item" :elData="item2" :input="input">
            </dynamic-form-el>
          </el-form-item>
          <dynamic-form-el
            v-else
            :elParentData="item"
            :elData="item2"
            :input="input"
            :key="`index2-${index2}`"
          >
          </dynamic-form-el>
        </template>
      </template>
      <template v-else>
        <!-- 适配各种输入组件 -->
        <dynamic-form-el :elParentData="item" :elData="item" :input="input">
        </dynamic-form-el>
      </template>
    </el-form-item>
  </el-form>
</template>

<script>
import dynamicFormEl from './dynamic-form-el.vue';

export default {
  name: 'dynamicForm',
  inject: ['target'],
  components: {
    dynamicFormEl,
  },
  data() {
    return {
      from: this.target,
    };
  },
  props: {
    input: {
      type: String,
      required: true,
    },
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.from[this.input].refObj = this.$refs[this.from[this.input].name];
    // console.log(
    //   'dynamicForm created',
    //   this.from[this.input].name,
    //   this.$refs,
    //   this.$refs[this.from[this.input].name],
    //   this.from[this.input].refObj
    // );
  },
  destroyed() {
  },
};
</script>
<style lang="less" scoped>
</style>
