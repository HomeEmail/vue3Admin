<template>

<div class="testPage">
<h1>test</h1>
  <p>
    2.使用同一个component,页面query等参数不一样的情况<br/>
    在组件里使用activated钩子激活当前页面数据的显示,并且watch $route<br/>
    这样可以根据$route的query变化加载不一样的数据<br/>
  </p>
  <button @click="goPage">新建一个欢迎页4</button>
  <button @click="closePage">关闭</button>
  <button @click="lastPage">返回</button>
</div>
</template>

<script>
export default {
  name: 'test1',
  created() {
    console.log('test1 created');
  },
  mounted() {
    console.log('test1 mounted');
  },
  activated() {
    console.log('test1 activated');
  },
  deactivated() {
    console.log('test1 deactivated');
  },
  destroyed() {
    console.log('test1 destroyed');
  },
  methods: {
    closePage() {
      this.$emit('close-page', this.$route);
    },
    lastPage() {
      this.$router.go(-1);
    },
    goPage() {
      this.$router.push({
        name: 'welcome',
        query: {
          name: '水电费',
          id: new Date().getTime(),
        },
      });
    },
  },
  watch: {
  },
};
</script>

<style scoped>
.testPage{
  padding: 20px;
}
</style>
