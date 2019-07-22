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
        <div class="album-item active" @click="albumItemClick({})">全部</div>
      </div>
      <div class="centerWrapper" v-loading="loading">
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
          <div v-if="images.length<=0"
            style="text-align:center;width:100%;padding:30px;color:#000;font-size:14px;"
          >
            提示：无图片，请重新选择【颜色】或【相册】或【标签】搜索图片！
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
        <el-tabs v-model="rightTabActive" type="card" @tab-click="rightTabClick">
          <el-tab-pane class="rightTabContent" label="图片颜色" name="color">
            <div class="colorBox">
              <div class="color-item"
                v-for="color in colors"
                :key="color.id"
                :style="{backgroundColor:color.color}"
                @click="colorItemClick(color)"
              >
              </div>
              <div v-if="colors.length<=0" style="text-align:center;width: 100%;">
                ~请选择页面中间的图片获取颜色~
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane class="rightTabContent" label="搜索配置" name="setting">
            <div class="colorSetting-item">
              <span class="demonstration">主题符合度：(越小越精确)</span>
              <el-slider v-model="colorQueryObj.weights" :min="1" :max="5"></el-slider>
            </div>
            <div class="colorSetting-item">
              <span class="demonstration">H偏离范围：(越大图越多)</span>
              <el-slider v-model="colorQueryObj.hOffset" :min="5" :max="50"></el-slider>
            </div>
            <div class="colorSetting-item">
              <span class="demonstration">S偏离范围：(越大图越多)</span>
              <el-slider v-model="colorQueryObj.sOffset" :min="0.01"
                :max="0.1" :step="0.01"></el-slider>
            </div>
            <div class="colorSetting-item">
              <span class="demonstration">V偏离范围：(越大图越多)</span>
              <el-slider v-model="colorQueryObj.vOffset" :min="0.01"
                :max="0.1" :step="0.01"></el-slider>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex';
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
      uploadUrl: `${process.env.VUE_APP_BASE_URL}/upload`,
      images: [],
      colors: [],
      lastImage: null,
      loading: false,
      rightTabActive: 'color',
      queryObj: {
        pageNo: 1,
        totalPage: 1,
        pageSize: 50,
        label_id: 0,
        album_id: 0,
      },
      colorQueryObj: {
        weights: 3,
        hOffset: 20,
        sOffset: 0.05,
        vOffset: 0.05,
        h: 0,
        s: 0,
        v: 0,
      },
      colorReq: null,
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
    console.log('process.env:', process.env);
    this.getUserImages();
  },
  activated() {},
  destroyed() {},
  methods: {
    async colorItemClick(color) {
      console.log('colorItemClick:', color);
      this.colorQueryObj.h = color.h;
      this.colorQueryObj.s = color.s;
      this.colorQueryObj.v = color.v;
      await this.getImagesByColor();
    },
    rightTabClick(tab, e) {
      console.log('rightTabClick:', tab, e);
    },
    albumItemClick(item) {
      console.log('albumitem click:', item);
      this.getUserImages();
    },
    async imageClick(image, i) {
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
      this.colors = [];
      await this.getImageColors();
    },
    async getImageColors() {
      if (this.lastImage.colors && this.lastImage.colors.length > 0) {
        this.colors = this.lastImage.colors;
        return;
      }
      if (this.colorReq) {
        this.colorReq.abort();
        this.colorReq = null;
      }
      this.colorReq = getImageColors({ images_id: this.lastImage.id });
      try {
        const result = await this.colorReq.then();
        console.log('getImageColors response:', result);
        if (result.code) {
          this.colors = result.data;
          this.lastImage.colors = result.data;
        } else {
          this.$message.error(result.message);
        }
      } catch (error) {
        console.log(error);
      }
      this.colorReq = null;
    },
    async getImagesByColor() {
      const req = getImagesByColor(this.colorQueryObj);
      this.loading = true;
      try {
        const result = await req.then();
        console.log('getImagesByColor response:', result);
        if (result.code) {
          this.images = result.data;
          this.images.forEach((v, i) => {
            this.images[i].url = `http://localhost:8989/${v.path}`;
          });
          this.queryObj.pageNo = result.pageNo;
          this.queryObj.pageSize = result.pageSize;
          this.queryObj.totalPage = result.totalPage;
        } else {
          this.$message.error(result.message);
        }
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
      this.loading = false;
    },
    async getUserImages() {
      const req = getUserImages(this.queryObj);
      this.loading = true;
      try {
        const result = await req.then();
        console.log('getUserImages response:', result);
        if (result.code) {
          this.images = result.data;
          this.images.forEach((v, i) => {
            this.images[i].url = `http://localhost:8989/${v.path}`;
          });
          this.colors = [];
          this.queryObj.pageNo = result.pageNo;
          this.queryObj.pageSize = result.pageSize;
          this.queryObj.totalPage = result.totalPage;
        } else {
          this.$message.error(result.message);
        }
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
      this.loading = false;
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
        cursor: pointer;
        transition: all 0.33s;
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
          border: 1px #0e83fc solid;
          box-shadow: 0px 8px 20px 0px #0e83fc5c;
        }
      }
    }
    .page-pagination{
      text-align: center;
    }
  }
  .rightWrapper{
    flex-basis: 360px;
    width: 360px;
    border-left: 1px #eee solid;
    overflow-y: auto;
    .uploadWrapper{
      padding: 10px;
    }
    .rightTabContent{
      padding: 10px;
    }
    .colorBox{
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: flex-start;
      justify-content: space-between;
      .color-item{
        width: 95px;
        height: 40px;
        border-radius: 6px;
        // margin-right: auto;
        // margin-left: auto;
        margin-bottom: 10px;
        background-color: #ddd;
        cursor: pointer;
        box-shadow: 0px 0px 10px 0px #ccc;
        &:hover{
          box-shadow: 0px 0px 10px 0px rgb(126, 154, 248);
        }
      }
    }
  }

}

</style>
