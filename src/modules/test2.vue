<template>
  <div class="two">
      this is test <span @click="load = !load">click to load test-three-com</span>
       <router-link to="/test1">turn to test1</router-link>
       
      <test-three v-if="load"></test-three>  
  </div>
</template>
<script>
// import TestThree from './test3'
export default {
    // components: {TestThree},
     components: {
    TestThree: () => import("./test3")
  },
    data() {
        return {
            load: false,
        }
    },
    created() {
        // new Promise(r => {
        //     r(1)
        //     // alert(0)
        // }).then(res => alert(1))
        // alert(2)
    }
}
</script>

<style>
.two{
    color: yellow
}
</style>