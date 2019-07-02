<template>
<div class="welcomePage">
<h1>欢迎您！{{userName}}</h1>
  <button @click="closePage">关闭</button>
  <p style="text-indent:50px;padding:10px 0px;">
    当前时间：{{dateStr}} 当前query：{{queryStr}}
  </p>
  <p style="text-indent:50px;padding:10px 0px;">
    少儿是祖国的花朵！教育是国之根本！为实现祖国富强，人民富足，
    复兴中华，关注少儿教育是我们身上的重任，合理引导孩子和家长看
    动画有益身心健康，父子关系，家庭氛围。所谓家好，国好，人人好。
  </p>
  <p style="text-indent:50px;padding:10px 0px;">
    家长之所以会选择订购儿童教育类节目，首先是因为他希望
    能够补充孩子待在家中也能学到更多的知识，这些节目可能
    提高幼儿启发能力或动手能力。其次，家长不是天生就懂得
    教育孩子，他们希望能通过节目来了解孩子们的需求，也可
    通过亲子教育来增进与孩子间的关系。再次，现在的教学需
    求孩子通过课外练习来实践课堂，例如亲子幼教劳作节目，
    同样受欢迎（如：剪刀石头布）；最后，家长希望幼儿能通
    过启蒙卡通吸引幼儿注意力，乖乖地待在原地，使得家长能
    够做其他手头上的工作.
  </p>
  <p style="text-indent:50px;padding:10px 0px;">
    以上是为了页面不那么空白！
  </p>
</div>
</template>

<script>
export default {
  name: 'welcome',
  data() {
    return {
      userName: 'sfdfssd',
      dateStr: '',
      queryStr: '',
    };
  },
  created() {
    console.log('welcome created');
  },
  mounted() {
    console.log('welcome mounted');
  },
  activated() {
    console.log('welcome activated');
    this.init();
  },
  deactivated() {
    console.log('welcome deactivated');
  },
  destroyed() {
    console.log('welcome destroyed');
  },
  watch: {
    $route(to, from) {
      const { query } = to;
      console.log('welcome query:', query);
      this.queryStr = JSON.stringify(query);
      this.init();
    },
  },
  methods: {
    closePage() {
      this.$emit('close-page', this.$route);
    },
    init() {
      this.dateStr = new Date();
    },
  },
};
</script>

<style scoped>
p{
  line-height: 30px;
}
.welcomePage{
  padding: 20px;
}
</style>
