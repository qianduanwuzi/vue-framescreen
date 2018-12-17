<template>
  <div class="hello">this is helloworld
    <!-- code split -->
    <router-link to="/test1">go to test1</router-link>
    <!-- code split by same group -->
    <router-link to="/test2">go to test2</router-link>
    <router-link to="/test3">go to test3</router-link>
    <router-link to="/test4">go to test4</router-link>
    <router-link to="/">go to index</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
