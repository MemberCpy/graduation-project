<template>
  <div class="navbar">
    <img :src="logo" class="logo">
    <div class="nav-items-container">
      <flexbox style="width: auto;">
        <router-link
          v-for="(item, index) in items"
          :key="index"
          :style="{ 'color' : item.type == navIndexChild ? '#3E84E9' : '#333333' }"
          :to='item.path'
          class="nav-item"
          @click.native="navItemsClick(item.type)">
            <!-- 这里放图标(暂无) -->
            <!-- <i></i> -->
        </router-link>
      </flexbox>
    </div>
    <el-popver
      :visible-arrow="false"
      placement="bottom"
      popper-class="no-padding-popover"
      width="200"
      trigger="hover">
      <div class="handel-items">
        <div
          class="handel-item"
          @click="handleClick('person')"><i></i>个人中心</div>
        <div
          class="handel-item"
          @click="handleClick('goout')"><i></i>退出登录</div>
        <div
          :style="{'margin-bottom': manage ? '15px' : '0' }"
          class="handel-item hr-top"
          style="pointer-events: none;"><i></i>版本 0.0.0.1</div>
        <div
          v-if="manage"
          class="handel-box">
          <el-button
            type="primary"
            class="handel-button"
            @click="enterSystemSet()">进入企业管理后台</el-button>
        </div>
      </div>
      <div
        slot="reference"
        class="user-container">
        <div
          v-photo="userInfo"
          v-lazy:background-image="$options.filters.filterUserLazyImg(userInfo.img)"
          :key="userInfo.img"
          class="user-img div-photo"></div>
          <i></i>
      </div>
    </el-popver>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>