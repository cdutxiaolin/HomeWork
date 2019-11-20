<template>
  <div id="app">
    <div id="nav">
      <router-link to="/toFirstPage">Home</router-link>
      <!--
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>  |
      <router-link to="/toFirstPage">toFirstPage</router-link>
      -->
    </div>
    <router-view/>
    <!--
    {{ string1 }}
    <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
    <el-input v-model="form.password" placeholder="请输入密码"></el-input>
    <el-button @click="check()">登录</el-button>
    -->
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
export default {
  name: 'nav',
  components: {
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      string1: '欢迎来到登录页面',
    };
  },
  methods: {
    check() {
      if (this.form.username === 'admin' && this.form.password === '123456') {
        this.$router.push({
          path: '/toFirstPage',
        });
      } else alert('用户名或密码错误');
    },
    nlogin() {
      this.$$router.push({
        path: '/Login',
      });
    },
  },
};
</script>
