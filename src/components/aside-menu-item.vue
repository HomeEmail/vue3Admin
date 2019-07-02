<template>
<div>
  <template v-for="(item,index) in routes">
    <el-submenu
      v-if="!!!item.meta.hideAtAsideMenu&&!!item.children&&item.children.length>0"
      :index="index+''"
      :key="index"
    >
      <template slot="title">
        <i :class="item.meta.icon" v-if="!!item.meta.icon"></i>
        <span class="submenuTitle" slot="title">{{item.meta.title}}</span>
      </template>
      <template v-for="(item2,index2) in item.children">
        <el-menu-item
          v-if="!!!item2.meta.hideAtAsideMenu&&(!!!item2.children||item2.children.length<=0)"
          :index="item2.path"
          :key="`index2-${index2}`"
        >
          <i :class="item2.meta.icon" v-if="!!item2.meta.icon"></i>
          <span slot="title">{{item2.meta.title}}</span>
        </el-menu-item>
        <aside-menu-item v-else :routes="[item2]" :key="`item2-${index2}`"></aside-menu-item>
      </template>
    </el-submenu>
    <template
      v-else-if="!!item.meta.hideAtAsideMenu&&!!item.children&&item.children.length>0"
    >
      <template v-for="(item3,index3) in item.children">
        <el-menu-item
          v-if="!!!item3.meta.hideAtAsideMenu&&(!!!item3.children||item3.children.length<=0)"
          :index="item3.path"
          :key="`index3-${index3}`"
        >
          <i :class="item3.meta.icon" v-if="!!item3.meta.icon"></i>
          <span slot="title">{{item3.meta.title}}</span>
        </el-menu-item>
        <aside-menu-item v-else :routes="[item3]" :key="`item3-${index3}`"></aside-menu-item>
      </template>
    </template>

  </template>
</div>
</template>
<script>
export default {
  name: 'asideMenuItem',
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<style lang="less" scoped>
</style>
