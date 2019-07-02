<template>
  <div>
    <button @click="doAxios">发送请求</button>
    <button @click="doAxiosSync">请求代码采用async/await</button>
    <button @click="postFormSync">post表单请求</button>
  </div>
</template>

<script>

export default {
  name: 'axiosDemo',
  data() {
    return {};
  },
  methods: {
    doAxios() {
      this.$axios.post('/auth/status').then((res) => {
        console.info('请求结果', res);
      }, (error) => {
        console.info('请求失败', error);
      });
    },
    async doAxiosSync() {
      const req = this.$axios.post('/auth/status', { a: 1, b: 'b' });
      console.log(1);
      try {
        const result = await req.then();
        console.log('result:', result);
      } catch (err) {
        console.log('err', err);
      }
      console.log(2);
    },
    async postFormSync() {
      const req = this.$axios.post(
        '/auth/status',
        'aa=1&cc=c', // 必须是query字符串形式
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      console.log(1);
      try {
        const result = await req.then();
        console.log('result:', result);
      } catch (err) {
        console.log('err', err);
      }
      console.log(2);
    },
  },
};
</script>
