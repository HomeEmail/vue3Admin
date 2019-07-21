<template>
  <div class="layoutPage">
    <div class="layoutHeader">
      <div class="leftTopDiv">
        <img ref="logoIndex" class="logo" src="../assets/logo.png" />
        <span class="cmsName">熊猫灵图</span>
      </div>
      <div class="rightTopDiv">
        <span class="userName">您好, {{userinfoGetter.name}}</span>
        <el-button type="text" @click="handleExit()">退出</el-button>
      </div>
    </div>

    <div class="layoutCenter">
      <div class="leftWrapper">
        <div class="album">相册</div>
        <div class="album-item active">全部</div>
      </div>
      <div class="centerWrapper" v-loading="logining">
        <div class="imageWrapper">
          <div class="image-item"
            v-for="(item, i) in images"
            :key="item.id"
            @click="imageClick(item, i)"
            :class="item.active?'active':''"
          >
            <div class="img-bg"
              :style="{backgroundImage:'url('+item.url+')'}"
            >
            </div>
          </div>
        </div>
        <el-pagination
          class="page-pagination"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryObj.pageNo"
          :page-sizes="[50, 200, 300, 400]"
          :page-size="queryObj.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="queryObj.totalPage">
        </el-pagination>
      </div>
      <div class="rightWrapper">
        <div class="uploadWrapper">
          <el-upload
            class=""
            multiple
            :headers="headers"
            accept=".jpg,.jpeg,.png,.gif"
            :action="uploadUrl"
            :on-success="handleImageSuccess"
            :before-upload="beforeImageUpload"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            drag>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png/gif文件，且不超过2MB</div>
          </el-upload>
        </div>
        <div class="colorBox"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex';
// import routesConfig from '@/routers/config';
import {
  logout,
} from '@/api/user';
import {
  getUserImages,
  getImageColors,
  getImagesByColor,
} from '@/api/images';

export default {
  name: 'Home',
  data() {
    return {
      // headers: {
      //   Authorization: this.$store.state.user.userinfo.token,
      // },
      uploadUrl: `${process.env.VUE_APP_BASE_URL}/upload`,
      images: [],
      lastImage: null,
      logining: false,
      queryObj: {
        pageNo: 1,
        totalPage: 1,
        pageSize: 50,
        label_id: 0,
        album_id: 0,
      },
    };
  },
  computed: {
    // ...mapState({
    //   userName: state => state.user.userinfo.name,
    // }),
    ...mapGetters('user', [
      'userinfoGetter',
    ]),
    headers() {
      return {
        Authorization: this.userinfoGetter.token,
      };
    },
  },
  components: {
  },
  watch: {
    $route(to, from) {
      // console.log('to', to, 'from', from);
    },
  },
  created() {
    console.log('Home.vue created route', this.$route);
  },
  mounted() {
    this.getUserImages();
  },
  activated() {},
  destroyed() {},
  methods: {
    imageClick(image, i) {
      console.log('click image:', image);
      if (this.lastImage) {
        this.lastImage.active = false;
      }
      this.images[i] = {
        ...image,
        active: true,
      };
      this.images = [...this.images];
      this.lastImage = this.images[i];
    },
    async getUserImages() {
      const req = getUserImages(this.queryObj);
      this.logining = true;
      try {
        const result = await req.then();
        console.log('getUserImages response:', result);
        if (result.code) {
          this.images = result.data;
          this.images.forEach((v, i) => {
            this.images[i].url = `http://localhost:8989/${v.path}`;
          });
          this.queryObj.totalPage = result.totalPage;
        } else {
          this.$message.error(result.message);
        }
      } catch (error) {
        console.log(error);
        this.logining = false;
      }
      this.logining = false;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleImageSuccess(res, file) {
      console.log(res, file);
      this.images.unshift({
        id: res.id,
        path: res.data,
        url: `http://localhost:8989/${res.data}`,
      });
      // this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeImageUpload(file) {
      console.log('beforeImageUpload', file);
      const ft = ['image/png', 'image/jpeg', 'image/gif'];
      const isJPG = ft.some(f => f === file.type); // file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传图片只能是 jpg、 jpeg、png和gif的格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
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
    async handleExit(index, row) {
      // console.log(index, row);
      const self = this;
      const req = logout();
      try {
        const result = await req.then();
        this.$router.push('/login');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped lang="less">
.layoutPage {
  height: 100%;
  overflow: hidden;
  position: relative;
  font-size: 13px;
}

.layoutHeader {
  border-bottom: 1px #ddd solid;
  height: 60px;
  overflow: hidden;
  position: relative;
  z-index: 3;
}

.leftTopDiv {
  /*background: #2f6fad;*/

  display: inline-block;
  line-height: 60px;
  vertical-align: middle;
  padding-left: 20px;
}

.leftTopDiv .logo {
  vertical-align: middle;
  height: 40px;
  box-shadow: 0px 0px 10px 1px #ccc;
}

.leftTopDiv .cmsName {
  font-size: 22px;
  color: #0e83fc;
  vertical-align: middle;
  padding: 0px 10px;
}

.rightTopDiv {
  float: right;
  line-height: 60px;
  padding-right: 20px;
}
.rightTopDiv .userName {
  font-size: 13px;
  color: #666;
  padding: 0px 20px;
}

.layoutCenter {
  position: absolute;
  top: 61px;
  left: 0px;
  width: 100%;
  bottom: 0px;
  display: flex;
  .leftWrapper{
    width: 220px;
    flex-basis: 220px;
    border-right: 1px #eee solid;
    overflow-y: auto;
    .album{
      font-weight: bold;
      line-height: 40px;
      padding: 0px 10px;
      font-size: 14px;
      // background-color: #efefef;
      border-bottom: 1px #eee solid;
    }
    .album-item{
      color: #333;
      line-height: 36px;
      padding: 0px 10px;
      font-size: 13px;
      border-bottom: 1px #eee solid;
      cursor: pointer;
      &.active{
        background-color: #0f82fca4;
        color: #ffffff;
      }
    }
  }
  .centerWrapper{
    width: auto;
    padding: 10px;
    overflow-y: auto;
    flex-basis: 0;
    flex-grow: 1;
    .imageWrapper{
      min-height: calc(100% - 52px);
      width: 100%;
      margin-bottom: 10px;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      .image-item{
        margin: 10px;
        height: 280px;
        width: 280px;
        border: 1px #efefef solid;
        padding: 10px;
        .img-bg{
          width: 100%;
          height: 100%;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
        &:hover{
          box-shadow: 0px 8px 20px 0px #0e83fc5c;
          // margin-top: -2px;
        }
        &.active{
          border: 2px #0e83fc solid;
          box-shadow: 0px 8px 20px 0px #0e83fc5c;
        }
      }
    }
    .page-pagination{
      text-align: center;
    }
  }
  .rightWrapper{
    flex-basis: 260px;
    width: 260px;
    border-left: 1px #eee solid;
    overflow-y: auto;
    .uploadWrapper{
      padding: 10px;
    }
  }

}

</style>
