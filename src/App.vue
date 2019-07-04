
<template>
  <div id="app">
    <template v-if="isLogin">
      <router-view></router-view>
    </template>
    <template v-if="!isLogin">
      <header>
        <el-row>
          <el-col><div class="grid-content"></div></el-col>
          <el-col class="userinfo" :span="1" style="float:right">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link userinfo-inner">
                  {{userName}}</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="loginout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
          </el-col>
        </el-row>
      </header>
      <el-container>
        <el-aside width="100px">
          <div class="nav">
            <router-link class="el-icon-s-platform" to="/work"> work</router-link> 
            <router-link class="el-icon-cold-drink" to="/life"> life</router-link>
          </div>
        </el-aside>
        <el-main>  
          <router-view></router-view>
        </el-main>
      </el-container>
    </template>
  </div>
</template>
<script>
import Bus from "./config/bus"
export default {
  data() {
    return {
      type: "",
      userName: "phoebe",
      isLogin: false
    }
  },
  methods: {
    handleSelect(){},
    loginout() {
      this.$confirm('确认退出吗?', '提示', {})
      .then(() => {
        // storage.removeLocal("userinfo")
        this.$router.replace("/login")
      }).catch(() => {})
    }
  },
  watch: {
    '$route'(newval) {
      if (newval.fullPath === '/login') {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
      console.log(this.isLogin, 'newval')
    }
  },
  mounted(){
    // Bus.$on("switch", val => {
    //   if (val === "trunon") {
    //   } else {
    //   }
    // })
  }
}
</script>
<style  lang="scss">
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

header {
  background: #393e46;
  height: 30px;
  .index-li {
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 20px;
    vertical-align: middle;
  }
}

$color : white;

 .el-header, .el-footer {
    background-color: #393e46;
    color: $color;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #393e46;
    text-align: center;
    line-height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    line-height:100%
  }

  .logo {
    background-color:white;
  }

  .nav {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    top:150px;
    color: $color;
    a {
      color: $color;
    }
  }
  .userinfo-inner {
    cursor: pointer;
    color: #fff;
    line-height: 44px;
    float: right;
    display: inline-block;
  }

</style>
