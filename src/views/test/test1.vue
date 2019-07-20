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
  <div>
    <el-upload
      multiple
      :headers="headers"
      accept=".jpg,.jpeg,.png,.gif"
      :action="uploadUrl"
      list-type="picture-card"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
  </div>
</div>
</template>

<script>
export default {
  name: 'test1',
  data() {
    return {
      headers: {
        Authorization: this.$store.state.user.userinfo.token,
      },
      uploadUrl: `${process.env.VUE_APP_BASE_URL}/upload`,
    };
  },
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
    handleAvatarSuccess(res, file) {
      console.log(res, file);
      // this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      console.log('beforeAvatarUpload', file);
      const ft = ['image/png', 'image/jpeg', 'image/gif'];
      const isJPG = ft.some(f => f === file.type); // file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 jpg、 jpeg、png和gif的格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      // this.dialogImageUrl = file.url;
      // this.dialogVisible = true;
    },
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
