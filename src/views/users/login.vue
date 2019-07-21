<template>
  <div class="loginBox">
    <div class="loginBg"></div>
    <el-form
      name="imageToolLoginForm"
      :model="formData"
      :rules="rules"
      ref="formData"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-container"
    >
      <h3 class="title">熊猫灵图</h3>
      <el-form-item prop="loginName">
        <el-input
        type="text"
        name="loginName"
        v-model="formData.loginName"
        auto-complete="off"
        placeholder="邮箱"
      ></el-input>
      </el-form-item>
      <el-form-item prop="passwd">
        <el-input
          type="password"
          name="passwd"
          v-model="formData.passwd"
          auto-complete="off"
          placeholder="密码"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="verificationCode">
        <el-input type="text"
          v-model="formData.verificationCode"
          style="width:150px;"
          auto-complete="off"
          placeholder="验证码"
          @keyup.native.enter="handleSubmit"
        >
        </el-input>
        <img
          :src="captchaUrl"
          style="vertical-align: middle;height:28px;margin-left:10px;"
          @click="reloadCaptcha()"
        />
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
// import TestEs6 from '@/static/test-es6';
import { mapActions, mapState, mapGetters } from 'vuex';
import secret from '@/static/secret';
import {
  getLoginAesKey,
  login,
} from '@/api/user';

export default {
  name: 'login',
  data() {
    return {
      logining: false,
      formData: {
        loginName: '',
        passwd: '',
        verificationCode: '',
      },
      rules: {
        loginName: [
          {
            type: 'email',
            required: true,
            message: '请输入邮箱',
            trigger: 'blur',
          },
        ],
        passwd: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
          {
            min: 6,
            max: 21,
            message: '长度在 6 到 21 个字符',
            trigger: 'blur',
          },
        ],
        verificationCode: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur',
          },
        ],
      },
      captchaUrl: `${process.env.VUE_APP_BASE_URL}/captcha`,
      checked: true,
    };
  },
  created() {
  },
  async mounted() {
    console.log('login mounted', process.env.VUE_APP_BASE_URL);
  },
  methods: {
    ...mapActions('user', [
      'setUserinfo',
    ]),
    reloadCaptcha() {
      this.captchaUrl = `${this.captchaUrl}?t=${Date.now()}`;
    },
    async handleSubmit(ev) {
      const self = this;
      self.$refs.formData.validate(async (valid) => {
        if (valid) {
          const req = getLoginAesKey();
          this.logining = true;
          try {
            const k = await req.then();
            console.log('getLoginAesKey', k);
            const en = secret.encryptByKey(this.formData.passwd, k.key);
            console.log('secret.encryptByKey:', en);
            // console.log('secret.decryptByKey:', secret.decryptByKey(en, k.key));
            this.formData.passwd = en;
            const reqLogin = login(this.formData);
            const result = await reqLogin.then();
            console.log('login response:', result);
            if (result.code) {
              this.setUserinfo(result.data);
              this.$router.push('/home');
            } else {
              this.$message.error(result.message);
            }
          } catch (error) {
            console.log(error);
            this.logining = false;
            return 0;
          }
          this.logining = false;
          // console.log('login welcome!');
          // self.logining = true;
          // this.$router.push('/welcome3');
        } else {
          // const es = new TestEs6('xxoo', 22);
          this.$message.error('输入登录信息有误，请检查再试！');
        }
        return 1;
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
