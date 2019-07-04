<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->
  <SoltTemp> 
    <template v-slot:header> 
      <p>do you want about my web?<tip context=" web is so interesting" direction="leftTop" icon="el-icon-sunny">chlick me</tip></p>
    </template>
    <template v-slot:footer>
      <p>js vue vue-cli3 webpack</p>
    </template>
  </SoltTemp>
</template>
<script>
import SoltTemp from "./SoltTemp.vue"
import tip from "../public/Tip.vue"
import axios from "axios"
export default {
  data() {
  return{
      test: ''
    }
  },
  components: {
    SoltTemp,tip
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
