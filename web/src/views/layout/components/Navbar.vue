<template>
  <div class="navbar">
    <!-- 这里logo(暂无) -->
    <!-- <img class="logo"> -->
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
          <div class="nav-item-title">{{item.title}}</div>
        </router-link>
      </flexbox>
    </div>
    <el-popover
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
      <!-- 头像 -->
      <div
        slot="reference"
        class="user-container">
        <!-- <div
          v-photo="userInfo"
          v-lazy:background-image="$options.filters.filterUserLazyImg(userInfo.img)"
          :key="userInfo.img"
          class="user-img div-photo"></div> -->
          <div>
            头像
          </div>
          <i></i>
      </div>
    </el-popover>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Loading } from 'element-ui'
// import { adminGroupsTypeListAPI } from '@/api/ststemManagement/RoleAuthorization' // 获取权限api
export default {
  filters: {
    langName: function(value) {
      if (value) {
        return { cn: '中文', en: 'English'}[value]
      } else {
        return '中文'
      }
    }
  },
  props: {
    navIndex: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      navIndexChild: 0,
      authRedirect: '',
      manage: true
    }
  },
  computed: {
    // ...mapGetters([
    //   'userInfo',
    //   'lang',
    //   'logo',
    //   'crm',
    // ]),
    items() {
      // 暂时不设置权限
      const tempsItems = []
      tempsItems.push({
        title: '客户管理',
        type: 0,
        path: '/crm',
        icon: '' // 暂无
      })
      tempsItems.push({
        title: '商业智能',
        type: 1,
        path: '/bi',
        icon: ''
      })
      return tempsItems
    }
  },
  methods: {
    // 跳转进入企业管理子系统
    enterSystemSet() {
      this.$router.push({
        path: '/manager'
      })
    },
    // 存入索引 记录当前是哪个系统
    navItemsClick(type) {
      // 变色
      this.navIndexChild = type
      // 存入值
      this.$store.commit('SET_NAVACTIVEINDEX', type)
      // 传索引到父级
      this.$emit('nav-items-click', type)
    },
    // 退出登录or进入个人信息
    handleClick(type) {
      if (type === 'goout') {
        this.$confirm('退出登录？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
            var loading = Loading.service({
              target: document.getElementById('#app')
            })
            this.$store
              .dispatch('LogOut')
              .then(() => {
                location.reload()
                loading.close()
              })
              .catch(() => {
                location.reload()
                loading.close()
              })
          })
          .catch(() => {})
      } else if (type === 'person') {
        this.$router.push({
          name: 'person'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  min-height: 60px;
  background-color: white;
  display: flex;
  align-content: center;
  position: relative;
  padding: 0 30px;
  .log {
    width: 150px;
    height: 40px;
    display: block;
    flex-shrink: 0;
    margin-right: 15px;
  }
  .nav-items-container {
    flex: 1;
    display: flex;
    min-width: 500px;
    height: 100%;
    overflow-x: auto;
    line-height: 60px;
    font-size: 15px;
  }
  .user-container {
    display: flex;
    align-content: center;
    flex-shrink: 0;
    cursor: pointer;
    .user-img {
      display: block;
      width: 32px;
      min-width: 32px;
      min-height: 32px;
      height: 32px;
      margin-right: 8px;
      border-radius: 50%;
    }
    .mark {
      font-size: 15px;
      color: #aaaaaa;
    }
  }
  .user-container:hover {
    .mark {
      color: #2486e4;
    }
  }
}

.nav-item {
  padding: 0 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.nav-item-img {
  width: 24px;
  height: 24px;
  display: block;
  margin-right: 5px;
}

.handel-items {
  padding: 10px 0 18px 0;
  .handel-item {
    padding: 5px 20px;
    font-size: 14px;
    color: #aaa;
    cursor: pointer;
    i {
      margin-right: 8px;
      font-size: 15px;
    }
  }
  .handel-item:hover {
    background-color: #f7f8fa;
    color: #3e84e9;
  }
  .handel-box {
    padding: 0 15px;
    .handel-button {
      width: 100%;
      border-radius: 4px;
      border-color: #009df0;
      background-color: #009df0;
    }
  }
}

.hr-top {
  margin-top: 8px;
  border-top: 1px solid #f4f4f4;
  padding-top: 3px;
}

.nav-lang {
  cursor: pointer;
  color: #888;
  padding: 20px;
  &:hover {
    color: #3e84e9;
  }
  &.active {
    font-weight: bold;
    color: #3e84e9;
  }
}
</style>