<template>
  <div id="loginpage">
    {{ string1 }}
    <br/>
    <br/>
    <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
    <el-input v-model="form.password" placeholder="请输入密码"></el-input>
    <el-button @click="check()">登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'loginpage',
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
  },
};
</script>
