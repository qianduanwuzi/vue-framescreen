<template>
  <div class="">
      this is test 
      <router-link to="/test2">turn to test2</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
mounted() {
  api.get('/api/test').then(res => {
    console.log('15', res)
  }).catch(err => {
    console.log('17', err)
  })
},
methods: {
}

}
</script>

<style>

</style>