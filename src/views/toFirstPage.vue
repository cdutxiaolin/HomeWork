<template>
  <div class="firstPage">
      <el-button @click="index()">登录</el-button>
      <el-button @click="todolist()">todolist</el-button>
      <el-button @click="cardlist()">指令集概述</el-button><br/>
      <el-button @click="c2()">指令示例1</el-button>
      <el-button @click="c3()">指令示例2</el-button>
      <el-button @click="c4()">指令示例3</el-button>
      <br/>
      <span>动态刷新获取页面内容</span><br/>
      <br/>
      <el-card class="box-card" v-for="item in list" :key="item.label">
      <div slot="header" class="clearfix">
      <span>{{ item.label }}</span>
      </div>
      <div class="text item">{{ item.label }} {{ item.value }}</div>
      </el-card>
  </div>

</template>

<script>
export default {
  name: 'firstPage',
  components: {
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    async getlist() {
      const { data } = await this.$axios.get('https://api.myjson.com/bins/rbgi2');
      this.list = data.data;
    },
    cardlist() {
      this.$router.push({
        path: '/toCommand',
      });
    },
    index() {
      this.$router.push({
        path: '/Login',
      });
    },
    c2() {
      this.$router.push({
        path: 'zhiLing1',
      });
    },
    c3() {
      this.$router.push({
        path: 'zhiLing22',
      });
    },
    c4() {
      this.$router.push({
        path: 'zhiLing333',
      });
    },
    todolist() {
      this.$router.push({
        path: '/toDoList',
      });
    },
  },
};
</script>
