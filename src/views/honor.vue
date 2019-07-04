<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->
  <SoltTemp> 
    <template v-slot:header> 
      <p>do you want about my honor?</p>
    </template>
    <template v-slot:footer>
      <i class="el-icon-s-grid"></i><p>YX,Yqr</p>
    </template>
  </SoltTemp>
</template>
<script>
import SoltTemp from "./SoltTemp.vue"
import axios from "axios"
export default {
  data() {
  return{
      test: ''
    }
  },
  components: {
    SoltTemp
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
    initList2(param) {
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
