<template>
  <el-container>
    <el-header class="nav-container">
      <navbar
        :nav-index="1"
        @nav-items-click="navClick" />
    </el-header>
  </el-container>
</template>

<script>
import navbar from './components/Navbar'
export default {
  components: {
    navbar,
  },
  data() {
    return {}
  },
  methods: {
    navClick() {

    }
  }
}
</script>

<style>

</style>