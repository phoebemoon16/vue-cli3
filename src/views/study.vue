<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->
  <SoltTemp> 
    <template v-slot:header> 
      <div>do you want about my study?<tip context="XJ is a beautiful place,XJ university too" direction="rightTop" icon="
el-icon-orange"></tip></div>
    </template>
    <template v-slot:footer>
      <p>XJ university</p>
    </template>
  </SoltTemp>
  
</template>
<script>
import SoltTemp from "./SoltTemp.vue"
import tip from "../public/Tip.vue"
import axios from "axios"
import store from '../store/vuex.js'
export default {
  data() {
  return{
      test: '00vuex'
    }
  },
  components: {
    SoltTemp,tip
    // SoltTemp: require("./SoltTemp.vue"),
    // tip: require("../public/Tip.vue")
  },
  methods: {
    // initList() {
    //   axios({
    //     method: "post",
    //     url: "/fileRecord/queryCleaningProgress",
    //     data: this.test
    //   }).then((data) => {
    //     console.log('axios', test)
    //   })
    // },
    initList2() {
      store.commit('increment')
      // this.$http({
      //   url: "/fileRecord/listStorageFile",
      //   data: param
      // }).then(data => {
      //   console.log('http request')
      // })
    },
  },
  mounted() {
    // this.initList()
    this.initList2()
  }
}
</script>
