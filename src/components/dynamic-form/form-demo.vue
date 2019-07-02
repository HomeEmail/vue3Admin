<template>
  <div class="formDemoPage">
    <br/>
    <p style="font-size:16px;line-height:30px;">
      此样例展示了全部已经封装好的element-ui表单组件及其属性、方法和事件；
      注意：有个别原有的element组件、属性未封装
    </p>
    <p style="font-size:16px;line-height:30px;">
      表单配置属性全部参考element-ui表单组件的属性，使用驼峰格式命名
    </p>
    <br/>
    <hr/>
    <br/>
    <h2>行内表单</h2>
    <dynamic-form input="formObj"></dynamic-form>
    <br/>
    <hr/>
    <br/>
    <h2>典型表单</h2>
    <dynamic-form input="formObj1"></dynamic-form>
  </div>
</template>
<script>
import dynamicForm from './dynamic-form.vue';
import { formObj, formObj1 } from './form-demo-data';

export default {
  name: 'formDemo',
  components: {
    dynamicForm,
  },
  provide() {
    return {
      target: this.baseSelf,
    };
  },
  data() {
    return {
      baseSelf: this,
      formObj,
      formObj1,
    };
  },
  created() {
    console.log('this.$route', this.$route);
  },
  computed: {},
  mounted() {},
  methods: {
    onSubmit(formName) {
      console.log(formName, this[formName].paramValue, this[formName].paramValue.startDate);
      if (!this[formName].refObj) return;
      this[formName].refObj.validate((valid) => {
        let b = false;
        if (valid) {
          console.log('submit!');
          b = true;
        } else {
          console.log('error submit!!');
          b = false;
        }
        return b;
      });
    },
    onReset(formName) {
      if (!this[formName].refObj) return;
      this[formName].refObj.resetFields();// 当开启有keep-alive，数据会缓存组件关闭前的值 导致清空不了
      // 尝试这样清空数据
      // for(let key in this[formName].paramValue){
      //   this[formName].paramValue[key]='';
      // }
      console.log('this.data', this);
    },
    cascaderChange(value) {
      console.log('cascaderChange', value);
    },
  },
};
</script>
<style lang="less" scoped>
  .formDemoPage{
    padding: 20px;
  }
</style>
