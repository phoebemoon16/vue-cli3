<template>
  <div class="home">
    <el-container>
      <el-aside width="200px" style="background-color: #00adb5; color: white;">
        <el-menu :default-openeds="['1', '2', '3']" @select="handleSelect" router 
            default-active="1-1">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>experience</template>
            <el-menu-item-group>
              <el-menu-item :index="item.path" v-for="(item, index) in slideMenu1" :key="index">
                <i :class="'el-icon-'+item.icon"></i><span slot="title">{{item.name}}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>skill</template>
            <el-menu-item-group>
              <el-menu-item :index="item.path" v-for="(item, index) in slideMenu2" :key="index">
                <i :class="'el-icon-'+item.icon"></i><span slot="title">{{item.name}}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>study</template>
            <el-menu-item-group>
              <el-menu-item :index="item.path" v-for="(item, index) in slideMenu3" :key="index">
                <i :class="'el-icon-'+item.icon"></i><span slot="title">{{item.name}}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        </el-aside>
      <el-main>  
      <section class="app-main">
          <!-- <transition name="fade" mode="out-in"> -->
        <router-view></router-view>
          <!-- </transition> -->
      </section>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"
import Bus from "../config/bus"
import company from "./company.vue"
export default {
  data(){
    return {
       slideMenu1: [{
          index: "1-1",
          path: "/work/company",  
          name: "company",
          icon: ''
        }
      ],
      slideMenu2: [{
          index: "1-1",
          path: "/work/web",  
          name: "web",
          // icon: 'monitor'
        },
        {
          index: "1-2",
          path: "/work/other",  
          name: "other",
          // icon: 'menu'
        }
      ],
      slideMenu3: [{
          index: "1-1",
          path: "/work/university",  
          name: "university",
          // icon: 'bank-card'
        },
        {
          index: "1-2",
          path: "/work/honor",  
          name: "honor",
          // icon: 'medal'
        }
      ],
    }
  },
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    initList() {
      // axios({
      //   url: "/fileRecord/queryCleaningProgress",
      //   method: "POST",
      //   data: {
      //     usedName:'赵赛'
      //   }
      // }).then((data) => {
      //   console.log('axios')
      // })
    },
    handleSelect(){}
  },
  mounted() {
    this.initList()
  }

}
</script>
<style lang="scss" scoped>
 body > .el-container {
    margin-bottom: 40px;
    line-height:100%
  }
  .el-menu  {
    background-color: #00adb5;
  }
  .el-menu-item-group {
    background-color: #eeeeee;
  }
</style>
