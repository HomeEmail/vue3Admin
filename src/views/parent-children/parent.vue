<template>
  <div style="padding:20px;">
    <h3>这是个父子组件实例</h3>

    <h4>通过prop传值给孩子</h4>
    <button @click="change">在父亲组件里改变prop的传值</button>
    <p>父亲=》对象：{{prop1.name}} 原始类型数字：{{com_number1}}</p>
    <hr/>
    <children :prop1="prop1" :number1="com_number1" @receiveData="receiveChild"></children>
    <p>parent从孩子那里接收到到值:obj:{{JSON.stringify(childDataObj)}} str:{{childDataStr}}</p>
    <button @click="changeReceiveChildData">parent改变从孩子那里接收到到值</button>
    <p>结论：props传值，父子两都改变对象类型让数据同时生效，原生类型不能改变。为了让父子同步同一份数据，只能使用对象来传;事件接收的对象不会同步孩子里的</p>


    <h4>provide 和 inject</h4>


  </div>
</template>
<script>
import children from './children.vue';

export default {
  name: 'parent',
  provide() {
    return {
      self: this.baseSelf, // 父级组件提供父亲的实例
    };
  },
  data() {
    return {
      baseSelf: this,
      prop1: {
        name: 'prop1.name',
      },
      number1: 20,
      childDataObj: {
        init: 'init',
      },
      childDataStr: '',
    };
  },
  props: {
  },
  components: {
    children,
  },
  computed: {
    computed1() {
      return 'computed1';
    },
    com_number1() {
      return this.number1;
    },
  },
  created() {
    console.log('created');
    this.init();
  },
  mounted() {
    console.log('mounted');
  },
  methods: {
    init() {
      console.log('init');
    },
    change() {
      this.prop1.name = 'parent change prop1.name';
      this.number1 = 567;
    },
    receiveChild(data, str) { // 从孩子接受值
      this.childDataObj = data;
      this.childDataStr = str;
    },
    changeReceiveChildData() {
      this.childDataObj = {
        dd: 'parent 改变了从孩子那接受到到值obj',
      };
      this.childDataStr = 'parent change receive child data str';
    },
  },
};
</script>
<style lang="less" scoped>

</style>
