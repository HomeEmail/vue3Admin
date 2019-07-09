<template>
  <div class="loginBox">
    <div class="loginBg"></div>
    <el-form
      :model="ruleForm2"
      :rules="rules"
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-container"
    >
      <h3 class="title">管理后台系统</h3>
      <el-form-item prop="account">
        <el-input
        type="text"
        v-model="ruleForm2.account"
        auto-complete="off"
        placeholder="账号"
      ></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm2.checkPass"
          auto-complete="off"
          placeholder="密码"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="captcha">
        <el-input type="text"
          v-model="ruleForm2.captcha"
          style="width:150px;"
          auto-complete="off"
          placeholder="验证码"
          @keyup.native.enter="handleSubmit"
        >
        </el-input>
        <img :src="captchaUrl" style="vertical-align: middle;" @click="reloadCaptcha()" />
      </el-form-item>
      <el-form-item style="width:100%; margin-top: 40px">
        <el-button
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleSubmit()"
          :loading="logining"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import TestEs6 from '@/static/test-es6';
import secret from '@/static/secret';
import {
  getLoginAesKey,
} from '@/api/user';

export default {
  name: 'login',
  data() {
    return {
      logining: false,
      ruleForm2: {
        account: '',
        checkPass: '',
        captcha: '',
      },
      rules: {
        account: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur',
          },
        ],
        checkPass: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
        captcha: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur',
          },
        ],
      },
      captchaUrl: '',
      checked: true,
    };
  },
  created() {
  },
  async mounted() {
    console.log('login mounted');
    const req = getLoginAesKey();
    try {
      const k = await req.then();
      console.log('getLoginAesKey', k);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    reloadCaptcha() {
      this.captchaUrl = `${this.aptchaUrl}?t=${Date.now()}`;
    },
    async handleSubmit(ev) {
      const self = this;
      self.$refs.ruleForm2.validate((valid) => {
        const en = secret.Encrypt('sdf2233d$dsf||33||username');
        console.log('secret.Encrypt', en);
        console.log('secret.Decrypt', secret.Decrypt(en));
        if (valid) {
          console.log('login welcome!');
          // self.logining = true;
          this.$router.push('/welcome3');
        } else {
          const es = new TestEs6('xxoo', 22);
          this.$message.error(es.say());
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
  .loginBox{
    height: 100%; position: relative; right: 0px; left: 0px;display: block;
  }
  .loginBg{
    background: #efefef; height: 100%;position: fixed;left: 0;top: 0;width: 100%;z-index: 0;
  }
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    position: relative;
    z-index: 1;
  }

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
    font-size: 25px;
  }

</style>
