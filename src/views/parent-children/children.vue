<template>
  <div>
    <button @click="change">在孩子组件里改变prop的传值</button>
    <p>孩子组件：对象：{{prop1.name}} 原始类型数字：{{com_number1}} data里的str1:{{str1}}</p>
    <hr/>
    <button @click="changeToParent">在孩子组件里改变给父亲的传值</button>
    <p>在孩子组件里给父亲的传值:obj:{{JSON.stringify(toParentObj)}} str:{{toParentStr}}</p>
  </div>
</template>
<script>
export default {
  name: 'children',
  inject: ['self'], // 子组件注入 父亲'self'
  data() {
    return {
      from: this.self,
      str1: 'children str1',
      toParentObj: {
        aa: 'x23s',
      },
      toParentStr: 'to parent str s',
    };
  },
  props: {
    prop1: {
      type: Object,
      default: () => {},
      requried: true,
    },
    number1: {
      type: Number,
      requried: true,
    },
  },
  components: {
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
      console.log('from:', this.from, this.from.prop1.name);
      this.$emit('receiveData', this.toParentObj, this.toParentStr);
    },
    change() {
      this.prop1.name = 'children change prop1.name';
      // this.number1 = 303;//不能改变这个值，会报错
    },
    changeToParent() {
      this.toParentObj = {
        cc: 'child改变了给父亲的值对象',
      };
      this.toParentStr = 'child change to parent str';
    },

  },
};
</script>
<style lang="less" scoped>
</style>
